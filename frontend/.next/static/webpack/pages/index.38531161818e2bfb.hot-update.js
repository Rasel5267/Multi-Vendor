"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Navbar = (param)=>{\n    let { isLoggedIn  } = param;\n    _s();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleClickOutside = (event)=>{\n        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n            setIsDropdownOpen(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mahad\\\\OneDrive\\\\Desktop\\\\Projects For Interview\\\\multivendor\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 2\n    }, undefined);\n};\n_s(Navbar, \"S77lRhj6VuvY2XBx2nzaBdGbiSk=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9EO0FBTXBELE1BQU1HLFNBQWdDLFNBQW9CO1FBQW5CLEVBQUVDLFdBQVUsRUFBRTs7SUFDbkQsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU1PLGNBQWNOLDZDQUFNQSxDQUFpQixJQUFJO0lBRS9DLE1BQU1PLGlCQUFpQixJQUFNO1FBQzNCRixrQkFBa0IsQ0FBQ0Q7SUFDckI7SUFFQSxNQUFNSSxxQkFBcUIsQ0FBQ0MsUUFBc0I7UUFDaEQsSUFBSUgsWUFBWUksT0FBTyxJQUFJLENBQUNKLFlBQVlJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQVc7WUFDOUVQLGtCQUFrQixLQUFLO1FBQ3pCLENBQUM7SUFDSDtJQUVBSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNOO1FBQ2pDLE9BQU8sSUFBTTtZQUNYSyxPQUFPRSxtQkFBbUIsQ0FBQyxTQUFTUDtRQUN0QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNELDhEQUFDUTs7Ozs7QUFHRjtHQXpCTWQ7S0FBQUE7QUEyQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3g/NmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTmF2YmFyUHJvcHMge1xyXG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRkM8TmF2YmFyUHJvcHM+ID0gKHsgaXNMb2dnZWRJbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZHJvcGRvd25SZWYuY3VycmVudCAmJiAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcclxuICAgICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG5cdDxoZWFkZXI+XHJcblx0PC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiaXNMb2dnZWRJbiIsImlzRHJvcGRvd25PcGVuIiwic2V0SXNEcm9wZG93bk9wZW4iLCJkcm9wZG93blJlZiIsImhhbmRsZURyb3Bkb3duIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.tsx\n"));

/***/ })

});