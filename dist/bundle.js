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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ \"./src/styled.js\");\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n        display:flex;\\n        justify-content: center;\\n        align-items: center;\\n        background-color:lightblue;\\n        height:100vh;\\n    \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n        font-size:20px;\\n        color: white;\\n    \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n        padding:20px;\\n        background-color: red;\\n        outline: none;\\n        border:none;\\n        cursor: pointer;\\n        color: white;\\n        transition:800ms;\\n        animation: \", \" 1s;\\n        &:hover{\\n            background-color: blue;\\n        }\\n        &:focus{\\n            background-color: black;\\n        }\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(360deg);\\n        }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n_styled__WEBPACK_IMPORTED_MODULE_0__.default.onDOMContentLoaded(function () {\n  _styled__WEBPACK_IMPORTED_MODULE_0__.default.resetCSS();\n  var rotate = _styled__WEBPACK_IMPORTED_MODULE_0__.default.keyframes(_templateObject());\n  var button = _styled__WEBPACK_IMPORTED_MODULE_0__.default.button(_templateObject2(), rotate);\n  var p = _styled__WEBPACK_IMPORTED_MODULE_0__.default.p(_templateObject3());\n  var div = _styled__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject4());\n  p.innerText = 'Send';\n  button.appendChild(p);\n  div.appendChild(button);\n  _styled__WEBPACK_IMPORTED_MODULE_0__.default.addToBody(div);\n});\n\n//# sourceURL=webpack://davidlpc1-styled-js/./src/index.js?");

/***/ }),

/***/ "./src/styled.js":
/*!***********************!*\
  !*** ./src/styled.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/get-all-tags-html/src/index */ \"./node_modules/get-all-tags-html/src/index.js\");\n/* harmony import */ var _node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar tags = (0,_node_modules_get_all_tags_html_src_index__WEBPACK_IMPORTED_MODULE_0__.getAllTags)();\nvar styled = {};\n\nvar _iterator = _createForOfIteratorHelper(tags),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var tag = _step.value;\n\n    styled[tag] = function (css) {\n      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        values[_key - 1] = arguments[_key];\n      }\n\n      var allCSS = '';\n      css.forEach(function (rawCSS, index) {\n        allCSS += String(rawCSS + values[index]);\n      });\n      return setElement(tag, allCSS);\n    };\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nstyled.events = [{\n  eventName: '&:hover',\n  eventOver: 'mouseover',\n  eventOut: 'mouseout'\n}, {\n  eventName: '&:focus',\n  eventOver: 'focusin',\n  eventOut: 'focusout'\n}];\n\nvar setElement = function setElement(elementName, css) {\n  var thatElementsAlreadyExists = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var element;\n\n  if (!thatElementsAlreadyExists) {\n    element = document.createElement(elementName);\n  } else {\n    element = document.querySelector(elementName);\n  }\n\n  var allCssDividedInNormalAndEvent = css.split('&:');\n  var cssWithoutEvent = allCssDividedInNormalAndEvent[0];\n  var allLinesOfNormalCSS = cssWithoutEvent.split('\\n');\n  var withoutBlankLines = allLinesOfNormalCSS.filter(function (line) {\n    return !(line.trim().length === 0);\n  });\n  var CSSCleaned = withoutBlankLines.join(' ').trim();\n  element.setAttribute(\"style\", CSSCleaned);\n  styled.events.forEach(function (_ref) {\n    var eventName = _ref.eventName,\n        eventOver = _ref.eventOver,\n        eventOut = _ref.eventOut;\n    element = setEvent(element, css, CSSCleaned, eventName, eventOver, eventOut);\n  });\n  return element;\n};\n\nvar setEvent = function setEvent(element, css, CSSCleaned, eventName, eventOver, eventOut) {\n  var allCssDividedInNormalAndThatEvent = css.split(eventName);\n\n  if (allCssDividedInNormalAndThatEvent.length >= 2) {\n    var thatEvent = allCssDividedInNormalAndThatEvent[allCssDividedInNormalAndThatEvent.length - 1];\n    var thatEventWithoutBlankLines = thatEvent.split('\\n').filter(function (line) {\n      return !(line.trim().length === 0);\n    }).join(' ').replace('{', '').replace('}', '').trim();\n    element.addEventListener(eventOver, function () {\n      element.setAttribute(\"style\", CSSCleaned + thatEventWithoutBlankLines);\n    });\n    element.addEventListener(eventOut, function () {\n      element.setAttribute(\"style\", CSSCleaned);\n    });\n  }\n\n  return element;\n};\n\nstyled.addCSSInHead = function (css) {\n  var head = document.querySelector('head');\n  head.innerHTML += \"\\n        <style>\\n            \".concat(css, \"\\n        </style>\\n    \");\n};\n\nstyled.keyframes = function (cssOfAnimation) {\n  var getRandomValue = function getRandomValue() {\n    return parseInt(Math.random() * (Math.random() * 100000000000000));\n  };\n\n  var nameOfAnimation = \"styledJS-\".concat(getRandomValue());\n  styled.addCSSInHead(\"\\n        @keyframes \".concat(nameOfAnimation, \" {\\n            \").concat(cssOfAnimation.raw[0].trim(), \"\\n        }\\n    \"));\n  return nameOfAnimation;\n};\n\nstyled.addToBody = function (element) {\n  var body = document.querySelector('body');\n  body.appendChild(element);\n};\n\nstyled.removeFromBody = function (element) {\n  var body = document.querySelector('body');\n  body.removeChild(element);\n};\n\nstyled.body = function (css) {\n  return setElement('body', css, true);\n};\n\nstyled.html = function (css) {\n  return setElement('html', css, true);\n};\n\nstyled.resetCSS = function () {\n  styled.body(\"margin: 0; padding: 0; box-sizing: border-box;\");\n  styled.html(\"margin: 0; padding: 0; box-sizing: border-box;\");\n};\n\nstyled.onDOMContentLoaded = function (callback) {\n  document.addEventListener('DOMContentLoaded', callback);\n};\n\nstyled.mediaQuery = function (Event, css) {\n  styled.addCSSInHead(\"\\n        @media \".concat(Event, \" {\\n            \").concat(css.trim(), \"\\n        }\\n    \"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);\n\n//# sourceURL=webpack://davidlpc1-styled-js/./src/styled.js?");

/***/ }),

/***/ "./node_modules/get-all-tags-html/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-all-tags-html/src/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const tags = __webpack_require__(/*! ./tags.json */ \"./node_modules/get-all-tags-html/src/tags.json\");\r\n\r\nconst getAllTags = () => tags;\r\n\r\nconst getTagsInitializedWith = letter => {\r\n    return tags.filter(tag => tag[0] === letter);\r\n}\r\n\r\nmodule.exports = {\r\n    getAllTags,\r\n    getTagsInitializedWith\r\n}\n\n//# sourceURL=webpack://davidlpc1-styled-js/./node_modules/get-all-tags-html/src/index.js?");

/***/ }),

/***/ "./node_modules/get-all-tags-html/src/tags.json":
/*!******************************************************!*\
  !*** ./node_modules/get-all-tags-html/src/tags.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"[\\\"a\\\",\\\"abbr\\\",\\\"address\\\",\\\"area\\\",\\\"article\\\",\\\"aside\\\",\\\"audio\\\",\\\"b\\\",\\\"base\\\",\\\"bdo\\\",\\\"blockquote\\\",\\\"br\\\",\\\"button\\\",\\\"canvas\\\",\\\"caption\\\",\\\"cite\\\",\\\"code\\\",\\\"col\\\",\\\"colgroup\\\",\\\"command\\\",\\\"datalist\\\",\\\"dd\\\",\\\"del\\\",\\\"details\\\",\\\"div\\\",\\\"dl\\\",\\\"dt\\\",\\\"em\\\",\\\"embed\\\",\\\"fieldset\\\",\\\"figcaption\\\",\\\"figure\\\",\\\"footer\\\",\\\"form\\\",\\\"h1\\\",\\\"h2\\\",\\\"h3\\\",\\\"h4\\\",\\\"h5\\\",\\\"h6\\\",\\\"header\\\",\\\"hgroup\\\",\\\"hr\\\",\\\"i\\\",\\\"iframe\\\",\\\"img\\\",\\\"input\\\",\\\"ins\\\",\\\"kbd\\\",\\\"label\\\",\\\"legend\\\",\\\"li\\\",\\\"link\\\",\\\"map\\\",\\\"mark\\\",\\\"menu\\\",\\\"meter\\\",\\\"nav\\\",\\\"ol\\\",\\\"optgroup\\\",\\\"option\\\",\\\"output\\\",\\\"p\\\",\\\"param\\\",\\\"pre\\\",\\\"progress\\\",\\\"q\\\",\\\"ruby\\\",\\\"rp\\\",\\\"rt\\\",\\\"samp\\\",\\\"section\\\",\\\"select\\\",\\\"small\\\",\\\"source\\\",\\\"span\\\",\\\"strong\\\",\\\"sub\\\",\\\"sup\\\",\\\"tbody\\\",\\\"td\\\",\\\"textarea\\\",\\\"tfoot\\\",\\\"th\\\",\\\"thead\\\",\\\"time\\\",\\\"title\\\",\\\"tr\\\",\\\"ul\\\",\\\"video\\\"]\");\n\n//# sourceURL=webpack://davidlpc1-styled-js/./node_modules/get-all-tags-html/src/tags.json?");

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