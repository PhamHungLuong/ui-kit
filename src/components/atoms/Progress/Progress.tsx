import { forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import type { ProgressProps } from './Progress.types';
import styles from './Progress.module.scss';

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
    const {
        value = 0,
        max = 100,
        indeterminate = false,
        showLabel = false,
        variant = 'default',
        size = 'md',
        className,
        ...rest
    } = props;

    const percentage = indeterminate ? 100 : Math.min(Math.max((value / max) * 100, 0), 100);

    const rootClasses = [styles.progressRoot, styles[size], className].filter(Boolean).join(' ');

    const indicatorClasses = [
        styles.progressIndicator,
        styles[variant],
        indeterminate && styles.indeterminate,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div>
            <ProgressPrimitive.Root
                ref={ref}
                className={rootClasses}
                value={indeterminate ? undefined : value}
                max={max}
                {...rest}
            >
                <ProgressPrimitive.Indicator
                    className={indicatorClasses}
                    style={{
                        width: indeterminate ? '50%' : `${percentage}%`,
                    }}
                />
            </ProgressPrimitive.Root>
            {showLabel && !indeterminate && (
                <div className={styles.label}>{Math.round(percentage)}%</div>
            )}
        </div>
    );
});

Progress.displayName = 'Progress';
