"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/MainSection/HeroSection.jsx":
/*!*******************************************************!*\
  !*** ./src/app/component/MainSection/HeroSection.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeroSectionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroSectionContent */ \"(app-pages-browser)/./src/app/component/MainSection/HeroSectionContent.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_images_home_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/images/home.jpg */ \"(app-pages-browser)/./public/assets/images/home.jpg\");\n/* harmony import */ var _public_assets_images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/images/whatsapp.svg */ \"(app-pages-browser)/./public/assets/images/whatsapp.svg\");\n/* harmony import */ var _public_assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/assets/images/phone.svg */ \"(app-pages-browser)/./public/assets/images/phone.svg\");\n/* harmony import */ var _public_assets_images_message_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/assets/images/message.svg */ \"(app-pages-browser)/./public/assets/images/message.svg\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slice_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/slice/slice */ \"(app-pages-browser)/./src/app/store/slice/slice.js\");\n/* harmony import */ var _Utils_CustomModal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utils/CustomModal/Modal */ \"(app-pages-browser)/./src/app/component/Utils/CustomModal/Modal.jsx\");\n/* __next_internal_client_entry_do_not_use__ HeroSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst HeroSection = (param)=>{\n    let { back, altText } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();\n    const style = \" cursor-pointer inline  z-[20] fixed  right-0 overflow-hidden  bg-white px-[10px] py-[7px]  rounded-l-[6px] shadow-xl flex items-center  w-[44px] h-[44px]\";\n    const handleButton = ()=>{\n        dispatch((0,_store_slice_slice__WEBPACK_IMPORTED_MODULE_8__.toggleModal)({\n            screen: _Utils_CustomModal_Modal__WEBPACK_IMPORTED_MODULE_9__.SCREENS.LEAD_POPUP,\n            visible: true\n        }));\n    };\n    function openLink() {\n        window.location.href = this;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" w-full relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: back,\n                    alt: altText,\n                    className: \" w-full h-[600px] object-cover object-bottom hidden\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\MyHome\\\\MyHome\\\\src\\\\app\\\\component\\\\MainSection\\\\HeroSection.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroSectionContent__WEBPACK_IMPORTED_MODULE_2__.HeroSectionContent, {}, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\MyHome\\\\MyHome\\\\src\\\\app\\\\component\\\\MainSection\\\\HeroSection.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\projects\\\\MyHome\\\\MyHome\\\\src\\\\app\\\\component\\\\MainSection\\\\HeroSection.jsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(HeroSection, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch\n    ];\n});\n_c = HeroSection;\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L01haW5TZWN0aW9uL0hlcm9TZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUI7QUFDZ0M7QUFDM0I7QUFDOEI7QUFDWTtBQUNKO0FBQ0U7QUFDN0I7QUFDWTtBQUNEO0FBRTdDLE1BQU1VLGNBQWM7UUFBRSxFQUFDUCxJQUFJLEVBQUVRLE9BQU8sRUFBQzs7SUFDMUMsTUFBTUMsV0FBV0wseURBQVdBO0lBQzVCLE1BQU1NLFFBQVE7SUFFZCxNQUFNQyxlQUFlO1FBQ25CRixTQUNFSiwrREFBV0EsQ0FBQztZQUNWTyxRQUFRTiw2REFBT0EsQ0FBQ08sVUFBVTtZQUMxQkMsU0FBUztRQUNYO0lBRUo7SUFFQSxTQUFTQztRQUNQQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxJQUFJO0lBQzdCO0lBRUEscUJBQ0M7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBSUMsS0FBS3RCO29CQUFNdUIsS0FBS2Y7b0JBQVNZLFdBQVU7Ozs7Ozs4QkFheEMsOERBQUN0QixtRUFBa0JBOzs7Ozs7Ozs7Ozs7QUFJM0IsRUFBQztHQXJDWVM7O1FBQ01ILHFEQUFXQTs7O0tBRGpCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9NYWluU2VjdGlvbi9IZXJvU2VjdGlvbi5qc3g/YjRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZXJvU2VjdGlvbkNvbnRlbnQgfSBmcm9tICcuL0hlcm9TZWN0aW9uQ29udGVudCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBiYWNrIGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ob21lLmpwZ1wiIFxyXG5pbXBvcnQgd2hhdHNhcHBpY29uIGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy93aGF0c2FwcC5zdmdcIlxyXG5pbXBvcnQgcGhvbmVOb2ljb24gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3Bob25lLnN2Z1wiXHJcbmltcG9ydCBtZXNzYWdlaWNvbiBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWVzc2FnZS5zdmdcIlxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlL3NsaWNlJ1xyXG5pbXBvcnQgeyBTQ1JFRU5TIH0gZnJvbSAnLi4vVXRpbHMvQ3VzdG9tTW9kYWwvTW9kYWwnXHJcblxyXG5leHBvcnQgY29uc3QgSGVyb1NlY3Rpb24gPSAoIHtiYWNrLCBhbHRUZXh0fSApID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgc3R5bGUgPSAnIGN1cnNvci1wb2ludGVyIGlubGluZSAgei1bMjBdIGZpeGVkICByaWdodC0wIG92ZXJmbG93LWhpZGRlbiAgYmctd2hpdGUgcHgtWzEwcHhdIHB5LVs3cHhdICByb3VuZGVkLWwtWzZweF0gc2hhZG93LXhsIGZsZXggaXRlbXMtY2VudGVyICB3LVs0NHB4XSBoLVs0NHB4XSdcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHRvZ2dsZU1vZGFsKHtcclxuICAgICAgICBzY3JlZW46IFNDUkVFTlMuTEVBRF9QT1BVUCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5MaW5rICgpe1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2JhY2t9IGFsdD17YWx0VGV4dH0gY2xhc3NOYW1lPScgdy1mdWxsIGgtWzYwMHB4XSBvYmplY3QtY292ZXIgb2JqZWN0LWJvdHRvbSBoaWRkZW4nLz5cclxuICAgICAgey8qIDxzcGFuIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0xNTU1MTIzNDU2NycsICdfYmxhbmsnKX0gY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxMThweF0gYH0+ICA8SW1hZ2Ugc3JjPXt3aGF0c2FwcGljb259IGFsdD0nd2hhdHNhcHAnIGNsYXNzTmFtZT0nIHctWzMwcHhdICcvPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gb25DbGljaz17b3BlbkxpbmsuYmluZCgndGVsOis5MSA5ODEwNDMxODgzJyl9IGNsYXNzTmFtZT17YCAke3N0eWxlfSB0b3AtWzE4MHB4XSBgfT4gIDxJbWFnZSBzcmM9e3Bob25lTm9pY29ufSBhbHQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nIHctWzIxcHhdICcvPjwvc3Bhbj5cclxuICAgICAgICAqL31cclxuXHJcbnsvKiA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9MTU1NTEyMzQ1NjdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxMThweF1gfT5cclxuICA8SW1hZ2Ugc3JjPXt3aGF0c2FwcGljb259IGFsdD0nd2hhdHNhcHAnIGNsYXNzTmFtZT0ndy1bMzBweF0nIC8+XHJcbjwvYT5cclxuPGEgaHJlZj1cInRlbDorOTE5ODEwNDMxODgzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxODBweF1gfT5cclxuICA8SW1hZ2Ugc3JjPXtwaG9uZU5vaWNvbn0gYWx0PSdjb250YWN0JyBjbGFzc05hbWU9J3ctWzIxcHhdJyAvPlxyXG48L2E+ICovfVxyXG5cclxuICAgICAgey8qIDxJbWFnZSBzcmM9e21lc3NhZ2VpY29ufSBhbHQ9J21lc3NhZ2UnICBvbkNsaWNrPXtoYW5kbGVCdXR0b259ICBjbGFzc05hbWU9JyBjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSByaWdodC1bMjBweF0gYm90dG9tLVszMHB4XSB3LVs1MHB4XSBoLVs1MHB4XSc+PC9JbWFnZT4gKi99XHJcbiAgICAgICAgPEhlcm9TZWN0aW9uQ29udGVudCAvPlxyXG4gICA8L2Rpdj5cclxuICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVyb1NlY3Rpb25Db250ZW50IiwiSW1hZ2UiLCJiYWNrIiwid2hhdHNhcHBpY29uIiwicGhvbmVOb2ljb24iLCJtZXNzYWdlaWNvbiIsInVzZURpc3BhdGNoIiwidG9nZ2xlTW9kYWwiLCJTQ1JFRU5TIiwiSGVyb1NlY3Rpb24iLCJhbHRUZXh0IiwiZGlzcGF0Y2giLCJzdHlsZSIsImhhbmRsZUJ1dHRvbiIsInNjcmVlbiIsIkxFQURfUE9QVVAiLCJ2aXNpYmxlIiwib3BlbkxpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/MainSection/HeroSection.jsx\n"));

/***/ })

});