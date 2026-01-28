import { forwardRef } from 'react';
import type { DividerProps } from './Divider.types';
import styles from './Divider.module.scss';

export const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
    const { orientation = 'horizontal', label, className, ...rest } = props;

    const dividerClasses = [
        styles.divider,
        styles[orientation],
        label && styles.withLabel,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (label) {
        return (
            <div ref={ref} className={dividerClasses} role="separator" {...rest}>
                <span className={styles.label}>{label}</span>
            </div>
        );
    }

    return <div ref={ref} className={dividerClasses} role="separator" {...rest} />;
});

Divider.displayName = 'Divider';
