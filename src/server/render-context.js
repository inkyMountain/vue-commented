/* @flow */

import { isUndef } from 'shared/util'

type RenderState = {
  type: 'Element';
  rendered: number;
  total: number;
  children: Array<VNode>;
  endTag: string;
} | {
  type: 'Fragment';
  rendered: number;
  total: number;
  children: Array<VNode>;
} | {
  type: 'Component';
  prevActive: Component;
} | {
  type: 'ComponentWithCache';
  // write.cacheBuffer
  buffer: Array<string>;
  bufferIndex: number;
  // write.componentBuffer
  componentBuffer: Array<Set<Class<Component>>>;
  // serverCacheKey
  key: string;
};

export class RenderContext {
  // 用户模板中需要替换的变量
  userContext: ?Object;

  // 当前正在处理的 vue component
  activeInstance: Component;

  // 最为重要的变量：渲染栈
  renderStates: Array<RenderState>;

  // 由 createWriteFunction 创建的 write 函数
  write: (text: string, next: Function) => void;

  // 节点渲染函数，内部对不同节点类型，采取不同的渲染策略。
  renderNode: (node: VNode, isRoot: boolean, context: RenderContext) => void;

  // 传递给 write 函数使用的 next 函数，用于触发下一次的渲染。
  next: () => void;

  // 在全部渲染工作完成后的回调函数。
  done: (err: ?Error) => void;

  modules: Array<(node: VNode) => ?string>;
  directives: Object;
  isUnaryTag: (tag: string) => boolean;

  cache: any;
  get: ?(key: string, cb: Function) => void;
  has: ?(key: string, cb: Function) => void;

  constructor (options: Object) {
    this.userContext = options.userContext
    this.activeInstance = options.activeInstance
    this.renderStates = []

    this.write = options.write
    this.done = options.done
    this.renderNode = options.renderNode

    this.isUnaryTag = options.isUnaryTag
    this.modules = options.modules
    this.directives = options.directives

    const cache = options.cache
    if (cache && (!cache.get || !cache.set)) {
      throw new Error('renderer cache must implement at least get & set.')
    }
    this.cache = cache
    this.get = cache && normalizeAsync(cache, 'get')
    this.has = cache && normalizeAsync(cache, 'has')

    // 避免 next 函数传递给 write 以后，this 不再是 renderContext 的问题。
    this.next = this.next.bind(this)
  }

  next () {
    // eslint-disable-next-line
    while (true) {
      // 取出渲染栈中的最后一个需要渲染的元素
      const lastState = this.renderStates[this.renderStates.length - 1]

      // 当渲染栈中没有需要渲染的元素时，说明渲染完成，调用回调函数。
      if (isUndef(lastState)) {
        return this.done()
      }
      /* eslint-disable no-case-declarations */
      switch (lastState.type) {
        // Element 和 Fragment 渲染逻辑相同。
        case 'Element':
        case 'Fragment':
          const { children, total } = lastState
          const rendered = lastState.rendered++
          // 如果 children 数据还没有渲染完，那么继续调用 renderNode。
          if (rendered < total) {
            return this.renderNode(children[rendered], false, this)
          } 
          else {
            // 如果 children 数据已经渲染完了，那么将这个 Element 移除，
            this.renderStates.pop()
            if (lastState.type === 'Element') {
              // 并写入它的结束标签，e.g. </div> </span> 等。
              return this.write(lastState.endTag, this.next)
            }
          }
          break
        case 'Component':
          this.renderStates.pop()
          this.activeInstance = lastState.prevActive
          break
        case 'ComponentWithCache':
          this.renderStates.pop()
          const { buffer, bufferIndex, componentBuffer, key } = lastState
          const result = {
            html: buffer[bufferIndex],
            components: componentBuffer[bufferIndex]
          }
          this.cache.set(key, result)
          if (bufferIndex === 0) {
            // this is a top-level cached component,
            // exit caching mode.
            this.write.caching = false
          } else {
            // parent component is also being cached,
            // merge self into parent's result
            buffer[bufferIndex - 1] += result.html
            const prev = componentBuffer[bufferIndex - 1]
            result.components.forEach(c => prev.add(c))
          }
          buffer.length = bufferIndex
          componentBuffer.length = bufferIndex
          break
      }
    }
  }
}

// 兼容 cache 对象的 get, has 方法调用方式。
// const value = cache.get('cacheKey')
// cache.get('cacheKey', (value) => {})
function normalizeAsync (cache, method) {
  const fn = cache[method]
  if (isUndef(fn)) {
    return
  }
  else if (fn.length > 1) {
    return (key, cb) => fn.call(cache, key, cb)
  }
  else {
    return (key, cb) => cb(fn.call(cache, key))
  }
}
