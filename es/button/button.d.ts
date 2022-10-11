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
declare const Button: React.FC<ButtonProps>;
/**
 - Button组件
 **/
export default Button;
export { ButtonProps };
