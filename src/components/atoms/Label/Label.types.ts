import type { LabelHTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * Label text content
     */
    children: ReactNode;

    /**
     * Shows a required indicator (asterisk)
     * @default false
     */
    required?: boolean;

    /**
     * ID of the form element this label is for
     */
    htmlFor?: string;

    /**
     * Additional CSS class name
     */
    className?: string;
}
