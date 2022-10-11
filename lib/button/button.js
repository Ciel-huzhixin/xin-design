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
var Button = function Button(props) {
  var children = props.children,
      size = props.size,
      type = props.type;
  console.log('type', type, 'size', size);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "xin-button xin-button-".concat(type)
  }, children);
};
/**
 - Button组件
 **/


var _default = Button;
exports.default = _default;