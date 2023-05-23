webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/parts/header.js":
/*!*****************************!*\
  !*** ./src/parts/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!svg-react-loader!public/images/logo.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/logo.svg");
/* harmony import */ var _svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\microservice-bwa\\Kelas-digital\\frontend\\frontpage\\src\\parts\\header.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function header(_ref) {
  _s();
  var onLight = _ref.onLight;
  var linkColor = onLight ? 'text-gray-900' : 'text-white';
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var linkCTA = router.pathname.indexOf('/login') > -1 ? "".concat("http://localhost:3030", "/register") : "".concat("http://localhost:3030", "/login");
  var textCTA = router.pathname.indexOf('/login') > -1 ? 'Daftar' : 'Masuk';
  return __jsx("header", {
    className: "flex justify-between items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      height: 54
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "on-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("ul", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: [linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3'].join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Home"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: [linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3'].join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Pricing"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: [linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3'].join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Features"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: [linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3'].join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, "Story"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: linkCTA,
    className: "bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500\r text-lg px-6 py-3 ml-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, textCTA))));
}

// Header.propTypes = {
//     onLight: PropTypes.bool,
// }
_s(header, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlciIsIl9yZWYiLCJfcyIsIm9uTGlnaHQiLCJsaW5rQ29sb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsaW5rQ1RBIiwicGF0aG5hbWUiLCJpbmRleE9mIiwiY29uY2F0IiwicHJvY2VzcyIsInRleHRDVEEiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3R5bGUiLCJoZWlnaHQiLCJMb2dvIiwiTGluayIsImhyZWYiLCJqb2luIiwidGFyZ2V0IiwicmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1U7QUFFRztBQUVUO0FBRWdDO0FBRTlDLFNBQVNBLE1BQU1BLENBQUFDLElBQUEsRUFBWTtFQUFBQyxFQUFBO0VBQUEsSUFBVkMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFDbkMsSUFBTUMsU0FBUyxHQUFHRCxPQUFPLEdBQUcsZUFBZSxHQUFHLFlBQVk7RUFFMUQsSUFBTUUsTUFBTSxHQUFHQyw2REFBUyxDQUFDLENBQUM7RUFFMUIsSUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFBQyxNQUFBLENBQU1DLHVCQUFzQyxvQkFBQUQsTUFBQSxDQUM3RkMsdUJBQXNDLFdBQVE7RUFDbkQsSUFBTUMsT0FBTyxHQUFHUCxNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPO0VBRTNFLE9BQ0lJLEtBQUE7SUFBUUMsU0FBUyxFQUFDLG1DQUFtQztJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFB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LENBQ1BWLFNBQVMsRUFDVCxrREFBa0QsQ0FDckQsQ0FBRXNCLElBQUksQ0FBQyxHQUFHLENBQUU7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFVBR2QsQ0FDRCxDQUNOLENBQUMsRUFDTFAsS0FBQTtJQUFBRSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSVAsS0FBQTtJQUNJYyxNQUFNLEVBQUMsUUFBUTtJQUFDQyxHQUFHLEVBQUMscUJBQXFCO0lBQUNILElBQUksRUFBRWxCLE9BQVE7SUFDeERPLFNBQVMsRUFBQyx1SEFDYTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFdEJSLE9BQ0YsQ0FDSCxDQUNKLENBQ0EsQ0FBQztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFBQVYsRUFBQSxDQWhGd0JGLE1BQU07RUFBQSxRQUdYTSxxREFBUztBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hNGVjMTVhZmQ0OWE3NGEwZTQ3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgTG9nbyBmcm9tICctIXN2Zy1yZWFjdC1sb2FkZXIhcHVibGljL2ltYWdlcy9sb2dvLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoe29uTGlnaHR9KSB7XHJcbiAgICBjb25zdCBsaW5rQ29sb3IgPSBvbkxpZ2h0ID8gJ3RleHQtZ3JheS05MDAnIDogJ3RleHQtd2hpdGUnXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBsaW5rQ1RBID0gcm91dGVyLnBhdGhuYW1lLmluZGV4T2YoJy9sb2dpbicpID4gLTEgPyBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRU1CRVJQQUdFX1VSTH0vcmVnaXN0ZXJgXHJcbiAgICA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FTUJFUlBBR0VfVVJMfS9sb2dpbmBcclxuICAgIGNvbnN0IHRleHRDVEEgPSByb3V0ZXIucGF0aG5hbWUuaW5kZXhPZignL2xvZ2luJykgPiAtMSA/ICdEYWZ0YXInIDogJ01hc3VrJ1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1NCB9fT5cclxuICAgICAgICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT0nb24tZGFyayc+PC9Mb2dvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ29sb3IsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUgaG92ZXI6dGV4dC10ZWFsLTUwMCB0ZXh0LWxnIHB4LTYgcHktMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NvbG9yLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtdGVhbC01MDAgdGV4dC1sZyBweC02IHB5LTMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NvbG9yLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXRlYWwtNTAwIHRleHQtbGcgcHgtNiBweS0zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS4gam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NvbG9yLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXRlYWwtNTAwIHRleHQtbGcgcHgtNiBweS0zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS4gam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBocmVmPXtsaW5rQ1RBfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWluZGlnby03MDAgaG92ZXI6YmctaW5kaWdvLTgwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXRlYWwtNTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtbGcgcHgtNiBweS0zIG1sLTYnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dENUQX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBIZWFkZXIucHJvcFR5cGVzID0ge1xyXG4vLyAgICAgb25MaWdodDogUHJvcFR5cGVzLmJvb2wsXHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9