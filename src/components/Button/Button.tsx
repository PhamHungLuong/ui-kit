// src/components/Button/Button.tsx

import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
// import styles from './Button.module.css'; // Nếu có style

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { 
    children, 
    // variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    leftIcon,
    className,
    disabled,
    ...rest
  } = props;

  const baseStyle = { 
    padding: size === 'sm' ? '4px 8px' : '8px 16px',
    opacity: (disabled || isLoading) ? 0.6 : 1,
    cursor: (disabled || isLoading) ? 'not-allowed' : 'pointer'
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      style={baseStyle}
      {...rest}
      className={className}
    >
      {isLoading && <span style={{ marginRight: 8 }}>⏳</span>}
      {!isLoading && leftIcon && <span style={{ marginRight: 8 }}>{leftIcon}</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';