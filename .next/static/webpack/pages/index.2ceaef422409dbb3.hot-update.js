/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./components/landing/Budget.js":
/*!**************************************!*\
  !*** ./components/landing/Budget.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(pages-dir-browser)/./components/landing/index.js":
/*!*************************************!*\
  !*** ./components/landing/index.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Promotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Promotion */ \"(pages-dir-browser)/./components/landing/Promotion.js\");\n/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pickup */ \"(pages-dir-browser)/./components/landing/Pickup.js\");\n/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Option */ \"(pages-dir-browser)/./components/landing/Option.js\");\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collection */ \"(pages-dir-browser)/./components/landing/Collection.js\");\n/* harmony import */ var _Budget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Budget */ \"(pages-dir-browser)/./components/landing/Budget.js\");\n/* harmony import */ var _Budget__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Budget__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Landing = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex flex-col justify-center mx-auto mt-[120px] sm:mt-[140px] mb-[144px] md:mt-[166px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Promotion__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bankok/Work/Test/owndays-landing-page/components/landing/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pickup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bankok/Work/Test/owndays-landing-page/components/landing/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Collection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bankok/Work/Test/owndays-landing-page/components/landing/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Budget__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"/Users/bankok/Work/Test/owndays-landing-page/components/landing/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bankok/Work/Test/owndays-landing-page/components/landing/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bankok/Work/Test/owndays-landing-page/components/landing/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Landing;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvbGFuZGluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ047QUFDQTtBQUNRO0FBQ1I7QUFFOUIsTUFBTUssVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMzQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNSLGtEQUFTQTs7Ozs7MEJBQ1YsOERBQUNDLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNFLG1EQUFVQTs7Ozs7MEJBQ1gsOERBQUNDLGdEQUFNQTs7Ozs7MEJBQ1AsOERBQUNGLCtDQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtLQVZNRztBQVlOLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYmFua29rL1dvcmsvVGVzdC9vd25kYXlzLWxhbmRpbmctcGFnZS9jb21wb25lbnRzL2xhbmRpbmcvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21vdGlvbiBmcm9tICcuL1Byb21vdGlvbic7XG5pbXBvcnQgUGlja3VwIGZyb20gJy4vUGlja3VwJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9Db2xsZWN0aW9uJztcbmltcG9ydCBCdWRnZXQgZnJvbSAnLi9CdWRnZXQnO1xuXG5jb25zdCBMYW5kaW5nID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtdC1bMTIwcHhdIHNtOm10LVsxNDBweF0gbWItWzE0NHB4XSBtZDptdC1bMTY2cHhdXCI+XG4gICAgICA8UHJvbW90aW9uIC8+XG4gICAgICA8UGlja3VwIC8+XG4gICAgICA8Q29sbGVjdGlvbiAvPlxuICAgICAgPEJ1ZGdldC8+XG4gICAgICA8T3B0aW9uLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7Il0sIm5hbWVzIjpbIlByb21vdGlvbiIsIlBpY2t1cCIsIk9wdGlvbiIsIkNvbGxlY3Rpb24iLCJCdWRnZXQiLCJMYW5kaW5nIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/landing/index.js\n"));

/***/ })

});