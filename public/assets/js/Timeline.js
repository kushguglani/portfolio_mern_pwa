(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Timeline"],{

/***/ "./components/Timeline.jsx":
/*!*********************************!*\
  !*** ./components/Timeline.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Timeline = function Timeline(_ref) {\n  var data = _ref.data,\n      dark = _ref.dark;\n  return _react2.default.createElement(\n    'div',\n    { className: 'timeline--container' },\n    _react2.default.createElement(\n      'ul',\n      { className: 'timeline--line ' + (dark ? 'dark' : '') },\n      data.map(function (_ref2) {\n        var title = _ref2.title,\n            subTitle = _ref2.subTitle,\n            date = _ref2.date,\n            desc = _ref2.desc;\n        return _react2.default.createElement(\n          'li',\n          { key: subTitle + title },\n          _react2.default.createElement(\n            'div',\n            { className: 'timeline_item--content' },\n            _react2.default.createElement(\n              'div',\n              { className: 'timeline_item--title' },\n              title\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'timeline_item--sub_title' },\n              subTitle,\n              _react2.default.createElement(\n                'div',\n                { className: 'timeline_item--time' },\n                date || ''\n              )\n            ),\n            _react2.default.createElement('div', {\n              className: 'timeline_item--desc',\n              dangerouslySetInnerHTML: { __html: desc }\n            })\n          )\n        );\n      })\n    )\n  );\n};\n\nTimeline.defaultProps = {\n  dark: false\n};\n\nTimeline.propTypes = {\n  dark: _propTypes2.default.bool,\n  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({\n    title: _propTypes2.default.string.isRequired,\n    subTitle: _propTypes2.default.string.isRequired,\n    date: _propTypes2.default.string,\n    desc: _propTypes2.default.string\n  })).isRequired\n};\n\nexports.default = Timeline;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVsaW5lLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3g/MDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuXHJcbmNvbnN0IFRpbWVsaW5lID0gKHsgZGF0YSwgZGFyayB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS0tY29udGFpbmVyXCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPXtgdGltZWxpbmUtLWxpbmUgJHtkYXJrID8gJ2RhcmsnIDogJyd9YH0+XHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhLm1hcCgoe1xyXG4gICAgICAgICAgdGl0bGUsIHN1YlRpdGxlLCBkYXRlLCBkZXNjLFxyXG4gICAgICAgIH0pID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3N1YlRpdGxlICsgdGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lX2l0ZW0tLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lX2l0ZW0tLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZV9pdGVtLS1zdWJfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtzdWJUaXRsZX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVfaXRlbS0tdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lX2l0ZW0tLWRlc2NcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5UaW1lbGluZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGFyazogZmFsc2UsXHJcbn07XHJcblxyXG5UaW1lbGluZS5wcm9wVHlwZXMgPSB7XHJcbiAgZGFyazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBzdWJUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlc2M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQURBO0FBSEE7QUFGQTtBQURBO0FBREE7QUFDQTtBQTZCQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQUNBO0FBVUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Timeline.jsx\n");

/***/ })

}]);