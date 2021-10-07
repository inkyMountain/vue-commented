'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var he = require('he');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var he__default = /*#__PURE__*/_interopDefaultLegacy(he);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}
function isDef(v) {
  return v !== undefined && v !== null;
}
function isTrue(v) {
  return v === true;
}
function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */

function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  _typeof(value) === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */

function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */

var _toString = Object.prototype.toString;
function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
/**
 * Check if val is a valid array index.
 */

function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val["catch"] === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */

function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */

function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */

var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove$1(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */

var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Mix properties into target object.
 */

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */

function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */

function noop$1(a, b, c) {}
/**
 * Always return false.
 */

var no = function no(a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */

var identity = function identity(_) {
  return _;
};
/**
 * Generate a string containing static keys from compiler modules.
 */

function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */

function looseEqual(a, b) {
  if (a === b) return true;
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i;
  }

  return -1;
}

/*  */
var isAttr = makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' + 'checked,cite,class,code,codebase,color,cols,colspan,content,' + 'contenteditable,contextmenu,controls,coords,data,datetime,default,' + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,for,' + 'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,' + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' + 'target,title,usemap,value,width,wrap');
var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/; // eslint-disable-line no-control-regex

var isSSRUnsafeAttr = function isSSRUnsafeAttr(name) {
  return unsafeAttrCharRE.test(name);
};
/* istanbul ignore next */

var isRenderableAttr = function isRenderableAttr(name) {
  return isAttr(name) || name.indexOf('data-') === 0 || name.indexOf('aria-') === 0;
};
var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
var ESC = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}

function escapeChar(a) {
  return ESC[a] || a;
}

var noUnitNumericStyleProps = {
  "animation-iteration-count": true,
  "border-image-outset": true,
  "border-image-slice": true,
  "border-image-width": true,
  "box-flex": true,
  "box-flex-group": true,
  "box-ordinal-group": true,
  "column-count": true,
  "columns": true,
  "flex": true,
  "flex-grow": true,
  "flex-positive": true,
  "flex-shrink": true,
  "flex-negative": true,
  "flex-order": true,
  "grid-row": true,
  "grid-row-end": true,
  "grid-row-span": true,
  "grid-row-start": true,
  "grid-column": true,
  "grid-column-end": true,
  "grid-column-span": true,
  "grid-column-start": true,
  "font-weight": true,
  "line-clamp": true,
  "line-height": true,
  "opacity": true,
  "order": true,
  "orphans": true,
  "tab-size": true,
  "widows": true,
  "z-index": true,
  "zoom": true,
  // SVG
  "fill-opacity": true,
  "flood-opacity": true,
  "stop-opacity": true,
  "stroke-dasharray": true,
  "stroke-dashoffset": true,
  "stroke-miterlimit": true,
  "stroke-opacity": true,
  "stroke-width": true
};

/*  */
// during template compilation

makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};
var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};
var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,' + 'truespeed,typemustmatch,visible');
var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

/*  */
function renderAttrs$1(node) {
  var attrs = node.data.attrs;
  var res = '';
  var opts = node.parent && node.parent.componentOptions;

  if (isUndef(opts) || opts.Ctor.options.inheritAttrs !== false) {
    var parent = node.parent;

    while (isDef(parent)) {
      // Stop fallthrough in case parent has inheritAttrs option set to false
      if (parent.componentOptions && parent.componentOptions.Ctor.options.inheritAttrs === false) {
        break;
      }

      if (isDef(parent.data) && isDef(parent.data.attrs)) {
        attrs = extend(extend({}, attrs), parent.data.attrs);
      }

      parent = parent.parent;
    }
  }

  if (isUndef(attrs)) {
    return res;
  }

  for (var key in attrs) {
    if (isSSRUnsafeAttr(key)) {
      continue;
    }

    if (key === 'style') {
      // leave it to the style module
      continue;
    }

    res += renderAttr(key, attrs[key]);
  }

  return res;
}
function renderAttr(key, value) {
  if (isBooleanAttr(key)) {
    if (!isFalsyAttrValue(value)) {
      return " ".concat(key, "=\"").concat(key, "\"");
    }
  } else if (isEnumeratedAttr(key)) {
    return " ".concat(key, "=\"").concat(escape(convertEnumeratedValue(key, value)), "\"");
  } else if (!isFalsyAttrValue(value)) {
    return " ".concat(key, "=\"").concat(escape(String(value)), "\"");
  }

  return '';
}

/*  */
var VNode = /*#__PURE__*/function () {
  // rendered in this component's scope
  // component instance
  // component placeholder node
  // strictly internal
  // contains raw HTML? (server only)
  // hoisted static node
  // necessary for enter transition check
  // empty comment placeholder?
  // is a cloned node?
  // is a v-once node?
  // async component factory function
  // real context vm for functional nodes
  // for SSR caching
  // used to store functional render context for devtools
  // functional scope id support
  function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    _classCallCheck(this, VNode);

    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  } // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */


  _createClass(VNode, [{
    key: "child",
    get: function get() {
      return this.componentInstance;
    }
  }]);

  return VNode;
}();
var createEmptyVNode = function createEmptyVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};
function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.

function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}

/*  */
function renderDOMProps$1(node) {
  var props = node.data.domProps;
  var res = '';
  var parent = node.parent;

  while (isDef(parent)) {
    if (parent.data && parent.data.domProps) {
      props = extend(extend({}, props), parent.data.domProps);
    }

    parent = parent.parent;
  }

  if (isUndef(props)) {
    return res;
  }

  var attrs = node.data.attrs;

  for (var key in props) {
    if (key === 'innerHTML') {
      setText(node, props[key], true);
    } else if (key === 'textContent') {
      setText(node, props[key], false);
    } else if (key === 'value' && node.tag === 'textarea') {
      setText(node, toString(props[key]), false);
    } else {
      // $flow-disable-line (WTF?)
      var attr = propsToAttrMap[key] || key.toLowerCase();

      if (isRenderableAttr(attr) && // avoid rendering double-bound props/attrs twice
      !(isDef(attrs) && isDef(attrs[attr]))) {
        res += renderAttr(attr, props[key]);
      }
    }
  }

  return res;
}

function setText(node, text, raw) {
  var child = new VNode(undefined, undefined, undefined, text);
  child.raw = raw;
  node.children = [child];
}

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Define a property.
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/*  */
// can we use __proto__?
var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
UA && /chrome\/\d+/.test(UA) && !isEdge;
UA && /phantomjs/.test(UA);
UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*#__PURE__*/function () {
    function Set() {
      _classCallCheck(this, Set);

      this.set = Object.create(null);
    }

    _createClass(Set, [{
      key: "has",
      value: function has(key) {
        return this.set[key] === true;
      }
    }, {
      key: "add",
      value: function add(key) {
        this.set[key] = true;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.set = Object.create(null);
      }
    }]);

    return Set;
  }();
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];

/*  */
var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop$1,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */
var warn$2 = noop$1;
var tip = noop$1;
var generateComponentTrace = noop$1; // work around flow check

var formatComponentName = noop$1;

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn$2 = function warn(msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (hasConsole && !config.silent) {
      console.error("[Vue warn]: ".concat(msg).concat(trace));
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<".concat(classify(name), ">") : "<Anonymous>") + (file && includeFile !== false ? " at ".concat(file) : '');
  };

  var repeat$1 = function repeat(str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) res += str;
      if (n > 1) str += str;
      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "".concat(i === 0 ? '---> ' : repeat$1(' ', 5 + i * 2)).concat(Array.isArray(vm) ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)") : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in ".concat(formatComponentName(vm), ")");
    }
  };
}

var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = /*#__PURE__*/function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.id = uid++;
    this.subs = [];
  }

  _createClass(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: "removeSub",
    value: function removeSub(sub) {
      remove$1(this.subs, sub);
    }
  }, {
    key: "depend",
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      // stabilize the subscriber list first
      var subs = this.subs.slice();

      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }
  }]);

  return Dep;
}(); // The current target watcher being evaluated.
Dep.target = null;
var targetStack = [];
function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}
function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) ob.observeArray(inserted); // notify change

    ob.dep.notify();
    return result;
  });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;
function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */

var Observer = /*#__PURE__*/function () {
  // number of vms that have this object as root $data
  function Observer(value) {
    _classCallCheck(this, Observer);

    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  _createClass(Observer, [{
    key: "walk",
    value: function walk(obj) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i]);
      }
    }
    /**
     * Observe a list of Array items.
     */

  }, {
    key: "observeArray",
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }
  }]);

  return Observer;
}(); // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */

function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if (customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) return;

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */

function set(target, key, val) {
  if ((isUndef(target) || isPrimitive(target))) {
    warn$2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    warn$2('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */

function dependArray(value) {
  for (var e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */
/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */

var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn$2("option \"".concat(key, "\" can only be used during instance ") + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) return to;
  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') continue;
    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn$2('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook$1(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook$1;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) parentVal = undefined;
  if (childVal === nativeWatch) childVal = undefined;
  /* istanbul ignore if */

  if (!childVal) return Object.create(parentVal || null);

  {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);

  for (var _key in childVal) {
    var parent = ret[_key];
    var child = childVal[_key];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[_key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) extend(ret, childVal);
  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
    warn$2('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn$2('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */

function normalizeProps(options, vm) {
  var props = options.props;
  if (!props) return;
  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else {
        warn$2('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else {
    warn$2("Invalid value for option \"props\": expected an Array or an Object, " + "but got ".concat(toRawType(props), "."), vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;
  if (!inject) return;
  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else {
    warn$2("Invalid value for option \"inject\": expected an Array or an Object, " + "but got ".concat(toRawType(inject), "."), vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];

      if (typeof def === 'function') {
        dirs[key] = {
          bind: def,
          update: def
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn$2("Invalid value for option \"".concat(name, "\": expected an Object, ") + "but got ".concat(toRawType(value), "."), vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child["extends"]) {
      parent = mergeOptions(parent, child["extends"], vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) return assets[id];
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) return assets[camelizedId];
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId]; // fallback to prototype chain

  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if (warnMissing && !res) {
    warn$2('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */

function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop["default"]; // warn against non-factory defaults for Object & Array

  if (isObject(def)) {
    warn$2('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn$2('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) {
    return t;
  });

  if (!valid && haveExpectedTypes) {
    warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType(value, type, vm) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}

var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */

function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(_typeof(value)) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(styleValue(value, expectedType));
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(styleValue(value, receivedType), ".");
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];

function isExplicable(value) {
  return EXPLICABLE_TYPES.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

/*  */
function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) return;
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res["catch"](function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {

  logError$1(err, vm, info);
}

function logError$1(err, vm, info) {
  {
    warn$2("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/*  */
var callbacks = [];

function flushCallbacks() {
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  Promise.resolve();
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) ; else ;

/*  */
function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass$1(data.staticClass, data["class"]);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    "class": isDef(child["class"]) ? [child["class"], parent["class"]] : parent["class"]
  };
}

function renderClass$1(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}
function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}
function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  }

  return res;
}

/*  */
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
var isPreTag = function isPreTag(tag) {
  return tag === 'pre';
};
var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}
makeMap('text,number,password,search,email,tel,url');

/*  */
function renderClass(node) {
  var classList = genClassForVnode(node);

  if (classList !== '') {
    return " class=\"".concat(escape(classList), "\"");
  }
}

/*  */
var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */

function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}

/*  */
function genStyle(style) {
  var styleText = '';

  for (var key in style) {
    var value = style[key];
    var hyphenatedKey = hyphenate(key);

    if (Array.isArray(value)) {
      for (var i = 0, len = value.length; i < len; i++) {
        styleText += normalizeValue(hyphenatedKey, value[i]);
      }
    } else {
      styleText += normalizeValue(hyphenatedKey, value);
    }
  }

  return styleText;
}

function normalizeValue(key, value) {
  if (typeof value === 'string' || typeof value === 'number' && noUnitNumericStyleProps[key] || value === 0) {
    return "".concat(key, ":").concat(value, ";");
  } else {
    // invalid values
    return "";
  }
}

function renderStyle(vnode) {
  var styleText = genStyle(getStyle(vnode, false));

  if (styleText !== '') {
    return " style=".concat(JSON.stringify(escape(styleText)));
  }
}

var modules$1 = [renderAttrs$1, renderDOMProps$1, renderClass, renderStyle];

/*  */
function show(node, dir) {
  if (!dir.value) {
    var style = node.data.style || (node.data.style = {});

    if (Array.isArray(style)) {
      style.push({
        display: 'none'
      });
    } else {
      style.display = 'none';
    }
  }
}

/*  */
// that must be done at runtime instead of compile time.

function model$2(node, dir) {
  if (!node.children) return;
  var value = dir.value;
  var isMultiple = node.data.attrs && node.data.attrs.multiple;

  for (var i = 0, l = node.children.length; i < l; i++) {
    var option = node.children[i];

    if (option.tag === 'option') {
      if (isMultiple) {
        var selected = Array.isArray(value) && looseIndexOf(value, getValue(option)) > -1;

        if (selected) {
          setSelected(option);
        }
      } else {
        if (looseEqual(value, getValue(option))) {
          setSelected(option);
          return;
        }
      }
    }
  }
}

function getValue(option) {
  var data = option.data || {};
  return data.attrs && data.attrs.value || data.domProps && data.domProps.value || option.children && option.children[0] && option.children[0].text;
}

function setSelected(option) {
  var data = option.data || (option.data = {});
  var attrs = data.attrs || (data.attrs = {});
  attrs.selected = '';
}

var baseDirectives$1 = {
  show: show,
  model: model$2
};

/*  */
var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
// (and which close themselves)

var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

/*  */
var MAX_STACK_DEPTH = 800;

var noop = function noop(_) {
  return _;
};

var defer = typeof process !== 'undefined' && process.nextTick ? process.nextTick : typeof Promise !== 'undefined' ? function (fn) {
  return Promise.resolve().then(fn);
} : typeof setTimeout !== 'undefined' ? setTimeout : noop;

if (defer === noop) {
  throw new Error('Your JavaScript runtime does not support any asynchronous primitives ' + 'that are required by vue-server-renderer. Please use a polyfill for ' + 'either Promise or setTimeout.');
}

function createWriteFunction(write, onError) {
  var stackDepth = 0;

  var cachedWrite = function cachedWrite(text, next) {
    // 如果 caching 标记为 true，那么每次调用 write 时，都把内容写入缓存。
    if (text && cachedWrite.caching) {
      cachedWrite.cacheBuffer[cachedWrite.cacheBuffer.length - 1] += text;
    } // waitForNext 在 write 结束后，是否主动调用 next 函数，在开启下一个节点的渲染。


    var waitForNext = write(text, next);

    if (waitForNext !== true) {
      // 如果主动调用 next 函数，那么就会与 write 函数的调用方形成递归。
      // 如果组件特别大，非常容易超出最大函数栈的限制。
      // 所以在这里对最大递归调用做一个限制。
      if (stackDepth >= MAX_STACK_DEPTH) {
        // defer 是 nextTick 的 兼容写法
        defer(function () {
          try {
            next();
          } catch (e) {
            onError(e);
          }
        });
      } else {
        // 如果主动调用 next，那么就将栈层数统计 +1。
        stackDepth++;
        next(); // 在递归结束后，栈高度减少，所以将栈层数统计 -1。

        stackDepth--;
      }
    }
  };

  cachedWrite.caching = false;
  cachedWrite.cacheBuffer = [];
  cachedWrite.componentBuffer = [];
  return cachedWrite;
}

/*  */

/**
 * Original RenderStream implementation by Sasha Aickin (@aickin)
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified by Evan You (@yyx990803)
 */
var stream = require('stream');

var RenderStream = /*#__PURE__*/function (_stream$Readable) {
  _inherits(RenderStream, _stream$Readable);

  var _super = _createSuper(RenderStream);

  function RenderStream(render) {
    var _this;

    _classCallCheck(this, RenderStream);

    _this = _super.call(this);
    _this.buffer = '';
    _this.render = render;
    _this.expectedSize = 0;
    _this.write = createWriteFunction(function (text, next) {
      var n = _this.expectedSize;
      _this.buffer += text;

      if (_this.buffer.length >= n) {
        _this.next = next;

        _this.pushBySize(n);

        return true; // we will decide when to call next
      }

      return false;
    }, function (err) {
      _this.emit('error', err);
    });

    _this.end = function () {
      _this.emit('beforeEnd'); // the rendering is finished; we should push out the last of the buffer.


      _this.done = true;

      _this.push(_this.buffer);
    };

    return _this;
  }

  _createClass(RenderStream, [{
    key: "pushBySize",
    value: function pushBySize(n) {
      var bufferToPush = this.buffer.substring(0, n);
      this.buffer = this.buffer.substring(n);
      this.push(bufferToPush);
    }
  }, {
    key: "tryRender",
    value: function tryRender() {
      try {
        this.render(this.write, this.end);
      } catch (e) {
        this.emit('error', e);
      }
    }
  }, {
    key: "tryNext",
    value: function tryNext() {
      try {
        this.next();
      } catch (e) {
        this.emit('error', e);
      }
    }
  }, {
    key: "_read",
    value: function _read(n) {
      this.expectedSize = n; // it's possible that the last chunk added bumped the buffer up to > 2 * n,
      // which means we will need to go through multiple read calls to drain it
      // down to < n.

      if (isTrue(this.done)) {
        this.push(null);
        return;
      }

      if (this.buffer.length >= n) {
        this.pushBySize(n);
        return;
      }

      if (isUndef(this.next)) {
        // start the rendering chain.
        this.tryRender();
      } else {
        // continue with the rendering.
        this.tryNext();
      }
    }
  }]);

  return RenderStream;
}(stream.Readable);

var RenderContext = /*#__PURE__*/function () {
  // 用户模板中需要替换的变量
  // 当前正在处理的 vue component
  // 最为重要的变量：渲染栈
  // 由 createWriteFunction 创建的 write 函数
  // 节点渲染函数，内部对不同节点类型，采取不同的渲染策略。
  // 传递给 write 函数使用的 next 函数，用于触发下一次的渲染。
  // 在全部渲染工作完成后的回调函数。
  function RenderContext(options) {
    _classCallCheck(this, RenderContext);

    this.userContext = options.userContext;
    this.activeInstance = options.activeInstance;
    this.renderStates = [];
    this.write = options.write;
    this.done = options.done;
    this.renderNode = options.renderNode;
    this.isUnaryTag = options.isUnaryTag;
    this.modules = options.modules;
    this.directives = options.directives;
    var cache = options.cache;

    if (cache && (!cache.get || !cache.set)) {
      throw new Error('renderer cache must implement at least get & set.');
    }

    this.cache = cache;
    this.get = cache && normalizeAsync(cache, 'get');
    this.has = cache && normalizeAsync(cache, 'has'); // 避免 next 函数传递给 write 以后，this 不再是 renderContext 的问题。

    this.next = this.next.bind(this);
  }

  _createClass(RenderContext, [{
    key: "next",
    value: function next() {
      // eslint-disable-next-line
      while (true) {
        // 取出渲染栈中的最后一个需要渲染的元素
        var lastState = this.renderStates[this.renderStates.length - 1]; // 当渲染栈中没有需要渲染的元素时，说明渲染完成，调用回调函数。

        if (isUndef(lastState)) {
          return this.done();
        }
        /* eslint-disable no-case-declarations */


        switch (lastState.type) {
          // Element 和 Fragment 渲染逻辑相同。
          case 'Element':
          case 'Fragment':
            // Fragment means functional component
            var children = lastState.children,
                total = lastState.total;
            var rendered = lastState.rendered++; // 如果 children 数据还没有渲染完，那么继续调用 renderNode。

            if (rendered < total) {
              return this.renderNode(children[rendered], false, this);
            } else {
              // 如果 children 数据已经渲染完了，那么将这个 Element 移除，
              this.renderStates.pop();

              if (lastState.type === 'Element') {
                // 并写入它的结束标签，e.g. </div> </span> 等。
                return this.write(lastState.endTag, this.next);
              }
            }

            break;

          case 'Component':
            this.renderStates.pop();
            this.activeInstance = lastState.prevActive;
            break;

          case 'ComponentWithCache':
            this.renderStates.pop();
            var buffer = lastState.buffer,
                bufferIndex = lastState.bufferIndex,
                componentBuffer = lastState.componentBuffer,
                key = lastState.key;
            var result = {
              html: buffer[bufferIndex],
              components: componentBuffer[bufferIndex]
            };
            this.cache.set(key, result); // 把有 serverCacheKey 的组件成为带缓存组件，
            // 如果带缓存组件出现嵌套，bufferIndex 就会出现 > 0 的情况。
            // 假设 A 套着 B，B 套着 C，那么 ABC 的 bufferIndex 分别是 0 1 2.

            if (bufferIndex === 0) {
              // this is a top-level cached component,
              // exit caching mode.
              this.write.caching = false;
            } else {
              (function () {
                // parent component is also being cached,
                // merge self into parent's result
                // 嵌套的缓存组件，被嵌套的组件渲染时，将渲染结果同时写入父组件缓存中。
                buffer[bufferIndex - 1] += result.html;
                var prev = componentBuffer[bufferIndex - 1];
                result.components.forEach(function (c) {
                  return prev.add(c);
                });
              })();
            }

            buffer.length = bufferIndex;
            componentBuffer.length = bufferIndex;
            break;
        }
      }
    }
  }]);

  return RenderContext;
}(); // 兼容 cache 对象的 get, has 方法调用方式。
// const value = cache.get('cacheKey')
// cache.get('cacheKey', (value) => {})

function normalizeAsync(cache, method) {
  var fn = cache[method];

  if (isUndef(fn)) {
    return;
  } else if (fn.length > 1) {
    return function (key, cb) {
      return fn.call(cache, key, cb);
    };
  } else {
    return function (key, cb) {
      return cb(fn.call(cache, key));
    };
  }
}

/*  */
var validDivisionCharRE = /[\w).+\-_$\]]/;
function parseFilters(exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) inSingle = false;
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) inDouble = false;
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) inTemplateString = false;
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) inRegex = false;
    } else if (c === 0x7C && // pipe
    exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5B:
          square++;
          break;
        // [

        case 0x5D:
          square--;
          break;
        // ]

        case 0x7B:
          curly++;
          break;
        // {

        case 0x7D:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') break;
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');

  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"".concat(filter, "\")(").concat(exp, ")");
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"".concat(name, "\")(").concat(exp).concat(args !== ')' ? ',' + args : args);
  }
}

/*  */
var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});
function parseText(text, delimiters) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;

  if (!tagRE.test(text)) {
    return;
  }

  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;

  while (match = tagRE.exec(text)) {
    index = match.index; // push text token

    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    } // tag token


    var exp = parseFilters(match[1].trim());
    tokens.push("_s(".concat(exp, ")"));
    rawTokens.push({
      '@binding': exp
    });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }

  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  };
}

/*  */
/* eslint-disable no-unused-vars */

function baseWarn(msg, range) {
  console.error("[Vue compiler]: ".concat(msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction(modules, key) {
  return modules ? modules.map(function (m) {
    return m[key];
  }).filter(function (_) {
    return _;
  }) : [];
}
function addProp(el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({
    name: name,
    value: value,
    dynamic: dynamic
  }, range));
  el.plain = false;
}
function addAttr(el, name, value, range, dynamic) {
  var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
  attrs.push(rangeSetItem({
    name: name,
    value: value,
    dynamic: dynamic
  }, range));
  el.plain = false;
} // add a raw attr (use this in preTransforms)

function addRawAttr(el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({
    name: name,
    value: value
  }, range));
}
function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker(symbol, name, dynamic) {
  return dynamic ? "_p(".concat(name, ",\"").concat(symbol, "\")") : symbol + name; // mark the event as captured
}

function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
  modifiers = modifiers || emptyObject; // warn prevent and passive modifier

  /* istanbul ignore if */

  if (warn && modifiers.prevent && modifiers.passive) {
    warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
  } // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.


  if (modifiers.right) {
    if (dynamic) {
      name = "(".concat(name, ")==='click'?'contextmenu':(").concat(name, ")");
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(".concat(name, ")==='click'?'mouseup':(").concat(name, ")");
    } else if (name === 'click') {
      name = 'mouseup';
    }
  } // check capture modifier


  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }

  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */


  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;

  if (modifiers["native"]) {
    delete modifiers["native"];
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({
    value: value.trim(),
    dynamic: dynamic
  }, range);

  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */

  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}
function getRawBindingAttr(el, name) {
  return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
}
function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);

  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);

    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
} // note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

function getAndRemoveAttr(el, name, removeFromMap) {
  var val;

  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;

    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }

  if (removeFromMap) {
    delete el.attrsMap[name];
  }

  return val;
}
function getAndRemoveAttrByRegex(el, name) {
  var list = el.attrsList;

  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];

    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr;
    }
  }
}

function rangeSetItem(item, range) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }

    if (range.end != null) {
      item.end = range.end;
    }
  }

  return item;
}

/*  */

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');

  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);

    if (res) {
      warn("class=\"".concat(staticClass, "\": ") + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
    }
  }

  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }

  var classBinding = getBindingAttr(el, 'class', false
  /* getStatic */
  );

  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$2(el) {
  var data = '';

  if (el.staticClass) {
    data += "staticClass:".concat(el.staticClass, ",");
  }

  if (el.classBinding) {
    data += "class:".concat(el.classBinding, ",");
  }

  return data;
}

var klass = {
  staticKeys: ['staticClass'],
  transformNode: transformNode$1,
  genData: genData$2
};

/*  */

function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');

  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);

      if (res) {
        warn("style=\"".concat(staticStyle, "\": ") + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
      }
    }

    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false
  /* getStatic */
  );

  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1(el) {
  var data = '';

  if (el.staticStyle) {
    data += "staticStyle:".concat(el.staticStyle, ",");
  }

  if (el.styleBinding) {
    data += "style:(".concat(el.styleBinding, "),");
  }

  return data;
}

var style = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode,
  genData: genData$1
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(unicodeRegExp.source, "]*");
var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
var startTagOpen = new RegExp("^<".concat(qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being passed as HTML comment when inlined in page

var comment = /^<!\--/;
var conditionalComment = /^<!\[/; // Special Elements (can contain anything)

var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};
var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g; // #5992

var isIgnoreNewlineTag = makeMap('pre,textarea', true);

var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag = options.isUnaryTag || no;
  var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;

  while (html) {
    last = html; // Make sure we're not in a plaintext content element like script/style

    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');

      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }

            advance(commentEnd + 3);
            continue;
          }
        } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        } // Doctype:


        var doctypeMatch = html.match(doctype);

        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        } // End tag:


        var endTagMatch = html.match(endTag);

        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        } // Start tag:


        var startTagMatch = parseStartTag();

        if (startTagMatch) {
          handleStartTag(startTagMatch);

          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }

          continue;
        }
      }

      var text = void 0,
          rest = void 0,
          next = void 0;

      if (textEnd >= 0) {
        rest = html.slice(textEnd);

        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) break;
          textEnd += next;
          rest = html.slice(textEnd);
        }

        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      (function () {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;

          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }

          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }

          if (options.chars) {
            options.chars(text);
          }

          return '';
        });
        index += html.length - rest.length;
        html = rest;
        parseEndTag(stackedTag, index - endTagLength, index);
      })();
    }

    if (html === last) {
      options.chars && options.chars(html);

      if (!stack.length && options.warn) {
        options.warn("Mal-formatted tag at end of template: \"".concat(html, "\""), {
          start: index + html.length
        });
      }

      break;
    }
  } // Clean up any remaining tags


  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);

    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;

      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }

      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }

      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag(tagName) || !!unarySlash;
    var l = match.attrs.length;
    var attrs = new Array(l);

    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };

      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({
        tag: tagName,
        lowerCasedTag: tagName.toLowerCase(),
        attrs: attrs,
        start: match.start,
        end: match.end
      });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) start = index;
    if (end == null) end = index; // Find the closest opened tag of the same type

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();

      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ((i > pos || !tagName) && options.warn) {
          options.warn("tag <".concat(stack[i].tag, "> has no matching end tag."), {
            start: stack[i].start,
            end: stack[i].end
          });
        }

        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      } // Remove the open elements from the stack


      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }

      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
  var _ref = modifiers || {},
      number = _ref.number,
      trim = _ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;

  if (trim) {
    valueExpression = "(typeof ".concat(baseValueExpression, " === 'string'") + "? ".concat(baseValueExpression, ".trim()") + ": ".concat(baseValueExpression, ")");
  }

  if (number) {
    valueExpression = "_n(".concat(valueExpression, ")");
  }

  var assignment = genAssignmentCode(value, valueExpression);
  el.model = {
    value: "(".concat(value, ")"),
    expression: JSON.stringify(value),
    callback: "function (".concat(baseValueExpression, ") {").concat(assignment, "}")
  };
}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

function genAssignmentCode(value, assignment) {
  var res = parseModel(value);

  if (res.key === null) {
    return "".concat(value, "=").concat(assignment);
  } else {
    return "$set(".concat(res.exp, ", ").concat(res.key, ", ").concat(assignment, ")");
  }
}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index, expressionPos, expressionEndPos;
function parseModel(val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index = val.lastIndexOf('.');

    if (index > -1) {
      return {
        exp: val.slice(0, index),
        key: '"' + val.slice(index + 1) + '"'
      };
    } else {
      return {
        exp: val,
        key: null
      };
    }
  }

  str = val;
  index = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */

    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  };
}

function next() {
  return str.charCodeAt(++index);
}

function eof() {
  return index >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  var inBracket = 1;
  expressionPos = index;

  while (!eof()) {
    chr = next();

    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }

    if (chr === 0x5B) inBracket++;
    if (chr === 0x5D) inBracket--;

    if (inBracket === 0) {
      expressionEndPos = index;
      break;
    }
  }
}

function parseString(chr) {
  var stringQuote = chr;

  while (!eof()) {
    chr = next();

    if (chr === stringQuote) {
      break;
    }
  }
}

/*  */
var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;
var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
var slotRE = /^v-slot(:|$)|^#/;
var lineBreakRE = /[\r\n]/;
var whitespaceRE = /[ \f\t\r\n]+/g;
var invalidAttributeRE = /[\s"'<>\/=]/;
var decodeHTMLCached = cached(he__default["default"].decode);
var emptySlotScopeToken = "_empty_"; // configurable state

var warn$1;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;
function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  };
}
/**
 * Convert HTML string to AST.
 */

function parse(template, options) {
  warn$1 = options.warn || baseWarn;
  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;

  maybeComponent = function maybeComponent(el) {
    return !!(el.component || el.attrsMap[':is'] || el.attrsMap['v-bind:is'] || !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
  };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;
  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg, range) {
    if (!warned) {
      warned = true;
      warn$1(msg, range);
    }
  }

  function closeElement(element) {
    trimEndingWhitespace(element);

    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    } // tree management


    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root["if"] && (element.elseif || element["else"])) {
        {
          checkRootConstraints(element);
        }

        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
          start: element.start
        });
      }
    }

    if (currentParent && !element.forbidden) {
      if (element.elseif || element["else"]) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"';
          (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }

        currentParent.children.push(element);
        element.parent = currentParent;
      }
    } // final children cleanup
    // filter out scoped slots


    element.children = element.children.filter(function (c) {
      return !c.slotScope;
    }); // remove trailing whitespace node again

    trimEndingWhitespace(element); // check pre state

    if (element.pre) {
      inVPre = false;
    }

    if (platformIsPreTag(element.tag)) {
      inPre = false;
    } // apply post-transforms


    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace(el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;

      while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints(el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce("Cannot use <".concat(el.tag, "> as component root element because it may ") + 'contain multiple nodes.', {
        start: el.start
      });
    }

    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
    }
  }

  parseHTML(template, {
    warn: warn$1,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start(tag, attrs, unary, _start, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug

      /* istanbul ignore if */

      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);

      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = _start;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated;
          }, {});
        }

        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$1("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
              start: attr.start + attr.name.indexOf("["),
              end: attr.start + attr.name.length
            });
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$1('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<".concat(tag, ">") + ', as they will not be parsed.', {
          start: element.start
        });
      } // apply pre-transforms


      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);

        if (element.pre) {
          inVPre = true;
        }
      }

      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }

      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;

        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },
    end: function end(tag, start, _end) {
      var element = stack[stack.length - 1]; // pop stack

      stack.length -= 1;
      currentParent = stack[stack.length - 1];

      if (options.outputSourceRange) {
        element.end = _end;
      }

      closeElement(element);
    },
    chars: function chars(text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce('Component template requires a root element, rather than just text.', {
              start: start
            });
          } else if (text = text.trim()) {
            warnOnce("text \"".concat(text, "\" outside root element will be ignored."), {
              start: start
            });
          }
        }

        return;
      } // IE textarea placeholder bug

      /* istanbul ignore if */


      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
        return;
      }

      var children = currentParent.children;

      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }

      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE, ' ');
        }

        var res;
        var child;

        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }

        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }

          children.push(child);
        }
      }
    },
    comment: function comment(text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };

        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }

        currentParent.children.push(child);
      }
    }
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  var list = el.attrsList;
  var len = list.length;

  if (len) {
    var attrs = el.attrs = new Array(len);

    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };

      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement(element, options) {
  processKey(element); // determine whether this is a plain element after
  // removing structural attributes

  element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);

  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }

  processAttrs(element);
  return element;
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');

  if (exp) {
    {
      if (el.tag === 'template') {
        warn$1("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
      }

      if (el["for"]) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;

        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$1("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true
          /* tip */
          );
        }
      }
    }

    el.key = exp;
  }
}

function processRef(el) {
  var ref = getBindingAttr(el, 'ref');

  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  var exp;

  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var res = parseFor(exp);

    if (res) {
      extend(el, res);
    } else {
      warn$1("Invalid v-for expression: ".concat(exp), el.rawAttrsMap['v-for']);
    }
  }
}
function parseFor(exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  var res = {};
  res["for"] = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);

  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();

    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }

  return res;
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');

  if (exp) {
    el["if"] = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el["else"] = true;
    }

    var elseif = getAndRemoveAttr(el, 'v-else-if');

    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);

  if (prev && prev["if"]) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$1("v-".concat(el.elseif ? 'else-if="' + el.elseif + '"' : 'else', " ") + "used on element <".concat(el.tag, "> without corresponding v-if."), el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
  }
}

function findPrevElement(children) {
  var i = children.length;

  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if (children[i].text !== ' ') {
        warn$1("text \"".concat(children[i].text.trim(), "\" between v-if and v-else(-if) ") + "will be ignored.", children[i]);
      }

      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }

  el.ifConditions.push(condition);
}

function processOnce(el) {
  var once = getAndRemoveAttr(el, 'v-once');

  if (once != null) {
    el.once = true;
  }
} // handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">


function processSlotContent(el) {
  var slotScope;

  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */

    if (slotScope) {
      warn$1("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
    }

    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$1("Ambiguous combined usage of slot-scope and v-for on <".concat(el.tag, "> ") + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
    }

    el.slotScope = slotScope;
  } // slot="xxx"


  var slotTarget = getBindingAttr(el, 'slot');

  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']); // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.

    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  } // 2.6 v-slot syntax


  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);

      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$1("Unexpected mixed usage of different slot syntaxes.", el);
          }

          if (el.parent && !maybeComponent(el.parent)) {
            warn$1("<template v-slot> can only appear at the root level inside " + "the receiving component", el);
          }
        }

        var _getSlotName = getSlotName(slotBinding),
            name = _getSlotName.name,
            dynamic = _getSlotName.dynamic;

        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var _slotBinding = getAndRemoveAttrByRegex(el, slotRE);

      if (_slotBinding) {
        {
          if (!maybeComponent(el)) {
            warn$1("v-slot can only be used on components or <template>.", _slotBinding);
          }

          if (el.slotScope || el.slotTarget) {
            warn$1("Unexpected mixed usage of different slot syntaxes.", el);
          }

          if (el.scopedSlots) {
            warn$1("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", _slotBinding);
          }
        } // add the component's children to its default slot


        var slots = el.scopedSlots || (el.scopedSlots = {});

        var _getSlotName2 = getSlotName(_slotBinding),
            _name = _getSlotName2.name,
            _dynamic = _getSlotName2.dynamic;

        var slotContainer = slots[_name] = createASTElement('template', [], el);
        slotContainer.slotTarget = _name;
        slotContainer.slotTargetDynamic = _dynamic;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true;
          }
        });
        slotContainer.slotScope = _slotBinding.value || emptySlotScopeToken; // remove children as they are returned from scopedSlots now

        el.children = []; // mark el non-plain so data gets generated

        el.plain = false;
      }
    }
  }
}

function getSlotName(binding) {
  var name = binding.name.replace(slotRE, '');

  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$1("v-slot shorthand syntax requires a slot name.", binding);
    }
  }

  return dynamicArgRE.test(name) // dynamic [name]
  ? {
    name: name.slice(1, -1),
    dynamic: true
  } // static name
  : {
    name: "\"".concat(name, "\""),
    dynamic: false
  };
} // handle <slot/> outlets


function processSlotOutlet(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');

    if (el.key) {
      warn$1("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
    }
  }
}

function processComponent(el) {
  var binding;

  if (binding = getBindingAttr(el, 'is')) {
    el.component = binding;
  }

  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;

  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;

    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true; // modifiers

      modifiers = parseModifiers(name.replace(dirRE, '')); // support .foo shorthand syntax for the .prop modifier

      if (modifiers) {
        name = name.replace(modifierRE, '');
      }

      if (bindRE.test(name)) {
        // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);

        if (isDynamic) {
          name = name.slice(1, -1);
        }

        if (value.trim().length === 0) {
          warn$1("The value for a v-bind expression cannot be empty. Found in \"v-bind:".concat(name, "\""));
        }

        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') name = 'innerHTML';
          }

          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }

          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");

            if (!isDynamic) {
              addHandler(el, "update:".concat(camelize(name)), syncGen, null, false, warn$1, list[i]);

              if (hyphenate(name) !== camelize(name)) {
                addHandler(el, "update:".concat(hyphenate(name)), syncGen, null, false, warn$1, list[i]);
              }
            } else {
              // handler w/ dynamic event name
              addHandler(el, "\"update:\"+(".concat(name, ")"), syncGen, null, false, warn$1, list[i], true // dynamic
              );
            }
          }
        }

        if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) {
        // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);

        if (isDynamic) {
          name = name.slice(1, -1);
        }

        addHandler(el, name, value, modifiers, false, warn$1, list[i], isDynamic);
      } else {
        // normal directives
        name = name.replace(dirRE, ''); // parse arg

        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;

        if (arg) {
          name = name.slice(0, -(arg.length + 1));

          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }

        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);

        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);

        if (res) {
          warn$1("".concat(name, "=\"").concat(value, "\": ") + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
        }
      }

      addAttr(el, name, JSON.stringify(value), list[i]); // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation

      if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor(el) {
  var parent = el;

  while (parent) {
    if (parent["for"] !== undefined) {
      return true;
    }

    parent = parent.parent;
  }

  return false;
}

function parseModifiers(name) {
  var match = name.match(modifierRE);

  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  var map = {};

  for (var i = 0, l = attrs.length; i < l; i++) {
    if (map[attrs[i].name] && !isIE && !isEdge) {
      warn$1('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }

    map[attrs[i].name] = attrs[i].value;
  }

  return map;
} // for script (e.g. type="x/template") or style, do not decode content


function isTextTag(el) {
  return el.tag === 'script' || el.tag === 'style';
}

function isForbiddenTag(el) {
  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;
/* istanbul ignore next */

function guardIESVGBug(attrs) {
  var res = [];

  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];

    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }

  return res;
}

function checkForAliasModel(el, value) {
  var _el = el;

  while (_el) {
    if (_el["for"] && _el.alias === value) {
      warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
    }

    _el = _el.parent;
  }
}

/*  */

function preTransformNode(el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;

    if (!map['v-model']) {
      return;
    }

    var typeBinding;

    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }

    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(".concat(map['v-bind'], ").type");
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? "&&(".concat(ifCondition, ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true); // 1. checkbox

      var branch0 = cloneASTElement(el); // process for on the main node

      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed

      branch0["if"] = "(".concat(typeBinding, ")==='checkbox'") + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0["if"],
        block: branch0
      }); // 2. add radio else-if condition

      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(".concat(typeBinding, ")==='radio'") + ifConditionExtra,
        block: branch1
      }); // 3. other

      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0["else"] = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0;
    }
  }
}

function cloneASTElement(el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules = [klass, style, model$1];

/*  */
var warn; // in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
function model(el, dir, _warn) {
  warn = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn("<".concat(el.tag, " v-model=\"").concat(value, "\" type=\"file\">:\n") + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

    return false;
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else {
    genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

    return false;
  } // ensure runtime directive metadata


  return true;
}

function genCheckboxModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked', "Array.isArray(".concat(value, ")") + "?_i(".concat(value, ",").concat(valueBinding, ")>-1") + (trueValueBinding === 'true' ? ":(".concat(value, ")") : ":_q(".concat(value, ",").concat(trueValueBinding, ")")));
  addHandler(el, 'change', "var $$a=".concat(value, ",") + '$$el=$event.target,' + "$$c=$$el.checked?(".concat(trueValueBinding, "):(").concat(falseValueBinding, ");") + 'if(Array.isArray($$a)){' + "var $$v=".concat(number ? '_n(' + valueBinding + ')' : valueBinding, ",") + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(".concat(genAssignmentCode(value, '$$a.concat([$$v])'), ")}") + "else{$$i>-1&&(".concat(genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))'), ")}") + "}else{".concat(genAssignmentCode(value, '$$c'), "}"), null, true);
}

function genRadioModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? "_n(".concat(valueBinding, ")") : valueBinding;
  addProp(el, 'checked', "_q(".concat(value, ",").concat(valueBinding, ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return ".concat(number ? '_n(val)' : 'val', "})");
  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = ".concat(selectedVal, ";");
  code = "".concat(code, " ").concat(genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  var type = el.attrsMap.type; // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type

  {
    var _value = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];

    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];

    if (_value && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn("".concat(binding, "=\"").concat(_value, "\" conflicts with v-model on the same element ") + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
    }
  }

  var _ref = modifiers || {},
      lazy = _ref.lazy,
      number = _ref.number,
      trim = _ref.trim;

  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
  var valueExpression = '$event.target.value';

  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }

  if (number) {
    valueExpression = "_n(".concat(valueExpression, ")");
  }

  var code = genAssignmentCode(value, valueExpression);

  if (needCompositionGuard) {
    code = "if($event.target.composing)return;".concat(code);
  }

  addProp(el, 'value', "(".concat(value, ")"));
  addHandler(el, event, code, null, true);

  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */
function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', "_s(".concat(dir.value, ")"), dir);
  }
}

/*  */
function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', "_s(".concat(dir.value, ")"), dir);
  }
}

var directives = {
  model: model,
  text: text,
  html: html
};

/*  */
var baseOptions = {
  expectHTML: true,
  modules: modules,
  directives: directives,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules)
};

/*  */
var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/; // KeyboardEvent.keyCode aliases

var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
}; // KeyboardEvent.key aliases

var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
}; // #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once

var genGuard = function genGuard(condition) {
  return "if(".concat(condition, ")return null;");
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};
function genHandlers(events, isNative) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";

  for (var name in events) {
    var handlerCode = genHandler(events[name]);

    if (events[name] && events[name].dynamic) {
      dynamicHandlers += "".concat(name, ",").concat(handlerCode, ",");
    } else {
      staticHandlers += "\"".concat(name, "\":").concat(handlerCode, ",");
    }
  }

  staticHandlers = "{".concat(staticHandlers.slice(0, -1), "}");

  if (dynamicHandlers) {
    return prefix + "_d(".concat(staticHandlers, ",[").concat(dynamicHandlers.slice(0, -1), "])");
  } else {
    return prefix + staticHandlers;
  }
} // Generate handler code with binding params on Weex

function genHandler(handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return "[".concat(handler.map(function (handler) {
      return genHandler(handler);
    }).join(','), "]");
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value;
    }

    return "function($event){".concat(isFunctionInvocation ? "return ".concat(handler.value) : handler.value, "}"); // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];

    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key]; // left/right

        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        (function () {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event.".concat(keyModifier, "Key");
          }).join('||'));
        })();
      } else {
        keys.push(key);
      }
    }

    if (keys.length) {
      code += genKeyFilter(keys);
    } // Make sure modifiers like prevent and stop get executed after key filtering


    if (genModifierCode) {
      code += genModifierCode;
    }

    var handlerCode = isMethodPath ? "return ".concat(handler.value, ".apply(null, arguments)") : isFunctionExpression ? "return (".concat(handler.value, ").apply(null, arguments)") : isFunctionInvocation ? "return ".concat(handler.value) : handler.value;

    return "function($event){".concat(code).concat(handlerCode, "}");
  }
}

function genKeyFilter(keys) {
  return (// make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" + "".concat(keys.map(genFilterCode).join('&&'), ")return null;")
  );
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);

  if (keyVal) {
    return "$event.keyCode!==".concat(keyVal);
  }

  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return "_k($event.keyCode," + "".concat(JSON.stringify(key), ",") + "".concat(JSON.stringify(keyCode), ",") + "$event.key," + "".concat(JSON.stringify(keyName)) + ")";
}

/*  */
function on(el, dir) {
  if (dir.modifiers) {
    warn$2("v-on without argument does not support modifiers.");
  }

  el.wrapListeners = function (code) {
    return "_g(".concat(code, ",").concat(dir.value, ")");
  };
}

/*  */
function bind(el, dir) {
  el.wrapData = function (code) {
    return "_b(".concat(code, ",'").concat(el.tag, "',").concat(dir.value, ",").concat(dir.modifiers && dir.modifiers.prop ? 'true' : 'false').concat(dir.modifiers && dir.modifiers.sync ? ',true' : '', ")");
  };
}

/*  */
var baseDirectives = {
  on: on,
  bind: bind,
  cloak: noop$1
};

var CodegenState = function CodegenState(options) {
  _classCallCheck(this, CodegenState);

  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;

  this.maybeComponent = function (el) {
    return !!el.component || !isReservedTag(el.tag);
  };

  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};
function generate$1(ast, options) {
  var state = new CodegenState(options); // fix #11483, Root level <script> tags should not be rendered.

  var code = ast ? ast.tag === 'script' ? 'null' : genElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return ".concat(code, "}"),
    staticRenderFns: state.staticRenderFns
  };
}
function genElement(el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el["for"] && !el.forProcessed) {
    return genFor(el, state);
  } else if (el["if"] && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0';
  } else if (el.tag === 'slot') {
    return genSlot(el, state);
  } else {
    // component or element
    var code;

    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;

      if (!el.plain || el.pre && state.maybeComponent(el)) {
        data = genData(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('".concat(el.tag, "'").concat(data ? ",".concat(data) : '' // data
      ).concat(children ? ",".concat(children) : '' // children
      , ")");
    } // module transforms


    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }

    return code;
  }
} // hoist static sub-trees out

function genStatic(el, state) {
  el.staticProcessed = true; // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.

  var originalPreState = state.pre;

  if (el.pre) {
    state.pre = el.pre;
  }

  state.staticRenderFns.push("with(this){return ".concat(genElement(el, state), "}"));
  state.pre = originalPreState;
  return "_m(".concat(state.staticRenderFns.length - 1).concat(el.staticInFor ? ',true' : '', ")");
} // v-once


function genOnce(el, state) {
  el.onceProcessed = true;

  if (el["if"] && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;

    while (parent) {
      if (parent["for"]) {
        key = parent.key;
        break;
      }

      parent = parent.parent;
    }

    if (!key) {
      state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
      return genElement(el, state);
    }

    return "_o(".concat(genElement(el, state), ",").concat(state.onceId++, ",").concat(key, ")");
  } else {
    return genStatic(el, state);
  }
}

function genIf(el, state, altGen, altEmpty) {
  el.ifProcessed = true; // avoid recursion

  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}

function genIfConditions(conditions, state, altGen, altEmpty) {
  if (!conditions.length) {
    return altEmpty || '_e()';
  }

  var condition = conditions.shift();

  if (condition.exp) {
    return "(".concat(condition.exp, ")?").concat(genTernaryExp(condition.block), ":").concat(genIfConditions(conditions, state, altGen, altEmpty));
  } else {
    return "".concat(genTernaryExp(condition.block));
  } // v-if with v-once should generate code like (a)?_m(0):_m(1)


  function genTernaryExp(el) {
    return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
  }
}

function genFor(el, state, altGen, altHelper) {
  var exp = el["for"];
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ",".concat(el.iterator1) : '';
  var iterator2 = el.iterator2 ? ",".concat(el.iterator2) : '';

  if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
    state.warn("<".concat(el.tag, " v-for=\"").concat(alias, " in ").concat(exp, "\">: component lists rendered with ") + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true
    /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion

  return "".concat(altHelper || '_l', "((").concat(exp, "),") + "function(".concat(alias).concat(iterator1).concat(iterator2, "){") + "return ".concat((altGen || genElement)(el, state)) + '})';
}
function genData(el, state) {
  var data = '{'; // directives first.
  // directives may mutate the el's other properties before they are generated.

  var dirs = genDirectives(el, state);
  if (dirs) data += dirs + ','; // key

  if (el.key) {
    data += "key:".concat(el.key, ",");
  } // ref


  if (el.ref) {
    data += "ref:".concat(el.ref, ",");
  }

  if (el.refInFor) {
    data += "refInFor:true,";
  } // pre


  if (el.pre) {
    data += "pre:true,";
  } // record original tag name for components using "is" attribute


  if (el.component) {
    data += "tag:\"".concat(el.tag, "\",");
  } // module data generation functions


  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  } // attributes


  if (el.attrs) {
    data += "attrs:".concat(genProps(el.attrs), ",");
  } // DOM props


  if (el.props) {
    data += "domProps:".concat(genProps(el.props), ",");
  } // event handlers


  if (el.events) {
    data += "".concat(genHandlers(el.events, false), ",");
  }

  if (el.nativeEvents) {
    data += "".concat(genHandlers(el.nativeEvents, true), ",");
  } // slot target
  // only for non-scoped slots


  if (el.slotTarget && !el.slotScope) {
    data += "slot:".concat(el.slotTarget, ",");
  } // scoped slots


  if (el.scopedSlots) {
    data += "".concat(genScopedSlots(el, el.scopedSlots, state), ",");
  } // component v-model


  if (el.model) {
    data += "model:{value:".concat(el.model.value, ",callback:").concat(el.model.callback, ",expression:").concat(el.model.expression, "},");
  } // inline-template


  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);

    if (inlineTemplate) {
      data += "".concat(inlineTemplate, ",");
    }
  }

  data = data.replace(/,$/, '') + '}'; // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.

  if (el.dynamicAttrs) {
    data = "_b(".concat(data, ",\"").concat(el.tag, "\",").concat(genProps(el.dynamicAttrs), ")");
  } // v-bind data wrap


  if (el.wrapData) {
    data = el.wrapData(data);
  } // v-on data wrap


  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }

  return data;
}

function genDirectives(el, state) {
  var dirs = el.directives;
  if (!dirs) return;
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;

  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];

    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }

    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"".concat(dir.name, "\",rawName:\"").concat(dir.rawName, "\"").concat(dir.value ? ",value:(".concat(dir.value, "),expression:").concat(JSON.stringify(dir.value)) : '').concat(dir.arg ? ",arg:".concat(dir.isDynamicArg ? dir.arg : "\"".concat(dir.arg, "\"")) : '').concat(dir.modifiers ? ",modifiers:".concat(JSON.stringify(dir.modifiers)) : '', "},");
    }
  }

  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el, state) {
  var ast = el.children[0];

  if ((el.children.length !== 1 || ast.type !== 1)) {
    state.warn('Inline-template components must have exactly one child element.', {
      start: el.start
    });
  }

  if (ast && ast.type === 1) {
    var inlineRenderFns = generate$1(ast, state.options);
    return "inlineTemplate:{render:function(){".concat(inlineRenderFns.render, "},staticRenderFns:[").concat(inlineRenderFns.staticRenderFns.map(function (code) {
      return "function(){".concat(code, "}");
    }).join(','), "]}");
  }
}

function genScopedSlots(el, slots, state) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el["for"] || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return slot.slotTargetDynamic || slot["if"] || slot["for"] || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    ;
  }); // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.

  var needsKey = !!el["if"]; // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.

  if (!needsForceUpdate) {
    var parent = el.parent;

    while (parent) {
      if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent["for"]) {
        needsForceUpdate = true;
        break;
      }

      if (parent["if"]) {
        needsKey = true;
      }

      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots).map(function (key) {
    return genScopedSlot(slots[key], state);
  }).join(',');
  return "scopedSlots:_u([".concat(generatedSlots, "]").concat(needsForceUpdate ? ",null,true" : "").concat(!needsForceUpdate && needsKey ? ",null,false,".concat(hash(generatedSlots)) : "", ")");
}

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

function containsSlotChild(el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true;
    }

    return el.children.some(containsSlotChild);
  }

  return false;
}

function genScopedSlot(el, state) {
  var isLegacySyntax = el.attrsMap['slot-scope'];

  if (el["if"] && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null");
  }

  if (el["for"] && !el.forProcessed) {
    return genFor(el, state, genScopedSlot);
  }

  var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
  var fn = "function(".concat(slotScope, "){") + "return ".concat(el.tag === 'template' ? el["if"] && isLegacySyntax ? "(".concat(el["if"], ")?").concat(genChildren(el, state) || 'undefined', ":undefined") : genChildren(el, state) || 'undefined' : genElement(el, state), "}"); // reverse proxy v-slot without scope on this.$slots

  var reverseProxy = slotScope ? "" : ",proxy:true";
  return "{key:".concat(el.slotTarget || "\"default\"", ",fn:").concat(fn).concat(reverseProxy, "}");
}

function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
  var children = el.children;

  if (children.length) {
    var _el = children[0]; // optimize single v-for

    if (children.length === 1 && _el["for"] && _el.tag !== 'template' && _el.tag !== 'slot') {
      var _normalizationType = checkSkip ? state.maybeComponent(_el) ? ",1" : ",0" : "";

      return "".concat((altGenElement || genElement)(_el, state)).concat(_normalizationType);
    }

    var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
    var gen = altGenNode || genNode;
    return "[".concat(children.map(function (c) {
      return gen(c, state);
    }).join(','), "]").concat(normalizationType ? ",".concat(normalizationType) : '');
  }
} // determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed

function getNormalizationType(children, maybeComponent) {
  var res = 0;

  for (var i = 0; i < children.length; i++) {
    var el = children[i];

    if (el.type !== 1) {
      continue;
    }

    if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return needsNormalization(c.block);
    })) {
      res = 2;
      break;
    }

    if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return maybeComponent(c.block);
    })) {
      res = 1;
    }
  }

  return res;
}

function needsNormalization(el) {
  return el["for"] !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  } else if (node.type === 3 && node.isComment) {
    return genComment(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return "_v(".concat(text.type === 2 ? text.expression // no need for () because already wrapped in _s()
  : transformSpecialNewlines(JSON.stringify(text.text)), ")");
}
function genComment(comment) {
  return "_e(".concat(JSON.stringify(comment.text), ")");
}

function genSlot(el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(".concat(slotName).concat(children ? ",function(){return ".concat(children, "}") : '');
  var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
    return {
      // slot props are camelized
      name: camelize(attr.name),
      value: attr.value,
      dynamic: attr.dynamic
    };
  })) : null;
  var bind = el.attrsMap['v-bind'];

  if ((attrs || bind) && !children) {
    res += ",null";
  }

  if (attrs) {
    res += ",".concat(attrs);
  }

  if (bind) {
    res += "".concat(attrs ? '' : ',null', ",").concat(bind);
  }

  return res + ')';
} // componentName is el.component, take it as argument to shun flow's pessimistic refinement


function genComponent(componentName, el, state) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return "_c(".concat(componentName, ",").concat(genData(el, state)).concat(children ? ",".concat(children) : '', ")");
}

function genProps(props) {
  var staticProps = "";
  var dynamicProps = "";

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);

    if (prop.dynamic) {
      dynamicProps += "".concat(prop.name, ",").concat(value, ",");
    } else {
      staticProps += "\"".concat(prop.name, "\":").concat(value, ",");
    }
  }

  staticProps = "{".concat(staticProps.slice(0, -1), "}");

  if (dynamicProps) {
    return "_d(".concat(staticProps, ",[").concat(dynamicProps.slice(0, -1), "])");
  } else {
    return staticProps;
  }
}


function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}

/*  */
var plainStringRE = /^"(?:[^"\\]|\\.)*"$|^'(?:[^'\\]|\\.)*'$/; // let the model AST transform translate v-model into appropriate
// props bindings

function applyModelTransform(el, state) {
  if (el.directives) {
    for (var i = 0; i < el.directives.length; i++) {
      var dir = el.directives[i];

      if (dir.name === 'model') {
        state.directives.model(el, dir, state.warn); // remove value for textarea as its converted to text

        if (el.tag === 'textarea' && el.props) {
          el.props = el.props.filter(function (p) {
            return p.name !== 'value';
          });
        }

        break;
      }
    }
  }
}
function genAttrSegments(attrs) {
  return attrs.map(function (_ref) {
    var name = _ref.name,
        value = _ref.value;
    return genAttrSegment(name, value);
  });
}
function genDOMPropSegments(props, attrs) {
  var segments = [];
  props.forEach(function (_ref2) {
    var name = _ref2.name,
        value = _ref2.value;
    name = propsToAttrMap[name] || name.toLowerCase();

    if (isRenderableAttr(name) && !(attrs && attrs.some(function (a) {
      return a.name === name;
    }))) {
      segments.push(genAttrSegment(name, value));
    }
  });
  return segments;
}

function genAttrSegment(name, value) {
  if (plainStringRE.test(value)) {
    // force double quote
    value = value.replace(/^'|'$/g, '"'); // force enumerated attr to "true"

    if (isEnumeratedAttr(name) && value !== "\"false\"") {
      value = "\"true\"";
    }

    return {
      type: RAW,
      value: isBooleanAttr(name) ? " ".concat(name, "=\"").concat(name, "\"") : value === '""' ? " ".concat(name) : " ".concat(name, "=\"").concat(JSON.parse(value), "\"")
    };
  } else {
    return {
      type: EXPRESSION,
      value: "_ssrAttr(".concat(JSON.stringify(name), ",").concat(value, ")")
    };
  }
}

function genClassSegments(staticClass, classBinding) {
  if (staticClass && !classBinding) {
    return [{
      type: RAW,
      value: " class=\"".concat(JSON.parse(staticClass), "\"")
    }];
  } else {
    return [{
      type: EXPRESSION,
      value: "_ssrClass(".concat(staticClass || 'null', ",").concat(classBinding || 'null', ")")
    }];
  }
}
function genStyleSegments(staticStyle, parsedStaticStyle, styleBinding, vShowExpression) {
  if (staticStyle && !styleBinding && !vShowExpression) {
    return [{
      type: RAW,
      value: " style=".concat(JSON.stringify(staticStyle))
    }];
  } else {
    return [{
      type: EXPRESSION,
      value: "_ssrStyle(".concat(parsedStaticStyle || 'null', ",").concat(styleBinding || 'null', ", ").concat(vShowExpression ? "{ display: (".concat(vShowExpression, ") ? '' : 'none' }") : 'null', ")")
    }];
  }
}

/*  */

var optimizability = {
  FALSE: 0,
  // whole sub tree un-optimizable
  FULL: 1,
  // whole sub tree optimizable
  SELF: 2,
  // self optimizable but has some un-optimizable children
  CHILDREN: 3,
  // self un-optimizable but have fully optimizable children
  PARTIAL: 4 // self un-optimizable with some un-optimizable children

};
var isPlatformReservedTag;
function optimize(root, options) {
  if (!root) return;
  isPlatformReservedTag = options.isReservedTag || no;
  walk(root, true);
}

function walk(node, isRoot) {
  if (isUnOptimizableTree(node)) {
    node.ssrOptimizability = optimizability.FALSE;
    return;
  } // root node or nodes with custom directives should always be a VNode


  var selfUnoptimizable = isRoot || hasCustomDirective(node);

  var check = function check(child) {
    if (child.ssrOptimizability !== optimizability.FULL) {
      node.ssrOptimizability = selfUnoptimizable ? optimizability.PARTIAL : optimizability.SELF;
    }
  };

  if (selfUnoptimizable) {
    node.ssrOptimizability = optimizability.CHILDREN;
  }

  if (node.type === 1) {
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      walk(child);
      check(child);
    }

    if (node.ifConditions) {
      for (var _i = 1, _l = node.ifConditions.length; _i < _l; _i++) {
        var block = node.ifConditions[_i].block;
        walk(block, isRoot);
        check(block);
      }
    }

    if (node.ssrOptimizability == null || !isRoot && (node.attrsMap['v-html'] || node.attrsMap['v-text'])) {
      node.ssrOptimizability = optimizability.FULL;
    } else {
      node.children = optimizeSiblings(node);
    }
  } else {
    node.ssrOptimizability = optimizability.FULL;
  }
}

function optimizeSiblings(el) {
  var children = el.children;
  var optimizedChildren = [];
  var currentOptimizableGroup = [];

  var pushGroup = function pushGroup() {
    if (currentOptimizableGroup.length) {
      optimizedChildren.push({
        type: 1,
        parent: el,
        tag: 'template',
        attrsList: [],
        attrsMap: {},
        rawAttrsMap: {},
        children: currentOptimizableGroup,
        ssrOptimizability: optimizability.FULL
      });
    }

    currentOptimizableGroup = [];
  };

  for (var i = 0; i < children.length; i++) {
    var c = children[i];

    if (c.ssrOptimizability === optimizability.FULL) {
      currentOptimizableGroup.push(c);
    } else {
      // wrap fully-optimizable adjacent siblings inside a template tag
      // so that they can be optimized into a single ssrNode by codegen
      pushGroup();
      optimizedChildren.push(c);
    }
  }

  pushGroup();
  return optimizedChildren;
}

function isUnOptimizableTree(node) {
  if (node.type === 2 || node.type === 3) {
    // text or expression
    return false;
  }

  return isBuiltInTag(node.tag) || // built-in (slot, component)
  !isPlatformReservedTag(node.tag) || // custom component
  !!node.component || // "is" component
  isSelectWithModel(node) // <select v-model> requires runtime inspection
  ;
}

var isBuiltInDir = makeMap('text,html,show,on,bind,model,pre,cloak,once');

function hasCustomDirective(node) {
  return node.type === 1 && node.directives && node.directives.some(function (d) {
    return !isBuiltInDir(d.name);
  });
} // <select v-model> cannot be optimized because it requires a runtime check
// to determine proper selected option


function isSelectWithModel(node) {
  return node.type === 1 && node.tag === 'select' && node.directives != null && node.directives.some(function (d) {
    return d.name === 'model';
  });
}

/*  */

var RAW = 0;
var INTERPOLATION = 1;
var EXPRESSION = 2;
function generate(ast, options) {
  var state = new CodegenState(options);
  var code = ast ? genSSRElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return ".concat(code, "}"),
    staticRenderFns: state.staticRenderFns
  };
}

function genSSRElement(el, state) {
  if (el["for"] && !el.forProcessed) {
    return genFor(el, state, genSSRElement);
  } else if (el["if"] && !el.ifProcessed) {
    return genIf(el, state, genSSRElement);
  } else if (el.tag === 'template' && !el.slotTarget) {
    return el.ssrOptimizability === optimizability.FULL ? genChildrenAsStringNode(el, state) : genSSRChildren(el, state) || 'void 0';
  }

  switch (el.ssrOptimizability) {
    case optimizability.FULL:
      // stringify whole tree
      return genStringElement(el, state);

    case optimizability.SELF:
      // stringify self and check children
      return genStringElementWithChildren(el, state);

    case optimizability.CHILDREN:
      // generate self as VNode and stringify children
      return genNormalElement(el, state, true);

    case optimizability.PARTIAL:
      // generate self as VNode and check children
      return genNormalElement(el, state, false);

    default:
      // bail whole tree
      return genElement(el, state);
  }
}

function genNormalElement(el, state, stringifyChildren) {
  var data = el.plain ? undefined : genData(el, state);
  var children = stringifyChildren ? "[".concat(genChildrenAsStringNode(el, state), "]") : genSSRChildren(el, state, true);
  return "_c('".concat(el.tag, "'").concat(data ? ",".concat(data) : '').concat(children ? ",".concat(children) : '', ")");
}

function genSSRChildren(el, state, checkSkip) {
  return genChildren(el, state, checkSkip, genSSRElement, genSSRNode);
}

function genSSRNode(el, state) {
  return el.type === 1 ? genSSRElement(el, state) : genText(el);
}

function genChildrenAsStringNode(el, state) {
  return el.children.length ? "_ssrNode(".concat(flattenSegments(childrenToSegments(el, state)), ")") : '';
}

function genStringElement(el, state) {
  return "_ssrNode(".concat(elementToString(el, state), ")");
}

function genStringElementWithChildren(el, state) {
  var children = genSSRChildren(el, state, true);
  return "_ssrNode(".concat(flattenSegments(elementToOpenTagSegments(el, state)), ",\"</").concat(el.tag, ">\"").concat(children ? ",".concat(children) : '', ")");
}

function elementToString(el, state) {
  return "(".concat(flattenSegments(elementToSegments(el, state)), ")");
}

function elementToSegments(el, state) {
  // v-for / v-if
  if (el["for"] && !el.forProcessed) {
    el.forProcessed = true;
    return [{
      type: EXPRESSION,
      value: genFor(el, state, elementToString, '_ssrList')
    }];
  } else if (el["if"] && !el.ifProcessed) {
    el.ifProcessed = true;
    return [{
      type: EXPRESSION,
      value: genIf(el, state, elementToString, '"<!---->"')
    }];
  } else if (el.tag === 'template') {
    return childrenToSegments(el, state);
  }

  var openSegments = elementToOpenTagSegments(el, state);
  var childrenSegments = childrenToSegments(el, state);
  var isUnaryTag = state.options.isUnaryTag;
  var close = isUnaryTag && isUnaryTag(el.tag) ? [] : [{
    type: RAW,
    value: "</".concat(el.tag, ">")
  }];
  return openSegments.concat(childrenSegments, close);
}

function elementToOpenTagSegments(el, state) {
  applyModelTransform(el, state);
  var binding;
  var segments = [{
    type: RAW,
    value: "<".concat(el.tag)
  }]; // attrs

  if (el.attrs) {
    segments.push.apply(segments, genAttrSegments(el.attrs));
  } // domProps


  if (el.props) {
    segments.push.apply(segments, genDOMPropSegments(el.props, el.attrs));
  } // v-bind="object"


  if (binding = el.attrsMap['v-bind']) {
    segments.push({
      type: EXPRESSION,
      value: "_ssrAttrs(".concat(binding, ")")
    });
  } // v-bind.prop="object"


  if (binding = el.attrsMap['v-bind.prop']) {
    segments.push({
      type: EXPRESSION,
      value: "_ssrDOMProps(".concat(binding, ")")
    });
  } // class


  if (el.staticClass || el.classBinding) {
    segments.push.apply(segments, genClassSegments(el.staticClass, el.classBinding));
  } // style & v-show


  if (el.staticStyle || el.styleBinding || el.attrsMap['v-show']) {
    segments.push.apply(segments, genStyleSegments(el.attrsMap.style, el.staticStyle, el.styleBinding, el.attrsMap['v-show']));
  } // _scopedId


  if (state.options.scopeId) {
    segments.push({
      type: RAW,
      value: " ".concat(state.options.scopeId)
    });
  }

  segments.push({
    type: RAW,
    value: ">"
  });
  return segments;
}

function childrenToSegments(el, state) {
  var binding;

  if (binding = el.attrsMap['v-html']) {
    return [{
      type: EXPRESSION,
      value: "_s(".concat(binding, ")")
    }];
  }

  if (binding = el.attrsMap['v-text']) {
    return [{
      type: INTERPOLATION,
      value: "_s(".concat(binding, ")")
    }];
  }

  if (el.tag === 'textarea' && (binding = el.attrsMap['v-model'])) {
    return [{
      type: INTERPOLATION,
      value: "_s(".concat(binding, ")")
    }];
  }

  return el.children ? nodesToSegments(el.children, state) : [];
}

function nodesToSegments(children, state) {
  var segments = [];

  for (var i = 0; i < children.length; i++) {
    var c = children[i];

    if (c.type === 1) {
      segments.push.apply(segments, elementToSegments(c, state));
    } else if (c.type === 2) {
      segments.push({
        type: INTERPOLATION,
        value: c.expression
      });
    } else if (c.type === 3) {
      var text = escape(c.text);

      if (c.isComment) {
        text = '<!--' + text + '-->';
      }

      segments.push({
        type: RAW,
        value: text
      });
    }
  }

  return segments;
}

function flattenSegments(segments) {
  var mergedSegments = [];
  var textBuffer = '';

  var pushBuffer = function pushBuffer() {
    if (textBuffer) {
      mergedSegments.push(JSON.stringify(textBuffer));
      textBuffer = '';
    }
  };

  for (var i = 0; i < segments.length; i++) {
    var s = segments[i];

    if (s.type === RAW) {
      textBuffer += s.value;
    } else if (s.type === INTERPOLATION) {
      pushBuffer();
      mergedSegments.push("_ssrEscape(".concat(s.value, ")"));
    } else if (s.type === EXPRESSION) {
      pushBuffer();
      mergedSegments.push("(".concat(s.value, ")"));
    }
  }

  pushBuffer();
  return mergedSegments.join('+');
}

/*  */
// typeof, instanceof and in are allowed

var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names

var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template

function detectErrors(ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode(node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];

        if (value) {
          var range = node.rawAttrsMap[name];

          if (name === 'v-for') {
            checkFor(node, "v-for=\"".concat(value, "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, "".concat(name, "=\"").concat(value, "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, "".concat(name, "=\"").concat(value, "\""), warn, range);
          } else {
            checkExpression(value, "".concat(name, "=\"").concat(value, "\""), warn, range);
          }
        }
      }
    }

    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent(exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);

  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn("avoid using JavaScript unary operator as property name: " + "\"".concat(keywordMatch[0], "\" in expression ").concat(text.trim()), range);
  }

  checkExpression(exp, text, warn, range);
}

function checkFor(node, text, warn, range) {
  checkExpression(node["for"] || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier(ident, type, text, warn, range) {
  if (typeof ident === 'string') {
    try {
      new Function("var ".concat(ident, "=_"));
    } catch (e) {
      warn("invalid ".concat(type, " \"").concat(ident, "\" in expression: ").concat(text.trim()), range);
    }
  }
}

function checkExpression(exp, text, warn, range) {
  try {
    new Function("return ".concat(exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      warn("avoid using JavaScript keyword as property name: " + "\"".concat(keywordMatch[0], "\"\n  Raw expression: ").concat(text.trim()), range);
    } else {
      warn("invalid expression: ".concat(e.message, " in\n\n") + "    ".concat(exp, "\n\n") + "  Raw expression: ".concat(text.trim(), "\n"), range);
    }
  }
}

function checkFunctionParameterExpression(exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn("invalid function parameter expression: ".concat(e.message, " in\n\n") + "    ".concat(exp, "\n\n") + "  Raw expression: ".concat(text.trim(), "\n"), range);
  }
}

/*  */
var range = 2;
function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        res.push("".concat(j + 1).concat(repeat(" ", 3 - String(j + 1).length), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;

        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat(" ", pad) + repeat("^", length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.min(end - count, lineLength);

            res.push("   |  " + repeat("^", _length));
          }

          count += lineLength + 1;
        }
      }

      break;
    }
  }

  return res.join('\n');
}

function repeat(str, n) {
  var result = '';

  if (n > 0) {
    while (true) {
      // eslint-disable-line
      if (n & 1) result += str;
      n >>>= 1;
      if (n <= 0) break;
      str += str;
    }
  }

  return result;
}

/*  */

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({
      err: err,
      code: code
    });
    return noop$1;
  }
}

function createCompileToFunctionFn(compile) {
  var cache = Object.create(null);
  return function compileToFunctions(template, options, vm) {
    options = extend({}, options);
    var warn = options.warn || warn$2;
    delete options.warn;
    /* istanbul ignore if */

    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    } // check cache


    var key = options.delimiters ? String(options.delimiters) + template : template;

    if (cache[key]) {
      return cache[key];
    } // compile


    var compiled = compile(template, options); // check compilation errors/tips

    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn("Error compiling template:\n\n".concat(e.msg, "\n\n") + generateCodeFrame(template, e.start, e.end), vm);
          });
        } else {
          warn("Error compiling template:\n\n".concat(template, "\n\n") + compiled.errors.map(function (e) {
            return "- ".concat(e);
          }).join('\n') + '\n', vm);
        }
      }

      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) {
            return tip(e.msg, vm);
          });
        } else {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }
    } // turn code into functions


    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors);
    }); // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use

    /* istanbul ignore if */

    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn("Failed to generate render function:\n\n" + fnGenErrors.map(function (_ref) {
          var err = _ref.err,
              code = _ref.code;
          return "".concat(err.toString(), " in\n\n").concat(code, "\n");
        }).join('\n'), vm);
      }
    }

    return cache[key] = res;
  };
}

/*  */
function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    function compile(template, options) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function warn(msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function warn(msg, range, tip) {
            var data = {
              msg: msg
            };

            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }

              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }

            (tip ? tips : errors).push(data);
          };
        } // merge custom modules


        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        } // merge custom directives


        if (options.directives) {
          finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
        } // copy other options


        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;
      var compiled = baseCompile(template.trim(), finalOptions);

      {
        detectErrors(compiled.ast, warn);
      }

      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    };
  };
}

/*  */
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
});

/*  */

var _createCompiler = createCompiler(baseOptions),
    compileToFunctions = _createCompiler.compileToFunctions;

/*  */
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.

function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.

function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') continue;
    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, "".concat(nestedIndex || '', "_").concat(i)); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
        }

        res.push(c);
      }
    }
  }

  return res;
}

var ssrHelpers = {
  _ssrEscape: escape,
  _ssrNode: renderStringNode$1,
  _ssrList: renderStringList,
  _ssrAttr: renderAttr,
  _ssrAttrs: renderAttrs,
  _ssrDOMProps: renderDOMProps,
  _ssrClass: renderSSRClass,
  _ssrStyle: renderSSRStyle
}; // 在 Vue 原型上绑定一些 ssr 专用的方法，可以通过 this 来访问这些方法。
// 在服务端 template -> render 函数这一步，会使用这些方法。

function installSSRHelpers(vm) {
  if (vm._ssrNode) {
    return;
  }

  var Vue = vm.constructor;

  while (Vue["super"]) {
    Vue = Vue["super"];
  }

  extend(Vue.prototype, ssrHelpers);

  if (Vue.FunctionalRenderContext) {
    extend(Vue.FunctionalRenderContext.prototype, ssrHelpers);
  }
}

var StringNode = function StringNode(open, close, children, normalizationType) {
  _classCallCheck(this, StringNode);

  this.isString = true;
  this.open = open;
  this.close = close;

  if (children) {
    this.children = normalizationType === 1 ? simpleNormalizeChildren(children) : normalizationType === 2 ? normalizeChildren(children) : children;
  } else {
    this.children = void 0;
  }
};

function renderStringNode$1(open, close, children, normalizationType) {
  return new StringNode(open, close, children, normalizationType);
}

function renderStringList(val, render) {
  var ret = '';
  var i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    for (i = 0, l = val.length; i < l; i++) {
      ret += render(val[i], i);
    }
  } else if (typeof val === 'number') {
    for (i = 0; i < val; i++) {
      ret += render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);

    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret += render(val[key], key, i);
    }
  }

  return ret;
}

function renderAttrs(obj) {
  var res = '';

  for (var key in obj) {
    if (isSSRUnsafeAttr(key)) {
      continue;
    }

    res += renderAttr(key, obj[key]);
  }

  return res;
}

function renderDOMProps(obj) {
  var res = '';

  for (var key in obj) {
    var attr = propsToAttrMap[key] || key.toLowerCase();

    if (isRenderableAttr(attr)) {
      res += renderAttr(attr, obj[key]);
    }
  }

  return res;
}

function renderSSRClass(staticClass, dynamic) {
  var res = renderClass$1(staticClass, dynamic);
  return res === '' ? res : " class=\"".concat(escape(res), "\"");
}

function renderSSRStyle(staticStyle, dynamic, extra) {
  var style = {};
  if (staticStyle) extend(style, staticStyle);
  if (dynamic) extend(style, normalizeStyleBinding(dynamic));
  if (extra) extend(style, extra);
  var res = genStyle(style);
  return res === '' ? res : " style=".concat(JSON.stringify(escape(res)));
}

/* not type checking this file because flow doesn't play well with Proxy */

{
  makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' + 'require' // for Webpack/Browserify
  );

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn$2("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }
}

/*  */
var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) ;
}

/*  */
var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once,
    capture: capture,
    passive: passive
  };
});
function createFnInvoker(fns, vm) {
  function invoker() {
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}
function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
  var name, cur, old, event;

  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
      warn$2("Invalid handler for event \"".concat(event.name, "\": got ") + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */
function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs,
      props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"".concat(keyInLowerCase, "\" is passed to component ") + "".concat(formatComponentName(tag || Ctor), ", but the declared prop name is") + " \"".concat(key, "\". ") + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}

/*  */
var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    warn$2("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn$2('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      "default": children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) applyNS(vnode, ns);
    if (isDef(data)) registerDeepBindings(data);
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data["class"])) {
    traverse(data["class"]);
  }
}

/*  */
/**
 * Runtime helper for rendering v-for lists.
 */

function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}

/*  */
/**
 * Runtime helper for rendering <slot>
 */

function renderSlot(name, fallbackRender, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if (!isObject(bindObject)) {
        warn$2('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}

/*  */
/**
 * Runtime helper for resolving filters
 */

function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }

  return eventKeyCode === undefined;
}

/*  */
/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */

function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      warn$2('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var _loop = function _loop(key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:".concat(key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) {
        _loop(key);
      }
    }
  }

  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__".concat(index), false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */

function markOnce(tree, index, key) {
  markStatic(tree, "__once__".concat(index).concat(key ? "_".concat(key) : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */
function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn$2('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}

/*  */
function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}

/*  */
function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn$2("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.

function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}

/*  */
function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots["default"] || (slots["default"] = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var _name in slots) {
    if (slots[_name].every(isWhitespace)) {
      delete slots[_name];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

/*  */
function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var _key in slots) {
      if (slots[_key] && _key[0] !== '$') {
        res[_key] = normalizeScopedSlot(normalSlots, _key, slots[_key]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var _key2 in normalSlots) {
    if (!(_key2 in res)) {
      res[_key2] = proxyNormalSlot(normalSlots, _key2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function normalized() {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}

/*  */

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}
function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }
}

/*  */
var target;

function add$1(event, fn) {
  target.$on(event, fn);
}

function remove(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add$1, remove, createOnceHandler, vm);
  target = undefined;
}

/*  */
var activeInstance = null;
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) return true;
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}
function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}
function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = "".concat(hook, " hook");

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}

/*  */

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function getNow() {
      return performance.now();
    };
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
}

/*  */
function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') continue;
      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key]["default"];
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else {
          warn$2("Injection \"".concat(key, "\" not found"), vm);
        }
      }
    }

    return result;
  }
}

/*  */
function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor["super"]) {
    var superOptions = resolveConstructorOptions(Ctor["super"]);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {};
      modified[key] = latest[key];
    }
  }

  return modified;
}

/*  */
function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var _this = this;

  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!_this.$slots) {
      normalizeScopedSlots(data.scopedSlots, _this.$slots = resolveSlots(children, parent));
    }

    return _this.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) mergeProps(props, data.attrs);
    if (isDef(data.props)) mergeProps(props, data.props);
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context,
        componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    {
      warn$2("Invalid Component definition: ".concat(String(Ctor)), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options["abstract"])) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory); // Weex specific: invoke recycle-list optimized @render function for

  return vnode;
}
function createComponentInstanceForVnode( // we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook(f1, f2) {
  var merged = function merged(a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */
var warned = Object.create(null);

var warnOnce = function warnOnce(msg) {
  if (!warned[msg]) {
    warned[msg] = true; // eslint-disable-next-line no-console

    console.warn("\n\x1B[31m".concat(msg, "\x1B[39m\n"));
  }
};

var onCompilationError = function onCompilationError(err, vm) {
  var trace = vm ? generateComponentTrace(vm) : '';
  throw new Error("\n\x1B[31m".concat(err).concat(trace, "\x1B[39m\n"));
};

var normalizeRender = function normalizeRender(vm) {
  var _vm$$options = vm.$options,
      render = _vm$$options.render,
      template = _vm$$options.template,
      _scopeId = _vm$$options._scopeId;

  if (isUndef(render)) {
    if (template) {
      var compiled = compileToFunctions(template, {
        scopeId: _scopeId,
        warn: onCompilationError
      }, vm);
      vm.$options.render = compiled.render;
      vm.$options.staticRenderFns = compiled.staticRenderFns;
    } else {
      throw new Error("render function or template not defined in component: ".concat(vm.$options.name || vm.$options._componentTag || 'anonymous'));
    }
  }
};

function waitForServerPrefetch(vm, resolve, reject) {
  var handlers = vm.$options.serverPrefetch;
  /**
   * 如果 serverPrefetch 报错，则会调用两次 done，renderer.renderToString() 的回调会被调用两次。
   * 第一次会给回调传入这里的 try catch 语句 或者 promise catch 捕获的错误，和空的 html 字符串。
   * 第二次会给回调传空的 error 对象，和没有无网络请求下的渲染结果。
   */

  if (isDef(handlers)) {
    if (!Array.isArray(handlers)) handlers = [handlers];

    try {
      var promises = [];

      for (var i = 0, j = handlers.length; i < j; i++) {
        // 由于这里 .call 传入的 this 是 vm，所以 vm 中的 serverPrefetch 函数,
        // 是可以通过 this 访问 vm 对象的。获取到数据后，赋值给 this 上的 data。
        var result = handlers[i].call(vm, vm);

        if (result && typeof result.then === 'function') {
          promises.push(result);
        }
      }

      Promise.all(promises).then(resolve)["catch"](reject);
      return;
    } catch (e) {
      reject(e);
    }
  }

  resolve();
}

function renderNode(node, isRoot, context) {
  // 字符串节点
  if (node.isString) {
    renderStringNode(node, context);
  } // vue 组件节点
  else if (isDef(node.componentOptions)) {
    renderComponent(node, isRoot, context);
  } // html 标签
  else if (isDef(node.tag)) {
    renderElement(node, isRoot, context);
  } // 注释节点
  else if (isTrue(node.isComment)) {
    // 注释节点有可能是一个异步组件
    if (isDef(node.asyncFactory)) {
      // 处理异步组件
      renderAsyncComponent(node, isRoot, context);
    } else {
      // 如果不是异步组件，那么就写入注释。
      context.write("<!--".concat(node.text, "-->"), context.next);
    }
  } // 如果以上节点类型都没有命中，那么就将 text 写入。
  else {
    context.write(node.raw ? node.text : escape(String(node.text)), context.next);
  }
}

function registerComponentForCache(options, write) {
  // exposed by vue-loader, need to call this if cache hit because
  // component lifecycle hooks will not be called.
  var register = options._ssrRegister;

  if (write.caching && isDef(register)) {
    write.componentBuffer[write.componentBuffer.length - 1].add(register);
  }

  return register;
}

function renderComponent(node, isRoot, context) {
  var write = context.write,
      next = context.next,
      userContext = context.userContext; // check cache hit

  var Ctor = node.componentOptions.Ctor;
  var getKey = Ctor.options.serverCacheKey;
  var name = Ctor.options.name;
  var cache = context.cache;
  var registerComponent = registerComponentForCache(Ctor.options, write); // 如果组件有定义 serverCacheKey，且有 name 属性，那么走组件缓存逻辑。

  if (isDef(getKey) && isDef(cache) && isDef(name)) {
    var rawKey = getKey(node.componentOptions.propsData); // 如果 serverCacheKey 的返回值是 false，那么不走缓存逻辑。

    if (rawKey === false) {
      renderComponentInner(node, isRoot, context);
      return;
    } // 将 serverCacheKey 的返回值与 name 拼在一起。
    // 这也是为什么 vue 强制要求，想要缓存，必须要提供 name 属性的原因。
    // 为了隔离不同的组件的cache。


    var key = name + '::' + rawKey;
    var has = context.has,
        get = context.get; // 兼容 cache 对象没有提供 has 的情况

    if (isDef(has)) {
      has(key, function (hit) {
        // 如果命中了缓存，则直接写入缓存值。
        if (hit === true && isDef(get)) {
          get(key, function (res) {
            if (isDef(registerComponent)) {
              registerComponent(userContext);
            }

            res.components.forEach(function (register) {
              return register(userContext);
            });
            write(res.html, next);
          });
        } else {
          // 如果没有命中缓存，则渲染组件，并设置缓存。
          renderComponentWithCache(node, isRoot, key, context);
        }
      });
    } else if (isDef(get)) {
      // 逻辑与上一个 if 分支相同。
      get(key, function (res) {
        if (isDef(res)) {
          if (isDef(registerComponent)) {
            registerComponent(userContext);
          }

          res.components.forEach(function (register) {
            return register(userContext);
          });
          write(res.html, next);
        } else {
          renderComponentWithCache(node, isRoot, key, context);
        }
      });
    }
  } else {
    // 如果组件有定义 serverCacheKey，但是没有 name 属性或者 cache 的实现，
    // 那么发出一个警告，然后跳过缓存逻辑，像普通组件一样渲染。
    if (isDef(getKey) && isUndef(cache)) {
      warnOnce("[vue-server-renderer] Component ".concat(Ctor.options.name || '(anonymous)', " implemented serverCacheKey, ") + 'but no cache was provided to the renderer.');
    }

    if (isDef(getKey) && isUndef(name)) {
      warnOnce("[vue-server-renderer] Components that implement \"serverCacheKey\" " + "must also define a unique \"name\" option.");
    }

    renderComponentInner(node, isRoot, context);
  }
}

function renderComponentWithCache(node, isRoot, key, context) {
  var write = context.write; // 将 caching flag 置为 true，意味着接下来的 render 结果都是需要缓存的。

  write.caching = true;
  var buffer = write.cacheBuffer; // 记录这个组件的缓存，在 cacheBuffer 的 index，方便后续读取对应缓存。

  var bufferIndex = buffer.push('') - 1;
  var componentBuffer = write.componentBuffer;
  componentBuffer.push(new Set());
  context.renderStates.push({
    type: 'ComponentWithCache',
    key: key,
    buffer: buffer,
    bufferIndex: bufferIndex,
    componentBuffer: componentBuffer
  });
  renderComponentInner(node, isRoot, context);
}

function renderComponentInner(node, isRoot, context) {
  // 把前一个活跃组件存起来，这样在这个组件 render 完成后，
  // 可以将 activeInstance 重置为 prevActive。
  var prevActive = context.activeInstance; // expose userContext on vnode

  node.ssrContext = context.userContext;
  var child = context.activeInstance = createComponentInstanceForVnode(node, // 这是 child 变量中的 parent 值
  context.activeInstance); // 抹平 template 与 render 函数的差异

  normalizeRender(child);

  var resolve = function resolve() {
    var childNode = child._render();

    childNode.parent = node;
    context.renderStates.push({
      type: 'Component',
      prevActive: prevActive
    });
    renderNode(childNode, isRoot, context);
  };

  var reject = context.done;
  waitForServerPrefetch(child, resolve, reject);
}

function renderAsyncComponent(node, isRoot, context) {
  var factory = node.asyncFactory; // 在 factory 构造结束后的逻辑

  var resolve = function resolve(comp) {
    if (comp.__esModule && comp["default"]) {
      comp = comp["default"];
    }

    var _node$asyncMeta = node.asyncMeta,
        data = _node$asyncMeta.data,
        children = _node$asyncMeta.children,
        tag = _node$asyncMeta.tag;
    var nodeContext = node.asyncMeta.context;
    var resolvedNode = createComponent(comp, data, nodeContext, children, tag);

    if (resolvedNode) {
      if (resolvedNode.componentOptions) {
        // 如果是组件，走组件 render 逻辑
        renderComponent(resolvedNode, isRoot, context);
      } else if (!Array.isArray(resolvedNode)) {
        // single return node from functional component
        renderNode(resolvedNode, isRoot, context);
      } else {
        // multiple return nodes from functional component
        // 如果是一个数组，那么就入栈
        context.renderStates.push({
          type: 'Fragment',
          children: resolvedNode,
          rendered: 0,
          total: resolvedNode.length
        }); // 然后继续渲染它的 children

        context.next();
      }
    } else {
      // 如果是无效的组件，那么写一个空的注释，然后继续渲染下一个组件。
      context.write("<!---->", context.next);
    }
  };

  if (factory.resolved) {
    resolve(factory.resolved);
    return;
  }

  var reject = context.done; // 调用 factory 函数来产生一个 vue 组件，然后调用 resolve 函数。

  var res;

  try {
    res = factory(resolve, reject);
  } catch (e) {
    reject(e);
  }

  if (res) {
    if (typeof res.then === 'function') {
      res.then(resolve, reject)["catch"](reject);
    } else {
      // new syntax in 2.3
      var comp = res.component;

      if (comp && typeof comp.then === 'function') {
        comp.then(resolve, reject)["catch"](reject);
      }
    }
  }
}

function renderStringNode(el, context) {
  var write = context.write,
      next = context.next;

  if (isUndef(el.children) || el.children.length === 0) {
    write(el.open + (el.close || ''), next);
  } else {
    var children = el.children;
    context.renderStates.push({
      type: 'Element',
      children: children,
      rendered: 0,
      total: children.length,
      endTag: el.close
    });
    write(el.open, next);
  }
}

function renderElement(el, isRoot, context) {
  var write = context.write,
      next = context.next; // 如果是根节点，那么在节点上加上 ssr 渲染标记。

  if (isTrue(isRoot)) {
    if (!el.data) el.data = {};
    if (!el.data.attrs) el.data.attrs = {};
    el.data.attrs[SSR_ATTR] = 'true';
  }

  if (el.fnOptions) {
    registerComponentForCache(el.fnOptions, write);
  } // 渲染起始标签，包含 指令、class、style 等各种逻辑。


  var startTag = renderStartingTag(el, context);
  var endTag = "</".concat(el.tag, ">"); // 如果是自闭合标签，那么只需要写入开始标签即可。

  if (context.isUnaryTag(el.tag)) {
    write(startTag, next);
  } // 如果不是自闭合标签，但是没有 children，那么写入开始+结束标签。
  else if (isUndef(el.children) || el.children.length === 0) {
    write(startTag + endTag, next);
  } // 如果有 children，那么推入 renderStates，然后渲染该标签的 children。
  else {
    var children = el.children;
    context.renderStates.push({
      type: 'Element',
      children: children,
      rendered: 0,
      total: children.length,
      endTag: endTag
    });
    write(startTag, next);
  }
}

function hasAncestorData(node) {
  var parentNode = node.parent;
  return isDef(parentNode) && (isDef(parentNode.data) || hasAncestorData(parentNode));
}

function getVShowDirectiveInfo(node) {
  var dir;
  var tmp;

  while (isDef(node)) {
    if (node.data && node.data.directives) {
      tmp = node.data.directives.find(function (dir) {
        return dir.name === 'show';
      });

      if (tmp) {
        dir = tmp;
      }
    }

    node = node.parent;
  }

  return dir;
} // 渲染起始标签，包含指令、class、style等各种逻辑。


function renderStartingTag(node, context) {
  var markup = "<".concat(node.tag);
  var directives = context.directives,
      modules = context.modules; // construct synthetic data for module processing
  // because modules like style also produce code by parent VNode data

  if (isUndef(node.data) && hasAncestorData(node)) {
    node.data = {};
  }

  if (isDef(node.data)) {
    // vue 指令
    var dirs = node.data.directives;

    if (dirs) {
      for (var i = 0; i < dirs.length; i++) {
        var name = dirs[i].name;

        if (name !== 'show') {
          var dirRenderer = resolveAsset(context, 'directives', name);

          if (dirRenderer) {
            // directives mutate the node's data
            // which then gets rendered by modules
            dirRenderer(node, dirs[i]);
          }
        }
      }
    } // v-show 逻辑


    var vshowDirectiveInfo = getVShowDirectiveInfo(node);

    if (vshowDirectiveInfo) {
      directives.show(node, vshowDirectiveInfo);
    } // modules 函数调用


    for (var _i = 0; _i < modules.length; _i++) {
      var res = modules[_i](node);

      if (res) {
        markup += res;
      }
    }
  } // attach scoped CSS ID


  var scopeId;
  var activeInstance = context.activeInstance;

  if (isDef(activeInstance) && activeInstance !== node.context && isDef(scopeId = activeInstance.$options._scopeId)) {
    markup += " ".concat(scopeId);
  }

  if (isDef(node.fnScopeId)) {
    markup += " ".concat(node.fnScopeId);
  } else {
    while (isDef(node)) {
      if (isDef(scopeId = node.context.$options._scopeId)) {
        markup += " ".concat(scopeId);
      }

      node = node.parent;
    }
  }

  return markup + '>';
}

function createRenderFunction(modules, directives, isUnaryTag, cache) {
  return function render(component, write, // userContext 包括用户传入的希望替换 html 模板中的内容，
  // 但也绑定了 templateRenderer 中的 html 模板 render 方法，比如 renderScripts, renderStyle 等。
  userContext, done) {
    warned = Object.create(null);
    var context = new RenderContext({
      activeInstance: component,
      userContext: userContext,
      write: write,
      // 这个 done 不是用户传入的回调，而是 render 函数的回调。
      // render 函数的回调里面才会去调用用户传入的回调。
      done: done,
      renderNode: renderNode,
      isUnaryTag: isUnaryTag,
      modules: modules,
      directives: directives,
      cache: cache
    });
    installSSRHelpers(component); // 如果用户包含 template 而不含 render 函数，
    // 那么将 template 编译程 render 函数。
    // 如果 component 中使用 template 而不是 render 函数，
    // 那么这一步将使用 SSRHElpers 中的函数。

    normalizeRender(component);

    var resolve = function resolve() {
      renderNode(component._render(), true, context);
    }; // 在获取服务端数据后，再调用 resolve，开始 render node。


    waitForServerPrefetch(component, resolve, done);
  };
}

/*  */
var isJS = function isJS(file) {
  return /\.js(\?[^.]+)?$/.test(file);
};
var isCSS = function isCSS(file) {
  return /\.css(\?[^.]+)?$/.test(file);
};
function createPromiseCallback() {
  var resolve, reject;
  var promise = new Promise(function (_resolve, _reject) {
    resolve = _resolve;
    reject = _reject;
  });

  var cb = function cb(err, res) {
    if (err) return reject(err);
    resolve(res || '');
  };

  return {
    promise: promise,
    cb: cb
  };
}

/*  */
var Transform = require('stream').Transform;

var TemplateStream = /*#__PURE__*/function (_Transform) {
  _inherits(TemplateStream, _Transform);

  var _super = _createSuper(TemplateStream);

  function TemplateStream(renderer, template, context) {
    var _this;

    _classCallCheck(this, TemplateStream);

    _this = _super.call(this);
    _this.started = false;
    _this.renderer = renderer;
    _this.template = template;
    _this.context = context || {};
    _this.inject = renderer.inject;
    return _this;
  }

  _createClass(TemplateStream, [{
    key: "_transform",
    value: function _transform(data, encoding, done) {
      if (!this.started) {
        this.emit('beforeStart');
        this.start();
      }

      this.push(data);
      done();
    }
  }, {
    key: "start",
    value: function start() {
      this.started = true;
      this.push(this.template.head(this.context));

      if (this.inject) {
        // inline server-rendered head meta information
        if (this.context.head) {
          this.push(this.context.head);
        } // inline preload/prefetch directives for initial/async chunks


        var links = this.renderer.renderResourceHints(this.context);

        if (links) {
          this.push(links);
        } // CSS files and inline server-rendered CSS collected by vue-style-loader


        var styles = this.renderer.renderStyles(this.context);

        if (styles) {
          this.push(styles);
        }
      }

      this.push(this.template.neck(this.context));
    }
  }, {
    key: "_flush",
    value: function _flush(done) {
      this.emit('beforeEnd');

      if (this.inject) {
        // inline initial store state
        var state = this.renderer.renderState(this.context);

        if (state) {
          this.push(state);
        } // embed scripts needed


        var scripts = this.renderer.renderScripts(this.context);

        if (scripts) {
          this.push(scripts);
        }
      }

      this.push(this.template.tail(this.context));
      done();
    }
  }]);

  return TemplateStream;
}(Transform);

/*  */
var compile = require('lodash.template');

var compileOptions = {
  escape: /{{([^{][\s\S]+?[^}])}}/g,
  interpolate: /{{{([\s\S]+?)}}}/g
};
function parseTemplate(template) {
  var contentPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '<!--vue-ssr-outlet-->';

  if (_typeof(template) === 'object') {
    return template;
  }

  var i = template.indexOf('</head>');
  var j = template.indexOf(contentPlaceholder);

  if (j < 0) {
    throw new Error("Content placeholder not found in template.");
  }

  if (i < 0) {
    i = template.indexOf('<body>');

    if (i < 0) {
      i = j;
    }
  }

  return {
    head: compile(template.slice(0, i), compileOptions),
    neck: compile(template.slice(i, j), compileOptions),
    tail: compile(template.slice(j + contentPlaceholder.length), compileOptions)
  };
}

/*  */

/**
 * Creates a mapper that maps components used during a server-side render
 * to async chunk files in the client-side build, so that we can inline them
 * directly in the rendered HTML to avoid waterfall requests.
 */
function createMapper(clientManifest) {
  var map = createMap(clientManifest); // map server-side moduleIds to client-side files

  return function mapper(moduleIds) {
    var res = new Set();

    for (var i = 0; i < moduleIds.length; i++) {
      var mapped = map.get(moduleIds[i]);

      if (mapped) {
        for (var j = 0; j < mapped.length; j++) {
          res.add(mapped[j]);
        }
      }
    }

    return Array.from(res);
  };
}

function createMap(clientManifest) {
  var map = new Map();
  Object.keys(clientManifest.modules).forEach(function (id) {
    map.set(id, mapIdToFile(id, clientManifest));
  });
  return map;
}

function mapIdToFile(id, clientManifest) {
  var files = [];
  var fileIndices = clientManifest.modules[id];

  if (fileIndices) {
    fileIndices.forEach(function (index) {
      var file = clientManifest.all[index]; // only include async files or non-js, non-css assets

      if (file && (clientManifest.async.indexOf(file) > -1 || !/\.(js|css)($|\?)/.test(file))) {
        files.push(file);
      }
    });
  }

  return files;
}

/*  */
var path$2 = require('path');

var serialize = require('serialize-javascript');

var TemplateRenderer = /*#__PURE__*/function () {
  function TemplateRenderer(options) {
    _classCallCheck(this, TemplateRenderer);

    this.options = options;
    this.inject = options.inject !== false; // if no template option is provided, the renderer is created
    // as a utility object for rendering assets like preload links and scripts.

    var template = options.template; // 将 template 转换为三个 head neck tail 三个部分

    this.parsedTemplate = template ? typeof template === 'string' ? parseTemplate(template) : template : null; // function used to serialize initial state JSON

    this.serialize = options.serializer || function (state) {
      return serialize(state, {
        isJSON: true
      });
    }; // extra functionality with client manifest


    if (options.clientManifest) {
      var clientManifest = this.clientManifest = options.clientManifest; // ensure publicPath ends with /

      this.publicPath = clientManifest.publicPath === '' ? '' : clientManifest.publicPath.replace(/([^\/])$/, '$1/'); // preload/prefetch directives

      this.preloadFiles = (clientManifest.initial || []).map(normalizeFile);
      this.prefetchFiles = (clientManifest.async || []).map(normalizeFile); // initial async chunk mapping

      this.mapFiles = createMapper(clientManifest);
    }
  } // 将 renderStyles 等几个函数，绑定到 context 上。
  // 此处的 context 是用户传入的，用于替换模板中的 {{{}}} 的上下文。


  _createClass(TemplateRenderer, [{
    key: "bindRenderFns",
    value: function bindRenderFns(context) {
      var renderer = this;
      ['ResourceHints', 'State', 'Scripts', 'Styles'].forEach(function (type) {
        context["render".concat(type)] = renderer["render".concat(type)].bind(renderer, context);
      }); // also expose getPreloadFiles, useful for HTTP/2 push

      context.getPreloadFiles = renderer.getPreloadFiles.bind(renderer, context);
    } // 将所有零散 html 字符串，拼接成最终输出的字符串。

  }, {
    key: "render",
    value: function render(content, context) {
      var template = this.parsedTemplate;

      if (!template) {
        throw new Error('render cannot be called without a template.');
      }

      context = context || {};

      if (typeof template === 'function') {
        return template(content, context);
      }

      if (this.inject) {
        return template.head(context) + (context.head || '') + this.renderResourceHints(context) + this.renderStyles(context) + template.neck(context) + content + this.renderState(context) + this.renderScripts(context) + template.tail(context);
      } else {
        return template.head(context) + template.neck(context) + content + template.tail(context);
      }
    }
  }, {
    key: "renderStyles",
    value: function renderStyles(context) {
      var _this = this;

      var initial = this.preloadFiles || [];
      var async = this.getUsedAsyncFiles(context) || [];
      var cssFiles = initial.concat(async).filter(function (_ref) {
        var file = _ref.file;
        return isCSS(file);
      });
      return (// render links for css files
        (cssFiles.length ? cssFiles.map(function (_ref2) {
          var file = _ref2.file;
          return "<link rel=\"stylesheet\" href=\"".concat(_this.publicPath).concat(file, "\">");
        }).join('') : '') + ( // context.styles is a getter exposed by vue-style-loader which contains
        // the inline component styles collected during SSR
        context.styles || '')
      );
    } // preload + prefetch

  }, {
    key: "renderResourceHints",
    value: function renderResourceHints(context) {
      return this.renderPreloadLinks(context) + this.renderPrefetchLinks(context);
    }
  }, {
    key: "getPreloadFiles",
    value: function getPreloadFiles(context) {
      var usedAsyncFiles = this.getUsedAsyncFiles(context);

      if (this.preloadFiles || usedAsyncFiles) {
        return (this.preloadFiles || []).concat(usedAsyncFiles || []);
      } else {
        return [];
      }
    } // 拼接 preload link

  }, {
    key: "renderPreloadLinks",
    value: function renderPreloadLinks(context) {
      var _this2 = this;

      var files = this.getPreloadFiles(context);
      var shouldPreload = this.options.shouldPreload;

      if (files.length) {
        return files.map(function (_ref3) {
          var file = _ref3.file,
              extension = _ref3.extension,
              fileWithoutQuery = _ref3.fileWithoutQuery,
              asType = _ref3.asType;
          var extra = ''; // by default, we only preload scripts or css

          if (!shouldPreload && asType !== 'script' && asType !== 'style') {
            return '';
          } // user wants to explicitly control what to preload


          if (shouldPreload && !shouldPreload(fileWithoutQuery, asType)) {
            return '';
          }

          if (asType === 'font') {
            extra = " type=\"font/".concat(extension, "\" crossorigin");
          }

          return "<link rel=\"preload\" href=\"".concat(_this2.publicPath).concat(file, "\"").concat(asType !== '' ? " as=\"".concat(asType, "\"") : '').concat(extra, ">");
        }).join('');
      } else {
        return '';
      }
    }
  }, {
    key: "renderPrefetchLinks",
    value: function renderPrefetchLinks(context) {
      var _this3 = this;

      var shouldPrefetch = this.options.shouldPrefetch;

      if (this.prefetchFiles) {
        var usedAsyncFiles = this.getUsedAsyncFiles(context);

        var alreadyRendered = function alreadyRendered(file) {
          return usedAsyncFiles && usedAsyncFiles.some(function (f) {
            return f.file === file;
          });
        };

        return this.prefetchFiles.map(function (_ref4) {
          var file = _ref4.file,
              fileWithoutQuery = _ref4.fileWithoutQuery,
              asType = _ref4.asType;

          if (shouldPrefetch && !shouldPrefetch(fileWithoutQuery, asType)) {
            return '';
          }

          if (alreadyRendered(file)) {
            return '';
          }

          return "<link rel=\"prefetch\" href=\"".concat(_this3.publicPath).concat(file, "\">");
        }).join('');
      } else {
        return '';
      }
    } // 服务端获取的接口数据 ？

  }, {
    key: "renderState",
    value: function renderState(context, options) {
      var _ref5 = options || {},
          _ref5$contextKey = _ref5.contextKey,
          contextKey = _ref5$contextKey === void 0 ? 'state' : _ref5$contextKey,
          _ref5$windowKey = _ref5.windowKey,
          windowKey = _ref5$windowKey === void 0 ? '__INITIAL_STATE__' : _ref5$windowKey;

      var state = this.serialize(context[contextKey]);
      var autoRemove = '';
      var nonceAttr = context.nonce ? " nonce=\"".concat(context.nonce, "\"") : '';
      return context[contextKey] ? "<script".concat(nonceAttr, ">window.").concat(windowKey, "=").concat(state).concat(autoRemove, "</script>") : '';
    } // <script> 标签

  }, {
    key: "renderScripts",
    value: function renderScripts(context) {
      var _this4 = this;

      if (this.clientManifest) {
        var initial = this.preloadFiles.filter(function (_ref6) {
          var file = _ref6.file;
          return isJS(file);
        });
        var async = (this.getUsedAsyncFiles(context) || []).filter(function (_ref7) {
          var file = _ref7.file;
          return isJS(file);
        });
        var needed = [initial[0]].concat(async, initial.slice(1));
        return needed.map(function (_ref8) {
          var file = _ref8.file;
          return "<script src=\"".concat(_this4.publicPath).concat(file, "\" defer></script>");
        }).join('');
      } else {
        return '';
      }
    }
  }, {
    key: "getUsedAsyncFiles",
    value: function getUsedAsyncFiles(context) {
      if (!context._mappedFiles && context._registeredComponents && this.mapFiles) {
        var registered = Array.from(context._registeredComponents);
        context._mappedFiles = this.mapFiles(registered).map(normalizeFile);
      }

      return context._mappedFiles;
    } // create a transform stream

  }, {
    key: "createStream",
    value: function createStream(context) {
      if (!this.parsedTemplate) {
        throw new Error('createStream cannot be called without a template.');
      }

      return new TemplateStream(this, this.parsedTemplate, context || {});
    }
  }]);

  return TemplateRenderer;
}();

function normalizeFile(file) {
  var withoutQuery = file.replace(/\?.*/, '');
  var extension = path$2.extname(withoutQuery).slice(1);
  return {
    file: file,
    extension: extension,
    fileWithoutQuery: withoutQuery,
    asType: getPreloadType(extension)
  };
}

function getPreloadType(ext) {
  if (ext === 'js') {
    return 'script';
  } else if (ext === 'css') {
    return 'style';
  } else if (/jpe?g|png|svg|gif|webp|ico/.test(ext)) {
    return 'image';
  } else if (/woff2?|ttf|otf|eot/.test(ext)) {
    return 'font';
  } else {
    // not exhausting all possibilities here, but above covers common cases
    return '';
  }
}

/*  */
function createRenderer$1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$modules = _ref.modules,
      modules = _ref$modules === void 0 ? [] : _ref$modules,
      _ref$directives = _ref.directives,
      directives = _ref$directives === void 0 ? {} : _ref$directives,
      _ref$isUnaryTag = _ref.isUnaryTag,
      isUnaryTag = _ref$isUnaryTag === void 0 ? function () {
    return false;
  } : _ref$isUnaryTag,
      template = _ref.template,
      inject = _ref.inject,
      cache = _ref.cache,
      shouldPreload = _ref.shouldPreload,
      shouldPrefetch = _ref.shouldPrefetch,
      clientManifest = _ref.clientManifest,
      serializer = _ref.serializer;

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
  var render = createRenderFunction(modules, directives, isUnaryTag, cache); // 模版渲染器，作用是将 vnode 渲染的结果和 html 模板进行拼接，最终生成返回给浏览器的内容。

  var templateRenderer = new TemplateRenderer({
    template: template,
    inject: inject,
    shouldPreload: shouldPreload,
    shouldPrefetch: shouldPrefetch,
    clientManifest: clientManifest,
    serializer: serializer
  });
  return {
    renderToString: function renderToString(component, context, cb) {
      if (typeof context === 'function') {
        cb = context;
        context = {};
      } // context 对象包含用户自定义的，需要在 html 模板上替换的变量。


      if (context) {
        templateRenderer.bindRenderFns(context);
      } // 抹平 callback 和 promise 两种方式的区别。如果用户希望采用 promise 方式，
      // 那么创建一个 promise, 并创建一个 callback，在 callback 中调用 resolve 方法。
      // 所以在后续的处理中，无论是 promise 还是回调，只要调用 cb()，就可以将结果返回给用户。


      var promise;

      if (!cb) {
        var _createPromiseCallbac = createPromiseCallback();

        promise = _createPromiseCallbac.promise;
        cb = _createPromiseCallbac.cb;
      } // vnode 渲染结果存储变量，不包含 html 模板内容。


      var result = ''; // 创建一个 write 函数，将 ssr 数据写入 result 中。
      // 第二个参数 cb 是一个 onError 函数。

      var write = createWriteFunction(function (text) {
        result += text;
        return false;
      }, cb);

      try {
        render(component, write, context, function (err) {
          if (err) {
            return cb(err);
          }

          if (context && context.rendered) {
            context.rendered(context);
          } // 如果用户传入了模板，那么根据模板，进行渲染。


          if (template) {
            try {
              var res = templateRenderer.render(result, context); // 如果 res 是 Promise

              if (typeof res !== 'string') {
                res.then(function (html) {
                  return cb(null, html);
                })["catch"](cb);
              } else {
                // 如果 res 是 string，就直接调用 cb 返回。
                cb(null, res);
              }
            } catch (e) {
              cb(e);
            }
          } else {
            // 如果没有模板，就直接返回 vnode 渲染的结果。
            cb(null, result);
          }
        });
      } catch (e) {
        cb(e);
      }

      return promise;
    },
    renderToStream: function renderToStream(component, context) {
      if (context) {
        templateRenderer.bindRenderFns(context);
      }

      var renderStream = new RenderStream(function (write, done) {
        render(component, write, context, done);
      });

      if (!template) {
        if (context && context.rendered) {
          var rendered = context.rendered;
          renderStream.once('beforeEnd', function () {
            rendered(context);
          });
        }

        return renderStream;
      } else if (typeof template === 'function') {
        throw new Error("function template is only supported in renderToString.");
      } else {
        var templateStream = templateRenderer.createStream(context);
        renderStream.on('error', function (err) {
          templateStream.emit('error', err);
        });
        renderStream.pipe(templateStream);

        if (context && context.rendered) {
          var _rendered = context.rendered;
          renderStream.once('beforeEnd', function () {
            _rendered(context);
          });
        }

        return templateStream;
      }
    }
  };
}

var vm = require('vm');

var path$1 = require('path');

var resolve = require('resolve');

var NativeModule = require('module');

function createSandbox(context) {
  var sandbox = {
    Buffer: Buffer,
    console: console,
    process: process,
    setTimeout: setTimeout,
    setInterval: setInterval,
    setImmediate: setImmediate,
    clearTimeout: clearTimeout,
    clearInterval: clearInterval,
    clearImmediate: clearImmediate,
    __VUE_SSR_CONTEXT__: context
  };
  sandbox.global = sandbox;
  return sandbox;
}

function compileModule(files, basedir, runInNewContext) {
  var compiledScripts = {};
  var resolvedModules = {};

  function getCompiledScript(filename) {
    if (compiledScripts[filename]) {
      return compiledScripts[filename];
    }

    var code = files[filename];
    var wrapper = NativeModule.wrap(code);
    var script = new vm.Script(wrapper, {
      filename: filename,
      displayErrors: true
    });
    compiledScripts[filename] = script;
    return script;
  }

  function evaluateModule(filename, sandbox) {
    var evaluatedFiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (evaluatedFiles[filename]) {
      return evaluatedFiles[filename];
    }

    var script = getCompiledScript(filename);
    var compiledWrapper = runInNewContext === false ? script.runInThisContext() : script.runInNewContext(sandbox);
    var m = {
      exports: {}
    };

    var r = function r(file) {
      file = path$1.posix.join('.', file);

      if (files[file]) {
        return evaluateModule(file, sandbox, evaluatedFiles);
      } else if (basedir) {
        return require(resolvedModules[file] || (resolvedModules[file] = resolve.sync(file, {
          basedir: basedir
        })));
      } else {
        return require(file);
      }
    };

    compiledWrapper.call(m.exports, m.exports, r, m);
    var res = Object.prototype.hasOwnProperty.call(m.exports, 'default') ? m.exports["default"] : m.exports;
    evaluatedFiles[filename] = res;
    return res;
  }

  return evaluateModule;
}

function deepClone(val) {
  if (isPlainObject(val)) {
    var res = {};

    for (var key in val) {
      res[key] = deepClone(val[key]);
    }

    return res;
  } else if (Array.isArray(val)) {
    return val.slice();
  } else {
    return val;
  }
}

function createBundleRunner(entry, files, basedir, runInNewContext) {
  var evaluate = compileModule(files, basedir, runInNewContext);

  if (runInNewContext !== false && runInNewContext !== 'once') {
    // new context mode: creates a fresh context and re-evaluate the bundle
    // on each render. Ensures entire application state is fresh for each
    // render, but incurs extra evaluation cost.
    return function () {
      var userContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve) {
        userContext._registeredComponents = new Set();
        var res = evaluate(entry, createSandbox(userContext));
        resolve(typeof res === 'function' ? res(userContext) : res);
      });
    };
  } else {
    // direct mode: instead of re-evaluating the whole bundle on
    // each render, it simply calls the exported function. This avoids the
    // module evaluation costs but requires the source code to be structured
    // slightly differently.
    var runner; // lazy creation so that errors can be caught by user

    var initialContext;
    return function () {
      var userContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve) {
        if (!runner) {
          var sandbox = runInNewContext === 'once' ? createSandbox() : global; // the initial context is only used for collecting possible non-component
          // styles injected by vue-style-loader.

          initialContext = sandbox.__VUE_SSR_CONTEXT__ = {};
          runner = evaluate(entry, sandbox); // On subsequent renders, __VUE_SSR_CONTEXT__ will not be available
          // to prevent cross-request pollution.

          delete sandbox.__VUE_SSR_CONTEXT__;

          if (typeof runner !== 'function') {
            throw new Error('bundle export should be a function when using ' + '{ runInNewContext: false }.');
          }
        }

        userContext._registeredComponents = new Set(); // vue-style-loader styles imported outside of component lifecycle hooks

        if (initialContext._styles) {
          userContext._styles = deepClone(initialContext._styles); // #6353 ensure "styles" is exposed even if no styles are injected
          // in component lifecycles.
          // the renderStyles fn is exposed by vue-style-loader >= 3.0.3

          var renderStyles = initialContext._renderStyles;

          if (renderStyles) {
            Object.defineProperty(userContext, 'styles', {
              enumerable: true,
              get: function get() {
                return renderStyles(userContext._styles);
              }
            });
          }
        }

        resolve(runner(userContext));
      });
    };
  }
}

/*  */
var SourceMapConsumer = require('source-map').SourceMapConsumer;

var filenameRE = /\(([^)]+\.js):(\d+):(\d+)\)$/;
function createSourceMapConsumers(rawMaps) {
  var maps = {};
  Object.keys(rawMaps).forEach(function (file) {
    maps[file] = new SourceMapConsumer(rawMaps[file]);
  });
  return maps;
}
function rewriteErrorTrace(e, mapConsumers) {
  if (e && typeof e.stack === 'string') {
    e.stack = e.stack.split('\n').map(function (line) {
      return rewriteTraceLine(line, mapConsumers);
    }).join('\n');
  }
}

function rewriteTraceLine(trace, mapConsumers) {
  var m = trace.match(filenameRE);
  var map = m && mapConsumers[m[1]];

  if (m != null && map) {
    var originalPosition = map.originalPositionFor({
      line: Number(m[2]),
      column: Number(m[3])
    });

    if (originalPosition.source != null) {
      var source = originalPosition.source,
          line = originalPosition.line,
          column = originalPosition.column;
      var mappedPosition = "(".concat(source.replace(/^webpack:\/\/\//, ''), ":").concat(String(line), ":").concat(String(column), ")");
      return trace.replace(filenameRE, mappedPosition);
    } else {
      return trace;
    }
  } else {
    return trace;
  }
}

var fs = require('fs');

var path = require('path');

var PassThrough = require('stream').PassThrough;

var INVALID_MSG = 'Invalid server-rendering bundle format. Should be a string ' + 'or a bundle Object of type:\n\n' + "{\n  entry: string;\n  files: { [filename: string]: string; };\n  maps: { [filename: string]: string; };\n}\n"; // The render bundle can either be a string (single bundled file)
// or a bundle manifest object generated by vue-ssr-webpack-plugin.

function createBundleRendererCreator(createRenderer) {
  return function createBundleRenderer(bundle) {
    var rendererOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var files, entry, maps;
    var basedir = rendererOptions.basedir; // load bundle if given filepath

    if (typeof bundle === 'string' && /\.js(on)?$/.test(bundle) && path.isAbsolute(bundle)) {
      if (fs.existsSync(bundle)) {
        var isJSON = /\.json$/.test(bundle);
        basedir = basedir || path.dirname(bundle);
        bundle = fs.readFileSync(bundle, 'utf-8');

        if (isJSON) {
          try {
            bundle = JSON.parse(bundle);
          } catch (e) {
            throw new Error("Invalid JSON bundle file: ".concat(bundle));
          }
        }
      } else {
        throw new Error("Cannot locate bundle file: ".concat(bundle));
      }
    }

    if (_typeof(bundle) === 'object') {
      entry = bundle.entry;
      files = bundle.files;
      basedir = basedir || bundle.basedir;
      maps = createSourceMapConsumers(bundle.maps);

      if (typeof entry !== 'string' || _typeof(files) !== 'object') {
        throw new Error(INVALID_MSG);
      }
    } else if (typeof bundle === 'string') {
      entry = '__vue_ssr_bundle__';
      files = {
        '__vue_ssr_bundle__': bundle
      };
      maps = {};
    } else {
      throw new Error(INVALID_MSG);
    }

    var renderer = createRenderer(rendererOptions);
    var run = createBundleRunner(entry, files, basedir, rendererOptions.runInNewContext);
    return {
      renderToString: function renderToString(context, cb) {
        if (typeof context === 'function') {
          cb = context;
          context = {};
        }

        var promise;

        if (!cb) {
          var _createPromiseCallbac = createPromiseCallback();

          promise = _createPromiseCallbac.promise;
          cb = _createPromiseCallbac.cb;
        }

        run(context)["catch"](function (err) {
          rewriteErrorTrace(err, maps);
          cb(err);
        }).then(function (app) {
          if (app) {
            renderer.renderToString(app, context, function (err, res) {
              rewriteErrorTrace(err, maps);
              cb(err, res);
            });
          }
        });
        return promise;
      },
      renderToStream: function renderToStream(context) {
        var res = new PassThrough();
        run(context)["catch"](function (err) {
          rewriteErrorTrace(err, maps); // avoid emitting synchronously before user can
          // attach error listener

          process.nextTick(function () {
            res.emit('error', err);
          });
        }).then(function (app) {
          if (app) {
            var renderStream = renderer.renderToStream(app, context);
            renderStream.on('error', function (err) {
              rewriteErrorTrace(err, maps);
              res.emit('error', err);
            }); // relay HTMLStream special events

            if (rendererOptions && rendererOptions.template) {
              renderStream.on('beforeStart', function () {
                res.emit('beforeStart');
              });
              renderStream.on('beforeEnd', function () {
                res.emit('beforeEnd');
              });
            }

            renderStream.pipe(res);
          }
        });
        return res;
      }
    };
  };
}

let wasm;
let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function logError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    let error = function () {
      try {
        return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
      } catch (_) {
        return "<failed to stringify thrown value>";
      }
    }();

    console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
    throw e;
  }
}

let WASM_VECTOR_LEN = 0;
let cachedTextEncoder = new TextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (typeof arg !== 'string') throw new Error('expected a string argument');

  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length);
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    if (ret.read !== arg.length) throw new Error('failed to pass whole string');
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}
/**
* @param {string} name
*/


function greet(name) {
  var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  wasm.greet(ptr0, len0);
}

function _assertNum(n) {
  if (typeof n !== 'number') throw new Error('expected a number argument');
}
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/


function add(a, b) {
  _assertNum(a);

  _assertNum(b);

  var ret = wasm.add(a, b);
  return ret;
}

async function load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get('Content-Type') != 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }

    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);

    if (instance instanceof WebAssembly.Instance) {
      return {
        instance,
        module
      };
    } else {
      return instance;
    }
  }
}

async function init(input) {
  if (typeof input === 'undefined') {
    input = new URL('index_bg.wasm', (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('build.dev.js', document.baseURI).href)));
  }

  const imports = {};
  imports.wbg = {};

  imports.wbg.__wbg_alert_8a44b3152c7fba98 = function () {
    return logError(function (arg0, arg1) {
      alert(getStringFromWasm0(arg0, arg1));
    }, arguments);
  };

  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };

  if (typeof input === 'string' || typeof Request === 'function' && input instanceof Request || typeof URL === 'function' && input instanceof URL) {
    input = fetch(input);
  }

  const {
    instance,
    module
  } = await load(await input, imports);
  wasm = instance.exports;
  init.__wbindgen_wasm_module = module;
  return wasm;
}

var exports$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  greet: greet,
  add: add,
  'default': init
});

const base64codes = [62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];

            function getBase64Code(charCode) {
                return base64codes[charCode - 43];
            }

            function base64_decode(str) {
                let missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0;
                let n = str.length;
                let result = new Uint8Array(3 * (n / 4));
                let buffer;

                for (let i = 0, j = 0; i < n; i += 4, j += 3) {
                    buffer =
                        getBase64Code(str.charCodeAt(i)) << 18 |
                        getBase64Code(str.charCodeAt(i + 1)) << 12 |
                        getBase64Code(str.charCodeAt(i + 2)) << 6 |
                        getBase64Code(str.charCodeAt(i + 3));
                    result[j] = buffer >> 16;
                    result[j + 1] = (buffer >> 8) & 0xFF;
                    result[j + 2] = buffer & 0xFF;
                }

                return result.subarray(0, result.length - missingOctets);
            }
        

                    const wasm_code = base64_decode("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lEBBAEHElMAANgLQlEBBAEG8lMAANgLElEBBAEHMlMAANgLYlEBBAEHElMAANgLMlEBBAEHMlMAANgLUlEBBAEHUlMAANgLglEBBAEHUlMAANgLclEBBAEHclMAANgLolEBBAEHclMAANgLklEBBAEHklMAANgLwlEBBAEHklMAANgLslEBBAEHslMAANgL4lEBBAEHslMAANgL0lEBBAEH0lMAANgKAlUBBAEH0lMAANgL8lEBBAEH8lMAANgKIlUBBAEH8lMAANgKElUBBAEGElcAANgKQlUBBAEGElcAANgKMlUBBAEGMlcAANgKYlUBBAEGUlcAANgKglUBBAEGMlcAANgKUlUBBAEGclcAANgKolUBBAEGUlcAANgKclUBBAEGklcAANgKwlUBBAEGclcAANgKklUBBAEGslcAANgK4lUBBAEGklcAANgKslUBBAEG0lcAANgLAlUBBAEGslcAANgK0lUBBAEG8lcAANgLIlUBBAEG0lcAANgK8lUBBAEHElcAANgLQlUBBAEG8lcAANgLElUBBAEHMlcAANgLYlUBBAEHElcAANgLMlUBBAEHUlcAANgLglUBBAEHMlcAANgLUlUBBAEHclcAANgLolUBBAEHUlcAANgLclUBBAEHklcAANgLwlUBBAEHclcAANgLklUBBAEHslcAANgL4lUBBAEHklcAANgLslUBBAEH0lcAANgKAlkBBAEHslcAANgL0lUBBAEH8lcAANgKIlkBBAEH0lcAANgL8lUBBAEGElsAANgKQlkBBAEH8lcAANgKElkBBAEGElsAANgKMlkBBABCGAiICQQgQ5QEhBEEUQQgQ5QEhB0EQQQgQ5QEhBSAGIAYQhgIiAEEIEOUBIABrIgkQhAIhAEEAIAggAmogBGsgB2sgBWsgCWsiAjYCmJdAQQAgADYCoJdAIAAgAkEBcjYCBEEAEIYCIgRBCBDlASEHQRRBCBDlASEGQRBBCBDlASEIIAAgAhCEAiAIIAYgByAEa2pqNgIEQQBBgICAATYCvJdADAYLIAAQ/gENACAAEP8BIAlHDQAgAEEAKAKgl0AQxQENAgtBAEEAKALAl0AiACAGIAYgAEsbNgLAl0AgBiAIaiECQayXwAAhAAJAAkACQANAIAAoAgAgAkYNASAAKAIIIgANAAwCCwsgABD+AQ0AIAAQ/wEgCUYNAQtBACgCoJdAIQRBrJfAACEAAkADQAJAIAAoAgAgBEsNACAAEPYBIARLDQILIAAoAggiAA0AC0EAIQALIAAQ9gEiB0EUQQgQ5QEiCmtBaWohACAEIAAgABCGAiICQQgQ5QEgAmtqIgAgACAEQRBBCBDlAWpJGyIFEIYCIQIgBSAKEIQCIQBBABCGAiILQQgQ5QEhDEEUQQgQ5QEhDUEQQQgQ5QEhDiAGIAYQhgIiD0EIEOUBIA9rIhAQhAIhD0EAIAggC2ogDGsgDWsgDmsgEGsiCzYCmJdAQQAgDzYCoJdAIA8gC0EBcjYCBEEAEIYCIgxBCBDlASENQRRBCBDlASEOQRBBCBDlASEQIA8gCxCEAiAQIA4gDSAMa2pqNgIEQQBBgICAATYCvJdAIAUgChD1AUEAKQKsl0AhESACQQhqQQApArSXQDcCACACIBE3AgBBACAJNgK4l0BBACAINgKwl0BBACAGNgKsl0BBACACNgK0l0ADQCAAQQQQhAIhAiAAEJECNgIEIAIhACAHIAJBBGpLDQALIAUgBEYNBSAFIARrIQAgBCAAIAQgABCEAhDLAQJAIABBgAJJDQAgBCAAEBoMBgsgAEEDdiICQQN0QYyUwABqIQACQAJAQQAoAoSUQCIHQQEgAnQiAnFFDQAgACgCCCECDAELQQAgByACcjYChJRAIAAhAgsgACAENgIIIAIgBDYCDCAEIAA2AgwgBCACNgIIDAULIAAoAgAhByAAIAY2AgAgACAAKAIEIAhqNgIEIAYQhgIiAEEIEOUBIQIgBxCGAiIIQQgQ5QEhBSAGIAIgAGtqIgIgAxCEAiEEIAIgAxD1ASAHIAUgCGtqIgAgAmsgA2shA0EAKAKgl0AgAEYNAkEAKAKcl0AgAEYNAwJAIAAQ7gENAAJAAkAgABD8ASIHQYACSQ0AIAAQHAwBCwJAIABBDGooAgAiBiAAQQhqKAIAIghGDQAgCCAGNgIMIAYgCDYCCAwBC0EAQQAoAoSUQEF+IAdBA3Z3cTYChJRACyAHIANqIQMgACAHEIQCIQALIAQgAyAAEMsBAkAgA0GAAkkNACAEIAMQGiACEIYCIQIMBgsgA0EDdiIDQQN0QYyUwABqIQACQAJAQQAoAoSUQCIHQQEgA3QiA3FFDQAgACgCCCEDDAELQQAgByADcjYChJRAIAAhAwsgACAENgIIIAMgBDYCDCAEIAA2AgwgBCADNgIIIAIQhgIhAgwFC0EAIAAgA2siAjYCmJdAQQBBACgCoJdAIgAgAxCEAiIENgKgl0AgBCACQQFyNgIEIAAgAxD1ASAAEIYCIQIMBAsgACAAKAIEIAhqNgIEQQAoApiXQCECQQAoAqCXQCEAIAAgABCGAiIEQQgQ5QEgBGsiBBCEAiEAQQAgAiAIaiAEayICNgKYl0BBACAANgKgl0AgACACQQFyNgIEQQAQhgIiBEEIEOUBIQdBFEEIEOUBIQZBEEEIEOUBIQggACACEIQCIAggBiAHIARramo2AgRBAEGAgIABNgK8l0AMAgtBACAENgKgl0BBAEEAKAKYl0AgA2oiADYCmJdAIAQgAEEBcjYCBCACEIYCIQIMAgtBACAENgKcl0BBAEEAKAKUl0AgA2oiADYClJdAIAQgABDeASACEIYCIQIMAQtBACECQQAoApiXQCIAIANNDQBBACAAIANrIgI2ApiXQEEAQQAoAqCXQCIAIAMQhAIiBDYCoJdAIAQgAkEBcjYCBCAAIAMQ9QEgABCGAiECCyABQRBqJAAgAgvWCQEGfyAAEIcCIQAgACAAEPwBIgEQhAIhAgJAAkACQCAAEP0BDQAgACgCACEDAkACQCAAEPQBDQAgAyABaiEBIAAgAxCFAiIAQQAoApyXQEcNASACKAIEQQNxQQNHDQJBACABNgKUl0AgACABIAIQywEPC0GElMAAIAAgA2sgAyABakEQaiIAEJUCRQ0CQQBBACgCpJdAIABrNgKkl0APCwJAIANBgAJJDQAgABAcDAELAkAgAEEMaigCACIEIABBCGooAgAiBUYNACAFIAQ2AgwgBCAFNgIIDAELQQBBACgChJRAQX4gA0EDdndxNgKElEALAkACQCACEOwBRQ0AIAAgASACEMsBDAELAkACQCACQQAoAqCXQEYNACACQQAoApyXQEcNAUEAIAA2ApyXQEEAQQAoApSXQCABaiIBNgKUl0AgACABEN4BDwtBACAANgKgl0BBAEEAKAKYl0AgAWoiATYCmJdAIAAgAUEBcjYCBAJAIABBACgCnJdARw0AQQBBADYClJdAQQBBADYCnJdAC0EAKAK8l0AgAU8NAkEAEIYCIgBBCBDlASEBQRRBCBDlASECQRBBCBDlASEDQRBBCBDlASEEQQAoAqCXQEUNAiAAIAFrIAJrIANrQfj/e2pBd3FBfWoiAEEAIARBAnRrIgEgASAASxtFDQJBABCGAiIAQQgQ5QEhAUEUQQgQ5QEhA0EQQQgQ5QEhBEEAIQICQEEAKAKYl0AiBSAEIAMgASAAa2pqIgBNDQAgBSAAQX9zakGAgHxxIQNBACgCoJdAIQFBrJfAACEAAkADQAJAIAAoAgAgAUsNACAAEPYBIAFLDQILIAAoAggiAA0AC0EAIQALQQAhAiAAEP4BDQBBhJTAACAAQQxqKAIAQQF2EJYCRQ0AIAAoAgQgA0kNAEGsl8AAIQEDQCAAIAEQxQENASABKAIIIgENAAtBhJTAACAAKAIAIAAoAgQiASABIANrEJQCIQEgA0UNACABRQ0AIAAgACgCBCADazYCBEEAQQAoAqSXQCADazYCpJdAQQAoApiXQCEBQQAoAqCXQCEAIAAgABCGAiICQQgQ5QEgAmsiAhCEAiEAQQAgASADayACayIBNgKYl0BBACAANgKgl0AgACABQQFyNgIEQQAQhgIiAkEIEOUBIQRBFEEIEOUBIQVBEEEIEOUBIQYgACABEIQCIAYgBSAEIAJramo2AgRBAEGAgIABNgK8l0AgAyECCyACQQAQGWtHDQJBACgCmJdAQQAoAryXQE0NAkEAQX82AryXQA8LIAIQ/AEiAyABaiEBAkACQCADQYACSQ0AIAIQHAwBCwJAIAJBDGooAgAiBCACQQhqKAIAIgJGDQAgAiAENgIMIAQgAjYCCAwBC0EAQQAoAoSUQEF+IANBA3Z3cTYChJRACyAAIAEQ3gEgAEEAKAKcl0BHDQBBACABNgKUl0AMAQsgAUGAAkkNASAAIAEQGkEAQQAoAsSXQEF/aiIANgLEl0AgAA0AEBkaDwsPCyABQQN2IgJBA3RBjJTAAGohAQJAAkBBACgChJRAIgNBASACdCICcUUNACABKAIIIQIMAQtBACADIAJyNgKElEAgASECCyABIAA2AgggAiAANgIMIAAgATYCDCAAIAI2AggLxQgBC38gACgCECEDAkACQAJAAkAgACgCCCIEQQFGDQAgA0EBRg0BIAAoAhggASACIABBHGooAgAoAgwRCAAhAwwDCyADQQFHDQELIAEgAmohBQJAAkACQCAAQRRqKAIAIgYNAEEAIQcgASEIDAELQQAhByABIQkDQCAJIgMgBUYNAiADQQFqIQgCQAJAIAMsAAAiCUF/TA0AIAghCQwBCyAJQf8BcSEKAkACQCAIIAVHDQBBACELIAUhCQwBCyADQQJqIQkgAy0AAUE/cSELCwJAIApB4AFPDQAgCSEIDAELAkACQCAJIAVHDQBBACEMIAUhCAwBCyAJQQFqIQggCS0AAEE/cSEMCwJAIApB8AFPDQAgCCEJDAELAkACQCAIIAVHDQBBACENIAUhCQwBCyAILQAAQT9xIQ0gCEEBaiIJIQgLIAtBDHQgCkESdEGAgPAAcXIgDEEGdHIgDXJBgIDEAEYNAwsgByADayAJaiEHIAZBf2oiBg0ACwsgCCAFRg0AAkAgCCwAACIDQX9KDQACQAJAIAhBAWogBUcNAEEAIQggBSEJDAELIAhBAmohCSAILQABQT9xQQx0IQgLIANB/wFxQeABSQ0AAkACQCAJIAVHDQBBACEJIAUhBgwBCyAJQQFqIQYgCS0AAEE/cUEGdCEJCyADQf8BcUHwAUkNACADQf8BcSEDAkACQCAGIAVHDQBBACEFDAELIAYtAABBP3EhBQsgCCADQRJ0QYCA8ABxciAJciAFckGAgMQARg0BCwJAAkACQCAHDQBBACEJDAELAkAgByACSQ0AQQAhAyACIQkgByACRg0BDAILQQAhAyAHIQkgASAHaiwAAEFASA0BCyAJIQcgASEDCyAHIAIgAxshAiADIAEgAxshAQsgBEEBRg0AIAAoAhggASACIABBHGooAgAoAgwRCAAPCwJAAkACQCACRQ0AQQAhCSACIQggASEDA0AgCSADLQAAQcABcUGAAUdqIQkgA0EBaiEDIAhBf2oiCA0ACyAJIAAoAgwiB08NAUEAIQkgAiEIIAEhAwNAIAkgAy0AAEHAAXFBgAFHaiEJIANBAWohAyAIQX9qIggNAAwDCwtBACEJIAAoAgwiBw0BCyAAKAIYIAEgAiAAQRxqKAIAKAIMEQgADwtBACEDIAcgCWsiCSEFAkACQAJAQQAgAC0AICIIIAhBA0YbQQNxDgMCAAECC0EAIQUgCSEDDAELIAlBAXYhAyAJQQFqQQF2IQULIANBAWohAyAAQRxqKAIAIQggACgCBCEJIAAoAhghBwJAA0AgA0F/aiIDRQ0BIAcgCSAIKAIQEQYARQ0AC0EBDwtBASEDIAlBgIDEAEYNACAHIAEgAiAIKAIMEQgADQBBACEDA0ACQCAFIANHDQAgBSAFSQ8LIANBAWohAyAHIAkgCCgCEBEGAEUNAAsgA0F/aiAFSQ8LIAMLnAcBBn8CQAJAAkACQCACQQlJDQAgAyACEBAiAg0BQQAPC0EAIQJBABCGAiEBIAEgAUEIEOUBa0EUQQgQ5QFrQRBBCBDlAWtB+P97akF3cUF9aiIBQQBBEEEIEOUBQQJ0ayIEIAQgAUsbIANNDQFBECADQQRqQRBBCBDlAUF7aiADSxtBCBDlASEEIAAQhwIhASABIAEQ/AEiBRCEAiEGAkACQAJAAkACQAJAAkACQCABEPQBDQAgBSAETw0BIAZBACgCoJdARg0CIAZBACgCnJdARg0DIAYQ7AENByAGEPwBIgcgBWoiBSAESQ0HIAUgBGshCCAHQYACSQ0EIAYQHAwFCyABEPwBIQUgBEGAAkkNBgJAIAUgBEEEakkNACAFIARrQYGACEkNBgtBhJTAACABIAEoAgAiBmsgBSAGakEQaiIHIARBH2pBhJTAABCYAhDlASIFQQEQkwIiBEUNBiAEIAZqIgEgBSAGayIDQXBqIgI2AgQQkQIhACABIAIQhAIgADYCBCABIANBdGoQhAJBADYCBEEAQQAoAqSXQCAFIAdraiIDNgKkl0BBAEEAKALAl0AiAiAEIAQgAksbNgLAl0BBAEEAKAKol0AiAiADIAIgA0sbNgKol0AMCQsgBSAEayIFQRBBCBDlAUkNBCABIAQQhAIhBiABIAQQwQEgBiAFEMEBIAYgBRAKDAQLQQAoApiXQCAFaiIFIARNDQQgASAEEIQCIQYgASAEEMEBIAYgBSAEayIEQQFyNgIEQQAgBDYCmJdAQQAgBjYCoJdADAMLQQAoApSXQCAFaiIFIARJDQMCQAJAIAUgBGsiBkEQQQgQ5QFPDQAgASAFEMEBQQAhBkEAIQUMAQsgASAEEIQCIgUgBhCEAiEHIAEgBBDBASAFIAYQ3gEgBxDtAQtBACAFNgKcl0BBACAGNgKUl0AMAgsCQCAGQQxqKAIAIgkgBkEIaigCACIGRg0AIAYgCTYCDCAJIAY2AggMAQtBAEEAKAKElEBBfiAHQQN2d3E2AoSUQAsCQCAIQRBBCBDlAUkNACABIAQQhAIhBSABIAQQwQEgBSAIEMEBIAUgCBAKDAELIAEgBRDBAQsgAQ0DCyADEAIiBEUNASAEIAAgAyABEPwBQXhBfCABEPQBG2oiAiACIANLGxCrASEDIAAQAyADDwsgAiAAIAMgASABIANLGxCrARogABADCyACDwsgARD0ARogARCGAguZBwFUfyMAIQdBoAEhCCAHIAhrIQkgCSQAIAkgAzYCOCAJIAQ2AjwgCSAFNgJAIAkgBjYCRCAJIAE2AmAgCSACNgJkQcAAIQogCSAKaiELIAshDCAMEMYBIQ0gCSANNgJQIAkoAlAhDgJAAkACQAJAAkAgDg0AIAkoAjghDyAJKAI8IRAgASACIA8gEBBHDAELQdAAIREgCSARaiESIBIhEyAJIBM2AnhBOCEUIAkgFGohFSAVIRYgFhCXASEXQcAAIRggCSAYaiEZIBkhGiAaEJcBIRsgFyEcIBshHSAcIB1GIR5BASEfIB4gH3EhIAJAAkAgIA0AIAkoAlAhISAJICE2AowBIAkoAkAhIiAJKAJEISNBMCEkIAkgJGohJSAlIAEgIiAjEEggCSgCNCEmIAkoAjAhJwwBCyAJKAJQISggCSAoNgJ8QTghKSAJIClqISogKiErICsQxgEaIAIQ0gEhLCAJKAI4IS0gCSgCPCEuICwgLSAuICgQXSEvIAkgLzYCgAEgLxBEITAgMBA1ITEgMRBxITIgCSAyNgJUIAkoAlQhMyAzRSE0AkACQAJAIDQOAgABAAsgCSgCVCE1IAkgNTYChAEgCSA1NgKIAUEQITYgCSA2aiE3IDcgNSAoEDsgCSgCFCE4IAkoAhAhOQwBC0EYITogCSA6aiE7IDsQgwEgCSgCGCE8IAkoAhwhPSAJID02AkwgCSA8NgJIDAQLIAkgOTYCSCAJIDg2AkwMAgtBKCE+IAkgPmohPyA/ICcgJhBBIAkoAighQCAJKAIsIUEgCSBBNgJcIAkgQDYCWCAJKAJYIUIgQkUhQwJAAkACQCBDDgIAAQALIAkoAlghRCAJKAJcIUUgCSBENgKQASAJIEU2ApQBIAkgRDYCmAEgCSBFNgKcASACENIBIUYMAQtBICFHIAkgR2ohSCBIEIMBIAkoAiAhSSAJKAIkIUogCSBKNgJMIAkgSTYCSAwDCyBEIEUQkAEhSyBGIEsgIRB9IAkoAjghTCAJKAI8IU0gASACIEwgTRBHIAkgRDYCSCAJIEU2AkwMAQtBwAAhTiAJIE5qIU8gTyFQIFAQmAEhUUEAIVJBCCFTIAkgU2ohVCBUIFEgUhA7IAkoAgwhVSAJKAIIIVYgCSBWNgJIIAkgVTYCTAsMAQsLIAkoAkghVyAJKAJMIVggACBYNgIEIAAgVzYCAEGgASFZIAkgWWohWiBaJAAPC+YGAmF/An4jACEDQaABIQQgAyAEayEFIAUkACAFIAE2AnAgBSACNgJ0IAUgATYCnAEgASgCBCEGIAUgBjYCmAEgBSgCmAEhByACIQggByEJIAggCU0hCkF/IQsgCiALcyEMQQEhDSAMIA1xIQ4CQAJAIA4NAEEoIQ8gBSAPaiEQIBAhESARIAEQFgwBC0HZgcAAIRIgEiETQSQhFEGAgsAAIRUgFSEWIBMgFCAWEJYBAAsgBSgCKCEXQQAhGCAXIRkgGCEaIBkgGkYhG0EAIRxBASEdQQEhHiAbIB5xIR8gHCAdIB8bISBBASEhICAhIiAhISMgIiAjRiEkQQEhJSAkICVxISYCQAJAAkAgJkUNAEEoIScgBSAnaiEoICghKUE4ISogBSAqaiErICshLCApKQIAIWQgLCBkNwIAQQghLSAsIC1qIS4gKSAtaiEvIC8oAgAhMCAuIDA2AgBBGCExIAUgMWohMiAyITNBOCE0IAUgNGohNSA1ITYgNikCACFlIDMgZTcCAEEIITcgMyA3aiE4IDYgN2ohOSA5KAIAITogOCA6NgIAIAUoAhghOyAFIDs2AnggBSgCHCE8IAUoAiAhPSAFIDw2AhAgBSA9NgIUDAELQQAhPiAAID42AgAMAQtBACE/IAIgP3QhQCAFIEA2AnxBECFBIAUgQWohQiBCIUMgQxCXASFEQQghRSAFIEVqIUYgRiBAIEQQYyAFKAIIIUcgBSgCDCFIIAUgSDYCTCAFIEc2AkggBSgCECFJIAUoAhQhSiAFKAJIIUsgBSgCTCFMIAUgASA7IEkgSiBLIEwQBiAFKAIEIU0gBSgCACFOQcgAIU8gBSBPaiFQIFAhUSAFIFE2AmwgBSgCbCFSQeAAIVMgBSBTaiFUIFQhVSBVIE4gTSBSECFB0AAhViAFIFZqIVcgVyFYQeAAIVkgBSBZaiFaIFohWyBYIFsQMCAFKAJQIVwCQAJAAkAgXA4CAAEACyAFKAJUIV0gBSgCWCFeIAUgXTYCiAEgBSBeNgKMASAFIF02ApABIAUgXjYClAEgASBdIF4QUQwBCyAFKAJUIV8gBSgCWCFgIAUgXzYCgAEgBSBgNgKEASAAIF8gYBA+DAELQQAhYSAAIGE2AgALQaABIWIgBSBiaiFjIGMkAA8LxwYBBn8CQAJAIAFFDQBBK0GAgMQAIAAoAgAiBkEBcSIBGyEHIAEgBWohCAwBCyAFQQFqIQggACgCACEGQS0hBwsCQAJAIAZBBHENAEEAIQIMAQtBACEJAkAgA0UNACADIQogAiEBA0AgCSABLQAAQcABcUGAAUdqIQkgAUEBaiEBIApBf2oiCg0ACwsgCSAIaiEIC0EBIQECQAJAIAAoAghBAUYNACAAIAcgAiADEIkBDQEgACgCGCAEIAUgAEEcaigCACgCDBEIAA8LAkACQAJAAkACQCAAQQxqKAIAIgkgCE0NACAGQQhxDQRBACEBIAkgCGsiCiEGQQEgAC0AICIJIAlBA0YbQQNxDgMDAQIDCyAAIAcgAiADEIkBDQQgACgCGCAEIAUgAEEcaigCACgCDBEIAA8LQQAhBiAKIQEMAQsgCkEBdiEBIApBAWpBAXYhBgsgAUEBaiEBIABBHGooAgAhCiAAKAIEIQkgACgCGCEIAkADQCABQX9qIgFFDQEgCCAJIAooAhARBgBFDQALQQEPC0EBIQEgCUGAgMQARg0BIAAgByACIAMQiQENASAAKAIYIAQgBSAAKAIcKAIMEQgADQEgACgCHCEKIAAoAhghAEEAIQECQANAAkAgBiABRw0AIAYhAQwCCyABQQFqIQEgACAJIAooAhARBgBFDQALIAFBf2ohAQsgASAGSSEBDAELIAAoAgQhBiAAQTA2AgQgAC0AICELQQEhASAAQQE6ACAgACAHIAIgAxCJAQ0AQQAhASAJIAhrIgohAwJAAkACQEEBIAAtACAiCSAJQQNGG0EDcQ4DAgABAgtBACEDIAohAQwBCyAKQQF2IQEgCkEBakEBdiEDCyABQQFqIQEgAEEcaigCACEKIAAoAgQhCSAAKAIYIQICQANAIAFBf2oiAUUNASACIAkgCigCEBEGAEUNAAtBAQ8LQQEhASAJQYCAxABGDQAgACgCGCAEIAUgACgCHCgCDBEIAA0AIAAoAhwhASAAKAIYIQJBACEKAkADQCADIApGDQEgCkEBaiEKIAIgCSABKAIQEQYARQ0AC0EBIQEgCkF/aiADSQ0BCyAAIAs6ACAgACAGNgIEQQAPCyABC6AFAQp/IwBBMGsiAyQAIANBJGogATYCACADQQM6ACggA0KAgICAgAQ3AwggAyAANgIgQQAhACADQQA2AhggA0EANgIQAkACQAJAAkAgAigCCCIBDQAgAigCACEEIAIoAgQiBSACQRRqKAIAIgEgASAFSxsiBkUNASACKAIQIQdBACEAIAYhAQNAAkAgBCAAaiIIQQRqKAIAIglFDQAgAygCICAIKAIAIAkgAygCJCgCDBEIAA0ECyAHIABqIggoAgAgA0EIaiAIQQRqKAIAEQYADQMgAEEIaiEAIAFBf2oiAQ0ACyAGIQAMAQsgAigCACEEIAIoAgQiBSACQQxqKAIAIgggCCAFSxsiCkUNACABQRxqIQAgCiELIAQhAQNAAkAgAUEEaigCACIIRQ0AIAMoAiAgASgCACAIIAMoAiQoAgwRCAANAwsgAyAALQAAOgAoIAMgAEFoaikCAEIgiTcDCCAAQXxqKAIAIQggAigCECEHQQAhBkEAIQkCQAJAAkAgAEF4aigCAA4DAQACAQsgCEEDdCEMQQAhCSAHIAxqIgwoAgRBG0cNASAMKAIAKAIAIQgLQQEhCQsgAEFkaiEMIAMgCDYCFCADIAk2AhAgAEF0aigCACEIAkACQAJAIABBcGooAgAOAwEAAgELIAhBA3QhCSAHIAlqIgkoAgRBG0cNASAJKAIAKAIAIQgLQQEhBgsgAyAINgIcIAMgBjYCGCAHIAwoAgBBA3RqIggoAgAgA0EIaiAIKAIEEQYADQIgAEEgaiEAIAFBCGohASALQX9qIgsNAAsgCiEACwJAIAAgBU8NACADKAIgIAQgAEEDdGoiACgCACAAKAIEIAMoAiQoAgwRCAANAQtBACEADAELQQEhAAsgA0EwaiQAIAAL9wQBBH8gACABEIQCIQICQAJAAkAgABD9AQ0AIAAoAgAhAwJAAkAgABD0AQ0AIAMgAWohASAAIAMQhQIiAEEAKAKcl0BHDQEgAigCBEEDcUEDRw0CQQAgATYClJdAIAAgASACEMsBDwtBhJTAACAAIANrIAMgAWpBEGoiABCVAkUNAkEAQQAoAqSXQCAAazYCpJdADwsCQCADQYACSQ0AIAAQHAwBCwJAIABBDGooAgAiBCAAQQhqKAIAIgVGDQAgBSAENgIMIAQgBTYCCAwBC0EAQQAoAoSUQEF+IANBA3Z3cTYChJRACwJAIAIQ7AFFDQAgACABIAIQywEMAgsCQAJAIAJBACgCoJdARg0AIAJBACgCnJdARw0BQQAgADYCnJdAQQBBACgClJdAIAFqIgE2ApSXQCAAIAEQ3gEPC0EAIAA2AqCXQEEAQQAoApiXQCABaiIBNgKYl0AgACABQQFyNgIEIABBACgCnJdARw0BQQBBADYClJdAQQBBADYCnJdADwsgAhD8ASIDIAFqIQECQAJAIANBgAJJDQAgAhAcDAELAkAgAkEMaigCACIEIAJBCGooAgAiAkYNACACIAQ2AgwgBCACNgIIDAELQQBBACgChJRAQX4gA0EDdndxNgKElEALIAAgARDeASAAQQAoApyXQEcNAUEAIAE2ApSXQAsPCwJAIAFBgAJJDQAgACABEBoPCyABQQN2IgJBA3RBjJTAAGohAQJAAkBBACgChJRAIgNBASACdCICcUUNACABKAIIIQIMAQtBACADIAJyNgKElEAgASECCyABIAA2AgggAiAANgIMIAAgATYCDCAAIAI2AggL0gMCN38DfiMAIQJB4AAhAyACIANrIQQgBCQAIAEQTEEoIQUgBCAFaiEGIAYhByABKQIAITkgByA5NwIAQQghCCAHIAhqIQkgASAIaiEKIAooAgAhCyAJIAs2AgBByAAhDCAEIAxqIQ0gDSEOQSghDyAEIA9qIRAgECERIBEpAgAhOiAOIDo3AgBBCCESIA4gEmohEyARIBJqIRQgFCgCACEVIBMgFTYCAEEYIRYgBCAWaiEXIBchGEHIACEZIAQgGWohGiAaIRsgGykCACE7IBggOzcCAEEIIRwgGCAcaiEdIBsgHGohHiAeKAIAIR8gHSAfNgIAQRghICAEICBqISEgISEiIAQgIjYCWEEYISMgBCAjaiEkICQhJUEQISYgBCAmaiEnICcgJRA0IAQoAhQhKCAEKAIQISkgBCApNgI4IAQgKDYCPEEYISogBCAqaiErICshLCAEICw2AlxBGCEtIAQgLWohLiAuIS8gLxDIASEwIAQgMDYCREEIITEgBCAxaiEyIDIgKSAoIDAQHyAEKAIMITMgBCgCCCE0IAQgNCAzEDkgBCgCBCE1IAQoAgAhNiAAIDU2AgQgACA2NgIAQeAAITcgBCA3aiE4IDgkAA8L4AMBK38jACEFQdAAIQYgBSAGayEHIAckACAHIAI2AiAgByADNgIkIAcgATYCOCAEIQggByAIOgA/QSAhCSAHIAlqIQogCiELIAsQxgEhDAJAAkACQAJAAkAgDA0AQSAhDSAHIA1qIQ4gDiEPIA8QmAEhEAwBCyAHIAw2AkQgBCERAkACQCARDQAgBygCICESIAcoAiQhEyASIBMQTiEUIAcgFDYCMAwBCyAHKAIgIRUgBygCJCEWIBUgFhBNIRcgByAXNgIwDAILDAELQQAhGEEIIRkgByAZaiEaIBogECAYEDsgBygCDCEbIAcoAgghHCAHIBw2AiggByAbNgIsDAELIAcoAjAhHSAdEEQhHiAeEDUhHyAfEHEhICAHICA2AjQgBygCNCEhICFFISICQAJAAkAgIg4CAAEACyAHKAI0ISMgByAjNgJIIAcgIzYCTEEQISQgByAkaiElICUgIyAMEDsgBygCFCEmIAcoAhAhJwwBC0EYISggByAoaiEpICkQgwEgBygCGCEqIAcoAhwhKyAHICs2AiwgByAqNgIoDAILIAcgJzYCKCAHICY2AiwLCyAHKAIoISwgBygCLCEtIAAgLTYCBCAAICw2AgBB0AAhLiAHIC5qIS8gLyQADwupAwIxfwh+IwAhAkHQACEDIAIgA2shBEEgIQUgBCAFaiEGIAYhByABKQIAITMgByAzNwIAQRAhCCAHIAhqIQkgASAIaiEKIAooAgAhCyAJIAs2AgBBCCEMIAcgDGohDSABIAxqIQ4gDikCACE0IA0gNDcCAEE4IQ8gBCAPaiEQIBAhEUEgIRIgBCASaiETIBMhFCAUKQIAITUgESA1NwIAQRAhFSARIBVqIRYgFCAVaiEXIBcoAgAhGCAWIBg2AgBBCCEZIBEgGWohGiAUIBlqIRsgGykCACE2IBogNjcCAEEIIRwgBCAcaiEdIB0hHkE4IR8gBCAfaiEgICAhISAhKQIAITcgHiA3NwIAQRAhIiAeICJqISMgISAiaiEkICQoAgAhJSAjICU2AgBBCCEmIB4gJmohJyAhICZqISggKCkCACE4ICcgODcCAEEIISkgBCApaiEqICohKyArKQIAITkgACA5NwIAQRAhLCAAICxqIS0gKyAsaiEuIC4oAgAhLyAtIC82AgBBCCEwIAAgMGohMSArIDBqITIgMikCACE6IDEgOjcCAA8LmgMCLX8JfiMAIQJB4AAhAyACIANrIQQgBCQAIAQgATYCPEEIIQUgBCAFaiEGIAYhByAEIAc2AlxBCCEIIAQgCGohCSAJIQpBASELIAEgCiALEH5BICEMIAQgDGohDSANIQ5BCCEPIAQgD2ohECAQIREgESkCACEvIA4gLzcCAEEQIRIgDiASaiETIBEgEmohFCAUKQIAITAgEyAwNwIAQQghFSAOIBVqIRYgESAVaiEXIBcpAgAhMSAWIDE3AgBBICEYIAQgGGohGSAZIRpBwAAhGyAEIBtqIRwgHCEdIBopAgAhMiAdIDI3AgBBECEeIB0gHmohHyAaIB5qISAgICkCACEzIB8gMzcCAEEIISEgHSAhaiEiIBogIWohIyAjKQIAITQgIiA0NwIAQcAAISQgBCAkaiElICUhJiAmKQIAITUgACA1NwIAQRAhJyAAICdqISggJiAnaiEpICkpAgAhNiAoIDY3AgBBCCEqIAAgKmohKyAmICpqISwgLCkCACE3ICsgNzcCAEHgACEtIAQgLWohLiAuJAAPC68DAS9/IwAhA0EwIQQgAyAEayEFIAUkACAFIAA2AhAgBSABNgIUIAUgAjYCGEEEIQYgBSAGNgIsIAUoAiwhByAFIAc2AhxBACEIIAEhCSAIIQogCSAKSyELQX8hDCALIAxzIQ1BASEOIA0gDnEhDwJAAkACQAJAIA8NAEEAIRAgAiERIBAhEiARIBJLIRNBfyEUIBMgFHMhFUEBIRYgFSAWcSEXIBcNAgwBC0G4hMAAIRggGCEZQR4hGkHYhMAAIRsgGyEcIBkgGiAcEJYBAAsgBSABIAcQHSAFKAIAIR0gBSgCBCEeIAUgHjYCDCAFIB02AggMAQtB6ITAACEfIB8hIEEeISFBiIXAACEiICIhIyAgICEgIxCWAQALIAUoAgwhJEEBISVBACEmICYgJSAkGyEnAkACQAJAICcNACAFKAIIISggBSgCDCEpIAUgKDYCICAFICk2AiQgACAoICkgAhBeISogBSAqNgIoDAELDAELICoQhwEhK0F/ISwgKyAscyEtQQEhLiAtIC5xIS8CQCAvDQAMAQtBMCEwIAUgMGohMSAxJAAgKg8LENsBAAuQAwEDfwJAAkAgAUEJSQ0AAkBBEEEIEOUBIAFNDQBBEEEIEOUBIQELQQAhAkEAEIYCIQMgAyADQQgQ5QFrQRRBCBDlAWtBEEEIEOUBa0H4/3tqQXdxQX1qIgNBAEEQQQgQ5QFBAnRrIgQgBCADSxsgAWsgAE0NASABQRAgAEEEakEQQQgQ5QFBe2ogAEsbQQgQ5QEiBGpBEEEIEOUBakF8ahACIgNFDQEgAxCHAiEAAkACQCABQX9qIgIgA3ENACAAIQEMAQsgAiADakEAIAFrcRCHAiECQRBBCBDlASEDIAAQ/AEgAiACIAFqIAIgAGsgA0sbIgEgAGsiAmshAwJAIAAQ9AENACABIAMQwQEgACACEMEBIAAgAhAKDAELIAAoAgAhACABIAM2AgQgASAAIAJqNgIACwJAIAEQ9AENACABEPwBIgBBEEEIEOUBIARqTQ0AIAEgBBCEAiECIAEgBBDBASACIAAgBGsiABDBASACIAAQCgsgARCGAiEAIAEQ9AEaIAAPCyAAEAIhAgsgAgudAwItfwR+IwAhAkHwACEDIAIgA2shBCAEJAAgBCAANgJcIAQgATYCYCAEIQUgBSABEKkBIAQgADYCbCAEIAA2AmRByAAhBiAEIAZqIQcgByEIIAQhCSAJKQIAIS8gCCAvNwIAQRAhCiAIIApqIQsgCSAKaiEMIAwoAgAhDSALIA02AgBBCCEOIAggDmohDyAJIA5qIRAgECkCACEwIA8gMDcCAEEwIREgBCARaiESIBIhE0EEIRQgEyAUaiEVQcgAIRYgBCAWaiEXIBchGCAYKQIAITEgFSAxNwIAQRAhGSAVIBlqIRogGCAZaiEbIBsoAgAhHCAaIBw2AgBBCCEdIBUgHWohHiAYIB1qIR8gHykCACEyIB4gMjcCAEEBISAgBCAgNgIwQRghISAEICFqISIgIiEjQTAhJCAEICRqISUgJSEmICMgACAmEDhBGCEnIAQgJ2ohKCAoISkgKRCEASAAKAIAISoCQAJAICoOAgABAAsQjQIAC0EEISsgACAraiEsIAQgLDYCaEHwACEtIAQgLWohLiAuJAAgLA8L9wICL38BfiMAIQJB4AAhAyACIANrIQQgBCQAIAQgADYCECAEIAE2AhRBECEFIAQgBWohBiAGIQcgBCAHNgJYIAQoAlghCCAEIAg2AlxBASEJQQghCiAEIApqIQsgCyAIIAkQZiAEKAIMIQwgBCgCCCENIAQgDTYCUCAEIAw2AlRB0AAhDiAEIA5qIQ8gDyEQQTghESAEIBFqIRIgEiETQYiAwAAhFCAUIRVBAiEWQQEhFyATIBUgFiAQIBcQVEEoIRggBCAYaiEZIBkhGkE4IRsgBCAbaiEcIBwhHSAaIB0QFUEYIR4gBCAeaiEfIB8hIEEoISEgBCAhaiEiICIhIyAjKQIAITEgICAxNwIAQQghJCAgICRqISUgIyAkaiEmICYoAgAhJyAlICc2AgBBGCEoIAQgKGohKSAEICkQQiAEKAIEISogBCgCACErICsgKhBsQRghLCAEICxqIS0gLSEuIC4QrQFB4AAhLyAEIC9qITAgMCQADwvpAgEDfyMAQRBrIgIkACAAKAIAIQACQAJAAkACQCABQYABSQ0AIAJBADYCDCABQYAQTw0BIAIgAUE/cUGAAXI6AA0gAiABQQZ2QcABcjoADEECIQEMAgsCQCAAKAIIIgMgAEEEaigCAEcNACAAIANBARAnIAAoAgghAwsgACADQQFqNgIIIAAoAgAgA2ogAToAAAwCCwJAIAFBgIAESQ0AIAIgAUE/cUGAAXI6AA8gAiABQRJ2QfABcjoADCACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA1BBCEBDAELIAIgAUE/cUGAAXI6AA4gAiABQQx2QeABcjoADCACIAFBBnZBP3FBgAFyOgANQQMhAQsCQCAAQQRqKAIAIABBCGoiBCgCACIDayABTw0AIAAgAyABECcgBCgCACEDCyAAKAIAIANqIAJBDGogARCrARogBCADIAFqNgIACyACQRBqJABBAAvgAgEDfyMAQRBrIgIkAAJAAkACQAJAAkAgAUGAAUkNACACQQA2AgwgAUGAEEkNASABQYCABE8NAiACIAFBP3FBgAFyOgAOIAIgAUEMdkHgAXI6AAwgAiABQQZ2QT9xQYABcjoADUEDIQEMAwsCQCAAKAIIIgMgAEEEaigCAEcNACAAIANBARAoIAAoAgghAwsgACADQQFqNgIIIAAoAgAgA2ogAToAAAwDCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAiEBDAELIAIgAUE/cUGAAXI6AA8gAiABQRJ2QfABcjoADCACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA1BBCEBCwJAIABBBGooAgAgAEEIaiIEKAIAIgNrIAFPDQAgACADIAEQKCAEKAIAIQMLIAAoAgAgA2ogAkEMaiABEKsBGiAEIAMgAWo2AgALIAJBEGokAAvpAgEGfyMAQSBrIgIkACABKAIAIQMCQAJAIAEoAgQiBEEDdCIFDQBBACEGDAELIANBBGohB0EAIQYDQCAHKAIAIAZqIQYgB0EIaiEHIAVBeGoiBQ0ACwsCQAJAAkACQAJAAkAgAUEUaigCAA0AIAYhBQwBCyAERQ0CQQAhB0EBIQQCQCAGQQ9LDQAgA0EEaigCAEUNAgsgBiAGaiIFIAZJDQELQQAhBwJAAkAgBUEASA0AIAUNAUEBIQQMAgsQ+AEACyAFIQcgBUEBEOkBIgRFDQMLIABBADYCCCAAIAQ2AgAgACAHNgIEIAIgADYCBCACQQhqQRBqIAFBEGopAgA3AwAgAkEIakEIaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQeyMwAAgAkEIahAJDQEgAkEgaiQADwtBAEEAQdCNwAAQWQALQfCNwABBMyACQQhqQeCNwABBvI7AABBGAAsgBUEBEIACAAvvAgIlfwF+IwAhAkHAACEDIAIgA2shBCAEJAAgBCABNgIkQQEhBQJAAkAgBQ0AQQEhBiAEIAY6ABcMAQsgASgCBCEHQQAhCCAHIQkgCCEKIAkgCkYhC0EBIQwgCyAMcSENIAQgDToAFwsgBC0AFyEOQQEhDyAOIA9xIRACQAJAAkAgEA0AQQEhESAEIBE2AjwgBCgCPCESIAQgEjYCKAwBC0EAIRMgACATNgIADAELIAEoAgQhFEEAIRUgFCAVdCEWIAQgFjYCLEEIIRcgBCAXaiEYIBggFiASEGUgBCgCDCEZIAQoAgghGiAEIBo2AjAgBCAZNgI0IAEoAgAhGyAbEJ4BIRwgHBCmASEdIAQgHTYCGCAEIBo2AhwgBCAZNgIgQRghHiAEIB5qIR8gHyEgICApAgAhJyAAICc3AgBBCCEhIAAgIWohIiAgICFqISMgIygCACEkICIgJDYCAAtBwAAhJSAEICVqISYgJiQADwvvAgIlfwF+IwAhAkHAACEDIAIgA2shBCAEJAAgBCABNgIkQQQhBQJAAkAgBQ0AQQEhBiAEIAY6ABcMAQsgASgCBCEHQQAhCCAHIQkgCCEKIAkgCkYhC0EBIQwgCyAMcSENIAQgDToAFwsgBC0AFyEOQQEhDyAOIA9xIRACQAJAAkAgEA0AQQQhESAEIBE2AjwgBCgCPCESIAQgEjYCKAwBC0EAIRMgACATNgIADAELIAEoAgQhFEECIRUgFCAVdCEWIAQgFjYCLEEIIRcgBCAXaiEYIBggFiASEGUgBCgCDCEZIAQoAgghGiAEIBo2AjAgBCAZNgI0IAEoAgAhGyAbEJ0BIRwgHBCmASEdIAQgHTYCGCAEIBo2AhwgBCAZNgIgQRghHiAEIB5qIR8gHyEgICApAgAhJyAAICc3AgBBCCEhIAAgIWohIiAgICFqISMgIygCACEkICIgJDYCAAtBwAAhJSAEICVqISYgJiQADwvSAgIFfwF+IwBBMGsiAyQAQSchBAJAAkAgAEKQzgBaDQAgACEIDAELQSchBANAIANBCWogBGoiBUF8aiAAIABCkM4AgCIIQpDOAH59pyIGQf//A3FB5ABuIgdBAXRBrpHAAGovAAA7AAAgBUF+aiAGIAdB5ABsa0H//wNxQQF0Qa6RwABqLwAAOwAAIARBfGohBCAAQv/B1y9WIQUgCCEAIAUNAAsLAkAgCKciBUHjAEwNACADQQlqIARBfmoiBGogCKciBSAFQf//A3FB5ABuIgVB5ABsa0H//wNxQQF0Qa6RwABqLwAAOwAACwJAAkAgBUEKSA0AIANBCWogBEF+aiIEaiAFQQF0Qa6RwABqLwAAOwAADAELIANBCWogBEF/aiIEaiAFQTBqOgAACyACIAFBjI/AAEEAIANBCWogBGpBJyAEaxAIIQQgA0EwaiQAIAQL7AIBDX8CQEEAKAK0l0AiAA0AQQBB/x82AsSXQEEADwtBrJfAACEBQQAhAkEAIQMDQCAAIgQoAgghACAEKAIEIQUgBCgCACEGAkACQEGElMAAIARBDGooAgBBAXYQlgINACAEIQEMAQsCQCAEEP4BRQ0AIAQhAQwBCyAGIAYQhgIiB0EIEOUBIAdraiIHEPwBIQhBABCGAiIJQQgQ5QEhCkEUQQgQ5QEhC0EQQQgQ5QEhDAJAIAcQ7gFFDQAgBCEBDAELAkAgByAIaiAGIAUgCWogCmsgC2sgDGtqTw0AIAQhAQwBCwJAAkBBACgCnJdAIAdGDQAgBxAcDAELQQBBADYClJdAQQBBADYCnJdACwJAQYSUwAAgBiAFEJUCDQAgByAIEBogBCEBDAELQQBBACgCpJdAIAVrNgKkl0AgASAANgIIIAUgAmohAgsgA0EBaiEDIAANAAtBACADQf8fIANB/x9LGzYCxJdAIAILywIBBX9BACECAkAgAUEIdiIDRQ0AQR8hAiABQf///wdLDQAgAUEGIANnIgJrQR9xdkEBcSACQQF0a0E+aiECCyAAQgA3AhAgACACNgIcIAJBAnRBlJbAAGohAyAAEJICIQQCQAJAAkACQAJAQQAoAoiUQCIFQQEgAkEfcXQiBnFFDQAgAygCACEFIAIQ3QEhAiAFEJICEPwBIAFHDQEgBSECDAILQQAgBSAGcjYCiJRAIAMgADYCACAAIAM2AhgMAwsgASACQR9xdCEDA0AgBSADQR12QQRxakEQaiIGKAIAIgJFDQIgA0EBdCEDIAIhBSACEJICEPwBIAFHDQALCyACEJICIgIoAggiAyAENgIMIAIgBDYCCCAEIAI2AgwgBCADNgIIIABBADYCGA8LIAYgADYCACAAIAU2AhgLIAQgBDYCCCAEIAQ2AgwLzgIBIn8jACEBQTAhAiABIAJrIQMgAyQAIAMgADYCIEEEIQQgAyAENgIsIAMoAiwhBSADIAU2AiQgAyAAIAUQHSADKAIAIQYgAygCBCEHIAMgBzYCFCADIAY2AhAgAygCFCEIQQEhCUEAIQogCiAJIAgbIQsCQAJAAkAgCw0AIAMoAhAhDCADKAIUIQ0gAyAMNgIYIAMgDTYCHEEYIQ4gAyAOaiEPIA8hECAQEMkBIREMAQsMAQtBACESIBEhEyASIRQgEyAUSyEVQQEhFiAVIBZxIRcCQAJAIBcNACADIAU2AgwMAQsgAygCGCEYIAMoAhwhGSAYIBkQUCEaIAMgGjYCKCAaEIcBIRtBfyEcIBsgHHMhHUEBIR4gHSAecSEfAkAgHw0ADAILIAMgGjYCDAsgAygCDCEgQTAhISADICFqISIgIiQAICAPCxDbAQALwwIBBX8gACgCGCEBAkACQAJAIAAQiQIgAEcNACAAQRRBECAAQRRqIgIoAgAiAxtqKAIAIgQNAUEAIQMMAgsgABCKAiIEIAAQiQIiAxCSAjYCDCADIAQQkgI2AggMAQsgAiAAQRBqIAMbIQIDQCACIQUCQCAEIgNBFGoiAigCACIEDQAgA0EQaiECIAMoAhAhBAsgBA0ACyAFQQA2AgALAkAgAUUNAAJAAkAgACgCHEECdEGUlsAAaiIEKAIAIABGDQAgAUEQQRQgASgCECAARhtqIAM2AgAgAw0BDAILIAQgAzYCACADDQBBAEEAKAKIlEBBfiAAKAIcd3E2AoiUQA8LIAMgATYCGAJAIAAoAhAiBEUNACADIAQ2AhAgBCADNgIYCyAAQRRqKAIAIgRFDQAgA0EUaiAENgIAIAQgAzYCGA8LC68CASB/IwAhA0EwIQQgAyAEayEFIAUkACAFIAE2AhwgBSACNgIgIAUgAjYCJCAFIAI2AiggAmkhBiAFIAY2AiwgBSgCLCEHQQEhCCAHIQkgCCEKIAkgCkYhC0F/IQwgCyAMcyENQQEhDiANIA5xIQ8CQAJAAkACQAJAIA8NAEEBIRAgAiAQayERQX8hEiASIBFrIRMgASEUIBMhFSAUIBVLIRZBASEXIBYgF3EhGCAYDQIMAQtBACEZIAUgGTYCFAwDC0EIIRogBSAaaiEbIBsgASACEGUgBSgCDCEcIAUoAgghHQwBC0EAIR4gBSAeNgIUDAELIAUgHTYCECAFIBw2AhQLIAUoAhAhHyAFKAIUISAgACAgNgIEIAAgHzYCAEEwISEgBSAhaiEiICIkAA8LtwICBH8BfiMAQTBrIgIkACABQQRqIQMCQAJAIAEoAgRFDQBBACgC4ItAIQQMAQsgASgCACEFIAJCADcCDCACQQAoAuCLQCIENgIIIAIgAkEIajYCFCACQRhqQRBqIAVBEGopAgA3AwAgAkEYakEIaiAFQQhqKQIANwMAIAIgBSkCADcDGCACQRRqQZyLwAAgAkEYahAJGiADQQhqIAJBCGpBCGooAgA2AgAgAyACKQMINwIACyACQRhqQQhqIgUgA0EIaigCADYCACABQQxqQQA2AgAgAykCACEGIAFBCGpBADYCACABIAQ2AgQgAiAGNwMYAkBBDEEEEOkBIgENAEEMQQQQgAIACyABIAIpAxg3AgAgAUEIaiAFKAIANgIAIABBzIzAADYCBCAAIAE2AgAgAkEwaiQAC6oCARx/IwAhBEHQACEFIAQgBWshBiAGJAAgBiABNgIgIAYgAjYCJCAGIAM2AiwgBiABNgJAIAYgAjYCRCAGIAE2AjggBiACNgI8IAYoAjghByAGKAI8IQggBiAINgIcIAYgBzYCGEEYIQkgBiAJaiEKIAohCyAGIAs2AkxBGCEMIAYgDGohDSANIQ4gDhCaASEPQRAhECAGIBBqIREgESAPIAMQdSAGKAIUIRIgBigCECETIAYgEzYCMCAGIBI2AjRBGCEUIAYgFGohFSAVIRYgBiAWNgJIQRghFyAGIBdqIRggGCEZIBkQhgFBCCEaIAYgGmohGyAbIBMgEhBLIAYoAgwhHCAGKAIIIR0gACAcNgIEIAAgHTYCAEHQACEeIAYgHmohHyAfJAAPC5sCARx/IwAhAkHAACEDIAIgA2shBCAEJAAgBCAANgIYIAQgATYCHEEQIQUgBCAFaiEGQRghByAEIAdqIQggBiAIEGsgBCgCFCEJIAQoAhAaQQAhCiAJIAp0IQsgBCALNgIoIAQoAighDCAEIAw2AixBCCENIAQgDWohDkEYIQ8gBCAPaiEQIA4gEBBrIAQoAgwaIAQoAggaQQEhESAEIBE2AjAgBCgCMCESIAQgEjYCNCAEIAwgEhBjIAQoAgQhEyAEKAIAIRQgBCAUNgI4IAQgEzYCPCAEKAIYIRUgBCgCHCEWIBUgFhB4IRcgFxCmASEYQSAhGSAEIBlqIRogGiEbIBsgGCAUIBMQR0HAACEcIAQgHGohHSAdJAAPC4MCARV/IwAhBEEwIQUgBCAFayEGIAYkACAGIAE2AhAgBiACNgIUIAYgAzYCHEEAIQcgBiAHOgAbQQEhCCAGIAg6ABsgBigCECEJIAlFIQoCQAJAAkAgCg4CAAEACyAGKAIQIQsgBigCFCEMIAYgCzYCKCAGIAw2AiwgACALNgIEIAAgDDYCCEEAIQ0gACANNgIADAELQQAhDiAGIA46ABtBCCEPIAYgD2ohECAQIAMQhQEgBigCDCERIAYoAgghEiAAIBI2AgQgACARNgIIQQEhEyAAIBM2AgALIAYtABshFEEBIRUgFCAVcSEWAkAgFkUNAAtBMCEXIAYgF2ohGCAYJAAPC+8BARJ/IwAhA0EgIQQgAyAEayEFIAUkACAFIAI2AhRBACEGIAUgBjoAE0EBIQcgBSAHOgATIAEoAgAhCAJAAkACQAJAIAgOAgABAAtBACEJIAUgCToAEyAFIAIQQCAFKAIAIQogBSgCBCELIAUgCzYCDCAFIAo2AggMAQsgASgCBCEMIAEoAgghDSAFIAw2AhggBSANNgIcIAUgDDYCCCAFIA02AgwMAQsLIAUtABMhDkEBIQ8gDiAPcSEQAkAgEEUNAAsgBSgCCCERIAUoAgwhEiAAIBI2AgQgACARNgIAQSAhEyAFIBNqIRQgFCQADwveAQEXfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIIIAQgATYCDCABEPABIQVBASEGIAUgBnEhBwJAAkACQCAHDQAgARDxASEIDAELIAAgARA2IQlBASEKIAkgCnEhCyAEIAs6AAcMAQtBASEMIAggDHEhDQJAAkACQCANDQAgACABEPoBIQ5BASEPIA4gD3EhECAEIBA6AAcMAQsgACABEDchEUEBIRIgESAScSETIAQgEzoABwwBCwsLIAQtAAchFEEBIRUgFCAVcSEWQRAhFyAEIBdqIRggGCQAIBYPC/kBAQN/IwBBIGsiBCQAQQEhBUEAQQAoAoCUQCIGQQFqNgKAlEACQAJAQQAoAsiXQEEBRw0AQQAoAsyXQEEBaiEFDAELQQBBATYCyJdAC0EAIAU2AsyXQAJAAkAgBkEASA0AIAVBAksNACAEIAM2AhwgBCACNgIYQQAoAvSTQCIGQX9MDQBBACAGQQFqIgY2AvSTQAJAQQAoAvyTQCICRQ0AQQAoAviTQCEGIARBCGogACABKAIQEQUAIAQgBCkDCDcDECAGIARBEGogAigCDBEFAEEAKAL0k0AhBgtBACAGQX9qNgL0k0AgBUEBTQ0BCwALIAAgARDEAQAL0gEBGX8jACEBQSAhAiABIAJrIQMgAyQAIAMgADYCECADIQQgBCAAEBYgAygCACEFQQAhBiAFIQcgBiEIIAcgCEYhCUEAIQpBASELQQEhDCAJIAxxIQ0gCiALIA0bIQ5BASEPIA4hECAPIREgECARRiESQQEhEyASIBNxIRQCQAJAAkAgFEUNACADKAIAIRUgAyAVNgIUIAMoAgQhFiADKAIIIRcgAyAWNgIYIAMgFzYCHCAAIBUgFiAXEEkMAQsMAQsLQSAhGCADIBhqIRkgGSQADwvSAQEZfyMAIQFBICECIAEgAmshAyADJAAgAyAANgIQIAMhBCAEIAAQFyADKAIAIQVBACEGIAUhByAGIQggByAIRiEJQQAhCkEBIQtBASEMIAkgDHEhDSAKIAsgDRshDkEBIQ8gDiEQIA8hESAQIBFGIRJBASETIBIgE3EhFAJAAkACQCAURQ0AIAMoAgAhFSADIBU2AhQgAygCBCEWIAMoAgghFyADIBY2AhggAyAXNgIcIAAgFSAWIBcQSQwBCwwBCwtBICEYIAMgGGohGSAZJAAPC7kBAQJ/IwBBIGsiAyQAAkAgASACaiICIAFJDQAgAEEEaigCACIBQQF0IgQgAiAEIAJLGyICQQggAkEISxshAgJAAkAgAUUNACADQRBqQQhqQQE2AgAgAyABNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgAkEBIANBEGoQLAJAIAMoAgBBAUcNACADQQhqKAIAIgBFDQEgAygCBCAAEIACAAsgACADKQIENwIAIANBIGokAA8LEPgBAAu5AQECfyMAQSBrIgMkAAJAIAEgAmoiAiABSQ0AIABBBGooAgAiAUEBdCIEIAIgBCACSxsiAkEIIAJBCEsbIQICQAJAIAFFDQAgA0EQakEIakEBNgIAIAMgATYCFCADIAAoAgA2AhAMAQsgA0EANgIQCyADIAJBASADQRBqEC0CQCADKAIAQQFHDQAgA0EIaigCACIARQ0BIAMoAgQgABCAAgALIAAgAykCBDcCACADQSBqJAAPCxD4AQALxAEBFH8jACEDQTAhBCADIARrIQUgBSQAIAUgATYCGCAFIAI2AhxBGCEGIAUgBmohByAHIQggCBCGASAFKAIYIQkgBSgCHCEKQRAhCyAFIAtqIQwgDCAJIAoQKiAFKAIUIQ0gBSgCECEOQQghDyAFIA9qIRAgECAOIA0QjQEgBSgCDCERIAUoAgghEiAFIBI2AiAgBSARNgIkIAUoAiAhEyAFKAIkIRQgACAUNgIEIAAgEzYCAEEwIRUgBSAVaiEWIBYkAA8LxQEBEX8jACEDQTAhBCADIARrIQUgBSQAIAUgATYCECAFIAI2AhQgBSABNgIgIAUgAjYCJCAFIAE2AhggBSACNgIcIAUoAhghBiAFKAIcIQcgBSAHNgIMIAUgBjYCCEEIIQggBSAIaiEJIAkhCiAFIAo2AixBCCELIAUgC2ohDCAMIQ0gDSgCACEOIA0oAgQhDyAFIA4gDxC1ASAFKAIEIRAgBSgCACERIAAgEDYCBCAAIBE2AgBBMCESIAUgEmohEyATJAAPC7kBAQJ/IwBBMGsiAiQAIAFBBGohAwJAIAEoAgQNACABKAIAIQEgAkIANwIMIAJBACgC4ItANgIIIAIgAkEIajYCFCACQRhqQRBqIAFBEGopAgA3AwAgAkEYakEIaiABQQhqKQIANwMAIAIgASkCADcDGCACQRRqQZyLwAAgAkEYahAJGiADQQhqIAJBCGpBCGooAgA2AgAgAyACKQMINwIACyAAQcyMwAA2AgQgACADNgIAIAJBMGokAAu2AQECfwJAAkACQAJAAkACQAJAAkAgAkUNAEEAIQRBASEFIAFBAEgNByADKAIAIgRFDQIgAygCBCIDDQEgAQ0DDAULIAAgATYCBEEBIQVBACEEDAYLIAQgAyACIAEQ5gEhAwwCCyABRQ0CCyABIAIQ6QEhAwsgASEEDAELQQAhBCACIQMLAkAgA0UNACAAIAM2AgRBACEFDAELIAAgATYCBCACIQQLIAAgBTYCACAAQQhqIAQ2AgALtgEBAn8CQAJAAkACQAJAAkACQAJAIAJFDQBBACEEQQEhBSABQQBIDQcgAygCACIERQ0CIAMoAgQiAw0BIAENAwwFCyAAIAE2AgRBASEFQQAhBAwGCyAEIAMgAiABEOYBIQMMAgsgAUUNAgsgASACEOkBIQMLIAEhBAwBC0EAIQQgAiEDCwJAIANFDQAgACADNgIEQQAhBQwBCyAAIAE2AgQgAiEECyAAIAU2AgAgAEEIaiAENgIAC7YBARB/IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AhQgBCABNgIYIAAQnwEhBSAEIAU2AhAgBCgCECEGQQAhByAGIAdHIQgCQAJAAkACQCAIDgIAAQALIAAgARARIQkgBCAJNgIMDAELQRAhCiAEIApqIQsgCyEMIAQgDDYCHCAEKAIQIQ0gBCANNgIMDAELCyAEKAIMIQ4gBCAONgIIIAQoAgghD0EgIRAgBCAQaiERIBEkACAPDwunAQESfyMAIQNBICEEIAMgBGshBSAFJAAgBSABNgIIIAUgAjYCDCAFKAIIIQYgBSgCDCEHQRAhCCAFIAhqIQkgCSEKIAogBiAHELkBQQghCyAFIAtqIQwgDCENIAUgDTYCHCAFKAIcIQ5BECEPIAUgD2ohECAFIBAgDhAiIAUoAgQhESAFKAIAIRIgACARNgIEIAAgEjYCAEEgIRMgBSATaiEUIBQkAA8LswEBDH8jACECQSAhAyACIANrIQQgASgCACEFAkACQAJAIAUOAgABAAsgASgCBCEGIAEoAgghByAEIAY2AhggBCAHNgIcIAAgBjYCBCAAIAc2AghBACEIIAAgCDYCAAwBCyABKAIEIQkgASgCCCEKIAQgCTYCECAEIAo2AhQgBCAJNgIIIAQgCjYCDCAEKAIIIQsgBCgCDCEMIAAgCzYCBCAAIAw2AghBASENIAAgDTYCAAsPC6UBAQ1/IwAhA0EwIQQgAyAEayEFIAUkACAFIAE2AhggBSACNgIcQQghBiAFIAZqIQcgByABIAIQKSAFKAIMIQggBSgCCCEJIAUgCTYCKCAFIAg2AiwgBSAJIAgQtQEgBSgCBCEKIAUoAgAhCyAFIAs2AhAgBSAKNgIUIAUoAhAhDCAFKAIUIQ0gACANNgIEIAAgDDYCAEEwIQ4gBSAOaiEPIA8kAA8LnAEBD38jACEDQTAhBCADIARrIQUgBSQAIAUgATYCICAFIAI2AiQgARDNASEGIAUgBjYCKCAFIAI2AixBECEHIAUgB2ohCCAIIQkgCSAGIAIgAhCRAUEIIQogBSAKaiELQRAhDCAFIAxqIQ0gCyANEAsgBSgCDCEOIAUoAgghDyAAIA42AgQgACAPNgIAQTAhECAFIBBqIREgESQADwudAQEOfyMAIQJBMCEDIAIgA2shBCAEJAAgBCAANgIYIAQgATYCHEEIIQUgBCAFaiEGIAYgACABEEMgBCgCCCEHIAQoAgwhCCAEIAg2AhQgBCAHNgIQIAQoAhAhCSAEKAIUIQogBCAJNgIoIAQgCjYCLCAJIAoQEkEQIQsgBCALaiEMIAwhDSANEJUBELgBQTAhDiAEIA5qIQ8gDyQADwudAQEMfyMAIQJBMCEDIAIgA2shBCAEJAAgBCABNgIMIAQoAhAhBSAEKAIUIQYgBCAGNgIEIAQgBTYCACAEIQcgBCAHNgIsIAQhCEEBIQkgASAIIAkQeiAEKAIAIQogBCgCBCELIAQgCjYCGCAEIAs2AhwgBCAKNgIgIAQgCzYCJCAAIAs2AgQgACAKNgIAQTAhDCAEIAxqIQ0gDSQADwufAQEOfyMAIQFBICECIAEgAmshAyADIAA2AgxBACEEIAMgBDoAF0EBIQUgAyAFOgAXIAMoAgwhBiAGIARHIQcCQAJAAkAgBw4CAAEAC0EAIQggAyAIOgAXQQAhCSADIAk2AhAMAQsgAygCDCEKIAMgCjYCHCADIAo2AhALIAMtABchC0EBIQwgCyAMcSENAkAgDUUNAAsgAygCECEOIA4PC5MBAQN/IwBBgAFrIgIkACAAKAIAIQNBACEAA0AgAiAAakH/AGogA0EPcSIEQTByIARB1wBqIARBCkkbOgAAIABBf2ohACADQQR2IgMNAAsCQCAAQYABaiIDQYEBSQ0AIANBgAFBnJHAABBaAAsgAUEBQayRwABBAiACIABqQYABakEAIABrEAghACACQYABaiQAIAALkgEBA38jAEGAAWsiAiQAIAAoAgAhA0EAIQADQCACIABqQf8AaiADQQ9xIgRBMHIgBEE3aiAEQQpJGzoAACAAQX9qIQAgA0EEdiIDDQALAkAgAEGAAWoiA0GBAUkNACADQYABQZyRwAAQWgALIAFBAUGskcAAQQIgAiAAakGAAWpBACAAaxAIIQAgAkGAAWokACAAC5IBAg1/A34jACEDQSAhBCADIARrIQUgBSQAIAUgATYCHCAAIAEQDiAFIQYgAikCACEQIAYgEDcCAEEQIQcgBiAHaiEIIAIgB2ohCSAJKQIAIREgCCARNwIAQQghCiAGIApqIQsgAiAKaiEMIAwpAgAhEiALIBI3AgAgBSENIAEgDRBYQSAhDiAFIA5qIQ8gDyQADwuTAQENfyMAIQNBMCEEIAMgBGshBSAFJAAgBSABNgIYIAUgAjYCHEEQIQYgBSAGaiEHIAcgASACEDEgBSgCFCEIIAUoAhAhCSAFIAk2AiggBSAINgIsQQghCiAFIApqIQsgCyAJIAgQSiAFKAIMIQwgBSgCCCENIAAgDDYCBCAAIA02AgBBMCEOIAUgDmohDyAPJAAPC40BARF/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgggBCABNgIMQQAhBSABIAVIIQYgACABaiEHIAcgAEghCCAGIAhzIQlBASEKIAkgCnEhCwJAIAsNAEEQIQwgBCAMaiENIA0kACAHDwtBwIDAACEOIA4hD0EcIRBBpIDAACERIBEhEiAPIBAgEhCWAQALjQEBDn8jACEDQSAhBCADIARrIQUgBSQAIAUgATYCGCAFIAI2AhwgARDSASEGQRAhByAFIAdqIQggCCAGIAIQViAFKAIUIQkgBSgCECEKQQghCyAFIAtqIQwgDCAKIAkQjwEgBSgCDCENIAUoAgghDiAAIA02AgQgACAONgIAQSAhDyAFIA9qIRAgECQADwukAQEDfyMAQRBrIgEkACAAKAIAIgJBFGooAgAhAwJAAkACQAJAIAIoAgQOAgABAwsgAw0CQbSLwAAhAkEAIQMMAQsgAw0BIAIoAgAiAigCBCEDIAIoAgAhAgsgASADNgIEIAEgAjYCACABQbiMwAAgACgCBBCLAiAAKAIIECQACyABQQA2AgQgASACNgIAIAFBpIzAACAAKAIEEIsCIAAoAggQJAALiAEBE38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDEEBIQRBACEFIAQhBiAFIQcgBiAHRiEIQQEhCSAIIAlxIQoCQCAKDQBBACELIAAgC3YhDEEQIQ0gAyANaiEOIA4kACAMDwtBwIHAACEPIA8hEEEZIRFBqIHAACESIBIhEyAQIBEgExCWAQALjAEBDH8jACEDQSAhBCADIARrIQUgBSQAIAUgATYCECAFIAI2AhQgBSgCECEGIAUoAhQhByAFIAY2AhggBSAHNgIcQQghCCAFIAhqIQkgCSAGIAcQtwEgBSgCDCEKIAUoAgghCyAAIAs2AgQgACAKNgIIQQEhDCAAIAw2AgBBICENIAUgDWohDiAOJAAPC40BAQ1/IwAhAUEQIQIgASACayEDIAMkACAAKAIAIQQCQAJAIAQOAgABAAtBECEFIAMgBWohBiAGJAAPC0EIIQcgACAHaiEIIAgoAgAhCUEAIQogCSAKRyELAkACQCALDgIAAQALEPgBAAsgACgCBCEMIAAoAgghDSADIAw2AgggAyANNgIMIAwgDRCAAgALigEBC38jACECQSAhAyACIANrIQQgBCQAIAQgATYCDCABKAIAIQUgASgCBCEGIAQgBTYCECAEIAY2AhQgBCAFNgIYIAQgBjYCHCAEKAIYIQcgBCgCHCEIIAQgByAIEFUgBCgCBCEJIAQoAgAhCiAAIAk2AgQgACAKNgIAQSAhCyAEIAtqIQwgDCQADwuRAQEKfyMAIQNBMCEEIAMgBGshBSAFIAE2AgggBSACNgIMIAUoAgghBiAGRSEHAkACQAJAIAcOAgABAAsgBSgCCCEIIAUoAgwhCSAFIAg2AiggBSAJNgIsIAUgCDYCECAFIAk2AhQMAQtBACEKIAUgCjYCEAsgBSgCECELIAUoAhQhDCAAIAw2AgQgACALNgIADwt9AQ1/IwAhAkEgIQMgAiADayEEIAQkACAEIAE2AhxBECEFIAQgBWohBiAGIAEQbiAEKAIUIQcgBCgCECEIQQghCSAEIAlqIQogCiAIIAcQjgEgBCgCDCELIAQoAgghDCAAIAs2AgQgACAMNgIAQSAhDSAEIA1qIQ4gDiQADwuAAQELfyMAIQNBICEEIAMgBGshBSAFJAAgBSABNgIQIAUgAjYCFEEIIQYgBSAGaiEHIAcgASACEDIgBSgCDCEIIAUoAgghCSAFIAk2AhggBSAINgIcIAUoAhghCiAFKAIcIQsgACALNgIEIAAgCjYCAEEgIQwgBSAMaiENIA0kAA8LeQENfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAAQhwEhBEF/IQUgBCAFcyEGQQEhByAGIAdxIQgCQAJAIAgNAEEAIQkgAyAJNgIIDAELIAAQvgEhCiADIAo2AggLIAMoAgghC0EQIQwgAyAMaiENIA0kACALDwt6Ag1/AX4jACEBQRAhAiABIAJrIQMgAyQAIAMhBCAEELIBIAMhBSAFKQIAIQ4gACAONwIAQQghBiAAIAZqIQcgBSAGaiEIIAgoAgAhCSAHIAk2AgBBACEKIAAgCjYCDEEAIQsgACALNgIQQRAhDCADIAxqIQ0gDSQADwt/AQF/IwBBwABrIgUkACAFIAE2AgwgBSAANgIIIAUgAzYCFCAFIAI2AhAgBUEsakECNgIAIAVBPGpBHDYCACAFQgI3AhwgBUHwkMAANgIYIAVBHTYCNCAFIAVBMGo2AiggBSAFQRBqNgI4IAUgBUEIajYCMCAFQRhqIAQQuwEAC3cBCn8jACEEQRAhBSAEIAVrIQYgBiQAIAYgAjYCACAGIAM2AgQgBiAANgIIIAYgATYCDCAGIQcgBxDGASEIAkACQCAIDQAMAQsgARDSASEJIAYoAgAhCiAGKAIEIQsgCSAKIAsQcAtBECEMIAYgDGohDSANJAAPC3MBCn8jACEEQSAhBSAEIAVrIQYgBiQAIAYgATYCFCAGIAI2AhggBiADNgIcQQAhB0EIIQggBiAIaiEJIAkgASACIAMgBxAMIAYoAgwhCiAGKAIIIQsgACAKNgIEIAAgCzYCAEEgIQwgBiAMaiENIA0kAA8LdwEKfyMAIQRBECEFIAQgBWshBiAGJAAgBiACNgIAIAYgAzYCBCAGIAA2AgggBiABNgIMIAYhByAHEMkBIQgCQAJAIAgNAAwBCyABENIBIQkgBigCACEKIAYoAgQhCyAJIAogCxBzC0EQIQwgBiAMaiENIA0kAA8LdgEJfyMAIQNBICEEIAMgBGshBSAFJAAgBSABNgIQIAUgAjYCFCAFIAEgAhCMASAFKAIEIQYgBSgCACEHIAUgBzYCCCAFIAY2AgwgBSgCCCEIIAUoAgwhCSAAIAk2AgQgACAINgIAQSAhCiAFIApqIQsgCyQADwt2AQl/IwAhA0EgIQQgAyAEayEFIAUkACAFIAE2AhAgBSACNgIUIAUgASACEIsBIAUoAgQhBiAFKAIAIQcgBSAHNgIIIAUgBjYCDCAFKAIIIQggBSgCDCEJIAAgCTYCBCAAIAg2AgBBICEKIAUgCmohCyALJAAPC28BDX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAEKgBIQQgACgCCCEFIAQhBiAFIQcgBiAHSyEIQQEhCSAIIAlxIQoCQAJAIAoNAAwBCyAAKAIIIQsgACALEF8LQRAhDCADIAxqIQ0gDSQADwtsAQ5/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgggBCABNgIMQQghBSAEIAVqIQYgBiEHIAcQxgEhCEEIIQkgBCAJaiEKIAohCyALEJcBIQwgCCAMEOoBIQ1BECEOIAQgDmohDyAPJAAgDQ8LbAEOfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIIIAQgATYCDEEIIQUgBCAFaiEGIAYhByAHEMYBIQhBCCEJIAQgCWohCiAKIQsgCxCXASEMIAggDBDpASENQRAhDiAEIA5qIQ8gDyQAIA0PC3ABCn8jACECQSAhAyACIANrIQQgBCQAIAQgADYCECAEIAE2AhRBCCEFIAQgBWohBiAGIAAgARC2ASAEKAIMIQcgBCgCCCEIIAQgCDYCGCAEIAc2AhwgCCAHEKoBIQlBICEKIAQgCmohCyALJAAgCQ8LbAEOfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIIIAQgATYCDEEIIQUgBCAFaiEGIAYhByAHEMkBIQhBCCEJIAQgCWohCiAKIQsgCxCcASEMIAggDBDpASENQRAhDiAEIA5qIQ8gDyQAIA0PC24BCn8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCBCAFIAE2AgggBSACNgIMIAEgAhB5IQYgBhDSASEHIAcQwAEhCCAAIAg2AgAgASACEE8hCSAJED0hCiAAIAo2AgRBECELIAUgC2ohDCAMJAAPC24BCn8jACECQSAhAyACIANrIQQgBCQAIAQgADYCECAEIAE2AhRBCCEFIAQgBWohBiAGIAAgARC2ASAEKAIMIQcgBCgCCCEIIAQgCDYCGCAEIAc2AhwgCBC+ASEJQSAhCiAEIApqIQsgCyQAIAkPC2sBCX8jACEDQSAhBCADIARrIQUgBSQAIAUgATYCFCAFIAI2AhggBSABNgIcQQghBiAFIAZqIQcgByABIAIQZyAFKAIMIQggBSgCCCEJIAAgCDYCBCAAIAk2AgBBICEKIAUgCmohCyALJAAPC3MBBn8jACEFQSAhBiAFIAZrIQcgByABNgIQIAcgAjYCFCAHIAM2AhggByAENgIcQQAhCCAHIAg2AgggACABNgIAIAAgAjYCBCAHKAIIIQkgBygCDCEKIAAgCTYCCCAAIAo2AgwgACADNgIQIAAgBDYCFA8LbwEJfyMAIQNBECEEIAMgBGshBSAFJAAgBSABNgIIIAUgAjYCDCABIAIQxwEhBiAGEM4BIQcgBSAHNgIAIAUgAjYCBCAFKAIAIQggBSgCBCEJIAAgCTYCBCAAIAg2AgBBECEKIAUgCmohCyALJAAPC2sBCX8jACEDQSAhBCADIARrIQUgBSQAIAUgATYCFCAFIAI2AhggBSABNgIcQQghBiAFIAZqIQcgByABIAIQaSAFKAIMIQggBSgCCCEJIAAgCDYCBCAAIAk2AgBBICEKIAUgCmohCyALJAAPC2sBCX8jACEDQSAhBCADIARrIQUgBSQAIAUgATYCFCAFIAI2AhggBSABNgIcQQghBiAFIAZqIQcgByABIAIQaiAFKAIMIQggBSgCCCEJIAAgCDYCBCAAIAk2AgBBICEKIAUgCmohCyALJAAPC2sCCX8DfiMAIQJBECEDIAIgA2shBCAEIAA2AgwgASkCACELIAAgCzcCAEEQIQUgACAFaiEGIAEgBWohByAHKQIAIQwgBiAMNwIAQQghCCAAIAhqIQkgASAIaiEKIAopAgAhDSAJIA03AgAPC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakEaNgIAIANCAjcCDCADQdCPwAA2AgggA0EaNgIkIAMgA0EgajYCGCADIAM2AiggAyADQQRqNgIgIANBCGogAhC7AQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQRo2AgAgA0ICNwIMIANBrJPAADYCCCADQRo2AiQgAyADQSBqNgIYIAMgA0EEajYCKCADIAM2AiAgA0EIaiACELsBAAtkAQJ/IwBBIGsiAiQAIAFBHGooAgAhAyABKAIYIQEgAkEIakEQaiAAQRBqKQIANwMAIAJBCGpBCGogAEEIaikCADcDACACIAApAgA3AwggASADIAJBCGoQCSEAIAJBIGokACAAC2kBCX8jACECQSAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AhAgABDQASEFIAQgBTYCFCABENABIQYgBCAGNgIYIAUgBhA6IQcgBCAHNgIcIAcQowEhCEEgIQkgBCAJaiEKIAokACAIDwtoAQp/IwAhBEEQIQUgBCAFayEGIAYkACAGIAE2AgAgBiACNgIEIAYgADYCCCAGIAM2AgwgBiEHIAcQxgEhCCAGIQkgCRCXASEKIAAgCCAKIAMQ5gEhC0EQIQwgBiAMaiENIA0kACALDwtoAQp/IwAhBEEQIQUgBCAFayEGIAYkACAGIAE2AgAgBiACNgIEIAYgADYCCCAGIAM2AgwgBiEHIAcQyQEhCCAGIQkgCRCcASEKIAAgCCAKIAMQ5gEhC0EQIQwgBiAMaiENIA0kACALDwtfAQt/IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AhggBCABNgIcQQghBSAEIAVqIQYgBiEHIAcgACABEAdBCCEIIAQgCGohCSAJIQogChA/QSAhCyAEIAtqIQwgDCQADwtnAQd/IwAhBEEgIQUgBCAFayEGIAYkACAGIAE2AgwgBiACNgIQIAYgAzYCFCAGIAEgAxBkIAYoAgQhByAGKAIAIQggACAINgIAIAAgBzYCBCAAIAI2AghBICEJIAYgCWohCiAKJAAPC2MBAX8jAEEgayICJAAgAiAAKAIANgIEIAJBCGpBEGogAUEQaikCADcDACACQQhqQQhqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpBnIvAACACQQhqEAkhASACQSBqJAAgAQtjAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQQhqQRBqIAFBEGopAgA3AwAgAkEIakEIaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQeyMwAAgAkEIahAJIQEgAkEgaiQAIAELZgEIfyMAIQNBECEEIAMgBGshBSAFJAAgBSABNgIIIAUgAjYCDCACEL0BIQYgBSABNgIAIAUgBjYCBCAFKAIAIQcgBSgCBCEIIAAgCDYCBCAAIAc2AgBBECEJIAUgCWohCiAKJAAPC2YBCH8jACEDQSAhBCADIARrIQUgBSQAIAUgATYCECAFIAI2AhQgARDAASEGIAUgBjYCCCAFIAI2AgwgBSgCCCEHIAUoAgwhCCAAIAg2AgQgACAHNgIAQSAhCSAFIAlqIQogCiQADwtmAQh/IwAhA0EQIQQgAyAEayEFIAUkACAFIAE2AgggBSACNgIMIAIQvwEhBiAFIAE2AgAgBSAGNgIEIAUoAgAhByAFKAIEIQggACAINgIEIAAgBzYCAEEQIQkgBSAJaiEKIAokAA8LaAEHfyMAIQNBICEEIAMgBGshBSAFIAE2AhAgBSACNgIUIAUgAjYCGCAFKAIYIQYgBSABNgIcIAUoAhwhByAFIAc2AgggBSAGNgIMIAUoAgghCCAFKAIMIQkgACAJNgIEIAAgCDYCAA8LaAEHfyMAIQNBICEEIAMgBGshBSAFIAE2AhggBSACNgIcIAUgATYCECAFIAI2AhQgBSgCECEGIAUoAhQhByAFIAY2AgggBSAHNgIMIAUoAgghCCAFKAIMIQkgACAJNgIEIAAgCDYCAA8LaAEHfyMAIQNBICEEIAMgBGshBSAFIAE2AhggBSACNgIcIAUgATYCECAFIAI2AhQgBSgCECEGIAUoAhQhByAFIAY2AgggBSAHNgIMIAUoAgghCCAFKAIMIQkgACAJNgIEIAAgCDYCAA8LaAEHfyMAIQNBICEEIAMgBGshBSAFIAE2AhggBSACNgIcIAUgATYCECAFIAI2AhQgBSgCECEGIAUoAhQhByAFIAY2AgggBSAHNgIMIAUoAgghCCAFKAIMIQkgACAJNgIEIAAgCDYCAA8LaAEHfyMAIQNBICEEIAMgBGshBSAFIAE2AhggBSACNgIcIAUgATYCECAFIAI2AhQgBSgCECEGIAUoAhQhByAFIAY2AgggBSAHNgIMIAUoAgghCCAFKAIMIQkgACAJNgIEIAAgCDYCAA8LYQEJfyMAIQJBECEDIAIgA2shBCAEJAAgBCABNgIMIAEoAgAhBSABKAIEIQYgBCAFIAYQtAEgBCgCBCEHIAQoAgAhCCAAIAc2AgQgACAINgIAQRAhCSAEIAlqIQogCiQADwtfAQd/IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AgggBCABNgIMIAQgACABEC8gBCgCBCEFIAQoAgAhBiAEIAY2AhggBCAFNgIcIAYgBRAAQSAhByAEIAdqIQggCCQADwtgAQh/IwAhA0EQIQQgAyAEayEFIAUkACAFIAE2AgggBSACNgIMIAEQ1gEhBiAFIAYgAhBoIAUoAgQhByAFKAIAIQggACAHNgIEIAAgCDYCAEEQIQkgBSAJaiEKIAokAA8LYAEJfyMAIQJBECEDIAIgA2shBCAEJAAgBCABNgIMIAEQlAEhBSABKAIIIQYgBCAFIAYQdiAEKAIEIQcgBCgCACEIIAAgBzYCBCAAIAg2AgBBECEJIAQgCWohCiAKJAAPC1sBCn8jACECQRAhAyACIANrIQQgBCQAIAQgADYCCCAEIAE2AgwgACgCACEFIAAoAgQhBiAFIAYgARCCAiEHQQEhCCAHIAhxIQlBECEKIAQgCmohCyALJAAgCQ8LWwEJfyMAIQNBECEEIAMgBGshBSAFJAAgBSABNgIAIAUgAjYCBCAFIAA2AgwgBSEGIAYQxgEhByAFIQggCBCXASEJIAAgByAJEPIBQRAhCiAFIApqIQsgCyQADwtiAQh/IwAhAUEgIQIgASACayEDIAMgADYCCCADKAIIIQQgBEUhBQJAAkACQCAFDgIAAQALIAMoAgghBiADIAY2AhwgAyAGNgIMDAELQQAhByADIAc2AgwLIAMoAgwhCCAIDwtXAQt/IwAhAkEQIQMgAiADayEEIAQgADYCBCAEIAE2AgggACEFIAEhBiAFIAZGIQdBASEIIAcgCHEhCSAEIAk6AA8gBC0ADyEKQQEhCyAKIAtxIQwgDA8LWwEJfyMAIQNBECEEIAMgBGshBSAFJAAgBSABNgIAIAUgAjYCBCAFIAA2AgwgBSEGIAYQyQEhByAFIQggCBCcASEJIAAgByAJEPIBQRAhCiAFIApqIQsgCyQADwthAQh/IwAhAUEQIQIgASACayEDIAMgADYCCCAAKAIAIQQCQAJAAkAgBA4CAAEAC0EAIQUgAyAFNgIEDAELQQQhBiAAIAZqIQcgAyAHNgIMIAMgBzYCBAsgAygCBCEIIAgPC1kBB38jACEDQRAhBCADIARrIQUgBSQAIAUgATYCCCAFIAI2AgwgBSABIAIQUyAFKAIEIQYgBSgCACEHIAAgBjYCBCAAIAc2AgBBECEIIAUgCGohCSAJJAAPC1kBB38jACEDQRAhBCADIARrIQUgBSQAIAUgATYCCCAFIAI2AgwgBSABIAIQbSAFKAIEIQYgBSgCACEHIAAgBjYCBCAAIAc2AgBBECEIIAUgCGohCSAJJAAPC08BC38jACEBQSAhAiABIAJrIQMgAyQAQQghBCADIARqIQUgBSEGIAYQRUEIIQcgAyAHaiEIIAghCSAAIAkQDUEgIQogAyAKaiELIAskAA8LVAEHfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIIIAQgATYCDCAEIAAgARC0ASAEKAIEGiAEKAIAIQUgBRDAASEGQRAhByAEIAdqIQggCCQAIAYPC1QBB38jACECQRAhAyACIANrIQQgBCQAIAQgADYCCCAEIAE2AgwgBCAAIAEQtgEgBCgCBBogBCgCACEFIAUQvgEhBkEQIQcgBCAHaiEIIAgkACAGDwtRAQd/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgQgBSABNgIIIAUgAjYCDEEDIQYgAiAGdCEHIAEgACAHEKsBGkEQIQggBSAIaiEJIAkkAA8LUQEHfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIEIAUgATYCCCAFIAI2AgxBACEGIAIgBmwhByABIAAgBxCrARpBECEIIAUgCGohCSAJJAAPC1EBCX8jACECQRAhAyACIANrIQQgBCQAIAQgADYCCCAEIAE2AgwgACgCACEFIAUgARAjIQZBASEHIAYgB3EhCEEQIQkgBCAJaiEKIAokACAIDwtRAQd/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgQgBSABNgIIIAUgAjYCDEEAIQYgAiAGdCEHIAEgACAHEKsBGkEQIQggBSAIaiEJIAkkAA8LUQEHfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIEIAUgATYCCCAFIAI2AgxBGCEGIAIgBmwhByABIAAgBxCrARpBECEIIAUgCGohCSAJJAAPC1ABB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAEJMBIQQgACgCCCEFIAMgBCAFEFcgAygCBBogAygCABpBECEGIAMgBmohByAHJAAPC1ABB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAEJIBIQQgACgCCCEFIAMgBCAFEFYgAygCBBogAygCABpBECEGIAMgBmohByAHJAAPC1EBAn8CQCAAKAIAIgNBBGooAgAgA0EIaiIEKAIAIgBrIAJPDQAgAyAAIAIQJyAEKAIAIQALIAMoAgAgAGogASACEKsBGiAEIAAgAmo2AgBBAAtRAQJ/AkAgACgCACIDQQRqKAIAIANBCGoiBCgCACIAayACTw0AIAMgACACECggBCgCACEACyADKAIAIABqIAEgAhCrARogBCAAIAJqNgIAQQALUQEIfyMAIQFBICECIAEgAmshAyADJAAQ4gFBACEEIAMgBDYCCCADKAIIIQUgAygCDCEGIAAgBjYCBCAAIAU2AgBBICEHIAMgB2ohCCAIJAAPC00BCH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAKAIAIQQCQCAERQ0AQQQhBSAAIAVqIQYgBhCsAQtBECEHIAMgB2ohCCAIJAAPC1MBB38jACECQSAhAyACIANrIQQgBCABNgIUIAEoAgAhBSABKAIEIQYgBCAFNgIIIAQgBjYCDCAEKAIIIQcgBCgCDCEIIAAgCDYCBCAAIAc2AgAPC0kBCH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCBCADIQQgAyAENgIMIAMhBUEBIQYgACAFIAYQe0EQIQcgAyAHaiEIIAgkAA8LRwEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQAhBCAAIAQQciEFQQEhBiAFIAZxIQdBECEIIAMgCGohCSAJJAAgBw8LRwEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQAhBCAAIAQQciEFQQEhBiAFIAZxIQdBECEIIAMgCGohCSAJJAAgBw8LVAEBfwJAAkACQCABQYCAxABGDQBBASEEIAAoAhggASAAQRxqKAIAKAIQEQYADQELIAINAUEAIQQLIAQPCyAAKAIYIAIgAyAAQRxqKAIAKAIMEQgAC00BBH8jACECQSAhAyACIANrIQQgBCAANgIIIAQgATYCDCAEIAA2AhAgBCABNgIUIAQgADYCGCAEIAE2AhwgBCgCGBogBCgCHCEFIAUPC0wBBX8jACEDQRAhBCADIARrIQUgBSABNgIIIAUgAjYCDCAFIAE2AgAgBSACNgIEIAUoAgAhBiAFKAIEIQcgACAHNgIEIAAgBjYCAA8LTAEFfyMAIQNBECEEIAMgBGshBSAFIAE2AgggBSACNgIMIAUgATYCACAFIAI2AgQgBSgCACEGIAUoAgQhByAAIAc2AgQgACAGNgIADwtMAQV/IwAhA0EQIQQgAyAEayEFIAUgATYCCCAFIAI2AgwgBSABNgIAIAUgAjYCBCAFKAIAIQYgBSgCBCEHIAAgBzYCBCAAIAY2AgAPC0wBBX8jACEDQRAhBCADIARrIQUgBSABNgIAIAUgAjYCBCAFIAE2AgggBSACNgIMIAUoAgghBiAFKAIMIQcgACAHNgIEIAAgBjYCAA8LTAEFfyMAIQNBECEEIAMgBGshBSAFIAE2AgggBSACNgIMIAUgATYCACAFIAI2AgQgBSgCACEGIAUoAgQhByAAIAc2AgQgACAGNgIADwtGAQd/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgggBCABNgIMIAAgARBSIQUgBRDSASEGQRAhByAEIAdqIQggCCQAIAYPC0YBBX8jACEEQRAhBSAEIAVrIQYgBiQAIAYgATYCBCAGIAI2AgggBiADNgIMIAAgASACIAMQYEEQIQcgBiAHaiEIIAgkAA8LRAEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIIIAAQmgEhBCADIAQ2AgwgBBCHARpBECEFIAMgBWohBiAGJAAgBA8LRAEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIIIAAQmQEhBCADIAQ2AgwgBBCIARpBECEFIAMgBWohBiAGJAAgBA8LRAEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIIIAAQmgEhBCADIAQ2AgwgBBCHARpBECEFIAMgBWohBiAGJAAgBA8LQgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAAoAgAhBCAAKAIEIQUgBCAFECBBECEGIAMgBmohByAHJAAPC0gBAX8jAEEgayIDJAAgA0EUakEANgIAIANBjI/AADYCECADQgE3AgQgAyABNgIcIAMgADYCGCADIANBGGo2AgAgAyACELsBAAs+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgACgCBCEEIAQQzwEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABCXASEEIAQQvgEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgACgCACEEIAQQ1AEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgACgCACEEIAQQ1QEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABDVASEEIAQQvgEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgACgCBCEEIAQQ0wEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABDUASEEIAQQwAEhBUEQIQYgAyAGaiEHIAckACAFDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABDVASEEIAQQwAEhBUEQIQYgAyAGaiEHIAckACAFDws9AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgggAyAANgIMIAAQdCEEQRAhBSADIAVqIQYgBiQAIAQPCz4BBX8jACECQRAhAyACIANrIQQgBCQAIAQgADYCCCAEIAE2AgwgACABEMoBIQUgACABEIoBIQYgBSAGEAEAC0cBAn8gASgCBCECIAEoAgAhAwJAQQhBBBDpASIBDQBBCEEEEIACAAsgASACNgIEIAEgAzYCACAAQdyMwAA2AgQgACABNgIACzkBAX8gAkEQdkAAIQMgAEEANgIIIABBACACQYCAfHEgA0F/RiICGzYCBCAAQQAgA0EQdCACGzYCAAs3AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABDRASEEQRAhBSADIAVqIQYgBiQAIAQPCzgBBX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAEIABIAAQrgFBECEEIAMgBGohBSAFJAAPCzcBBX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAEH8gABCvAUEQIQQgAyAEaiEFIAUkAA8LNwEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAAQmwEhBEEQIQUgAyAFaiEGIAYkACAEDwtBAQN/IwBBEGsiASQAIAAQjAJBhIzAABDkASECIAAQiwIQ4wEhAyABIAI2AgggASAANgIEIAEgAzYCACABELoBAAs5AQV/IwAhAUEQIQIgASACayEDIAMgADYCBCADIAA2AgwgACgCBCEEIAMgBDYCCCADKAIIIQUgBQ8LNQEFfyMAIQJBECEDIAIgA2shBCAEJAAgBCABNgIMIAAgARECAEEQIQUgBCAFaiEGIAYkAA8LOQEEfyMAIQJBECEDIAIgA2shBCAEIAA2AgggBCABNgIMIAQgADYCACAEIAE2AgQgBCgCBCEFIAUPCzYBAX8CQCACRQ0AIAAhAwNAIAMgAS0AADoAACABQQFqIQEgA0EBaiEDIAJBf2oiAg0ACwsgAAszAQV/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABCxAUEQIQQgAyAEaiEFIAUkAA8LMwEFfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAAQpAFBECEEIAMgBGohBSAFJAAPCzIBBX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAECVBECEEIAMgBGohBSAFJAAPCzIBBX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAECZBECEEIAMgBGohBSAFJAAPCzMBBX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCAAEKUBQRAhBCADIARqIQUgBSQADwszAQV/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgABCwAUEQIQQgAyAEaiEFIAUkAA8LOAEFf0EAIQEgASgChItAIQJBACEDIAMoAoiLQCEEIAAgAjYCACAAIAQ2AgRBACEFIAAgBTYCCA8LNAACQCAAIAEQECIBRQ0AAkBBhJTAABCXAkUNACABEIcCEPQBDQELIAFBACAAELwBGgsgAQswAQN/IwAhA0EQIQQgAyAEayEFIAUgATYCCCAFIAI2AgwgACACNgIEIAAgATYCAA8LMAEDfyMAIQNBECEEIAMgBGshBSAFIAE2AgggBSACNgIMIAAgAjYCBCAAIAE2AgAPCzABA38jACEDQRAhBCADIARrIQUgBSABNgIIIAUgAjYCDCAAIAI2AgQgACABNgIADwswAQN/IwAhA0EQIQQgAyAEayEFIAUgATYCCCAFIAI2AgwgACACNgIEIAAgATYCAA8LKgEFfyMAIQBBECEBIAAgAWshAiACJAAQ4QFBECEDIAIgA2ohBCAEJAAPCy0BBH8jACEDQRAhBCADIARrIQUgBSABNgIIIAUgAjYCDEEAIQYgACAGNgIADwssAQF/IwBBEGsiASQAIAFBCGogAEEIaigCADYCACABIAApAgA3AwAgARA8AAs1AQF/IwBBEGsiAiQAIAIgATYCDCACIAA2AgggAkGMj8AANgIEIAJBjI/AADYCACACEKcBAAssAQF/AkAgAkUNACAAIQMDQCADIAE6AAAgA0EBaiEDIAJBf2oiAg0ACwsgAAsrAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADIAA2AgggAygCCCEEIAQPCysBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMgADYCCCADKAIIIQQgBA8LKwEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAyAANgIIIAMoAgghBCAEDwsrAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADIAA2AgggAygCCCEEIAQPCycAIAAgACgCBEEBcSABckECcjYCBCAAIAFqIgAgACgCBEEBcjYCBAsnAQF/AkAgACgCACIBRQ0AIABBBGooAgAiAEUNACABIABBARDyAQsLJwEBfwJAIAAoAgQiAUUNACAAQQhqKAIAIgBFDQAgASAAQQEQ8gELCyUBAX8jAEEQayICJAAgAiABNgIMIAIgADYCCCACQQhqEJACGgALJgECf0EAIQICQCAAKAIAIgMgAUsNACADIAAoAgRqIAFLIQILIAILJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgACgCACEEIAQPCyQBA38jACECQRAhAyACIANrIQQgBCAANgIIIAQgATYCDCAADwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCAAKAIIIQQgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgACgCACEEIAQPCyQBA38jACECQRAhAyACIANrIQQgBCAANgIIIAQgATYCDCAADwsjACACIAIoAgRBfnE2AgQgACABQQFyNgIEIAAgAWogATYCAAseACAAIAFBA3I2AgQgACABaiIAIAAoAgRBAXI2AgQLHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LHQEDfyMAIQFBECECIAEgAmshAyADIAA2AgwgAA8LGwEDfyMAIQFBECECIAEgAmshAyADIAA2AgwPCxsBA38jACEBQRAhAiABIAJrIQMgAyAANgIMDwseAQR/QdiTwAAhACAAIQFBBCECIAEgAhAuIQMgAw8LHAEBfwJAIAAoAhAiAQ0AIABBFGooAgAhAQsgAQsbAQN/QZiFwAAhACAAIQFBFiECIAEgAhCgAQALGgEBfyAAIAFBACgC8JNAIgJBCCACGxEFAAALEgBBAEEZIABBAXZrIABBH0YbCxYAIAAgAUEBcjYCBCAAIAFqIAE2AgALHAAgASgCGEG8k8AAQQUgAUEcaigCACgCDBEIAAscACABKAIYQcGTwABBCyABQRxqKAIAKAIMEQgACxMBAn8jACEAQRAhASAAIAFrGg8LEwECfyMAIQBBECEBIAAgAWsaDwsbAAJAIAANAEG0i8AAQStBlIzAABCWAQALIAALGAACQCAADQBBtIvAAEErIAEQlgEACyAACxAAIAAgAWpBf2pBACABa3ELEwEBfyAAIAEgAiADEAUhBCAEDwsPACAAQQF0IgBBACAAa3ILFAAgACgCACABIAAoAgQoAgwRBgALEAEBfyAAIAEQgwIhAiACDwsQAQF/IAAgARCzASECIAIPCxMAIABB3IzAADYCBCAAIAE2AgALDQAgAC0ABEECcUEBdgsPACAAIAAoAgRBfnE2AgQLDQAgACgCBEEDcUEBRwsQACABIAAoAgAgACgCBBAECw0AIAAtAABBEHFBBHYLDQAgAC0AAEEgcUEFdgsMACAAIAEgAhCIAg8LCgBBACAAayAAcQsLACAALQAEQQNxRQsMACAAIAFBA3I2AgQLDQAgACgCACAAKAIEagsNACAAKAIAIAEQFEEACxIAQeiOwABBEUH8jsAAEJYBAAsNACAAKAIAGgN/DAALCw0AIAA1AgBBASABEBgLCgAgACABEIECDwsKACAAKAIEQXhxCwoAIAAoAgRBAXELCgAgACgCDEEBcQsKACAAKAIMQQF2CwoAIAAgARD7AQALCgAgACABENwBAAsKACACIAAgARAECwgAIAAgARAQCwcAIAAgAWoLBwAgACABawsHACAAQQhqCwcAIABBeGoLBgAgABADCwcAIAAoAgwLBwAgACgCCAsHACAAKAIICwcAIAAoAgwLAwAACwwAQtat9rmVsbevKQsNAEL0+Z7m7qOq+f4ACwMAAAsEAEEHCwQAIAALBABBAAsEAEEACwQAQQALBABBAAsEAEEBCwYAQYCABAsMAEKqkq2it6bAzmALAgALAgALAgALAgALC9aTgIAAAQBBgIDAAAvME0hlbGxvLCAhAAAQAAcAAAAHABAAAQAAAHNyYy9saWIucnMAABgAEAAKAAAADwAAAAMAAAAAAAAAAAAAAAAAAABhdHRlbXB0IHRvIGFkZCB3aXRoIG92ZXJmbG93L3J1c3RjL2M4ZGZjZmUwNDZhNzY4MDU1NGJmNGViNjEyYmFkODQwZTc2MzFjNGIvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc1wAEABMAAAAlgEAAAkAAAAAAAAAAAAAAGF0dGVtcHQgdG8gZGl2aWRlIGJ5IHplcm9UcmllZCB0byBzaHJpbmsgdG8gYSBsYXJnZXIgY2FwYWNpdHkAAABcABAATAAAANMBAAAJAAAAL3J1c3RjL2M4ZGZjZmUwNDZhNzY4MDU1NGJmNGViNjEyYmFkODQwZTc2MzFjNGIvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycxABEABMAAAAlgEAAAkAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVyb2NhbGxlZCBgUmVzdWx0Ojp1bndyYXAoKWAgb24gYW4gYEVycmAgdmFsdWUCAAAAAAAAAAEAAAADAAAAAAAAAC9Vc2Vycy9jaGVueWl0YW8vLmNhcmdvL3JlZ2lzdHJ5L3NyYy9naXRodWIuY29tLTFlY2M2Mjk5ZGI5ZWM4MjMvd2FzbS1iaW5kZ2VuLTAuMi43OC9zcmMvbGliLnJzAMgBEABfAAAA0QUAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBvbGRfc2l6ZSA+IDAAAMgBEABfAAAAhwUAAA0AAABhc3NlcnRpb24gZmFpbGVkOiBuZXdfc2l6ZSA+IDAAAMgBEABfAAAAiAUAAA0AAABpbnZhbGlkIG1hbGxvYyByZXF1ZXN0L3J1c3RjL2M4ZGZjZmUwNDZhNzY4MDU1NGJmNGViNjEyYmFkODQwZTc2MzFjNGIvbGlicmFyeS9jb3JlL3NyYy9hbGxvYy9sYXlvdXQucnMAAK4CEABQAAAAEAEAADkAAAAvVXNlcnMvY2hlbnlpdGFvLy5jYXJnby9yZWdpc3RyeS9zcmMvZ2l0aHViLmNvbS0xZWNjNjI5OWRiOWVjODIzL3dhc20tYmluZGdlbi0wLjIuNzgvc3JjL2V4dGVybnJlZi5ycwAAABADEABlAAAALQAAABsAAAAAAAAAAAAAAGF0dGVtcHQgdG8gYWRkIHdpdGggb3ZlcmZsb3dzb21lb25lIGVsc2UgYWxsb2NhdGVkIHRhYmxlIGVudGlyZXM/AAAAEAMQAGUAAAAzAAAAIwAAABADEABlAAAANAAAACAAAAAAAAAAAAAAAAAAAABhdHRlbXB0IHRvIG11bHRpcGx5IHdpdGggb3ZlcmZsb3dzaXplL2FsaWduIGxheW91dCBmYWlsdXJlYWxsb2NhdGlvbiBmYWlsdXJldGFibGUgZ3JvdyBmYWlsdXJlcHVzaCBzaG91bGQgYmUgaW5mYWxsaWJsZSBub3cAEAMQAGUAAABKAAAAHAAAABADEABlAAAAUwAAAAkAAAByZXQgb3V0IG9mIGJvdW5kc2ZyZWUgcmVzZXJ2ZWQgc2xvdAAQAxAAZQAAAFoAAAAUAAAAYXR0ZW1wdCB0byBzdWJ0cmFjdCB3aXRoIG92ZXJmbG93c2xvdCBvdXQgb2YgYm91bmRzYXNzZXJ0aW9uIGZhaWxlZDogKGZyZWVfY291bnQgYXMgdXNpemUpIDwgc2VsZi5kYXRhLmxlbigpEAMQAGUAAABrAAAADQAAABADEABlAAAAbAAAAA0AAAAQAxAAZQAAAHIAAAAJAAAABQAAAHRscyBhY2Nlc3MgZmFpbHVyZQAABAAAAAAAAAAGAAAABAAAAAQAAAAHAAAACQAAAAQAAAAEAAAACgAAAAsAAAAMAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQABAAAAAAAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPoBRAAHAAAAAECAAAfAAAA6AUQABwAAAACAgAAHgAAAA0AAAAQAAAABAAAAA4AAAAPAAAACQAAAAgAAAAEAAAAEAAAABEAAAASAAAADAAAAAQAAAATAAAACQAAAAgAAAAEAAAAFAAAABUAAAAEAAAABAAAABYAAAAXAAAAGAAAAC9ydXN0Yy9jOGRmY2ZlMDQ2YTc2ODA1NTRiZjRlYjYxMmJhZDg0MGU3NjMxYzRiL2xpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycwCEBhAASwAAAHUBAAATAAAAFQAAAAAAAAABAAAAGQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvcmxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycwAjBxAAGAAAAEcCAAAcAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAATAcQABwAAAAvAgAABQAAAB8AAAAAAAAAAQAAACAAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAnAcQACAAAAC8BxAAEgAAAG1hdGNoZXMhPT09YXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ICByaWdodClgCiAgbGVmdDogYGAsCiByaWdodDogYGA6IAAAAOsHEAAZAAAABAgQABIAAAAWCBAADAAAACIIEAADAAAAYAAAAOsHEAAZAAAABAgQABIAAAAWCBAADAAAAEgIEAABAAAAOiAAAIwHEAAAAAAAbAgQAAIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMAgAgQABsAAABlAAAAFAAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAAB2CRAAEgAAAIgJEAAiAAAARXJyb3JMYXlvdXRFcnJvcgC/i4GAAARuYW1lAbSLgYAAngIAPHJ1c3Q6OmFsZXJ0OjpfX3diZ19hbGVydF84YTQ0YjMxNTJjN2ZiYTk4OjpoMTE2MGM5ZDg0ZWVhNWIwNwExd2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX3Rocm93OjpoODI0OGI4ZjQwMDRkMjgyYQI6ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6bWFsbG9jOjpoODE3ZDBiZGJlNzQ4OTk0ZAM4ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6ZnJlZTo6aDM3ZjJjY2IxMjYwODQ5YjYELGNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWQ6OmgzODFiN2M5ZWVmMDE1ZThiBQ1fX3JkbF9yZWFsbG9jBks8YWxsb2M6OmFsbG9jOjpHbG9iYWwgYXMgY29yZTo6YWxsb2M6OkFsbG9jYXRvcj46OnNocmluazo6aDZhYmIxMjI4OTQ5NDM4YTYHNmFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6c2hyaW5rOjpoODEwOTQ3MDg0YmM4YmExNAg1Y29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZF9pbnRlZ3JhbDo6aDA4ZTNlNTNhMGRlNTE3YTEJI2NvcmU6OmZtdDo6d3JpdGU6Omg5YjlhYTIzZTdkMzU3MDJjCkFkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjpkaXNwb3NlX2NodW5rOjpoYjE5YmE0ZjU3Yzg2MmQxMgs5YWxsb2M6OnZlYzo6VmVjPFQsQT46OmludG9fYm94ZWRfc2xpY2U6Omg0ZDQzYWNhZTEwZDgxZjMzDDNhbGxvYzo6YWxsb2M6Okdsb2JhbDo6YWxsb2NfaW1wbDo6aDRkZWEzZmM4NTU0YTliZGENK2NvcmU6OmNlbGw6OkNlbGw8VD46Om5ldzo6aGViYzk2NmQ0OGEzYzRhYjEOImNvcmU6OnB0cjo6cmVhZDo6aDA5MDQyOTc4NjBkYmZkMTIPEl9fd2JpbmRnZW5fcmVhbGxvYxAwZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjptYWxsb2M6OmgyNWQzZThhNDVmZDdjMDI5EUhzdGQ6OnRocmVhZDo6bG9jYWw6Omxhenk6OkxhenlLZXlJbm5lcjxUPjo6aW5pdGlhbGl6ZTo6aDM3ODhkMjcwOWMwMjZkNWYSHnJ1c3Q6OmdyZWV0OjpoOWNjZWZhZDc1YTkyZmEzOBM7PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfY2hhcjo6aDY5OTU0YTkwMWUxNzQ2NTAULmFsbG9jOjpzdHJpbmc6OlN0cmluZzo6cHVzaDo6aGZhYzZlMzQ0ZGFiNjlkZDEVJWFsbG9jOjpmbXQ6OmZvcm1hdDo6aDZlOWUwMDNhNTJjMDczMDkWPmFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6Y3VycmVudF9tZW1vcnk6OmgzZjRhNWYzZjAxODMzODE4Fz5hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OmN1cnJlbnRfbWVtb3J5OjpoZjUwNzEzZjcyMDBjZTRhZRgvY29yZTo6Zm10OjpudW06OmltcDo6Zm10X3U2NDo6aGYwNDY5NDMxZGFjZTQwNDYZS2RsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OnJlbGVhc2VfdW51c2VkX3NlZ21lbnRzOjpoNmZkMzdlOWVkNWEzZmM5YxpGZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6aW5zZXJ0X2xhcmdlX2NodW5rOjpoNTI0ODQwZjMyZGY3ZTNkMhsRX193YmluZGdlbl9tYWxsb2McRmRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OnVubGlua19sYXJnZV9jaHVuazo6aDEwNzU3MWFhOTkzNzVhYWYdP2NvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dDo6ZnJvbV9zaXplX2FsaWduOjpoOWMwMjI4YmRhYjU3Y2FkZh5oPHN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pY19oYW5kbGVyOjpQYW5pY1BheWxvYWQgYXMgY29yZTo6cGFuaWM6OkJveE1lVXA+Ojp0YWtlX2JveDo6aDkzZjQwN2Y2ZmVhMTc2MzYfOGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6aW50b19ib3g6OmgyOTZmZTM2YTA2MDQ4YzFiIClhbGxvYzo6YWxsb2M6OmJveF9mcmVlOjpoNjgxMWI2YWQ4ZGY2ZWQyZiE1Y29yZTo6cmVzdWx0OjpSZXN1bHQ8VCxFPjo6bWFwX2Vycjo6aDY2NDk3OTNiNmYzZDY0M2MiOmNvcmU6Om9wdGlvbjo6T3B0aW9uPFQ+Ojp1bndyYXBfb3JfZWxzZTo6aGU5OWQ1Nzc0OGQ5ZWVjMTUjR2NvcmU6OmZtdDo6bnVtOjo8aW1wbCBjb3JlOjpmbXQ6OkRlYnVnIGZvciB1MzI+OjpmbXQ6OmgyZGQyZjcxNzYxNjFjZWQ5JDdzdGQ6OnBhbmlja2luZzo6cnVzdF9wYW5pY193aXRoX2hvb2s6OmhlOWJmZTAzMjE5ZDcxNWJhJU88YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6Omg2MGM5Y2JkMjhkYTgxYjZhJk88YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmhhNmMxMDVmNDVlNTc3NTM5J05hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6OmRvX3Jlc2VydmVfYW5kX2hhbmRsZTo6aGM1YTg0NDMxYmNiMGFhZmMoTmFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZTo6ZG9fcmVzZXJ2ZV9hbmRfaGFuZGxlOjpoMzA2YjQ0NGFhZWI1YWRjNSk2YWxsb2M6OmJveGVkOjpCb3g8VCxBPjo6aW50b191bmlxdWU6OmgzZDNkYzMzNGQ0Y2ExNDU0Ki9hbGxvYzo6Ym94ZWQ6OkJveDxULEE+OjpsZWFrOjpoYjFhZjc0YjhmMzdlODQyOCtjPHN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pY19oYW5kbGVyOjpQYW5pY1BheWxvYWQgYXMgY29yZTo6cGFuaWM6OkJveE1lVXA+OjpnZXQ6Omg3YjhiMmViMjYwMzEyYjM0LC5hbGxvYzo6cmF3X3ZlYzo6ZmluaXNoX2dyb3c6Omg0MTQwZjhiNzNkMzQyM2U1LS5hbGxvYzo6cmF3X3ZlYzo6ZmluaXNoX2dyb3c6OmhmZjZhMjI0N2ViYjIxNzM1LjpzdGQ6OnRocmVhZDo6bG9jYWw6OnN0YXRpazo6S2V5PFQ+OjpnZXQ6OmhjZDlhMWE3MmRjMjEwOTRjL3Z3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnNsaWNlczo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OkludG9XYXNtQWJpIGZvciAmc3RyPjo6aW50b19hYmk6OmgxYjQzNTU0MzQ0OWNlNzYxMFM8Y29yZTo6cmVzdWx0OjpSZXN1bHQ8VCxFPiBhcyBjb3JlOjpvcHM6OnRyeV90cmFpdDo6VHJ5Pjo6YnJhbmNoOjpoODViZjUzZTEwMjA5NDQyYTFCYWxsb2M6OmJveGVkOjpCb3g8VCxBPjo6aW50b19yYXdfd2l0aF9hbGxvY2F0b3I6Omg0MDZiM2ZhOTgyNTdjZTg1MokBd2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpzbGljZXM6OjxpbXBsIHdhc21fYmluZGdlbjo6Y29udmVydDo6dHJhaXRzOjpGcm9tV2FzbUFiaSBmb3IgYWxsb2M6OmJveGVkOjpCb3g8W3U4XT4+Ojpmcm9tX2FiaTo6aGUyZjg5NjhlMTg0YzFmNmMzBWdyZWV0NCJjb3JlOjpwdHI6OnJlYWQ6OmhjMWU1MGY1YzExY2JjN2UwNTFjb3JlOjpvcHRpb246Ok9wdGlvbjxUPjo6b2tfb3I6OmhlMWY0MTA1NzllZGI2YzAzNkpjb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpMb3dlckhleCBmb3IgaTMyPjo6Zm10OjpoOTcyM2Q2ZTU2YzM4MWZkYTdKY29yZTo6Zm10OjpudW06OjxpbXBsIGNvcmU6OmZtdDo6VXBwZXJIZXggZm9yIGkzMj46OmZtdDo6aDEzNWVlYWY3NWM4YWZmOWM4JWNvcmU6Om1lbTo6cmVwbGFjZTo6aDNhNWQ3ZWQwMGJjNmZmMjg5XmFsbG9jOjpib3hlZDo6Qm94PFtjb3JlOjptZW06Om1heWJlX3VuaW5pdDo6TWF5YmVVbmluaXQ8VD5dLEE+Ojphc3N1bWVfaW5pdDo6aDNlN2RkYjNlODU0MjUyZDE6HHJ1c3Q6OmFkZDo6aGIxMTdjMjA1MTUxMWVhNTM7SmNvcmU6OnB0cjo6bm9uX251bGw6Ok5vbk51bGw8W1RdPjo6c2xpY2VfZnJvbV9yYXdfcGFydHM6Omg5YTBjZjg1ODU4Njk4OWFhPENzdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWNfaGFuZGxlcjo6e3tjbG9zdXJlfX06OmgzZTZkYjdjNjc0ZTc5MjAzPUNhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OmNhcGFjaXR5X2Zyb21fYnl0ZXM6OmhmYzc1NDZkYTZjOGNlM2E1PpYBPGNvcmU6OnJlc3VsdDo6UmVzdWx0PFQsRj4gYXMgY29yZTo6b3BzOjp0cnlfdHJhaXQ6OkZyb21SZXNpZHVhbDxjb3JlOjpyZXN1bHQ6OlJlc3VsdDxjb3JlOjpjb252ZXJ0OjpJbmZhbGxpYmxlLEU+Pj46OmZyb21fcmVzaWR1YWw6Omg0MGYwN2Q1NjE4YzRhZTBkPzFhbGxvYzo6cmF3X3ZlYzo6aGFuZGxlX3Jlc2VydmU6OmhlN2M3MWQ4NGM2MDc2MGU2QIMBd2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpzbGljZXM6OjxpbXBsIHdhc21fYmluZGdlbjo6Y29udmVydDo6dHJhaXRzOjpJbnRvV2FzbUFiaSBmb3IgJnN0cj46OmludG9fYWJpOjp7e2Nsb3N1cmV9fTo6aGVmNmViMzRiMDlmYjgzODdBUzxjb3JlOjpyZXN1bHQ6OlJlc3VsdDxULEU+IGFzIGNvcmU6Om9wczo6dHJ5X3RyYWl0OjpUcnk+OjpicmFuY2g6OmhhODQ5ZDRmOWJiMWUzNDNjQkw8YWxsb2M6OnN0cmluZzo6U3RyaW5nIGFzIGNvcmU6Om9wczo6ZGVyZWY6OkRlcmVmPjo6ZGVyZWY6Omg1Mzk2NGE0OTcxNzQzODI4Q3x3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnNsaWNlczo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OlJlZkZyb21XYXNtQWJpIGZvciBzdHI+OjpyZWZfZnJvbV9hYmk6OmgzOTgzYzQ1ZjNiMGNmY2YwRDdjb3JlOjpwdHI6Om5vbl9udWxsOjpOb25OdWxsPFQ+OjpuZXc6Omg5ZjFiYjk5MjNmNTNlY2U4RTV3YXNtX2JpbmRnZW46OmV4dGVybnJlZjo6U2xhYjo6bmV3OjpoNzg5ODdkOWMzYzQzNTAyM0YuY29yZTo6cmVzdWx0Ojp1bndyYXBfZmFpbGVkOjpoMjdmNDNkOTkzYzM4NjRhMUdPPGFsbG9jOjphbGxvYzo6R2xvYmFsIGFzIGNvcmU6OmFsbG9jOjpBbGxvY2F0b3I+OjpkZWFsbG9jYXRlOjpoY2M0NmQ5ZTBmN2Y3ODBlM0hNPGFsbG9jOjphbGxvYzo6R2xvYmFsIGFzIGNvcmU6OmFsbG9jOjpBbGxvY2F0b3I+OjphbGxvY2F0ZTo6aDc3ZmE5YjljOTJhN2E4ODlJTzxhbGxvYzo6YWxsb2M6Okdsb2JhbCBhcyBjb3JlOjphbGxvYzo6QWxsb2NhdG9yPjo6ZGVhbGxvY2F0ZTo6aGQ4YTMzYTQ2NDkyZDYxYjdKNmFsbG9jOjpib3hlZDo6Qm94PFQsQT46OmZyb21fcmF3X2luOjpoM2RhY2I4MTgxZGQxODMwY0s2YWxsb2M6OmJveGVkOjpCb3g8VCxBPjo6ZnJvbV9yYXdfaW46OmhlYzIxMzcxMTI2NDhiNTBiTDZhbGxvYzo6dmVjOjpWZWM8VCxBPjo6c2hyaW5rX3RvX2ZpdDo6aGYxYjc5MmM1NDdiMGZlNzBNLWFsbG9jOjphbGxvYzo6YWxsb2NfemVyb2VkOjpoYWNkMWQzYTE1N2E2ZjRkZk4mYWxsb2M6OmFsbG9jOjphbGxvYzo6aDJlNmIyNWI1YTMyOGY4MzhPOWNvcmU6OnB0cjo6bm9uX251bGw6Ok5vbk51bGw8W1RdPjo6bGVuOjpoOTg5ZjI2MjY1N2NiNTQ0YVAmYWxsb2M6OmFsbG9jOjphbGxvYzo6aDI5ZWQ0OTk4MjdjMjQ2ZWJRN2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6c2V0X3B0cjo6aDA1OTliOTUyMTAwMmQ0NzFSRWNvcmU6OnB0cjo6bm9uX251bGw6Ok5vbk51bGw8W1RdPjo6YXNfbm9uX251bGxfcHRyOjpoMTgzNDIxMWJjODYzOTQxNlM2Y29yZTo6cHRyOjpzbGljZV9mcm9tX3Jhd19wYXJ0c19tdXQ6Omg3NjQ2YjViYmE4YmNjNzU4VC9jb3JlOjpmbXQ6OkFyZ3VtZW50czo6bmV3X3YxOjpoZWIwY2E4OTExZjcxZTcyM1V3d2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpzbGljZXM6OjxpbXBsIHdhc21fYmluZGdlbjo6Y29udmVydDo6dHJhaXRzOjpJbnRvV2FzbUFiaSBmb3IgJlt1OF0+OjppbnRvX2FiaTo6aGFhYmE1NTQ4MWYyYTk2YWVWNmNvcmU6OnB0cjo6c2xpY2VfZnJvbV9yYXdfcGFydHNfbXV0OjpoNTMyMzM3ZTFkNzhiMmQ5OVc2Y29yZTo6cHRyOjpzbGljZV9mcm9tX3Jhd19wYXJ0c19tdXQ6OmhhMmYwNTIyNmNhNmU4Y2M2WCNjb3JlOjpwdHI6OndyaXRlOjpoYzMwNmJhZTIyYTliZTMwYlk2Y29yZTo6cGFuaWNraW5nOjpwYW5pY19ib3VuZHNfY2hlY2s6Omg4MDhiNTI0YWYxNzY0MGIxWkFjb3JlOjpzbGljZTo6aW5kZXg6OnNsaWNlX3N0YXJ0X2luZGV4X2xlbl9mYWlsOjpoZWYzZTMzN2Q2ZTg1OWJiNFtEPGNvcmU6OmZtdDo6QXJndW1lbnRzIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDZmNDM0MjBmNzA3MDcxMjZcA2FkZF0oYWxsb2M6OmFsbG9jOjpyZWFsbG9jOjpoMTA4MjQ5YWFiMjlmNTk0N14oYWxsb2M6OmFsbG9jOjpyZWFsbG9jOjpoMDA4NTE4YzJkZWQ5N2JlOF89YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpzaHJpbmtfdG9fZml0OjpoZjMwMjgwMmRhZTFmZDk3ZWA6YWxsb2M6OnZlYzo6VmVjPFQsQT46OmZyb21fcmF3X3BhcnRzX2luOjpoYjI5NjdhMDBjZTUxODg1YmE6PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfZm10OjpoYTZkNzViMDNlODdjNGVmNmI6PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfZm10OjpoYmUxMDBkNDY0NGZjMDkzZmNJY29yZTo6YWxsb2M6OmxheW91dDo6TGF5b3V0Ojpmcm9tX3NpemVfYWxpZ25fdW5jaGVja2VkOjpoNjllMGM3YmZhMDA5MzlmMmRBYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+Ojpmcm9tX3Jhd19wYXJ0c19pbjo6aDk2YmYyYmZiMWMyZjEyNTdlSWNvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dDo6ZnJvbV9zaXplX2FsaWduX3VuY2hlY2tlZDo6aDQ4ZmY3ZmJkNmY1MjkxN2JmLWNvcmU6OmZtdDo6QXJndW1lbnRWMTo6bmV3OjpoMDUyMGQwOTljNDkxODRiM2c6Y29yZTo6cHRyOjptZXRhZGF0YTo6ZnJvbV9yYXdfcGFydHNfbXV0OjpoZGRmZmI3MmMzMTI4ZjBmZmg2Y29yZTo6cHRyOjptZXRhZGF0YTo6ZnJvbV9yYXdfcGFydHM6Omg0NjZlMDQyMjlhNDg0MDdlaTpjb3JlOjpwdHI6Om1ldGFkYXRhOjpmcm9tX3Jhd19wYXJ0c19tdXQ6OmhjMmFiMjllODUwOGNjMGIyajpjb3JlOjpwdHI6Om1ldGFkYXRhOjpmcm9tX3Jhd19wYXJ0c19tdXQ6OmhjNWZmNGUyZDkyODA5MWMwazdjb3JlOjpwdHI6OnVuaXF1ZTo6VW5pcXVlPFQ+Ojphc19yZWY6OmgxN2NhNDA2ZmU5ZjIzNTk3bB5ydXN0OjphbGVydDo6aGUzNTI2YmYwYWY2NmU4ODNtMmNvcmU6OnB0cjo6c2xpY2VfZnJvbV9yYXdfcGFydHM6OmgyZjNjZWMzNzE2NDczMWRjbks8YWxsb2M6OnZlYzo6VmVjPFQsQT4gYXMgY29yZTo6b3BzOjpkZXJlZjo6RGVyZWY+OjpkZXJlZjo6aGJjODQwYmQxNWJiYTVhZmNvMjwmVCBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6Omg4OTY3MTg3MTYyNzFkYzJmcChhbGxvYzo6YWxsb2M6OmRlYWxsb2M6OmhmODllNWNmOTZhNjk1ZDBkcVM8Y29yZTo6cmVzdWx0OjpSZXN1bHQ8VCxFPiBhcyBjb3JlOjpvcHM6OnRyeV90cmFpdDo6VHJ5Pjo6YnJhbmNoOjpoYzA4YWNhOTVhYmYyNTJmOXJDY29yZTo6cHRyOjptdXRfcHRyOjo8aW1wbCAqbXV0IFQ+OjpndWFyYW50ZWVkX2VxOjpoNjZlMjhlNzM2ZDE5OWFhNXMoYWxsb2M6OmFsbG9jOjpkZWFsbG9jOjpoMmI4MmRhMjhlZDcyNDAzM3QyY29yZTo6b3B0aW9uOjpPcHRpb248VD46OmFzX3JlZjo6aDBhNjUzYTllYTkwZDc4NTR1N2NvcmU6OnNsaWNlOjpyYXc6OmZyb21fcmF3X3BhcnRzX211dDo6aDhlMmQ1NWNlMTI0MDJjYmV2M2NvcmU6OnNsaWNlOjpyYXc6OmZyb21fcmF3X3BhcnRzOjpoZDQwNGU1ZDc4NmZkZTYxMHc9d2FzbV9iaW5kZ2VuOjpleHRlcm5yZWY6OkhFQVBfU0xBQjo6X19pbml0OjpoNGZlNDA3ZTliMzVhZjFiN3g1Y29yZTo6cHRyOjp1bmlxdWU6OlVuaXF1ZTxUPjo6Y2FzdDo6aGI2MWU1ODY2YjZmYTBmOGZ5OGNvcmU6OnB0cjo6bm9uX251bGw6Ok5vbk51bGw8VD46OmNhc3Q6OmgzNGNkM2VlZDY4ZWI1Nzdhejhjb3JlOjppbnRyaW5zaWNzOjpjb3B5X25vbm92ZXJsYXBwaW5nOjpoOGVkMGViMTA5YTJmYjgwNHs4Y29yZTo6aW50cmluc2ljczo6Y29weV9ub25vdmVybGFwcGluZzo6aGVjYWNmMmIzMzI1NmRkMjd8MDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMWZiNjczZjZkOWRlM2Q5NX04Y29yZTo6aW50cmluc2ljczo6Y29weV9ub25vdmVybGFwcGluZzo6aDI3NDc5NjhhYjI1YTY2ODR+OGNvcmU6OmludHJpbnNpY3M6OmNvcHlfbm9ub3ZlcmxhcHBpbmc6Omg4ZDgwYzQ0ZWE0N2U5OTQ1f0g8YWxsb2M6OnZlYzo6VmVjPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aDJlOGRmZmY5YTM3ODZhMTeAAUg8YWxsb2M6OnZlYzo6VmVjPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aGRkZTA4NDEyOWYwODZlNDWBATo8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9zdHI6Omg4NDkwNThhZWI0Y2E2MzAyggE6PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfc3RyOjpoNjhiNzZiMWY5OGQzNmQ4OIMBlgE8Y29yZTo6cmVzdWx0OjpSZXN1bHQ8VCxGPiBhcyBjb3JlOjpvcHM6OnRyeV90cmFpdDo6RnJvbVJlc2lkdWFsPGNvcmU6OnJlc3VsdDo6UmVzdWx0PGNvcmU6OmNvbnZlcnQ6OkluZmFsbGlibGUsRT4+Pjo6ZnJvbV9yZXNpZHVhbDo6aDA3ZjUzZDE5NTYyNDNlZGSEAXJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6b3B0aW9uOjpPcHRpb248Y29yZTo6Y2VsbDo6Q2VsbDx3YXNtX2JpbmRnZW46OmV4dGVybnJlZjo6U2xhYj4+Pjo6aGYzMDdhM2U4Y2UxMDMyMjaFAUNhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnNocmluazo6e3tjbG9zdXJlfX06OmgxYWQxYzRiZDUyMWEyY2IxhgEiY29yZTo6cHRyOjpyZWFkOjpoODdlNjY3OTU4YjA1MjI4ZIcBPWNvcmU6OnB0cjo6bXV0X3B0cjo6PGltcGwgKm11dCBUPjo6aXNfbnVsbDo6aDhhODY2N2EzYWJlZDBjMWWIAT1jb3JlOjpwdHI6Om11dF9wdHI6OjxpbXBsICptdXQgVD46OmlzX251bGw6OmhlZWQzYWY5NTZkZDQ3NjkwiQFDY29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZF9pbnRlZ3JhbDo6d3JpdGVfcHJlZml4OjpoYWI4YzlkMDdmNDk3M2E4NIoBLWNvcmU6OnN0cjo6PGltcGwgc3RyPjo6bGVuOjpoODM2NTlkYzhmMWIwYjdjMIsBPmNvcmU6OnB0cjo6dW5pcXVlOjpVbmlxdWU8VD46Om5ld191bmNoZWNrZWQ6Omg2NmVmMTU4ZjlmOGMzZTRjjAE+Y29yZTo6cHRyOjp1bmlxdWU6OlVuaXF1ZTxUPjo6bmV3X3VuY2hlY2tlZDo6aGQxZGMyMDNhMWVjNzI3YjCNAVY8Y29yZTo6cHRyOjp1bmlxdWU6OlVuaXF1ZTxUPiBhcyBjb3JlOjpjb252ZXJ0OjpGcm9tPCZtdXQgVD4+Ojpmcm9tOjpoYTllNmY5NGZkMTc3YWFkZI4BO2NvcmU6OnN0cjo6Y29udmVydHM6OmZyb21fdXRmOF91bmNoZWNrZWQ6OmhlOTQwOWZkZThhMDBkNDkxjwFBY29yZTo6cHRyOjpub25fbnVsbDo6Tm9uTnVsbDxUPjo6bmV3X3VuY2hlY2tlZDo6aDFkNDA2ZTZmNzVkY2VlZWWQAUBjb3JlOjpwdHI6Om5vbl9udWxsOjpOb25OdWxsPFtUXT46OmFzX211dF9wdHI6OmgyMjdhMzIxYTE3ODZjYzEzkQE1YWxsb2M6OnZlYzo6VmVjPFQ+Ojpmcm9tX3Jhd19wYXJ0czo6aGFjZTQ1MWE0ZWYyZjJhNDSSATNhbGxvYzo6dmVjOjpWZWM8VCxBPjo6YXNfbXV0X3B0cjo6aDNjNmE1MTQyYmUwYjhkMmWTATNhbGxvYzo6dmVjOjpWZWM8VCxBPjo6YXNfbXV0X3B0cjo6aDRkZjk4ZDg0NGMzMWY3MDOUAS9hbGxvYzo6dmVjOjpWZWM8VCxBPjo6YXNfcHRyOjpoNDg1NzAzNDU3NzkzNzkzZJUBQ2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6Ym94ZWQ6OkJveDxzdHI+Pjo6aGIxZWQ2YmNlZTNmODJlYzKWASljb3JlOjpwYW5pY2tpbmc6OnBhbmljOjpoMmZkMzg1YTg4N2M4YmYxM5cBNWNvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dDo6YWxpZ246OmgzYTc1NzZiYTc4ZmQ2NTUymAE4Y29yZTo6YWxsb2M6OmxheW91dDo6TGF5b3V0OjpkYW5nbGluZzo6aGUxNmJmZmVkNjYzYzFmZDGZATNhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnB0cjo6aDkxYmMyMzFiZGUwYWJkZWaaATNhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnB0cjo6aGEwZDQ3ZDc2MDhkNTU1OGGbAW88Y29yZTo6cHRyOjpub25fbnVsbDo6Tm9uTnVsbDxUPiBhcyBjb3JlOjpjb252ZXJ0OjpGcm9tPGNvcmU6OnB0cjo6dW5pcXVlOjpVbmlxdWU8VD4+Pjo6ZnJvbTo6aGNlY2ExMmNjZTA5ODVjNDScATVjb3JlOjphbGxvYzo6bGF5b3V0OjpMYXlvdXQ6OmFsaWduOjpoNWNkM2M0MDFjYjJhMDZjOJ0BNWNvcmU6OnB0cjo6dW5pcXVlOjpVbmlxdWU8VD46OmNhc3Q6OmgzMDMzYTFiOTM2NWQwNTc4ngE1Y29yZTo6cHRyOjp1bmlxdWU6OlVuaXF1ZTxUPjo6Y2FzdDo6aGQ1ZjEzZmIzY2QwYmEwMGSfAUFzdGQ6OnRocmVhZDo6bG9jYWw6Omxhenk6OkxhenlLZXlJbm5lcjxUPjo6Z2V0OjpoMWM2OTMxM2U1YTcxZjIwN6ABKndhc21fYmluZGdlbjo6dGhyb3dfc3RyOjpoNDQ3NDg5YjQ3NjhmMzk5MKEBazxzdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWNfaGFuZGxlcjo6U3RyUGFuaWNQYXlsb2FkIGFzIGNvcmU6OnBhbmljOjpCb3hNZVVwPjo6dGFrZV9ib3g6OmhjZmY0YmEwZTY1ZThlNDc1ogFIPGRsbWFsbG9jOjpzeXM6OlN5c3RlbSBhcyBkbG1hbGxvYzo6QWxsb2NhdG9yPjo6YWxsb2M6OmgxZDMyYWVmOTJkOTIzYjcwowFSPFQgYXMgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OlJldHVybldhc21BYmk+OjpyZXR1cm5fYWJpOjpoOWFjYmI5ZjI3NDFmOWExNqQBQGNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6dmVjOjpWZWM8dTg+Pjo6aGFiMTJmODc0NDVjYzgwNTmlAUNjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnZlYzo6VmVjPHVzaXplPj46OmgzYmU3ZTFmMDY4ZjU1N2QypgE2PFQgYXMgY29yZTo6Y29udmVydDo6SW50bzxVPj46OmludG86OmhlNmNhNzg4NTQzZWY3ZjhjpwERcnVzdF9iZWdpbl91bndpbmSoATFhbGxvYzo6dmVjOjpWZWM8VCxBPjo6Y2FwYWNpdHk6OmgwM2RmOTIxMmUxMmVhOTY4qQE5Y29yZTo6b3BzOjpmdW5jdGlvbjo6Rm5PbmNlOjpjYWxsX29uY2U6OmgyNDk5MDIzMzNmNjk1NWYwqgEwY29yZTo6cHRyOjptZXRhZGF0YTo6bWV0YWRhdGE6OmhjYjM0NjQ2NWMwMzBiOTJkqwEGbWVtY3B5rAFcY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6OmNlbGw6OkNlbGw8d2FzbV9iaW5kZ2VuOjpleHRlcm5yZWY6OlNsYWI+Pjo6aDIzODU4MDc0YzU1OWJlOTKtAUJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnN0cmluZzo6U3RyaW5nPjo6aGM2MDUzZDNmZTFiZmEzN2auAUdjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzx1OD4+OjpoYmEzYThhYzIxODhhZTZlMa8BSmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPHVzaXplPj46OmhhY2IxOGRmM2ZmODdmZGM5sAFKY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPHdhc21fYmluZGdlbjo6ZXh0ZXJucmVmOjpTbGFiPjo6aDljNTJjYjA1ZTE3YTI5ZWSxAWJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6Y2VsbDo6VW5zYWZlQ2VsbDx3YXNtX2JpbmRnZW46OmV4dGVybnJlZjo6U2xhYj4+OjpoYTA4YmE3MjI4OTYzZGFjZbIBKmFsbG9jOjp2ZWM6OlZlYzxUPjo6bmV3OjpoZDRiMTcxMGNlNjc4MzMxNbMBEl9fcmRsX2FsbG9jX3plcm9lZLQBN2NvcmU6OnB0cjo6dW5pcXVlOjpVbmlxdWU8VD46OmFzX3B0cjo6aGYxYzFkZGVmYzU0ZTYxYzK1ATdjb3JlOjpwdHI6OnVuaXF1ZTo6VW5pcXVlPFQ+Ojphc19wdHI6Omg2OTEzZGIxYzk2ZTM5ZDFjtgE6Y29yZTo6cHRyOjpub25fbnVsbDo6Tm9uTnVsbDxUPjo6YXNfcHRyOjpoZjQyZWQyZDM2MzU5OGUwMbcBNjxUIGFzIGNvcmU6OmNvbnZlcnQ6OkZyb208VD4+Ojpmcm9tOjpoNzE4NmQxYTFkMDU4OWM4MbgBUjxUIGFzIHdhc21fYmluZGdlbjo6Y29udmVydDo6dHJhaXRzOjpSZXR1cm5XYXNtQWJpPjo6cmV0dXJuX2FiaTo6aDM4OWIzMjdlZjlhN2FlMjG5AUd3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnNsaWNlczo6dW5zYWZlX2dldF9jYWNoZWRfc3RyOjpoNzkwNTIxZGRjOGJhNzhjOLoBSXN0ZDo6c3lzX2NvbW1vbjo6YmFja3RyYWNlOjpfX3J1c3RfZW5kX3Nob3J0X2JhY2t0cmFjZTo6aGYzMTA0OTE2OWJlZGExNzG7AS1jb3JlOjpwYW5pY2tpbmc6OnBhbmljX2ZtdDo6aGJmMjFhM2Q0YmJiODJiZji8AQZtZW1zZXS9AUJjb3JlOjpudW06Om5vbnplcm86Ok5vblplcm9Vc2l6ZTo6bmV3X3VuY2hlY2tlZDo6aDJlYjFlYzI3NDc0YWIyYTO+AUFjb3JlOjpwdHI6Om5vbl9udWxsOjpOb25OdWxsPFQ+OjpuZXdfdW5jaGVja2VkOjpoN2RkNzQ1ZTNkYjM0MzNlZb8BQmNvcmU6Om51bTo6bm9uemVybzo6Tm9uWmVyb1VzaXplOjpuZXdfdW5jaGVja2VkOjpoOWNjNGRiMTJlYmQ0MTllMcABPmNvcmU6OnB0cjo6dW5pcXVlOjpVbmlxdWU8VD46Om5ld191bmNoZWNrZWQ6OmhkNWEyZTE5YWIxM2RlYTljwQE3ZGxtYWxsb2M6OmRsbWFsbG9jOjpDaHVuazo6c2V0X2ludXNlOjpoM2VmMzI3OGVmMWEzOTIzM8IB0AFjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c3RkOjplcnJvcjo6PGltcGwgY29yZTo6Y29udmVydDo6RnJvbTxhbGxvYzo6c3RyaW5nOjpTdHJpbmc+IGZvciBhbGxvYzo6Ym94ZWQ6OkJveDxkeW4gc3RkOjplcnJvcjo6RXJyb3IrY29yZTo6bWFya2VyOjpTeW5jK2NvcmU6Om1hcmtlcjo6U2VuZD4+Ojpmcm9tOjpTdHJpbmdFcnJvcj46Omg1MmQ2MDM4ZThkNmQzMmNkwwFeY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPHN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pY19oYW5kbGVyOjpQYW5pY1BheWxvYWQ+OjpoYjNiYjhjOWIyN2JkNTk0ZcQBCnJ1c3RfcGFuaWPFATVkbG1hbGxvYzo6ZGxtYWxsb2M6OlNlZ21lbnQ6OmhvbGRzOjpoNDAxZWZmMTEzYWEyZmQ2NcYBNGNvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dDo6c2l6ZTo6aDM2YmYxZTFkNzQ5ZDZhODbHATJjb3JlOjpzbGljZTo6PGltcGwgW1RdPjo6YXNfcHRyOjpoNjJhNjljZTc0NjI3MTcyY8gBLGFsbG9jOjp2ZWM6OlZlYzxULEE+OjpsZW46OmhiYzMwNmVmMjkxNTMxMWMzyQE0Y29yZTo6YWxsb2M6OmxheW91dDo6TGF5b3V0OjpzaXplOjpoNWUxMDRmMTg0NDAwMWE5ZsoBMGNvcmU6OnN0cjo6PGltcGwgc3RyPjo6YXNfcHRyOjpoZDUyZjJkZDI4N2IxMjk2ZcsBQmRsbWFsbG9jOjpkbG1hbGxvYzo6Q2h1bms6OnNldF9mcmVlX3dpdGhfcGludXNlOjpoYjZmY2YxMzIxZThlZGQ5YswBQmRsbWFsbG9jOjpkbG1hbGxvYzo6Q2h1bms6OnNldF9pbnVzZV9hbmRfcGludXNlOjpoZDcwY2Q5YjQ1OWY1OTFiMs0Bd3dhc21fYmluZGdlbjo6Y29udmVydDo6aW1wbHM6OjxpbXBsIHdhc21fYmluZGdlbjo6Y29udmVydDo6dHJhaXRzOjpGcm9tV2FzbUFiaSBmb3IgKm11dCBUPjo6ZnJvbV9hYmk6OmhjNTc0NmVkMTAzZTVmMzU2zgF5d2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjppbXBsczo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OkludG9XYXNtQWJpIGZvciAqY29uc3QgVD46OmludG9fYWJpOjpoNzEwZjkxNWY3ZDBiOGExZs8BOGNvcmU6Om51bTo6bm9uemVybzo6Tm9uWmVyb1VzaXplOjpnZXQ6OmhkYzI2ZTMzZWQ4M2IxMTBk0AF0d2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjppbXBsczo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OkZyb21XYXNtQWJpIGZvciBpMzI+Ojpmcm9tX2FiaTo6aDNmNWI0OTY1YmQ1Mjc5NjDRAXR3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmltcGxzOjo8aW1wbCB3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnRyYWl0czo6SW50b1dhc21BYmkgZm9yIGkzMj46OmludG9fYWJpOjpoOTczNTQ2N2IxMjQ5NGZjOdIBOmNvcmU6OnB0cjo6bm9uX251bGw6Ok5vbk51bGw8VD46OmFzX3B0cjo6aGZjYWE5Mzc1MjUyYWE3YjPTAThjb3JlOjpudW06Om5vbnplcm86Ok5vblplcm9Vc2l6ZTo6Z2V0OjpoMGJiOGU5OGY3MmYzZjI2Y9QBN2NvcmU6OnB0cjo6dW5pcXVlOjpVbmlxdWU8VD46OmFzX3B0cjo6aGVjNWZhNDM0NWVhNmNmZDfVATdjb3JlOjpwdHI6OnVuaXF1ZTo6VW5pcXVlPFQ+Ojphc19wdHI6Omg1MjViODdhYTUxNWYxNWI31gE+Y29yZTo6cHRyOjpjb25zdF9wdHI6OjxpbXBsICpjb25zdCBUPjo6Y2FzdDo6aGY4ZGIyNjRiODE3MjJjZjLXATFjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8JnUzMj46Omg0MmY4MGI2ZDM1Y2Q4MWJl2AFNY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dEVycm9yPjo6aGM0YjExOTc2NmIxMjM2ZTPZAT53YXNtX2JpbmRnZW46OmV4dGVybnJlZjo6SEVBUF9TTEFCOjpfX2dldGl0OjpoOTIzOGU0ZTU4Y2U3Yzk4ZNoBQGRsbWFsbG9jOjpkbG1hbGxvYzo6VHJlZUNodW5rOjpsZWZ0bW9zdF9jaGlsZDo6aDBlMGZmMDRiMDg2NjlhNTjbATV3YXNtX2JpbmRnZW46Ol9fcnQ6Om1hbGxvY19mYWlsdXJlOjpoMjEzYTJhYWUxYWVjNzdiNdwBCHJ1c3Rfb29t3QE/ZGxtYWxsb2M6OmRsbWFsbG9jOjpsZWZ0c2hpZnRfZm9yX3RyZWVfaW5kZXg6OmhkODIxMjQ4MzA0MzdjYzA13gFPZGxtYWxsb2M6OmRsbWFsbG9jOjpDaHVuazo6c2V0X3NpemVfYW5kX3BpbnVzZV9vZl9mcmVlX2NodW5rOjpoYmM0MDI3ZDM1OTYwZDUzMt8BPjxjb3JlOjpmbXQ6OkVycm9yIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhkY2ViYzBhMDM4NTBjYTMw4AFOPGNvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dEVycm9yIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhiNTJkNzJjMjYwZTk1NDBi4QFzd2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjppbXBsczo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OkludG9XYXNtQWJpIGZvciAoKT46OmludG9fYWJpOjpoYzNmMDc0ZGI4OTFkNjYyZuIBNjxUIGFzIGNvcmU6OmNvbnZlcnQ6OkZyb208VD4+Ojpmcm9tOjpoZTUwN2UxZDJmYTJjNDRjZuMBMmNvcmU6Om9wdGlvbjo6T3B0aW9uPFQ+Ojp1bndyYXA6OmgxMzM3Mzg2ZTMxZTA2OWZi5AEyY29yZTo6b3B0aW9uOjpPcHRpb248VD46OnVud3JhcDo6aDk2ZmQyOGYwYTFmYzFlMmLlAS9kbG1hbGxvYzo6ZGxtYWxsb2M6OmFsaWduX3VwOjpoMTA3MWViYmE0MzE0YzVhMuYBDl9fcnVzdF9yZWFsbG9j5wEwZGxtYWxsb2M6OmRsbWFsbG9jOjpsZWZ0X2JpdHM6OmhlYTFhOGVjYmM1NGM3NTNh6AEwPCZUIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhlOTk4ZDZlNzNlMjg1NThi6QEMX19ydXN0X2FsbG9j6gETX19ydXN0X2FsbG9jX3plcm9lZOsBZjxzdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWNfaGFuZGxlcjo6U3RyUGFuaWNQYXlsb2FkIGFzIGNvcmU6OnBhbmljOjpCb3hNZVVwPjo6Z2V0OjpoMjE5YmJiNzA1MGI0NjI2OewBNGRsbWFsbG9jOjpkbG1hbGxvYzo6Q2h1bms6OmNpbnVzZTo6aGZhODA0MGI4ZmYzNDhlNTLtATpkbG1hbGxvYzo6ZGxtYWxsb2M6OkNodW5rOjpjbGVhcl9waW51c2U6OmgyYTAwYTAyMGViNWM1MDgy7gEzZGxtYWxsb2M6OmRsbWFsbG9jOjpDaHVuazo6aW51c2U6OmgxODBmZmExNzZiZTRkYmE27wEyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDU2YzM2NDI2MDRiNzFlMzTwAThjb3JlOjpmbXQ6OkZvcm1hdHRlcjo6ZGVidWdfbG93ZXJfaGV4OjpoODIyNmNkZjJjYTg5NDI5M/EBOGNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpkZWJ1Z191cHBlcl9oZXg6Omg4MzdmYTE1MjJjODMzYjc08gEOX19ydXN0X2RlYWxsb2PzATBkbG1hbGxvYzo6ZGxtYWxsb2M6OmxlYXN0X2JpdDo6aGRlYzQzZjI1OTU5ZDgzMDT0ATVkbG1hbGxvYzo6ZGxtYWxsb2M6OkNodW5rOjptbWFwcGVkOjpoODk2YTQ3YmM3Yjg3Zjk0MvUBUGRsbWFsbG9jOjpkbG1hbGxvYzo6Q2h1bms6OnNldF9zaXplX2FuZF9waW51c2Vfb2ZfaW51c2VfY2h1bms6OmhmNGQ2OTdiYjYxZGYyOGJj9gEzZGxtYWxsb2M6OmRsbWFsbG9jOjpTZWdtZW50Ojp0b3A6OmhmNjNjMmQ4YTI1MGQ2MDdi9wE7PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfY2hhcjo6aDYwZjQ4N2UyY2VkMDA0MWb4ATRhbGxvYzo6cmF3X3ZlYzo6Y2FwYWNpdHlfb3ZlcmZsb3c6Omg1MTMxMjAwNGEzMWYwZWE2+QE5Y29yZTo6b3BzOjpmdW5jdGlvbjo6Rm5PbmNlOjpjYWxsX29uY2U6Omg0NGE1MzNhMDgwMzg4NjQx+gFOY29yZTo6Zm10OjpudW06OmltcDo6PGltcGwgY29yZTo6Zm10OjpEaXNwbGF5IGZvciB1MzI+OjpmbXQ6Omg4NGYwNzZjNWU1ZDgzOWVl+wEaX19ydXN0X2FsbG9jX2Vycm9yX2hhbmRsZXL8ATJkbG1hbGxvYzo6ZGxtYWxsb2M6OkNodW5rOjpzaXplOjpoYmNmNTE0ODMzODYyNDNlNP0BNGRsbWFsbG9jOjpkbG1hbGxvYzo6Q2h1bms6OnBpbnVzZTo6aDNmNGE0ZjgwNjNhYTFmMjf+ATlkbG1hbGxvYzo6ZGxtYWxsb2M6OlNlZ21lbnQ6OmlzX2V4dGVybjo6aGViZDM4NDk3OTVhNWE3ZjT/ATlkbG1hbGxvYzo6ZGxtYWxsb2M6OlNlZ21lbnQ6OnN5c19mbGFnczo6aGIxNzJjOGYwNDJiMGJiNDKAAjNhbGxvYzo6YWxsb2M6OmhhbmRsZV9hbGxvY19lcnJvcjo6aGUyNjlkOGYxYmZmOTA5NjCBAghfX3JnX29vbYICMzxzdHIgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoZGQwM2I0MGNkY2VjMWQ0ZoMCC19fcmRsX2FsbG9jhAI5ZGxtYWxsb2M6OmRsbWFsbG9jOjpDaHVuazo6cGx1c19vZmZzZXQ6Omg3YWE1MjUzYTQzNDRlZDlhhQI6ZGxtYWxsb2M6OmRsbWFsbG9jOjpDaHVuazo6bWludXNfb2Zmc2V0OjpoNDc1YjcyYTQ4NzBjNzM1MIYCNGRsbWFsbG9jOjpkbG1hbGxvYzo6Q2h1bms6OnRvX21lbTo6aGUzMjQyOTk2Y2E1OTdjZWOHAjZkbG1hbGxvYzo6ZGxtYWxsb2M6OkNodW5rOjpmcm9tX21lbTo6aDk1NWY2ODA4MDg4MGYzNDOIAg1fX3JkbF9kZWFsbG9jiQI2ZGxtYWxsb2M6OmRsbWFsbG9jOjpUcmVlQ2h1bms6Om5leHQ6Omg0NGNlNmViYTc1ZTQ0ZWNmigI2ZGxtYWxsb2M6OmRsbWFsbG9jOjpUcmVlQ2h1bms6OnByZXY6Omg0ZjcyY2ViYzkwMTUwN2ZiiwIyY29yZTo6cGFuaWM6OlBhbmljSW5mbzo6bWVzc2FnZTo6aGY5OTAyMDljNjc0MTAyYzCMAjNjb3JlOjpwYW5pYzo6UGFuaWNJbmZvOjpsb2NhdGlvbjo6aDUwYjY0YjljMzBhYjI0N2KNAjRjb3JlOjpoaW50Ojp1bnJlYWNoYWJsZV91bmNoZWNrZWQ6OmhlYWI2Y2ExNTBlZWEyODEzjgIxPFQgYXMgY29yZTo6YW55OjpBbnk+Ojp0eXBlX2lkOjpoNzVlMTJhYWNhNDc1M2UzZI8CMTxUIGFzIGNvcmU6OmFueTo6QW55Pjo6dHlwZV9pZDo6aGZmNjJmMzdmMDhiN2UzM2SQAhJfX3J1c3Rfc3RhcnRfcGFuaWORAjxkbG1hbGxvYzo6ZGxtYWxsb2M6OkNodW5rOjpmZW5jZXBvc3RfaGVhZDo6aGQ5NzAyYjc1YjQ3ZmUwMzGSAjdkbG1hbGxvYzo6ZGxtYWxsb2M6OlRyZWVDaHVuazo6Y2h1bms6Omg5M2Y1MmI1YjE5ZGM4ZTc5kwJIPGRsbWFsbG9jOjpzeXM6OlN5c3RlbSBhcyBkbG1hbGxvYzo6QWxsb2NhdG9yPjo6cmVtYXA6Omg5Y2IyYzAzNzE1NTBhM2Y4lAJMPGRsbWFsbG9jOjpzeXM6OlN5c3RlbSBhcyBkbG1hbGxvYzo6QWxsb2NhdG9yPjo6ZnJlZV9wYXJ0OjpoZmIzYjc1NmJiNzM2OThkM5UCRzxkbG1hbGxvYzo6c3lzOjpTeXN0ZW0gYXMgZGxtYWxsb2M6OkFsbG9jYXRvcj46OmZyZWU6Omg4MjA3NzlhYmYyNjUxODVllgJTPGRsbWFsbG9jOjpzeXM6OlN5c3RlbSBhcyBkbG1hbGxvYzo6QWxsb2NhdG9yPjo6Y2FuX3JlbGVhc2VfcGFydDo6aDIzZTAwZWM5NTgwNTgzY2KXAlI8ZGxtYWxsb2M6OnN5czo6U3lzdGVtIGFzIGRsbWFsbG9jOjpBbGxvY2F0b3I+OjphbGxvY2F0ZXNfemVyb3M6Omg0YWE4NWNiMjg5YzNlZjA0mAJMPGRsbWFsbG9jOjpzeXM6OlN5c3RlbSBhcyBkbG1hbGxvYzo6QWxsb2NhdG9yPjo6cGFnZV9zaXplOjpoMDU5ZGRiY2U1Zjk1NGI3ZJkCMTxUIGFzIGNvcmU6OmFueTo6QW55Pjo6dHlwZV9pZDo6aGM5MDdmNDAzNGRiZDBhNjSaAmljb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Jm11dCBzdGQ6OmlvOjpXcml0ZTo6d3JpdGVfZm10OjpBZGFwdG9yPGFsbG9jOjp2ZWM6OlZlYzx1OD4+Pjo6aDVlNzQ3ODNkMDE4NWQ3NTabAjdzdGQ6OmFsbG9jOjpkZWZhdWx0X2FsbG9jX2Vycm9yX2hvb2s6OmhjYzhmNmMxNGExY2YwMjBhnAIwY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPCZ1OD46OmhhNTU0NGUyMTg1ZDBjMDU3nQJvY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPCZjb3JlOjppdGVyOjphZGFwdGVyczo6Y29waWVkOjpDb3BpZWQ8Y29yZTo6c2xpY2U6Oml0ZXI6Okl0ZXI8dTg+Pj46OmgzZTliNzFhMDc5ZDE2ZTAzAPuAgIAACXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS41NS4wIChjOGRmY2ZlMDQgMjAyMS0wOS0wNikGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjc4ICg3ZjgyMGRiNGIp");

                    var rust = async () => {
                        await init(wasm_code);
                        return exports$1;
                    };

/*  */
process.env.VUE_ENV = 'server';
rust().then(function (wasm) {
  var result = wasm.add(1, 2);
  console.log('result', result);
});
function createRenderer() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createRenderer$1(extend(extend({}, options), {
    isUnaryTag: isUnaryTag,
    canBeLeftOpenTag: canBeLeftOpenTag,
    modules: modules$1,
    // user can provide server-side implementations for custom directives
    // when creating the renderer.
    directives: extend(baseDirectives$1, options.directives)
  }));
}
var createBundleRenderer = createBundleRendererCreator(createRenderer);

exports.createBundleRenderer = createBundleRenderer;
exports.createRenderer = createRenderer;
