/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact(){\n    const content=document.querySelector('#content');\n    const div=document.createElement('div');\n    const img=document.createElement('img');\n    img.setAttribute('src','https://cdn.hipwallpaper.com/i/88/1/tmOK0P.jpg');\n    const headerOne=document.createElement('h1');\n    const headerTwo=document.createElement('h2');\n    const headerThree=document.createElement('h2');\n    headerOne.textContent=\"Book A Seat\"\n    headerTwo.textContent=\"Phone: (619) 123-4567\"\n    headerThree.textContent='Email: letsgo@go.com'\n    img.style=\"height:50%\"\n    div.appendChild(headerOne)\n    div.appendChild(headerTwo)\n    div.appendChild(headerThree)\n    div.appendChild(img)\n    div.style='display:flex;align-items:center;justify-content:center;flex-direction:column;height:500px'\n    content.appendChild(div)\n    return content;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://Restaurent-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homepage(){\n    const body=document.querySelector('body');\n    const content=document.querySelector('#content')\n    const parentdiv=document.createElement('div');\n    const div=document.createElement('div');\n    const headerOne=document.createElement('h1');\n    const headerTwo=document.createElement('P');\n    const img=document.createElement('img');\n    headerOne.textContent=\"A BOWL OF LOVE FROM JAPANESE COUSINE FOR YOU\";\n    headerTwo.textContent=\"Honest ramen crafted with ethically farmed ingredients and love.\";\n    img.setAttribute('src','https://cdn.dribbble.com/users/4680578/screenshots/13882368/media/6fc181c5bb4ab9a3c57a5065cf36f107.jpeg?compress=1&resize=800x600');\n    parentdiv.style='display:flex;align-items:center'\n    img.style='float:right;height:100%;'\n    body.style.background='#ff2f2b'\n    div.appendChild(headerOne)\n    div.appendChild(headerTwo)\n    parentdiv.appendChild(div)\n    parentdiv.appendChild(img)\n    content.appendChild(parentdiv)\n    return content;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n//# sourceURL=webpack://Restaurent-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)();\nlet parentDiv=document.querySelector('#content');\nlet removePreviousTab=()=>{\n    while (parentDiv.firstChild) {\n        parentDiv.firstChild.remove()\n    }\n}\nlet Home=document.querySelector('#home');\nlet Menu=document.querySelector('#menu');\nlet Contact=document.querySelector('#contact')\nMenu.addEventListener('click',()=>{\n    removePreviousTab();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)()\n})\nHome.addEventListener('click',()=>{\n    removePreviousTab();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)()\n})\nContact.addEventListener('click',()=>{\n    removePreviousTab();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)()\n})\n\n//# sourceURL=webpack://Restaurent-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu(){\n    const content=document.querySelector('#content');\n    const div=document.createElement('div');\n    const img=document.createElement('img');\n    img.setAttribute('src','https://i.pinimg.com/originals/fb/52/81/fb528170c4a1115250f3f3d2d19105f7.jpg');\n    div.style='display:flex;justify-content:center'\n    div.appendChild(img)\n    content.appendChild(div)\n    return content;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://Restaurent-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;