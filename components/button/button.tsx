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

interface ButtonProps {
  /**
   * 子元素
   */
  children: any;
  /**
   * 类型
   */
  type?: 'info' | 'primary' | 'danger' | 'success' | 'warning' | 'default';
  /**
   * 大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 是否朴素按钮
   */
  plain: boolean;
  /**
   * 是否圆角按钮
   */
  round: boolean;
  /**
   * 是否圆形按钮
   */
  circle: boolean;
  /**
   * 是否加载中状态
   */
  loading: boolean;
  /**
   * 是否禁用状态
   */
  disabled: boolean;
  /**
   * 图标类名
   */
  icon: string;
  /**
   * 是否自动聚集
   */
  autofocus: boolean;
  /**
   * 原生type属性
   */
  'native-type': 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, size, type } = props;
  console.log('type', type, 'size', size);
  return <button className={`xin-button xin-button-${type}`}>{children}</button>
}

/**
 - Button组件
 **/
export default Button;
// 使用type进行导出可以进行更好的优化
export { ButtonProps };


