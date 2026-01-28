import { forwardRef } from 'react';
import { X } from 'lucide-react';
import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
    const {
        children,
        variant = 'default',
        size = 'md',
        dot = false,
        removable = false,
        onRemove,
        className,
        ...rest
    } = props;

    const badgeClasses = [styles.badge, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ');

    return (
        <span ref={ref} className={badgeClasses} {...rest}>
            {dot && <span className={styles.dot} aria-hidden="true" />}
            {children}
            {removable && (
                <button
                    type="button"
                    className={styles.removeButton}
                    onClick={onRemove}
                    aria-label="Remove"
                >
                    <X size={size === 'sm' ? 10 : size === 'lg' ? 14 : 12} />
                </button>
            )}
        </span>
    );
});

Badge.displayName = 'Badge';
