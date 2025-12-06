import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Color tag for button
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

/**
 * size for button
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content
   */
  children: ReactNode;

  /**
   * the type of showing button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * size of button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * state (loading,)
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Icon for button
   */
  leftIcon?: ReactNode;
}