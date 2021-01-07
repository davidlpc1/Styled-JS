"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tags = require('get-all-tags-html').getAllTags();

var styled = {};

var _iterator = _createForOfIteratorHelper(tags),
    _step;

try {
  var _loop = function _loop() {
    var tag = _step.value;

    styled[tag] = function (css) {
      return setElement(tag, css);
    };
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function setElement(elementName, css) {
  var element = document.createElement(elementName);
  var allCssDivided = css.split('&:hover');
  var cssWithoutEvents = allCssDivided[0];
  var allLinesOfCss = cssWithoutEvents.split('\n');
  var withoutBlankLines = allLinesOfCss.filter(function (line) {
    return !(line.trim().length === 0);
  });
  var cssCleaned = withoutBlankLines.join(' ').trim();
  element.setAttribute("style", cssCleaned);
  var hover = allCssDivided[allCssDivided.length - 1];
  var hoverWithoutBlankLines = hover.split('\n').filter(function (line) {
    return !(line.trim().length === 0);
  }).join(' ').replace('{', '').replace('}', '').trim();
  element.addEventListener('mouseover', function () {
    element.setAttribute("style", cssCleaned + hoverWithoutBlankLines);
  });
  element.addEventListener('mouseout', function () {
    element.setAttribute("style", cssCleaned);
  });
  return element;
} // Using styleJS


var button = styled.button("\n    padding:20px;\n    background-color: red;\n    outline: none;\n    border:none;\n    cursor: pointer;\n    color: white;\n\n    &:hover{\n        background-color: blue;\n    }\n");
var p = styled.p("\n    font-size:20px;\n    color: white;\n");
p.innerText = 'Send';
button.appendChild(p);
var body = document.querySelector('body');
body.appendChild(button);
module.exports = styled;