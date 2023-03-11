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

/***/ "./src/functions/render.js":
/*!*********************************!*\
  !*** ./src/functions/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = function () {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  console.log(\"content cleared\");\r\n  content.innerHTML = \"\";\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_homeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homeView */ \"./src/pages/homeView.js\");\n/* harmony import */ var _pages_menuView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menuView */ \"./src/pages/menuView.js\");\n/* harmony import */ var _pages_contactView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contactView */ \"./src/pages/contactView.js\");\n/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/render */ \"./src/functions/render.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// renderMarkupHome();\r\n\r\n// const home = document.getElementById(\"home\");\r\n// const menu = document.getElementById(\"menu\");\r\n// const contact = document.getElementById(\"contact\");\r\n\r\n// home.addEventListener(\"click\", function () {\r\n//   console.log(\"home clicked\");\r\n\r\n//   renderMarkupHome();\r\n// });\r\n\r\n// menu.addEventListener(\"click\", function () {\r\n//   console.log(\"menu clicked\");\r\n//   render();\r\n//   renderMarkupMenu();\r\n// });\r\n\r\n// contact.addEventListener(\"click\", function () {\r\n//   console.log(\"contact clicked\");\r\n//   render();\r\n//   renderMarkupContact();\r\n// });\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"header\");\r\n\r\n  const restaurantName = document.createElement(\"h1\");\r\n  restaurantName.classList.add(\"restaurant-name\");\r\n  restaurantName.textContent = \"Tarnished Tastes\";\r\n\r\n  header.appendChild(restaurantName);\r\n  header.appendChild(createNav());\r\n\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement(\"nav\");\r\n  nav.classList.add(\"nav\");\r\n\r\n  const homeBtn = document.createElement(\"button\");\r\n  homeBtn.textContent = \"Home\";\r\n  homeBtn.addEventListener(\"click\", function () {\r\n    console.log(\"Home clicked!\");\r\n  });\r\n\r\n  const menuBtn = document.createElement(\"button\");\r\n  menuBtn.textContent = \"Menu\";\r\n  menuBtn.addEventListener(\"click\", function () {\r\n    console.log(\"Menu clicked!\");\r\n  });\r\n\r\n  const contactBtn = document.createElement(\"button\");\r\n  contactBtn.textContent = \"Contact\";\r\n  contactBtn.addEventListener(\"click\", function () {\r\n    console.log(\"Contact clicked!\");\r\n  });\r\n\r\n  nav.appendChild(homeBtn);\r\n  nav.appendChild(menuBtn);\r\n  nav.appendChild(contactBtn);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n  return main;\r\n}\r\n\r\n// initializes website, creates the header(navbar), main content, footer\r\nfunction init() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  // create header, append to content\r\n  content.appendChild(createHeader());\r\n  // create main content, append to content\r\n  content.appendChild(createMain());\r\n\r\n  // create footer, append to content\r\n\r\n  (0,_pages_homeView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contactView.js":
/*!**********************************!*\
  !*** ./src/pages/contactView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMarkupContact\": () => (/* binding */ renderMarkupContact)\n/* harmony export */ });\nconst renderMarkupContact = function () {\r\n  const bodyEl = document.getElementById(\"content\");\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contactView.js?");

/***/ }),

/***/ "./src/pages/homeView.js":
/*!*******************************!*\
  !*** ./src/pages/homeView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMarkupHome = function () {\r\n  const home = document.createElement(\"div\");\r\n\r\n  home.innerHTML = `\r\n  \r\n  <div class=\"order\">\r\n          <h2 class=\"order-text\">Arise, ye Tarnished!</h2>\r\n          <h2 class=\"order-text\">For a delicious meal at your nearest grace!</h2>\r\n          <h3 class=\"sub-heading\">Tasty and affordable</h3>\r\n          <button class=\"btn-order btn\">Order Now</button>\r\n        </div>\r\n  `;\r\n\r\n  return home;\r\n};\r\n\r\nfunction renderRestaurantInfo() {\r\n  const info = document.createElement(\"div\");\r\n\r\n  info.innerHTML = `\r\n    <div class=\"resturant-info\">\r\n        <div class=\"address-column\">\r\n          <ion-icon class=\"icon\" name=\"location-outline\"></ion-icon>\r\n          <div class=\"address\">\r\n              2424 Highland Drive <br>Milwaukee, WI 53202</br> </p>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"hours-column\">\r\n            <ion-icon class=\"icon\" name=\"time-outline\"></ion-icon>\r\n            <div class=\"hours\">\r\n                <p>Mon-Thurs: 8am-8pm</p>\r\n                <p>Fri-Sun: 8am-11pm</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  `;\r\n  return info;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(renderMarkupHome());\r\n  main.appendChild(renderRestaurantInfo());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\r\n/*\r\n <div class=\"body\">\r\n        <div class=\"order\">\r\n          <h2 class=\"order-text\">Arise, ye Tarnished!</h2>\r\n          <h2 class=\"order-text\">For a delicious meal at your nearest grace!</h2>\r\n          <h3 class=\"sub-heading\">Tasty and affordable</h3>\r\n          <button class=\"btn-order btn\">Order Now</button>\r\n        </div>\r\n        \r\n        <div class=\"resturant-info\">\r\n          <div class=\"address-column\">\r\n            <ion-icon class=\"icon\" name=\"location-outline\"></ion-icon>\r\n            <div class=\"address\">\r\n              2424 Highland Drive <br>Milwaukee, WI 53202</br> </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hours-column\">\r\n            <ion-icon class=\"icon\" name=\"time-outline\"></ion-icon>\r\n            <div class=\"hours\">\r\n              <p>Mon-Thurs: 8am-8pm</p>\r\n              <p>Fri-Sun: 8am-11pm</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n*/\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/homeView.js?");

/***/ }),

/***/ "./src/pages/menuView.js":
/*!*******************************!*\
  !*** ./src/pages/menuView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMarkupMenu\": () => (/* binding */ renderMarkupMenu)\n/* harmony export */ });\nconst renderMarkupMenu = function () {\r\n  const bodyEl = document.getElementById(\"content\");\r\n\r\n  bodyEl.innerHTML = \"\";\r\n\r\n  const markup = `\r\n    <nav class=\"nav\">\r\n        <h1 class=\"restaurant-name\">Tarnished Tastes</h1>\r\n        <ul class=\"list\">\r\n            <li class=\"list-item nav-link home\">Home</li>\r\n            <li class=\"list-item nav-link menu\">Menu</li>\r\n            <li class=\"list-item nav-link contact\">Contact</li>\r\n        </ul>\r\n    </nav>\r\n      `;\r\n\r\n  bodyEl.insertAdjacentHTML(\"afterbegin\", markup);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menuView.js?");

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