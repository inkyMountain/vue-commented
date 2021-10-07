/* @flow */

import { escape } from 'web/server/util'
import { SSR_ATTR } from 'shared/constants'
import { RenderContext } from './render-context'
import { resolveAsset } from 'core/util/options'
import { generateComponentTrace } from 'core/util/debug'
import { ssrCompileToFunctions } from 'web/server/compiler'
import { installSSRHelpers } from './optimizing-compiler/runtime-helpers'

import { isDef, isUndef, isTrue } from 'shared/util'

import {
  createComponent,
  createComponentInstanceForVnode
} from 'core/vdom/create-component'

let warned = Object.create(null)
const warnOnce = msg => {
  if (!warned[msg]) {
    warned[msg] = true
    // eslint-disable-next-line no-console
    console.warn(`\n\u001b[31m${msg}\u001b[39m\n`)
  }
}

const onCompilationError = (err, vm) => {
  const trace = vm ? generateComponentTrace(vm) : ''
  throw new Error(`\n\u001b[31m${err}${trace}\u001b[39m\n`)
}

const normalizeRender = vm => {
  const { render, template, _scopeId } = vm.$options
  if (isUndef(render)) {
    if (template) {
      const compiled = ssrCompileToFunctions(template, {
        scopeId: _scopeId,
        warn: onCompilationError
      }, vm)

      vm.$options.render = compiled.render
      vm.$options.staticRenderFns = compiled.staticRenderFns
    } else {
      throw new Error(
        `render function or template not defined in component: ${
          vm.$options.name || vm.$options._componentTag || 'anonymous'
        }`
      )
    }
  }
}

function waitForServerPrefetch (vm, resolve, reject) {
  let handlers = vm.$options.serverPrefetch
  /**
   * 如果 serverPrefetch 报错，则会调用两次 done，renderer.renderToString() 的回调会被调用两次。
   * 第一次会给回调传入这里的 try catch 语句 或者 promise catch 捕获的错误，和空的 html 字符串。
   * 第二次会给回调传空的 error 对象，和没有无网络请求下的渲染结果。
   */
  if (isDef(handlers)) {
    if (!Array.isArray(handlers)) handlers = [handlers]
    try {
      const promises = []
      for (let i = 0, j = handlers.length; i < j; i++) {
        // 由于这里 .call 传入的 this 是 vm，所以 vm 中的 serverPrefetch 函数,
        // 是可以通过 this 访问 vm 对象的。获取到数据后，赋值给 this 上的 data。
        const result = handlers[i].call(vm, vm)
        if (result && typeof result.then === 'function') {
          promises.push(result)
        }
      }
      Promise.all(promises).then(resolve).catch(reject)
      return
    } catch (e) {
      reject(e)
    }
  }
  resolve()
}

function renderNode (node, isRoot, context) {
  // 字符串节点
  if (node.isString) {
    renderStringNode(node, context)
  } 
  // vue 组件节点
  else if (isDef(node.componentOptions)) {
    renderComponent(node, isRoot, context)
  } 
  // html 标签
  else if (isDef(node.tag)) {
    renderElement(node, isRoot, context)
  } 
  // 注释节点
  else if (isTrue(node.isComment)) {
    // 注释节点有可能是一个异步组件
    if (isDef(node.asyncFactory)) {
      // 处理异步组件
      renderAsyncComponent(node, isRoot, context)
    } else {
      // 如果不是异步组件，那么就写入注释。
      context.write(`<!--${node.text}-->`, context.next)
    }
  } 
  // 如果以上节点类型都没有命中，那么就将 text 写入。
  else {
    context.write(
      node.raw ? node.text : escape(String(node.text)),
      context.next
    )
  }
}

function registerComponentForCache (options, write) {
  // exposed by vue-loader, need to call this if cache hit because
  // component lifecycle hooks will not be called.
  const register = options._ssrRegister
  if (write.caching && isDef(register)) {
    write.componentBuffer[write.componentBuffer.length - 1].add(register)
  }
  return register
}

function renderComponent (node, isRoot, context) {
  const { write, next, userContext } = context

  // check cache hit
  const Ctor = node.componentOptions.Ctor
  const getKey = Ctor.options.serverCacheKey
  const name = Ctor.options.name
  const cache = context.cache
  const registerComponent = registerComponentForCache(Ctor.options, write)

  // 如果组件有定义 serverCacheKey，且有 name 属性，那么走组件缓存逻辑。
  if (isDef(getKey) && isDef(cache) && isDef(name)) {
    const rawKey = getKey(node.componentOptions.propsData)
    // 如果 serverCacheKey 的返回值是 false，那么不走缓存逻辑。
    if (rawKey === false) {
      renderComponentInner(node, isRoot, context)
      return
    }
    // 将 serverCacheKey 的返回值与 name 拼在一起。
    // 这也是为什么 vue 强制要求，想要缓存，必须要提供 name 属性的原因。
    // 为了隔离不同的组件的cache。
    const key = name + '::' + rawKey
    const { has, get } = context
    // 兼容 cache 对象没有提供 has 的情况
    if (isDef(has)) {
      has(key, hit => {
        // 如果命中了缓存，则直接写入缓存值。
        if (hit === true && isDef(get)) {
          get(key, res => {
            if (isDef(registerComponent)) {
              registerComponent(userContext)
            }
            res.components.forEach(register => register(userContext))
            write(res.html, next)
          })
        } else {
          // 如果没有命中缓存，则渲染组件，并设置缓存。
          renderComponentWithCache(node, isRoot, key, context)
        }
      })
    } else if (isDef(get)) {
      // 逻辑与上一个 if 分支相同。
      get(key, res => {
        if (isDef(res)) {
          if (isDef(registerComponent)) {
            registerComponent(userContext)
          }
          res.components.forEach(register => register(userContext))
          write(res.html, next)
        } else {
          renderComponentWithCache(node, isRoot, key, context)
        }
      })
    }
  } else {
    // 如果组件有定义 serverCacheKey，但是没有 name 属性或者 cache 的实现，
    // 那么发出一个警告，然后跳过缓存逻辑，像普通组件一样渲染。
    if (isDef(getKey) && isUndef(cache)) {
      warnOnce(
        `[vue-server-renderer] Component ${
          Ctor.options.name || '(anonymous)'
        } implemented serverCacheKey, ` +
        'but no cache was provided to the renderer.'
      )
    }
    if (isDef(getKey) && isUndef(name)) {
      warnOnce(
        `[vue-server-renderer] Components that implement "serverCacheKey" ` +
        `must also define a unique "name" option.`
      )
    }
    renderComponentInner(node, isRoot, context)
  }
}

function renderComponentWithCache (node, isRoot, key, context) {
  const write = context.write
  // 将 caching flag 置为 true，意味着接下来的 render 结果都是需要缓存的。
  write.caching = true
  const buffer = write.cacheBuffer
  // 记录这个组件的缓存，在 cacheBuffer 的 index，方便后续读取对应缓存。
  const bufferIndex = buffer.push('') - 1
  const componentBuffer = write.componentBuffer
  componentBuffer.push(new Set())
  context.renderStates.push({
    type: 'ComponentWithCache',
    key,
    buffer,
    bufferIndex,
    componentBuffer
  })
  renderComponentInner(node, isRoot, context)
}

function renderComponentInner (node, isRoot, context) {
  // 把前一个活跃组件存起来，这样在这个组件 render 完成后，
  // 可以将 activeInstance 重置为 prevActive。
  const prevActive = context.activeInstance
  // expose userContext on vnode
  node.ssrContext = context.userContext
  const child = context.activeInstance = createComponentInstanceForVnode(
    node,
    // 这是 child 变量中的 parent 值
    context.activeInstance
  )

  // 抹平 template 与 render 函数的差异
  normalizeRender(child)

  const resolve = () => {
    const childNode = child._render()
    childNode.parent = node
    context.renderStates.push({
      type: 'Component',
      prevActive
    })
    renderNode(childNode, isRoot, context)
  }

  const reject = context.done

  waitForServerPrefetch(child, resolve, reject)
}

function renderAsyncComponent (node, isRoot, context) {
  const factory = node.asyncFactory

  // 在 factory 构造结束后的逻辑
  const resolve = comp => {
    if (comp.__esModule && comp.default) {
      comp = comp.default
    }
    const { data, children, tag } = node.asyncMeta
    const nodeContext = node.asyncMeta.context
    const resolvedNode: any = createComponent(
      comp,
      data,
      nodeContext,
      children,
      tag
    )
    if (resolvedNode) {
      if (resolvedNode.componentOptions) {
        // 如果是组件，走组件 render 逻辑
        renderComponent(resolvedNode, isRoot, context)
      } else if (!Array.isArray(resolvedNode)) {
        // single return node from functional component
        renderNode(resolvedNode, isRoot, context)
      } else {
        // multiple return nodes from functional component
        // 如果是一个数组，那么就入栈
        context.renderStates.push({
          type: 'Fragment',
          children: resolvedNode,
          rendered: 0,
          total: resolvedNode.length
        })
        // 然后继续渲染它的 children
        context.next()
      }
    } else {
      // 如果是无效的组件，那么写一个空的注释，然后继续渲染下一个组件。
      context.write(`<!---->`, context.next)
    }
  }

  if (factory.resolved) {
    resolve(factory.resolved)
    return
  }

  const reject = context.done
  // 调用 factory 函数来产生一个 vue 组件，然后调用 resolve 函数。
  let res
  try {
    res = factory(resolve, reject)
  } catch (e) {
    reject(e)
  }
  if (res) {
    if (typeof res.then === 'function') {
      res.then(resolve, reject).catch(reject)
    } else {
      // new syntax in 2.3
      const comp = res.component
      if (comp && typeof comp.then === 'function') {
        comp.then(resolve, reject).catch(reject)
      }
    }
  }
}

function renderStringNode (el, context) {
  const { write, next } = context
  if (isUndef(el.children) || el.children.length === 0) {
    write(el.open + (el.close || ''), next)
  } else {
    const children: Array<VNode> = el.children
    context.renderStates.push({
      type: 'Element',
      children,
      rendered: 0,
      total: children.length,
      endTag: el.close
    })
    write(el.open, next)
  }
}

function renderElement (el, isRoot, context) {
  const { write, next } = context

  // 如果是根节点，那么在节点上加上 ssr 渲染标记。
  if (isTrue(isRoot)) {
    if (!el.data) el.data = {}
    if (!el.data.attrs) el.data.attrs = {}
    el.data.attrs[SSR_ATTR] = 'true'
  }

  if (el.fnOptions) {
    registerComponentForCache(el.fnOptions, write)
  }

  // 渲染起始标签，包含 指令、class、style 等各种逻辑。
  const startTag = renderStartingTag(el, context)
  const endTag = `</${el.tag}>`
  // 如果是自闭合标签，那么只需要写入开始标签即可。
  if (context.isUnaryTag(el.tag)) {
    write(startTag, next)
  } 
  // 如果不是自闭合标签，但是没有 children，那么写入开始+结束标签。
  else if (isUndef(el.children) || el.children.length === 0) {
    write(startTag + endTag, next)
  } 
  // 如果有 children，那么推入 renderStates，然后渲染该标签的 children。
  else {
    const children: Array<VNode> = el.children
    context.renderStates.push({
      type: 'Element',
      children,
      rendered: 0,
      total: children.length,
      endTag
    })
    write(startTag, next)
  }
}

function hasAncestorData (node: VNode) {
  const parentNode = node.parent
  return isDef(parentNode) && (isDef(parentNode.data) || hasAncestorData(parentNode))
}

function getVShowDirectiveInfo (node: VNode): ?VNodeDirective {
  let dir: VNodeDirective
  let tmp

  while (isDef(node)) {
    if (node.data && node.data.directives) {
      tmp = node.data.directives.find(dir => dir.name === 'show')
      if (tmp) {
        dir = tmp
      }
    }
    node = node.parent
  }
  return dir
}

// 渲染起始标签，包含指令、class、style等各种逻辑。
function renderStartingTag (node: VNode, context) {
  let markup = `<${node.tag}`
  const { directives, modules } = context

  // construct synthetic data for module processing
  // because modules like style also produce code by parent VNode data
  if (isUndef(node.data) && hasAncestorData(node)) {
    node.data = {}
  }
  if (isDef(node.data)) {
    // vue 指令
    const dirs = node.data.directives
    if (dirs) {
      for (let i = 0; i < dirs.length; i++) {
        const name = dirs[i].name
        if (name !== 'show') {
          const dirRenderer = resolveAsset(context, 'directives', name)
          if (dirRenderer) {
            // directives mutate the node's data
            // which then gets rendered by modules
            dirRenderer(node, dirs[i])
          }
        }
      }
    }

    // v-show 逻辑
    const vshowDirectiveInfo = getVShowDirectiveInfo(node)
    if (vshowDirectiveInfo) {
      directives.show(node, vshowDirectiveInfo)
    }

    // modules 函数调用
    for (let i = 0; i < modules.length; i++) {
      const res = modules[i](node)
      if (res) {
        markup += res
      }
    }
  }
  // attach scoped CSS ID
  let scopeId
  const activeInstance = context.activeInstance
  if (isDef(activeInstance) &&
    activeInstance !== node.context &&
    isDef(scopeId = activeInstance.$options._scopeId)
  ) {
    markup += ` ${(scopeId: any)}`
  }
  if (isDef(node.fnScopeId)) {
    markup += ` ${node.fnScopeId}`
  } else {
    while (isDef(node)) {
      if (isDef(scopeId = node.context.$options._scopeId)) {
        markup += ` ${scopeId}`
      }
      node = node.parent
    }
  }
  return markup + '>'
}

export function createRenderFunction (
  modules: Array<(node: VNode) => ?string>,
  directives: Object,
  isUnaryTag: Function,
  cache: any
) {
  return function render (
    component: Component,
    write: (text: string, next: Function) => void,
    // userContext 包括用户传入的希望替换 html 模板中的内容，
    // 但也绑定了 templateRenderer 中的 html 模板 render 方法，比如 renderScripts, renderStyle 等。
    userContext: ?Object,
    done: Function
  ) {
    warned = Object.create(null)
    const context = new RenderContext({
      activeInstance: component,
      userContext,
      write,
      // 这个 done 不是用户传入的回调，而是 render 函数的回调。
      // render 函数的回调里面才会去调用用户传入的回调。
      done,
      renderNode,
      isUnaryTag, 
      modules, 
      directives,
      cache
    })
    installSSRHelpers(component)
    // 如果用户包含 template 而不含 render 函数，
    // 那么将 template 编译程 render 函数。
    // 如果 component 中使用 template 而不是 render 函数，
    // 那么这一步将使用 SSRHElpers 中的函数。
    normalizeRender(component)

    const resolve = () => {
      renderNode(component._render(), true, context)
    }
    // 在获取服务端数据后，再调用 resolve，开始 render node。
    waitForServerPrefetch(component, resolve, done)
  }
}
