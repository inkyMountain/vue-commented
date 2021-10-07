/* @flow */

const MAX_STACK_DEPTH = 800
const noop = _ => _

const defer = typeof process !== 'undefined' && process.nextTick
  ? process.nextTick
  : typeof Promise !== 'undefined'
    ? fn => Promise.resolve().then(fn)
    : typeof setTimeout !== 'undefined'
      ? setTimeout
      : noop

if (defer === noop) {
  throw new Error(
    'Your JavaScript runtime does not support any asynchronous primitives ' +
    'that are required by vue-server-renderer. Please use a polyfill for ' +
    'either Promise or setTimeout.'
  )
}

export function createWriteFunction (
  write: (text: string, next: Function) => boolean,
  onError: Function
): Function {
  let stackDepth = 0
  const cachedWrite = (text, next) => {
    // 如果 caching 标记为 true，那么每次调用 write 时，都把内容写入缓存。
    if (text && cachedWrite.caching) {
      cachedWrite.cacheBuffer[cachedWrite.cacheBuffer.length - 1] += text
    }
    // waitForNext 在 write 结束后，是否主动调用 next 函数，在开启下一个节点的渲染。
    const waitForNext = write(text, next)
    if (waitForNext !== true) {
      // 如果主动调用 next 函数，那么就会与 write 函数的调用方形成递归。
      // 如果组件特别大，非常容易超出最大函数栈的限制。
      // 所以在这里对最大递归调用做一个限制。
      if (stackDepth >= MAX_STACK_DEPTH) {
        // defer 是 nextTick 的 兼容写法
        defer(() => {
          try { next() } catch (e) {
            onError(e)
          }
        })
      } else {
        // 如果主动调用 next，那么就将栈层数统计 +1。
        stackDepth++
        next()
        // 在递归结束后，栈高度减少，所以将栈层数统计 -1。
        stackDepth--
      }
    }
  }
  cachedWrite.caching = false
  cachedWrite.cacheBuffer = []
  cachedWrite.componentBuffer = []
  return cachedWrite
}
