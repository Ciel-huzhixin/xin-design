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

const Link: React.FC<LinkProps> = (props) => {
  const { children, type, underline, disabled, href, icon } = props;
  return <a href={href} className={`xin-link xin-link-${type}`}><span>{children}</span></a>
}


export default Link;
// 使用type进行导出可以进行更好的优化
export { LinkProps };
