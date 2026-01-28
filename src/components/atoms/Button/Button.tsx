import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        children,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        leftIcon,
        rightIcon,
        asChild = false,
        className,
        disabled,
        ...rest
    } = props;

    const Component = asChild ? Slot : 'button';

    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Component
            ref={ref}
            className={buttonClasses}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            {...rest}
        >
            {isLoading && (
                <span className={styles.iconWrapper}>
                    <Loader2 className={styles.spinner} size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
                </span>
            )}
            {!isLoading && leftIcon && (
                <span className={styles.iconWrapper} aria-hidden="true">
                    {leftIcon}
                </span>
            )}
            {children}
            {!isLoading && rightIcon && (
                <span className={styles.iconWrapper} aria-hidden="true">
                    {rightIcon}
                </span>
            )}
        </Component>
    );
});

Button.displayName = 'Button';
