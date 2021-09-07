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

      // no callback, return Promise
      // 兼容 callback 和 promise 两种调用方式。
      let promise
      if (!cb) {
        ({ promise, cb } = createPromiseCallback())
      }

      // vnode 渲染结果存储变量，不包含 html 模板内容。
      let result = ''
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
