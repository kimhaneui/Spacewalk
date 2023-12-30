import React from 'react';
import './component.css';

interface ButtonProps {
  onClick: () => void;
  width?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  width,
  borderRadius,
  backgroundColor,
  color,
  disabled,
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    width,
    backgroundColor,
    color: color || '#fff',
  };
  if (borderRadius) {
    buttonStyle.borderRadius = borderRadius;
  }
  return (
    <button
      className={`modal-button ${className || ''}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};

export default Button;
