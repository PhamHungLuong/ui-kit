import { forwardRef } from 'react';
import type { StatusDotProps } from './StatusDot.types';
import styles from './StatusDot.module.scss';

export const StatusDot = forwardRef<HTMLSpanElement, StatusDotProps>((props, ref) => {
    const { status = 'online', size = 'md', pulse = false, className, ...rest } = props;

    const dotClasses = [
        styles.statusDot,
        styles[status],
        styles[size],
        pulse && styles.pulse,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span
            ref={ref}
            className={dotClasses}
            role="status"
            aria-label={status}
            {...rest}
        />
    );
});

StatusDot.displayName = 'StatusDot';
