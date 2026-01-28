import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta = {
    title: 'Atoms/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
    },
};

export const WithLabel: Story = {
    args: {
        value: 75,
        showLabel: true,
    },
};

export const Success: Story = {
    args: {
        value: 100,
        variant: 'success',
        showLabel: true,
    },
};

export const Warning: Story = {
    args: {
        value: 60,
        variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
        value: 30,
        variant: 'danger',
    },
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Progress value={50} size="sm" />
            <Progress value={50} size="md" />
            <Progress value={50} size="lg" />
        </div>
    ),
};
