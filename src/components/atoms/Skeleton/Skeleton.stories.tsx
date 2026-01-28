import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'Atoms/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        variant: 'text',
        width: 200,
    },
};

export const Circular: Story = {
    args: {
        variant: 'circular',
        width: 40,
        height: 40,
    },
};

export const Rectangular: Story = {
    args: {
        variant: 'rectangular',
        width: 200,
        height: 100,
    },
};

export const CardExample: Story = {
    render: () => (
        <div style={{ width: '300px', padding: '16px', border: '1px solid #e4e4e7', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <Skeleton variant="circular" width={48} height={48} />
                <div style={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" style={{ marginBottom: '8px' }} />
                    <Skeleton variant="text" width="40%" />
                </div>
            </div>
            <Skeleton variant="rectangular" width="100%" height={120} style={{ marginBottom: '12px' }} />
            <Skeleton variant="text" width="100%" style={{ marginBottom: '4px' }} />
            <Skeleton variant="text" width="80%" />
        </div>
    ),
};
