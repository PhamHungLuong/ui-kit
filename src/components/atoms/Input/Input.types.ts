import type { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Input size variants
 */
export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Input state variants
 */
export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Input size
     * @default 'md'
     */
    size?: InputSize;

    /**
     * Visual state of the input
     * @default 'default'
     */
    state?: InputState;

    /**
     * Error message to display
     */
    error?: string;

    /**
     * Helper text to display below input
     */
    helperText?: string;

    /**
     * Element to display on the left side of input
     */
    leftAddon?: ReactNode;

    /**
     * Element to display on the right side of input
     */
    rightAddon?: ReactNode;

    /**
     * Show clear button when input has value
     * @default false
     */
    clearable?: boolean;

    /**
     * Callback when clear button is clicked
     */
    onClear?: () => void;

    /**
     * Show character counter
     * @default false
     */
    showCount?: boolean;

    /**
     * Maximum character count for counter
     */
    maxLength?: number;

    /**
     * Additional CSS class name
     */
    className?: string;

    /**
     * Container wrapper class name
     */
    wrapperClassName?: string;
}
