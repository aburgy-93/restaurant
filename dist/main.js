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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_homeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homeView */ \"./src/pages/homeView.js\");\n/* harmony import */ var _pages_menuView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menuView */ \"./src/pages/menuView.js\");\n/* harmony import */ var _pages_contactView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contactView */ \"./src/pages/contactView.js\");\n/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/render */ \"./src/functions/render.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// renderMarkupHome();\r\n\r\n// const home = document.getElementById(\"home\");\r\n// const menu = document.getElementById(\"menu\");\r\n// const contact = document.getElementById(\"contact\");\r\n\r\n// home.addEventListener(\"click\", function () {\r\n//   console.log(\"home clicked\");\r\n\r\n//   renderMarkupHome();\r\n// });\r\n\r\n// menu.addEventListener(\"click\", function () {\r\n//   console.log(\"menu clicked\");\r\n//   render();\r\n//   renderMarkupMenu();\r\n// });\r\n\r\n// contact.addEventListener(\"click\", function () {\r\n//   console.log(\"contact clicked\");\r\n//   render();\r\n//   renderMarkupContact();\r\n// });\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"header\");\r\n\r\n  const restaurantName = document.createElement(\"h1\");\r\n  restaurantName.classList.add(\"restaurant-name\");\r\n  restaurantName.textContent = \"Tarnished Tastes\";\r\n\r\n  header.appendChild(restaurantName);\r\n  header.appendChild(createNav());\r\n\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement(\"nav\");\r\n  nav.classList.add(\"nav\");\r\n\r\n  const homeBtn = document.createElement(\"button\");\r\n  homeBtn.classList.add(\"nav-link\");\r\n  homeBtn.textContent = \"Home\";\r\n  homeBtn.addEventListener(\"click\", function () {\r\n    (0,_pages_homeView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const menuBtn = document.createElement(\"button\");\r\n  menuBtn.classList.add(\"nav-link\");\r\n  menuBtn.textContent = \"Menu\";\r\n  menuBtn.addEventListener(\"click\", function () {\r\n    (0,_pages_menuView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const contactBtn = document.createElement(\"button\");\r\n  contactBtn.classList.add(\"nav-link\");\r\n  contactBtn.textContent = \"Contact\";\r\n  contactBtn.addEventListener(\"click\", function () {\r\n    (0,_pages_contactView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  nav.appendChild(homeBtn);\r\n  nav.appendChild(menuBtn);\r\n  nav.appendChild(contactBtn);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"footer\");\r\n\r\n  footer.innerHTML = `\r\n    <p> &copy; Alex Burgy 2023</p>\r\n  `;\r\n\r\n  return footer;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n  return main;\r\n}\r\n\r\n// initializes website, creates the header(navbar), main content, footer\r\nfunction init() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  // create header, append to content\r\n  content.appendChild(createHeader());\r\n  // create main content, append to content\r\n  content.appendChild(createMain());\r\n\r\n  // create footer, append to content\r\n  content.appendChild(createFooter());\r\n\r\n  (0,_pages_homeView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contactView.js":
/*!**********************************!*\
  !*** ./src/pages/contactView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMarkupContact = function () {\r\n  const contact = document.createElement(\"div\");\r\n  contact.classList.add(\"contact\");\r\n\r\n  contact.innerHTML = `\r\n    <p>921-999-9999</p>\r\n    <p> 2424 Highland Drive Milwaukee, WI 53202</p>\r\n    <img src=\"/src/images/png/restaurant-map.png\" >\r\n  `;\r\n\r\n  return contact;\r\n};\r\n\r\nfunction loadContact() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(renderMarkupContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contactView.js?");

/***/ }),

/***/ "./src/pages/homeView.js":
/*!*******************************!*\
  !*** ./src/pages/homeView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMarkupHome = function () {\r\n  const home = document.createElement(\"div\");\r\n\r\n  home.innerHTML = `\r\n  \r\n  <div class=\"order\">\r\n          <h2 class=\"order-text\">Arise, ye Tarnished!</h2>\r\n          <h2 class=\"order-text\">For a delicious meal at your nearest grace!</h2>\r\n          <h3 class=\"sub-heading\">Tasty and affordable</h3>\r\n          <button class=\"btn-order btn\">Order Now</button>\r\n        </div>\r\n  `;\r\n\r\n  return home;\r\n};\r\n\r\nfunction renderRestaurantInfo() {\r\n  const info = document.createElement(\"div\");\r\n\r\n  info.innerHTML = `\r\n    <div class=\"resturant-info\">\r\n        <div class=\"address-column\">\r\n          <ion-icon class=\"icon\" name=\"location-outline\"></ion-icon>\r\n          <div class=\"address\">\r\n              <p>2424 Highland Drive <br>Milwaukee, WI 53202</br> </p>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"hours-column\">\r\n            <ion-icon class=\"icon\" name=\"time-outline\"></ion-icon>\r\n            <div class=\"hours\">\r\n                <p>Mon-Thurs: 8am-8pm</p>\r\n                <p>Fri-Sun: 8am-11pm</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  `;\r\n  return info;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(renderMarkupHome());\r\n  main.appendChild(renderRestaurantInfo());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\r\n/*\r\n <div class=\"body\">\r\n        <div class=\"order\">\r\n          <h2 class=\"order-text\">Arise, ye Tarnished!</h2>\r\n          <h2 class=\"order-text\">For a delicious meal at your nearest grace!</h2>\r\n          <h3 class=\"sub-heading\">Tasty and affordable</h3>\r\n          <button class=\"btn-order btn\">Order Now</button>\r\n        </div>\r\n        \r\n        <div class=\"resturant-info\">\r\n          <div class=\"address-column\">\r\n            <ion-icon class=\"icon\" name=\"location-outline\"></ion-icon>\r\n            <div class=\"address\">\r\n              2424 Highland Drive <br>Milwaukee, WI 53202</br> </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hours-column\">\r\n            <ion-icon class=\"icon\" name=\"time-outline\"></ion-icon>\r\n            <div class=\"hours\">\r\n              <p>Mon-Thurs: 8am-8pm</p>\r\n              <p>Fri-Sun: 8am-11pm</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n*/\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/homeView.js?");

/***/ }),

/***/ "./src/pages/menuView.js":
/*!*******************************!*\
  !*** ./src/pages/menuView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMarkupMenu = function () {\r\n  const menu = document.createElement(\"div\");\r\n  menu.classList.add(\"menu\");\r\n\r\n  menu.innerHTML = `\r\n  <div class=\"order\">\r\n    <h2 class=\"order-text\">Menu</h2>\r\n  </div>\r\n`;\r\n\r\n  const menu_container = document.createElement(\"div\");\r\n  menu_container.classList.add(\"menu-container\");\r\n\r\n  menu_container.innerHTML = `\r\n    <div class=\"menu-item\">\r\n      <img src=\"/src/images/png/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Gold-Pickled Fowl Foot: <span>600 runes</span></h4>\r\n        <ul class=\"ingredients\">\r\n          <li> <span> Rowa Fruit </span> x3</li>\r\n          <li> <span> Rowa Four-Toed Fowl Foot </span> x1</li>\r\n          <li> <span> Gold Firefly </span> x1</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"menu-item\">\r\n      <img src=\"/src/images/png/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Sleeping Pot: <span>1310 runes</span></h4>\r\n        <ul class=\"ingredients\">\r\n          <li> <span> Mushroom </span> x1</li>\r\n          <li> <span> Trina's Lily </span> x1</li>\r\n          <li> <span> Empty Cracked Pot </span> x1</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"menu-item\">\r\n      <img src=\"/src/images/png/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Bewitching Branch: <span>1600 runes</span></h4>\r\n        <ul class=\"ingredients\">\r\n          <li> <span> Sacramental Bud </span> x1</li>\r\n          <li> <span> Miquella's Lily </span> x1</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"menu-item\">\r\n      <img src=\"/src/images/png/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Preserving Boluses: <span>200 runes</span></h4>\r\n        <ul class=\"ingredients\">\r\n          <li> <span> Dewkissed Herba </span> x2</li>\r\n          <li> <span> Crystal Cave Moss </span> x1</li>\r\n          <li> <span> Sacramental Bud </span> x1</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"menu-item\">\r\n      <img src=\"/src/images/png/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Fire Pot: <span>320 runes</span></h4>\r\n        <ul class=\"ingredients\">\r\n        <li> <span> Mushroom </span> x1</li>\r\n        <li> <span> Smoldering Butterfly </span> x1</li>\r\n        <li> <span> Empty Cracked Pot </span> x1</li>\r\n      </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"menu-item\">\r\n      <img src=\"/src/images/png/hamburger.png\" alt=\"\" />\r\n      <div class=\"item-content\">\r\n        <h4>Bloodboil Aromatic: <span>1130 runes</span></h4>\r\n        <ul class=\"ingredients\">\r\n          <li> <span> Altus Bloom </span> x2</li>\r\n          <li> <span> Budding Cave Moss </span> x1</li>\r\n          <li> <span> Land Octopus Ovary </span> x1</li>\r\n          <li> <span> Arteria Leaf </span> x1</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  `;\r\n\r\n  menu.appendChild(menu_container);\r\n\r\n  return menu;\r\n};\r\n\r\nfunction loadMenu() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(renderMarkupMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menuView.js?");

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