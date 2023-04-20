import React, {CSSProperties, FC} from 'react';
import styles from './CustomButton.module.css';
interface CustomButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  type?: 'submit' | 'reset' | 'button'
}
const CustomButton:FC<CustomButtonProps> = ({children, onClick, style, type, className}) => {
  return (
    <button
      className={className || styles.button}
      onClick={onClick}
      type={type || 'button'}
      style={style}
    >
      {children}
    </button>
  );
};

export default CustomButton;