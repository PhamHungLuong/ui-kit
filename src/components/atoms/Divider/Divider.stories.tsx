import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
    title: 'Atoms/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
            <span>Left</span>
            <Divider orientation="vertical" />
            <span>Right</span>
        </div>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <p>Content above</p>
            <Divider label="OR" />
            <p>Content below</p>
        </div>
    ),
};
