import React from 'react';
import './styles/index.css';
interface LinkProps extends HTMLSpanElement {
    /**
     * 子元素
     */
    children: any;
    /**
     * 类型
     */
    type?: 'info' | 'primary' | 'danger' | 'success' | 'warning' | 'default';
    /**
     * 是否下划线
     */
    underline: boolean;
    /**
     * 是否禁用状态
     */
    disabled: boolean;
    /**
     * 原生href属性
     */
    href: string;
    /**
     * 图标类名
     */
    icon: string;
}
declare const Link: React.FC<LinkProps>;
export default Link;
export { LinkProps };
