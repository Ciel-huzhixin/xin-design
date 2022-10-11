/*
 * @Author: xin 1844985716@qq.com
 * @Date: 2022-09-27 23:25:41
 * @LastEditors: xin 1844985716@qq.com
 * @LastEditTime: 2022-10-07 23:12:55
 * @FilePath: \xin-design\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './styles/index.css';
const Link = (props) => {
    const { children, type, underline, disabled, href, icon } = props;
    return React.createElement("a", { href: href, className: `xin-link xin-link-${type}` },
        React.createElement("span", null, children));
};
export default Link;
