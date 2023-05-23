(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/amp.js"],{

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"); /* globals __webpack_hash__ */
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}
var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
  page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null; /* eslint-disable-next-line */
var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?
function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.
function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.
function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}
function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, _data, curPage, pageUpdated;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!isUpdateAvailable() || !canApplyUpdates())) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          _data = _context.sent;
          curPage = page === '/' ? 'index' : page;
          pageUpdated = Object.keys(_data.c).some(function (mod) {
            return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
          });
          if (pageUpdated) {
            document.location.reload(true);
          } else {
            curHash = mostRecentHash;
          }
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.error('Error occurred checking for update', _context.t0);
          document.location.reload(true);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}
(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }
  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}
_c = EventSourceWrapper;
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }
  return EventSourceWrapper(options);
}
var _c;
$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js")); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;
    this.abort = function () {};
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
_c = TextDecoderPolyfill;
TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }
    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }
    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }
    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }
    if (bitsNeeded === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option
var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }
  return false;
}; // IE, Edge
if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k() {};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
_c2 = XHRWrapper;
XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;
      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';
      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload
  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress
  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64
  xhr.onreadystatechange = onReadyStateChange;
  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }
  xhr.open(method, url, true);
  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function () {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};
XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}
function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
_c3 = HeadersPolyfill;
HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {}
_c4 = XHRTransport;
XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;
  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
_c5 = HeadersWrapper;
HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};
function FetchTransport() {}
_c6 = FetchTransport;
FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120
  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
_c7 = EventTarget;
function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != undefined) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != undefined) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = undefined;
}
_c8 = Event;
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;
var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}
_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }
          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);
      if (chunk !== '') {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);
              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }
                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);
                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = '';
              eventTypeBuffer = '';
            }
            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close() {
    currentState = CLOSED;
    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
    var requestURL = url;
    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';
    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function () {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;
function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"); /* global location */
var evtSource;
var currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection
  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;
    try {
      var payload = JSON.parse(event.data);
      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwiY3VyUGFnZSIsInBhZ2VVcGRhdGVkIiwiT2JqZWN0Iiwia2V5cyIsImMiLCJzb21lIiwibW9kIiwiaW5kZXhPZiIsInN1YnN0ciIsInJlcGxhY2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbnNvbGUiLCJlcnJvciIsInBhdGgiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJoYXNoIiwiZXgiLCJ3YXJuIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJvbm9wZW4iLCJoYW5kbGVPbmxpbmUiLCJvbmVycm9yIiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImxvZyIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2IiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsImRpc3BsYXlDb250ZW50IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkJBQTZCLGNBQWMsMkJBQTJCLHVDQUF1QyxjQUFjLE9BQU8saUdBQWlHLHVDQUF1QyxpQkFBaUIsbURBQW1ELGlCQUFpQiwrQ0FBK0Msa0JBQWtCLGdCQUFnQixTQUFTLG9CQUFvQixTQUFTLGlCQUFpQiwwQkFBMEIsaUJBQWlCLCtCQUErQiw4REFBOEQsaUZBQWlGLCtEQUErRCxTQUFTLHFHQUFxRyxxQkFBcUI7QUFDbDRCOzs7Ozs7Ozs7Ozs7Ozs7OytDQ29CQTs7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RkFMQTtBQU9BLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxXQUFaLEVBQXlCO0VBQ3ZCRCxNQUFNLENBQUNDLFdBQVBELEdBQXFCRSwrQkFBckJGO0FBQ0Q7QUFFRCxJQUFNRyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTEQsQ0FBV0UsUUFBUSxDQUFDQyxjQUFURCxDQUF3QixlQUF4QkEsRUFBeUNFLFdBQXBESixDQUFiO0FBQ0EsSUFBTUssV0FBRixHQUF3Qk4sSUFBNUIsQ0FBTU0sV0FBRjtFQUFlQyxJQUFmLEdBQXdCUCxJQUE1QixDQUFtQk8sSUFBZjtBQUNKRCxXQUFXLEdBQUdBLFdBQVcsSUFBSSxFQUE3QkE7QUFDQSxJQUFJRSxjQUFjLEdBQUcsSUFBckIsQ0FDQTtBQUNBLElBQUlDLE9BQU8sR0FBR0MsdUJBQWQ7QUFDQSxJQUFNQyxhQUFhLEdBQ2pCTCxXQUFXLElBQUlBLFdBQVcsQ0FBQ00sUUFBWk4sQ0FBcUIsR0FBckJBLElBQTRCLEVBQTVCQSxHQUFpQyxHQUFyQyxDQUFYQSxHQUF1RCx1QkFEekQsQ0FHQTtBQUNBLFNBQVNPLGlCQUFULEdBQTZCO0VBQzNCO0VBQ0E7RUFDQTtFQUNBLE9BQU9MLGNBQWMsS0FBS0UsdUJBQTFCO0FBQ0QsQ0FFRDtBQUNBLFNB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QUFDLFFBQU93TyxHQUFQLEVBQVk7TUFDWnRPLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBYyw0Q0FBZEEsRUFBNERzTyxHQUE1RHRPO0lBQ0Q7RUFDRixDQWxCRDROO0FBbUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3J1bnRpbWUvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzLnJlc3BvbnNlVGV4dCkpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guanMubWFwXG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5pbXBvcnQgRXZlbnRTb3VyY2VQb2x5ZmlsbCBmcm9tICcuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcbmltcG9ydCB7IHNldHVwUGluZyB9IGZyb20gJy4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHMnXG5pbXBvcnQgeyBkaXNwbGF5Q29udGVudCB9IGZyb20gJy4vZm91YydcblxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgd2luZG93LkV2ZW50U291cmNlID0gRXZlbnRTb3VyY2VQb2x5ZmlsbFxufVxuXG5jb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KVxubGV0IHsgYXNzZXRQcmVmaXgsIHBhZ2UgfSA9IGRhdGFcbmFzc2V0UHJlZml4ID0gYXNzZXRQcmVmaXggfHwgJydcbmxldCBtb3N0UmVjZW50SGFzaCA9IG51bGxcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fXG5jb25zdCBob3RVcGRhdGVQYXRoID1cbiAgYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nXG5cbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gIC8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4gIC8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfX1xufVxuXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpIHtcbiAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJ1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gIGlmICghaXNVcGRhdGVBdmFpbGFibGUoKSB8fCAhY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSBPYmplY3Qua2V5cyhkYXRhLmMpLnNvbWUoKG1vZCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YFxuICAgICAgICApICE9PSAtMSB8fFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke1xuICAgICAgICAgICAgY3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gXG4gICAgICAgICAgfWAucmVwbGFjZSgvXFwvL2csICdcXFxcJylcbiAgICAgICAgKSAhPT0gLTFcbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKHBhZ2VVcGRhdGVkKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VySGFzaCA9IG1vc3RSZWNlbnRIYXNoXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKVxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICB9XG59XG5cbmdldEV2ZW50U291cmNlV3JhcHBlcih7XG4gIHBhdGg6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcmAsXG59KS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzeW5jJyB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gJ2J1aWx0Jykge1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaFxuICAgICAgdHJ5QXBwbHlVcGRhdGVzKClcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH1cbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleClcbiAgfVxufSlcblxuc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBwYWdlKVxuZGlzcGxheUNvbnRlbnQoKVxuIiwiY29uc3QgZXZlbnRDYWxsYmFja3MgPSBbXVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICB2YXIgc291cmNlXG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIHZhciBsaXN0ZW5lcnMgPSBbXVxuXG4gIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgb3B0aW9ucy50aW1lb3V0ID0gMjAgKiAxMDAwXG4gIH1cblxuICBpbml0KClcbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aClcbiAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lXG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0XG4gICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKVxuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudClcbiAgICB9XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykgIT09IC0xKSB7XG4gICAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICBzb3VyY2UuY2xvc2UoKVxuICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgfSxcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm9uZGVtYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogKGNiKSA9PiB7XG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG52YXIgUmVzcG9uc2UgPSB3aW5kb3cuUmVzcG9uc2VcbnZhciBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2RlclxudmFyIFRleHRFbmNvZGVyID0gd2luZG93LlRleHRFbmNvZGVyXG52YXIgQWJvcnRDb250cm9sbGVyID0gd2luZG93LkFib3J0Q29udHJvbGxlclxuXG5pZiAoQWJvcnRDb250cm9sbGVyID09IHVuZGVmaW5lZCkge1xuICBBYm9ydENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaWduYWwgPSBudWxsXG4gICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcbiAgdGhpcy5iaXRzTmVlZGVkID0gMFxuICB0aGlzLmNvZGVQb2ludCA9IDBcbn1cblxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKG9jdGV0cykge1xuICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAwODAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MDdmZlxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHgwODAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGQ3ZmYpIHx8XG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHhlMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGZmZmYpXG4gICAgICApXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAxMDAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgxMGZmZmZcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICBmdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpIHtcbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDFcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4gMTUgPyAzIDogMlxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgIHJldHVybiAzXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgdmFyIFJFUExBQ0VSID0gMHhmZmZkXG4gIHZhciBzdHJpbmcgPSAnJ1xuICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZFxuICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgb2N0ZXQgPSBvY3RldHNbaV1cbiAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICBvY3RldCA8IDEyOCB8fFxuICAgICAgICBvY3RldCA+IDE5MSB8fFxuICAgICAgICAhdmFsaWQoXG4gICAgICAgICAgKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKSxcbiAgICAgICAgICBiaXRzTmVlZGVkIC0gNixcbiAgICAgICAgICBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXRcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDFcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMlxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgN1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYml0c05lZWRlZCAhPT0gMCAmJlxuICAgICAgICAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpdHNOZWVkZWQgLT0gNlxuICAgICAgY29kZVBvaW50ID0gKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSA+PiAxMCkpXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIDB4ZGMwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgJiAweDNmZilcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkXG4gIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLy8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0pID09PSAndGVzdCdcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIElFLCBFZGdlXG5pZiAoXG4gIFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fFxuICBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKClcbikge1xuICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGxcbn1cblxudmFyIGsgPSBmdW5jdGlvbiAoKSB7fVxuXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gIHRoaXMucmVzcG9uc2VUeXBlID0gJydcbiAgdGhpcy5yZWFkeVN0YXRlID0gMFxuICB0aGlzLnN0YXR1cyA9IDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gJydcbiAgdGhpcy5yZXNwb25zZVRleHQgPSAnJ1xuICB0aGlzLm9ucHJvZ3Jlc3MgPSBrXG4gIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICB0aGlzLl9jb250ZW50VHlwZSA9ICcnXG4gIHRoaXMuX3hociA9IHhoclxuICB0aGlzLl9zZW5kVGltZW91dCA9IDBcbiAgdGhpcy5fYWJvcnQgPSBrXG59XG5cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgdGhpcy5fYWJvcnQodHJ1ZSlcblxuICB2YXIgdGhhdCA9IHRoaXNcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICB2YXIgc3RhdGUgPSAxXG4gIHZhciB0aW1lb3V0ID0gMFxuXG4gIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xuICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KVxuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICB4aHIub25sb2FkID0ga1xuICAgICAgeGhyLm9uZXJyb3IgPSBrXG4gICAgICB4aHIub25hYm9ydCA9IGtcbiAgICAgIHhoci5vbnByb2dyZXNzID0ga1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUgPSAwXG4gIH1cblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgIHZhciBzdGF0dXMgPSAwXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnXG4gICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgIGlmICghKCdjb250ZW50VHlwZScgaW4geGhyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgICAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgIHN0YXR1cyA9IDBcbiAgICAgICAgICBzdGF0dXNUZXh0ID0gJydcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICBzdGF0dXNUZXh0ID0gJ09LJ1xuICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZVxuICAgICAgfVxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkge1xuICAgICAgICBzdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMlxuICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1c1xuICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0XG4gICAgICAgIHRoYXQuX2NvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBvblN0YXJ0KClcbiAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gM1xuICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnXG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSAzXG4gICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dFxuICAgICAgdGhhdC5vbnByb2dyZXNzKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgIG9uUHJvZ3Jlc3MoKVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gT3BlcmEgMTJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBvbkZpbmlzaCgpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICBvblN0YXJ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDUwMClcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gIHhoci5vbmxvYWQgPSBvbkZpbmlzaFxuICB4aHIub25lcnJvciA9IG9uRmluaXNoXG4gIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW91ciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4gIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbiAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG4gIHhoci5vbmFib3J0ID0gb25GaW5pc2hcblxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbiAgaWYgKFxuICAgICEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgICEoJ21vekFub24nIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSlcbiAgKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzXG4gIH1cblxuICAvLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4gIC8vIE9wZXJhIDwgMTJcbiAgLy8gRmlyZWZveCA8IDMuNVxuICAvLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbiAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgLy8gc2VlIGFsc28gIzY0XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvblJlYWR5U3RhdGVDaGFuZ2VcblxuICBpZiAoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnXG4gIH1cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG5cbiAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbiAgICAvLyAjOTFcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDApXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9hYm9ydChmYWxzZSlcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICA/IHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgIDogJydcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuICBpZiAoXG4gICAgISgnb250aW1lb3V0JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgZG9jdW1lbnQgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnXG4gICkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICAgIHRoYXQuc2VuZCgpXG4gICAgfSwgNClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgdHJ5IHtcbiAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG4gICAgeGhyLnNlbmQodW5kZWZpbmVkKVxuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgdGhyb3cgZXJyb3IxXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDB4MjApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpIHtcbiAgLy8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGxpbmUgPSBhcnJheVtpXVxuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJylcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KClcbiAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpXG4gICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlXG4gIH1cbiAgdGhpcy5fbWFwID0gbWFwXG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldXG59XG5cbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHt9XG5cblhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB4aHIub3BlbignR0VUJywgdXJsKVxuICB2YXIgb2Zmc2V0ID0gMFxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aFxuICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgfVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0J1xuICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH1cbiAgfVxuICB4aHIuc2VuZCgpXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpIHtcbiAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnNcbn1cbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSlcbn1cblxuZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKSB7fVxuXG5GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgZmV0Y2godXJsLCB7XG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBzaWduYWw6IHNpZ25hbCxcbiAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLFxuICAgICAgICBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZWFkZXIuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVhZGVyXG4gICAgICAgICAgICAucmVhZCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwgeyBzdHJlYW06IHRydWUgfSlcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgZVxuICB9LCAwKVxufVxuXG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC50YXJnZXQgPSB0aGlzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBsZW5ndGggPSB0eXBlTGlzdGVuZXJzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93RXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICB0eXBlTGlzdGVuZXJzID0gW11cbiAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzXG4gIH1cbiAgdmFyIGZvdW5kID0gZmFsc2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICBmb3VuZCA9IHRydWVcbiAgICB9XG4gIH1cbiAgaWYgKCFmb3VuZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWx0ZXJlZCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YVxuICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZFxufVxuXG5NZXNzYWdlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG59XG5cbkNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxudmFyIFdBSVRJTkcgPSAtMVxudmFyIENPTk5FQ1RJTkcgPSAwXG52YXIgT1BFTiA9IDFcbnZhciBDTE9TRUQgPSAyXG5cbnZhciBBRlRFUl9DUiA9IC0xXG52YXIgRklFTERfU1RBUlQgPSAwXG52YXIgRklFTEQgPSAxXG52YXIgVkFMVUVfU1RBUlQgPSAyXG52YXIgVkFMVUUgPSAzXG5cbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2lcblxudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwXG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwXG5cbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBkZWYpIHtcbiAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmIChuICE9PSBuKSB7XG4gICAgbiA9IGRlZlxuICB9XG4gIHJldHVybiBjbGFtcER1cmF0aW9uKG4pXG59XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTilcbn1cblxudmFyIGZpcmUgPSBmdW5jdGlvbiAodGhhdCwgZiwgZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGYuY2FsbCh0aGF0LCBldmVudClcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvd0Vycm9yKGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKVxuXG4gIHRoaXMub25vcGVuID0gdW5kZWZpbmVkXG4gIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkXG4gIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZFxuXG4gIHRoaXMudXJsID0gdW5kZWZpbmVkXG4gIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZFxuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG4gIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkXG5cbiAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9XG4gIGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZSAhPSB1bmRlZmluZWQgJiYgJ2JvZHknIGluIFJlc3BvbnNlLnByb3RvdHlwZVxuXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XG4gIHVybCA9IFN0cmluZyh1cmwpXG4gIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKVxuXG4gIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApXG4gIHZhciBoZWFydGJlYXRUaW1lb3V0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMClcbiAgICAgIDogY2xhbXBEdXJhdGlvbig0NTAwMClcblxuICB2YXIgbGFzdEV2ZW50SWQgPSAnJ1xuICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgdmFyIGhlYWRlcnMgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKVxuICAgICAgOiB1bmRlZmluZWRcbiAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLlRyYW5zcG9ydFxuICAgICAgOiBYTUxIdHRwUmVxdWVzdFxuICB2YXIgeGhyID1cbiAgICBpc0ZldGNoU3VwcG9ydGVkICYmXG4gICAgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKVxuICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpXG4gIHZhciBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICB2YXIgdGltZW91dCA9IDBcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgdmFyIGRhdGFCdWZmZXIgPSAnJ1xuICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSAnJ1xuICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJydcblxuICB2YXIgdGV4dEJ1ZmZlciA9ICcnXG4gIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gIHZhciBmaWVsZFN0YXJ0ID0gMFxuICB2YXIgdmFsdWVTdGFydCA9IDBcblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzLCBjYW5jZWwpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbFxuICAgICAgaWYgKFxuICAgICAgICBzdGF0dXMgPT09IDIwMCAmJlxuICAgICAgICBjb250ZW50VHlwZSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSlcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTlxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25vcGVuLCBldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJydcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgK1xuICAgICAgICAgICAgc3RhdHVzICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBzdGF0dXNUZXh0ICtcbiAgICAgICAgICAgICcgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgK1xuICAgICAgICAgICAgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgK1xuICAgICAgICAgICAgJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgICAgICBjbG9zZSgpXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodGV4dENodW5rKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgdmFyIG4gPSAtMVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Q2h1bmsubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0Q2h1bmsuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgbiA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSlcbiAgICAgIHRleHRCdWZmZXIgPSAobiA9PT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKG4gKyAxKVxuICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKVxuICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKFxuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgK1xuICAgICAgICAgICAgICAgICAgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KSA9PT0gJyAnLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbidcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KVxuICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkID0gbGFzdEV2ZW50SWRCdWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ubWVzc2FnZSwgZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvblxuICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgfSwgcmV0cnkpXG4gICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpXG5cbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2Vycm9yJylcbiAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICB9XG4gIH1cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFN0YXRlID0gQ0xPU0VEXG4gICAgaWYgKGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgdGltZW91dCA9IDBcbiAgICB9XG4gICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRFxuICB9XG5cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gMFxuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gYWN0aXZpdHkgd2l0aGluICcgK1xuICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ICtcbiAgICAgICAgICAgICAgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuXG4gICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElOR1xuICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZFxuICAgIHRleHRCdWZmZXIgPSAnJ1xuICAgIGZpZWxkU3RhcnQgPSAwXG4gICAgdmFsdWVTdGFydCA9IDBcbiAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG5cbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbiAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgdmFyIHJlcXVlc3RVUkwgPSB1cmxcbiAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICByZXF1ZXN0VVJMICs9XG4gICAgICAgICAgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArXG4gICAgICAgICAgJ2xhc3RFdmVudElkPScgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge31cbiAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nXG4gICAgaWYgKGhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gaGVhZGVyc1tuYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQub3BlbihcbiAgICAgICAgeGhyLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBvbkZpbmlzaCxcbiAgICAgICAgcmVxdWVzdFVSTCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbG9zZSgpXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGVzLnVybCA9IHVybFxuICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgZXMuX2Nsb3NlID0gY2xvc2VcblxuICBvblRpbWVvdXQoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKVxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jbG9zZSgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTb3VyY2VQb2x5ZmlsbFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gIC8vIFRoaXMgaXMgdGhlIGZhbGxiYWNrIGhlbHBlciB0aGF0IHJlbW92ZXMgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd2hlblxuICAvLyBDU1MgbW9kZSBpcyBlbmFibGVkLiBUaGlzIG9ubHkgcmVhbGx5IGFjdGl2YXRlcyBpZiB5b3UgaGF2ZW4ndCBjcmVhdGVkXG4gIC8vIF9hbnlfIHN0eWxlcyBpbiB5b3VyIGFwcGxpY2F0aW9uIHlldC5cbiAgOyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSwgaSA9IHgubGVuZ3RoO1xuICAgICAgaS0tO1xuXG4gICAgKSB7XG4gICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSlcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9KVxufVxuIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5cbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5cbmxldCBldnRTb3VyY2VcbmV4cG9ydCBsZXQgY3VycmVudFBhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgaWYgKGV2dFNvdXJjZSkgZXZ0U291cmNlLmNsb3NlKClcbiAgZXZ0U291cmNlID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKVxuXG4gIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gIGlmIChwYXRobmFtZSA9PT0gY3VycmVudFBhZ2UgJiYgIXJldHJ5KSByZXR1cm5cbiAgY3VycmVudFBhZ2UgPSBwYXRobmFtZVxuICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgY2xvc2VQaW5nKClcblxuICBjb25zdCB1cmwgPSBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWBcbiAgZXZ0U291cmNlID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHsgcGF0aDogdXJsLCB0aW1lb3V0OiA1MDAwLCBvbmRlbWFuZDogMSB9KVxuXG4gIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZigneycpID09PSAtMSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICBpZiAocGF5bG9hZC5pbnZhbGlkKSB7XG4gICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4oKHBhZ2VSZXMpID0+IHtcbiAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpXG4gICAgfVxuICB9KVxufVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9