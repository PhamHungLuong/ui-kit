import { forwardRef } from 'react';
import type { SkeletonProps } from './Skeleton.types';
import styles from './Skeleton.module.scss';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
    const { variant = 'text', width, height, className, style, ...rest } = props;

    const skeletonClasses = [styles.skeleton, styles[variant], className]
        .filter(Boolean)
        .join(' ');

    const skeletonStyle = {
        width,
        height: variant === 'circular' ? (width || height) : height,
        ...style,
    };

    return (
        <div
            ref={ref}
            className={skeletonClasses}
            style={skeletonStyle}
            aria-busy="true"
            aria-live="polite"
            {...rest}
        />
    );
});

Skeleton.displayName = 'Skeleton';
