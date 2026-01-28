import * as PortalPrimitive from '@radix-ui/react-portal';
import type { PortalProps } from './Portal.types';

export const Portal = ({ children, container }: PortalProps) => {
    return (
        <PortalPrimitive.Root container={container}>
            {children}
        </PortalPrimitive.Root>
    );
};

Portal.displayName = 'Portal';
