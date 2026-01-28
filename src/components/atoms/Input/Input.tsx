import { forwardRef, useState, type ChangeEvent } from 'react';
import { X, AlertCircle } from 'lucide-react';
import type { InputProps } from './Input.types';
import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        size = 'md',
        state = 'default',
        error,
        helperText,
        leftAddon,
        rightAddon,
        clearable = false,
        onClear,
        showCount = false,
        maxLength,
        className,
        wrapperClassName,
        disabled,
        value,
        onChange,
        ...rest
    } = props;

    const [internalValue, setInternalValue] = useState<string | number | readonly string[] | undefined>(value);

    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = currentValue && String(currentValue).length > 0;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (value === undefined) {
            setInternalValue(e.target.value);
        }
        onChange?.(e);
    };

    const handleClear = () => {
        if (value === undefined) {
            setInternalValue('');
        }
        onClear?.();
    };

    const containerClasses = [
        styles.inputContainer,
        styles[size],
        state === 'error' || error ? styles.error : '',
        state === 'success' ? styles.success : '',
        disabled ? styles.disabled : '',
    ]
        .filter(Boolean)
        .join(' ');

    const inputClasses = [styles.input, styles[size], className].filter(Boolean).join(' ');

    const actualState = error ? 'error' : state;

    const characterCount = String(currentValue || '').length;
    const isCountExceeded = maxLength ? characterCount > maxLength : false;

    return (
        <div className={wrapperClassName ? `${styles.wrapper} ${wrapperClassName}` : styles.wrapper}>
            <div className={containerClasses}>
                {leftAddon && (
                    <span className={`${styles.addon} ${styles.leftAddon}`} aria-hidden="true">
                        {leftAddon}
                    </span>
                )}

                <input
                    ref={ref}
                    className={inputClasses}
                    disabled={disabled}
                    value={currentValue}
                    onChange={handleChange}
                    maxLength={maxLength}
                    aria-invalid={actualState === 'error'}
                    aria-describedby={
                        error
                            ? 'input-error'
                            : helperText
                                ? 'input-helper'
                                : showCount
                                    ? 'input-counter'
                                    : undefined
                    }
                    {...rest}
                />

                {clearable && hasValue && !disabled && (
                    <button
                        type="button"
                        className={styles.clearButton}
                        onClick={handleClear}
                        aria-label="Clear input"
                        tabIndex={-1}
                    >
                        <X size={16} />
                    </button>
                )}

                {rightAddon && (
                    <span className={`${styles.addon} ${styles.rightAddon}`} aria-hidden="true">
                        {rightAddon}
                    </span>
                )}
            </div>

            {error && (
                <div className={styles.errorText} id="input-error" role="alert">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                </div>
            )}

            {!error && helperText && (
                <div className={styles.helperText} id="input-helper">
                    {helperText}
                </div>
            )}

            {showCount && (
                <div
                    className={`${styles.counter} ${isCountExceeded ? styles.exceeded : ''}`}
                    id="input-counter"
                    aria-live="polite"
                >
                    {characterCount}
                    {maxLength && ` / ${maxLength}`}
                </div>
            )}
        </div>
    );
});

Input.displayName = 'Input';
