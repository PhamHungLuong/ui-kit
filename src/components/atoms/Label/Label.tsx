import { forwardRef } from 'react';
import type { LabelProps } from './Label.types';
import styles from './Label.module.scss';

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
    const { children, required = false, className, ...rest } = props;

    const labelClasses = [styles.label, className].filter(Boolean).join(' ');

    return (
        <label ref={ref} className={labelClasses} {...rest}>
            {children}
            {required && (
                <span className={styles.required} aria-label="required">
                    *
                </span>
            )}
        </label>
    );
});

Label.displayName = 'Label';
