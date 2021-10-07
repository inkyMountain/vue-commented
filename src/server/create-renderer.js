/* @flow */

import RenderStream from './render-stream'
import { createWriteFunction } from './write'
import { createRenderFunction } from './render'
import { createPromiseCallback } from './util'
import TemplateRenderer from './template-renderer/index'
import type { ClientManifest } from './template-renderer/index'

export type Renderer = {
  renderToString: (component: Component, context: any, cb: any) => ?Promise<string>;
  renderToStream: (component: Component, context?: Object) => stream$Readable;
};

type RenderCache = {
  get: (key: string, cb?: Function) => string | void;
  set: (key: string, val: string) => void;
  has?: (key: string, cb?: Function) => boolean | void;
};

export type RenderOptions = {
  modules?: Array<(vnode: VNode) => ?string>;
  directives?: Object;
  isUnaryTag?: Function;
  cache?: RenderCache;
  template?: string | (content: string, context: any) => string;
  inject?: boolean;
  basedir?: string;
  shouldPreload?: Function;
  shouldPrefetch?: Function;
  clientManifest?: ClientManifest;
  serializer?: Function;
  runInNewContext?: boolean | 'once';
};

export function createRenderer ({
  modules = [],
  directives = {},
  isUnaryTag = (() => false),
  template,
  inject,
  cache,
  shouldPreload,
  shouldPrefetch,
  clientManifest,
  serializer
}: RenderOptions = {}): Renderer {
  /**
   * createRenderer 函数的整体流程：
   * 1. 创建 render 函数，负责将 Vue 对象渲染成字符串。
   * 2. 创建 templateRenderer，负责将 步骤1 中的结果与 html 模板拼接成完整的 html 文档。
   * renderToString 部分
   * 3. 创建一个具备 缓存、避免最大栈溢出的 write 函数。
   * 4. 调用 render 函数，与 templateRenderer 协作，拼接最终响应结果。
   */

  /**
   * modules: 根据 vnode 渲染 startTag 的一部分。
   * directives: server 端指令的实现。
   * isUnaryTag: 判断某个 html 元素是否是一元标签(比如 <img >)
   * cache: 组件缓存的实现，通常为 lru cache. 至少需要实现 get set 两个方法。
   */
  const render = createRenderFunction(modules, directives, isUnaryTag, cache)
  // 模版渲染器，作用是将 vnode 渲染的结果和 html 模板进行拼接，最终生成返回给浏览器的内容。
  const templateRenderer = new TemplateRenderer({
    template,
    inject,
    shouldPreload,
    shouldPrefetch,
    clientManifest,
    serializer
  })

  return {
    renderToString (
      component: Component,
      context: any,
      cb: any
    ): ?Promise<string> {
      if (typeof context === 'function') {
        cb = context
        context = {}
      }

      // context 对象包含用户自定义的，需要在 html 模板上替换的变量。
      if (context) {
        templateRenderer.bindRenderFns(context)
      }

      // 抹平 callback 和 promise 两种方式的区别。如果用户希望采用 promise 方式，
      // 那么创建一个 promise, 并创建一个 callback，在 callback 中调用 resolve 方法。
      // 所以在后续的处理中，无论是 promise 还是回调，只要调用 cb()，就可以将结果返回给用户。
      let promise
      if (!cb) {
        ({ promise, cb } = createPromiseCallback())
      }

      // vnode 渲染结果存储变量，不包含 html 模板内容。
      let result = ''
      // 创建一个 write 函数，将 ssr 数据写入 result 中。
      // 第二个参数 cb 是一个 onError 函数。
      const write = createWriteFunction(text => {
        result += text
        return false
      }, cb)
      try {
        render(component, write, context, err => {
          if (err) {
            return cb(err)
          }
          if (context && context.rendered) {
            context.rendered(context)
          }
          // 如果用户传入了模板，那么根据模板，进行渲染。
          if (template) {
            try {
              const res = templateRenderer.render(result, context)
              // 如果 res 是 Promise
              if (typeof res !== 'string') {
                res
                  .then(html => cb(null, html))
                  .catch(cb)
              } else {
                // 如果 res 是 string，就直接调用 cb 返回。
                cb(null, res)
              }
            } catch (e) {
              cb(e)
            }
          } else {
            // 如果没有模板，就直接返回 vnode 渲染的结果。
            cb(null, result)
          }
        })
      } catch (e) {
        cb(e)
      }

      return promise
    },

    renderToStream (
      component: Component,
      context?: Object
    ): stream$Readable {
      if (context) {
        templateRenderer.bindRenderFns(context)
      }
      const renderStream = new RenderStream((write, done) => {
        render(component, write, context, done)
      })
      if (!template) {
        if (context && context.rendered) {
          const rendered = context.rendered
          renderStream.once('beforeEnd', () => {
            rendered(context)
          })
        }
        return renderStream
      } else if (typeof template === 'function') {
        throw new Error(`function template is only supported in renderToString.`)
      } else {
        const templateStream = templateRenderer.createStream(context)
        renderStream.on('error', err => {
          templateStream.emit('error', err)
        })
        renderStream.pipe(templateStream)
        if (context && context.rendered) {
          const rendered = context.rendered
          renderStream.once('beforeEnd', () => {
            rendered(context)
          })
        }
        return templateStream
      }
    }
  }
}
