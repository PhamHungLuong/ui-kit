import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button color variant
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

/**
 * Button size
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Content to display inside the button
     */
    children: ReactNode;

    /**
     * Visual style variant
     * @default 'primary'
     */
    variant?: ButtonVariant;

    /**
     * Button size
     * @default 'md'
     */
    size?: ButtonSize;

    /**
     * Loading state - shows spinner and disables interaction
     * @default false
     */
    isLoading?: boolean;

    /**
     * Icon to display before the button text
     */
    leftIcon?: ReactNode;

    /**
     * Icon to display after the button text
     */
    rightIcon?: ReactNode;

    /**
     * Use Radix Slot to render as child component (for polymorphic behavior)
     * @default false
     */
    asChild?: boolean;

    /**
     * Additional CSS class name
     */
    className?: string;
}
