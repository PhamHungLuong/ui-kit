import type { Meta, StoryObj } from '@storybook/react';
import { StatusDot } from './StatusDot';

const meta = {
    title: 'Atoms/StatusDot',
    component: StatusDot,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = {
    args: {
        status: 'online',
    },
};

export const Offline: Story = {
    args: {
        status: 'offline',
    },
};

export const Busy: Story = {
    args: {
        status: 'busy',
    },
};

export const Away: Story = {
    args: {
        status: 'away',
    },
};

export const WithPulse: Story = {
    args: {
        status: 'online',
        pulse: true,
    },
};

export const AllStatuses: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <StatusDot status="online" />
                <span>Online</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <StatusDot status="offline" />
                <span>Offline</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <StatusDot status="busy" />
                <span>Busy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <StatusDot status="away" />
                <span>Away</span>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <StatusDot status="online" size="sm" />
            <StatusDot status="online" size="md" />
            <StatusDot status="online" size="lg" />
        </div>
    ),
};
