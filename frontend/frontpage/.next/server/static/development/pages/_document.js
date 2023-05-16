module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));
var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");
var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;
var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");
var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
async function middleware({
  req,
  res
}) {}
function dedupe(bundles) {
  const files = new Set();
  const kept = [];
  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}
function getOptionalModernScriptVariant(path) {
  if (false) {}
  return path;
} /**
  * `Document` component handles the initial `document` markup and renders only on the server side.
  * Commonly used for implementing server side rendering for `css-in-js` libraries.
  */
class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];
    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };
    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }
  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }
}
exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];
class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }
}
exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};
class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }
  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }
  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }
  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)
    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];
        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }
        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags
    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;
      if (inAmpMode) {
        let badProp = '';
        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }
        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }
      return child;
    }); // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (inAmpMode && styles &&
    // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props &&
    // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;
        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && /*#__PURE__*/ // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }
}
exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }
}
exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;
class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};
      if (false) {}
      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }
  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};
      if (false) {}
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }
  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }
  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;
    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }
      throw err;
    }
  }
  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    if (inAmpMode) {
      if (false) {}
      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }
    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }
}
exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}
function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZGVkdXBlIiwiYnVuZGxlcyIsImZpbGVzIiwiU2V0Iiwia2VwdCIsImJ1bmRsZSIsImhhcyIsImZpbGUiLCJhZGQiLCJwdXNoIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwicGF0aCIsInByb2Nlc3MiLCJEb2N1bWVudCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VycyIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbmhhbmNlciIsInByb3BzIiwiaHRtbCIsImhlYWQiLCJyZW5kZXJQYWdlIiwic3R5bGVzIiwicmVuZGVyRG9jdW1lbnQiLCJfZG9jdW1lbnRQcm9wcyIsIl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmciLCJEYXRlIiwibm93IiwicmVuZGVyIiwiaGVhZFRhZ3NNaWRkbGV3YXJlIiwiYm9keVRhZ3NNaWRkbGV3YXJlIiwiaHRtbFByb3BzTWlkZGxld2FyZSIsIkh0bWwiLCJjb250ZXh0IiwiaW5BbXBNb2RlIiwiaHRtbFByb3BzIiwidW5kZWZpbmVkIiwiY29udGV4dFR5cGUiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiSGVhZCIsImdldENzc0xpbmtzIiwiYXNzZXRQcmVmaXgiLCJjc3NGaWxlcyIsImxlbmd0aCIsImZpbHRlciIsImYiLCJ0ZXN0IiwiY3NzTGlua0VsZW1lbnRzIiwiZm9yRWFjaCIsIm5vbmNlIiwiZW5jb2RlVVJJIiwiY3Jvc3NPcmlnaW4iLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImR5bmFtaWNJbXBvcnRzIiwibWFwIiwiZW5kc1dpdGgiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImFtcFBhdGgiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiX19ORVhUX0RBVEFfXyIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInBhZ2UiLCJidWlsZElkIiwiUmVhY3QiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsInR5cGUiLCJjb25zb2xlIiwid2FybiIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwibmFtZSIsInJlbCIsInNyYyIsImluZGV4T2YiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIk9iamVjdCIsImtleXMiLCJwcm9wIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzU3R5bGVzIiwiZWwiLCJfX2h0bWwiLCJpc0RldmVsb3BtZW50IiwiY291bnQiLCJ0b1N0cmluZyIsInN0eWxlIiwiam9pbiIsInJlcGxhY2UiLCJnZXRBbXBQYXRoIiwiZ2V0UGFnZUZpbGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJzdHJpbmciLCJNYWluIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJOZXh0U2NyaXB0IiwiZ2V0RHluYW1pY0NodW5rcyIsIm1vZGVyblByb3BzIiwiaW5jbHVkZXMiLCJnZXRTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJzdGF0aWNNYXJrdXAiLCJkZXZGaWxlcyIsImJvZHlUYWdzIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0giLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0siLCJwYWdlU2NyaXB0IiwiYXBwU2NyaXB0IiwibWF0Y2giLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCIsInN0YXJ0aW5nVXJsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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VSxDQUNKMUUsVyxHQUFjQyxnQztBQURWeUUsVSxDQUdKeEUsUyxHQUFZO0VBQ2pCZSxLQUFLLEVBQUViLG1CQUFVbUUsTUFEQTtFQUVqQnBELFdBQVcsRUFBRWYsbUJBQVVtRTtBQUZOLEM7QUFIUkcsVSxDQVdKNEIsaUIsR0FDTCwwVDtBQXdSSixTQUFTbkMsVUFBVCxDQUFvQnhDLE9BQXBCLEVBQXFDNEUsTUFBckMsRUFBNkQ7RUFDM0QsT0FBTzVFLE9BQU8sSUFBSyxHQUFFNEUsTUFBTyxHQUFFQSxNQUFNLENBQUMxQixRQUFQMEIsQ0FBZ0IsR0FBaEJBLElBQXVCLEdBQXZCQSxHQUE2QixHQUFJLE9BQS9EO0FBQ0Q7QUFFRCxTQUFTbkMsV0FBVCxDQUFxQmpDLElBQXJCLEVBQW1DQyxPQUFuQyxFQUE2RDtFQUMzRCxNQUFNb0UsV0FBVyxHQUFHckUsSUFBSSxLQUFLLEdBQVRBLEdBQWUsUUFBZkEsR0FBMEJBLElBQTlDO0VBQ0EsT0FBT0MsT0FBTyxHQUFJLEdBQUVvRSxXQUFZLElBQUdwRSxPQUFRLEtBQTdCLEdBQXFDLEdBQUVvRSxXQUFZLEtBQWpFO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDaDBCWSx3QkFBd0Isa0RBQWtEO0FBQ3ZGO0FBQ0EscUJBQXFCLGlGQUFpRix3Q0FBd0MsbUNBQW1DO0FBQ2pMLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QLFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0ssXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuXG5leHBvcnQgeyBEb2N1bWVudENvbnRleHQsIERvY3VtZW50SW5pdGlhbFByb3BzLCBEb2N1bWVudFByb3BzIH1cblxuZXhwb3J0IHR5cGUgT3JpZ2luUHJvcHMgPSB7XG4gIG5vbmNlPzogc3RyaW5nXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHsgcmVxLCByZXMgfTogRG9jdW1lbnRDb250ZXh0KSB7fVxuXG5mdW5jdGlvbiBkZWR1cGUoYnVuZGxlczogYW55W10pOiBhbnlbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IGtlcHQgPSBbXVxuXG4gIGZvciAoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpIHtcbiAgICBpZiAoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSkgY29udGludWVcbiAgICBmaWxlcy5hZGQoYnVuZGxlLmZpbGUpXG4gICAga2VwdC5wdXNoKGJ1bmRsZSlcbiAgfVxuICByZXR1cm4ga2VwdFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCAnLm1vZHVsZS5qcycpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIHN0YXRpYyBoZWFkVGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cbiAgc3RhdGljIGJvZHlUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtYm9keS10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuICBzdGF0aWMgaHRtbFByb3BzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cblxuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZXJzID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICAgID8gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJ1xuICAgICAgICApLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQoY3R4KSlcbiAgICAgIDogW11cblxuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKSB7XG4gICAgICAgIEFwcCA9IGVuaGFuY2VyKEFwcClcbiAgICAgIH1cbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAuLi5mbHVzaCgpLFxuICAgICAgLi4uKHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgICAgID8gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZ2V0LXN0eWxlcy1zZXJ2ZXIhJ1xuICAgICAgICAgICkudGhlbigobW9kKSA9PiBtb2QuZGVmYXVsdChjdHgpKVxuICAgICAgICA6IFtdKSxcbiAgICBdXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxQPihcbiAgICBEb2N1bWVudDogbmV3ICgpID0+IERvY3VtZW50PFA+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgUFxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgX2RvY3VtZW50UHJvcHM6IHByb3BzLFxuICAgICAgICAgIC8vIEluIGRldiB3ZSBpbnZhbGlkYXRlIHRoZSBjYWNoZSBieSBhcHBlbmRpbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc291cmNlIFVSTC5cbiAgICAgICAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmaXggaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy81ODYwXG4gICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODc3MjYgaXMgZml4ZWQuXG4gICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZzpcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnP3RzPScgKyBEYXRlLm5vdygpIDogJycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxEb2N1bWVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWwgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbFByb3BzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWxcbiAgICAgICAgey4uLmh0bWxQcm9wc31cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgICAgaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID1cbiAgICAgIGZpbGVzICYmIGZpbGVzLmxlbmd0aCA/IGZpbGVzLmZpbHRlcigoZikgPT4gL1xcLmNzcyQvLnRlc3QoZikpIDogW11cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAvPixcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZTogYW55KSA9PiB7XG4gICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4gICAgICAgICAgLy8gZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZSBtb2Rlcm5cbiAgICAgICAgICAvLyB2YXJpYW50cyBvbmx5LlxuICAgICAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKCk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGhcbiAgICAgICAgPyBmaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAgICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBbXVxuXG4gICAgcmV0dXJuICFwcmVsb2FkRmlsZXMubGVuZ3RoXG4gICAgICA/IG51bGxcbiAgICAgIDogcHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaHlicmlkQW1wLFxuICAgICAgY2Fub25pY2FsQmFzZSxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBkYW5nZXJvdXNBc1BhdGgsXG4gICAgICBoZWFkVGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHsgcGFnZSwgYnVpbGRJZCB9ID0gX19ORVhUX0RBVEFfX1xuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScgJiYgIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZVxuICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZVxuXG4gICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgIGhlYWQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGRcbiAgICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IGNoaWxkXG5cbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcy5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuZ2V0Q3NzTGlua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBwYWdlICE9PSAnL19lcnJvcicgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGlmIChpbkFtcE1vZGUpIHJldHVybiBBTVBfUkVOREVSX1RBUkdFVFxuICAgIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKCkge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMsIGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcCgoYnVuZGxlOiBhbnkpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IC9cXC5tb2R1bGVcXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIS9cXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpIHx8IGZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cygpIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcywgbG93UHJpb3JpdHlGaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcz8uZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBsb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IGZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgcG9seWZpbGxGaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBwb2x5ZmlsbEZpbGVzXG4gICAgICAuZmlsdGVyKFxuICAgICAgICAocG9seWZpbGwpID0+XG4gICAgICAgICAgcG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICEvXFwubW9kdWxlXFwuanMkLy50ZXN0KHBvbHlmaWxsKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogRG9jdW1lbnRQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGF0aWNNYXJrdXAsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGRldkZpbGVzLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGJvZHlUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldkZpbGVzID0gW1xuICAgICAgICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0ssXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge3N0YXRpY01hcmt1cCB8fCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2RldkZpbGVzXG4gICAgICAgICAgICA/IGRldkZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oYm9keVRhZ3MgfHwgW10pKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYWdlLCBidWlsZElkIH0gPSBfX05FWFRfREFUQV9fXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlU2NyaXB0ID0gW1xuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luY1xuICAgICAgICBkYXRhLW5leHQtcGFnZT17cGFnZX1cbiAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICBzcmM9e1xuICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkgK1xuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgey4uLihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEID8geyBub01vZHVsZTogdHJ1ZSB9IDoge30pfVxuICAgICAgLz4sXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgZGF0YS1uZXh0LXBhZ2U9e3BhZ2V9XG4gICAgICAgICAga2V5PXtgJHtwYWdlfS1tb2Rlcm5gfVxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKVxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgdHlwZT1cIm1vZHVsZVwiXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIF1cblxuICAgIGNvbnN0IGFwcFNjcmlwdCA9IFtcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgZGF0YS1uZXh0LXBhZ2U9XCIvX2FwcFwiXG4gICAgICAgIHNyYz17XG4gICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2AgK1xuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBrZXk9XCJfYXBwXCJcbiAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIHsuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCA/IHsgbm9Nb2R1bGU6IHRydWUgfSA6IHt9KX1cbiAgICAgIC8+LFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGRhdGEtbmV4dC1wYWdlPVwiL19hcHBcIlxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAubW9kdWxlLmpzYCArXG4gICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGtleT1cIl9hcHAtbW9kZXJuXCJcbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGRldkZpbGVzXG4gICAgICAgICAgPyBkZXZGaWxlcy5tYXAoXG4gICAgICAgICAgICAgIChmaWxlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgIWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtzdGF0aWNNYXJrdXAgfHwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmICFkaXNhYmxlUnVudGltZUpTID8gKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBhcHBTY3JpcHR9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBwYWdlICE9PSAnL19lcnJvcicgJiYgcGFnZVNjcmlwdH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgfHwgc3RhdGljTWFya3VwID8gbnVsbCA6IHRoaXMuZ2V0RHluYW1pY0NodW5rcygpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyB8fCBzdGF0aWNNYXJrdXAgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKCl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGJvZHlUYWdzIHx8IFtdKSl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VGaWxlKHBhZ2U6IHN0cmluZywgYnVpbGRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHN0YXJ0aW5nVXJsID0gcGFnZSA9PT0gJy8nID8gJy9pbmRleCcgOiBwYWdlXG4gIHJldHVybiBidWlsZElkID8gYCR7c3RhcnRpbmdVcmx9LiR7YnVpbGRJZH0uanNgIDogYCR7c3RhcnRpbmdVcmx9LmpzYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=