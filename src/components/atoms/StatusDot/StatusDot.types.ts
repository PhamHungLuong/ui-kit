import type { HTMLAttributes } from 'react';

export type StatusDotStatus = 'online' | 'offline' | 'busy' | 'away';
export type StatusDotSize = 'sm' | 'md' | 'lg';

export interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
    status?: StatusDotStatus;
    size?: StatusDotSize;
    pulse?: boolean;
    className?: string;
}
