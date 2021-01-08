/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/get-all-tags-html/src/index */ \"./node_modules/get-all-tags-html/src/index.js\");\n/* harmony import */ var _node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar tags = _node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0__.getAllTags();\nvar styled = {};\n\nvar _iterator = _createForOfIteratorHelper(tags),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var tag = _step.value;\n\n    styled[tag] = function (CSS) {\n      return setElement(tag, CSS);\n    };\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nfunction setElement(elementName, css) {\n  var element = document.createElement(elementName);\n  var allCssDividedInNormalAndFocus = css.split('&:focus');\n  var allCssDividedInNormalAndHover = css.split('&:hover');\n  var cssWithoutHoverEvent = allCssDividedInNormalAndHover[0];\n  var allLinesOfNormalCSS = cssWithoutHoverEvent.split('\\n');\n  var withoutBlankLines = allLinesOfNormalCSS.filter(function (line) {\n    return !(line.trim().length === 0);\n  });\n  var CSSCleaned = withoutBlankLines.join(' ').trim();\n  element.setAttribute(\"style\", CSSCleaned);\n  var events = [{\n    eventName: '&:hover',\n    eventOver: 'mouseover',\n    eventOut: 'mouseout'\n  }, {\n    eventName: '&:focus',\n    eventOver: 'focusin',\n    eventOut: 'focusout'\n  }];\n  events.forEach(function (_ref) {\n    var eventName = _ref.eventName,\n        eventOver = _ref.eventOver,\n        eventOut = _ref.eventOut;\n    element = setEvent(element, css, CSSCleaned, eventName, eventOver, eventOut);\n  });\n  return element;\n}\n\nfunction setEvent(element, css, CSSCleaned, eventName, eventOver, eventOut) {\n  var allCssDividedInNormalAndThatEvent = css.split(eventName);\n\n  if (allCssDividedInNormalAndThatEvent.length >= 2) {\n    var thatEvent = allCssDividedInNormalAndThatEvent[allCssDividedInNormalAndThatEvent.length - 1];\n    var thatEventWithoutBlankLines = thatEvent.split('\\n').filter(function (line) {\n      return !(line.trim().length === 0);\n    }).join(' ').replace('{', '').replace('}', '').trim();\n    element.addEventListener(eventOver, function () {\n      element.setAttribute(\"style\", CSSCleaned + thatEventWithoutBlankLines);\n    });\n    element.addEventListener(eventOut, function () {\n      element.setAttribute(\"style\", CSSCleaned);\n    });\n  }\n\n  return element;\n}\n\nvar getRandomValue = function getRandomValue() {\n  var randomArray = new Uint32Array(20);\n  window.crypto.getRandomValues(randomArray);\n  var randomValue = randomArray[Math.random() * 20];\n  return randomValue;\n};\n\nfunction keyframes(cssOfAnimation) {\n  if (cssOfAnimation.trim().length === 0) {\n    throw new Error('Invalid CSS');\n  }\n\n  var nameOfAnimation = \"styledJS-\".concat(getRandomValue());\n  var head = document.querySelector('head');\n  head.innerHTML += \"\\n        <style>\\n            @keyframes \".concat(nameOfAnimation, \" {\\n                \").concat(cssOfAnimation, \"\\n            }\\n        </style>\\n    \");\n  return nameOfAnimation;\n} // ================================================  Using Module  ================================================\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var rotate = keyframes(\"\\n        from {\\n            transform: rotate(0deg);\\n        }\\n\\n        to {\\n            transform: rotate(360deg);\\n        }\\n    \");\n  var button = styled.button(\"\\n        padding:20px;\\n        background-color: red;\\n        outline: none;\\n        border:none;\\n        cursor: pointer;\\n        color: white;\\n        transition:300ms;\\n        animation: \".concat(rotate, \" 1s;\\n\\n        &:hover{\\n            background-color: blue;\\n        }\\n\\n        &:focus{\\n            background-color: black;\\n        }\\n    \"));\n  var p = styled.p(\"\\n        font-size:20px;\\n        color: white;\\n    \");\n  p.innerText = 'Send';\n  button.appendChild(p);\n  var body = document.querySelector('body');\n  body.appendChild(button);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);\n\n//# sourceURL=webpack://styled-components-clone/./src/index.js?");

/***/ }),

/***/ "./node_modules/get-all-tags-html/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-all-tags-html/src/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const tags = __webpack_require__(/*! ./tags.json */ \"./node_modules/get-all-tags-html/src/tags.json\");\r\n\r\nconst getAllTags = () => tags;\r\n\r\nconst getTagsInitializedWith = letter => {\r\n    return tags.filter(tag => tag[0] === letter);\r\n}\r\n\r\nmodule.exports = {\r\n    getAllTags,\r\n    getTagsInitializedWith\r\n}\n\n//# sourceURL=webpack://styled-components-clone/./node_modules/get-all-tags-html/src/index.js?");

/***/ }),

/***/ "./node_modules/get-all-tags-html/src/tags.json":
/*!******************************************************!*\
  !*** ./node_modules/get-all-tags-html/src/tags.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"[\\\"a\\\",\\\"abbr\\\",\\\"address\\\",\\\"area\\\",\\\"article\\\",\\\"aside\\\",\\\"audio\\\",\\\"b\\\",\\\"base\\\",\\\"bdo\\\",\\\"blockquote\\\",\\\"br\\\",\\\"button\\\",\\\"canvas\\\",\\\"caption\\\",\\\"cite\\\",\\\"code\\\",\\\"col\\\",\\\"colgroup\\\",\\\"command\\\",\\\"datalist\\\",\\\"dd\\\",\\\"del\\\",\\\"details\\\",\\\"div\\\",\\\"dl\\\",\\\"dt\\\",\\\"em\\\",\\\"embed\\\",\\\"fieldset\\\",\\\"figcaption\\\",\\\"figure\\\",\\\"footer\\\",\\\"form\\\",\\\"h1\\\",\\\"h2\\\",\\\"h3\\\",\\\"h4\\\",\\\"h5\\\",\\\"h6\\\",\\\"header\\\",\\\"hgroup\\\",\\\"hr\\\",\\\"i\\\",\\\"iframe\\\",\\\"img\\\",\\\"input\\\",\\\"ins\\\",\\\"kbd\\\",\\\"label\\\",\\\"legend\\\",\\\"li\\\",\\\"link\\\",\\\"map\\\",\\\"mark\\\",\\\"menu\\\",\\\"meter\\\",\\\"nav\\\",\\\"ol\\\",\\\"optgroup\\\",\\\"option\\\",\\\"output\\\",\\\"p\\\",\\\"param\\\",\\\"pre\\\",\\\"progress\\\",\\\"q\\\",\\\"ruby\\\",\\\"rp\\\",\\\"rt\\\",\\\"samp\\\",\\\"section\\\",\\\"select\\\",\\\"small\\\",\\\"source\\\",\\\"span\\\",\\\"strong\\\",\\\"sub\\\",\\\"sup\\\",\\\"tbody\\\",\\\"td\\\",\\\"textarea\\\",\\\"tfoot\\\",\\\"th\\\",\\\"thead\\\",\\\"time\\\",\\\"title\\\",\\\"tr\\\",\\\"ul\\\",\\\"video\\\"]\");\n\n//# sourceURL=webpack://styled-components-clone/./node_modules/get-all-tags-html/src/tags.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;