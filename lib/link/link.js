"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/index.css");

/*
 * @Author: xin 1844985716@qq.com
 * @Date: 2022-09-27 23:25:41
 * @LastEditors: xin 1844985716@qq.com
 * @LastEditTime: 2022-10-07 23:12:55
 * @FilePath: \xin-design\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var Link = function Link(props) {
  var children = props.children,
      type = props.type,
      underline = props.underline,
      disabled = props.disabled,
      href = props.href,
      icon = props.icon;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    className: "xin-link xin-link-".concat(type)
  }, /*#__PURE__*/_react.default.createElement("span", null, children));
};

var _default = Link;
exports.default = _default;