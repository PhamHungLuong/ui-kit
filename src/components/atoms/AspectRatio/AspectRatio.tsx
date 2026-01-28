import { forwardRef } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import type { AspectRatioProps } from './AspectRatio.types';

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>((props, ref) => {
    const { ratio = 16 / 9, children, className, ...rest } = props;

    return (
        <AspectRatioPrimitive.Root ref={ref as any} ratio={ratio} className={className} {...rest}>
            {children}
        </AspectRatioPrimitive.Root>
    );
});

AspectRatio.displayName = 'AspectRatio';
