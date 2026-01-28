import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input';

const meta = {
    title: 'Atoms/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Label Text',
        htmlFor: 'input-id',
    },
};

export const Required: Story = {
    args: {
        children: 'Email Address',
        required: true,
        htmlFor: 'email-input',
    },
};

export const WithInput: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <Label htmlFor="name-input" required>
                Full Name
            </Label>
            <div style={{ marginTop: '8px' }}>
                <Input id="name-input" placeholder="Enter your name" />
            </div>
        </div>
    ),
};

export const FormExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <div>
                <Label htmlFor="username" required>
                    Username
                </Label>
                <div style={{ marginTop: '8px' }}>
                    <Input id="username" placeholder="Enter username" />
                </div>
            </div>
            <div>
                <Label htmlFor="email" required>
                    Email
                </Label>
                <div style={{ marginTop: '8px' }}>
                    <Input id="email" type="email" placeholder="your@email.com" />
                </div>
            </div>
            <div>
                <Label htmlFor="bio">
                    Bio (Optional)
                </Label>
                <div style={{ marginTop: '8px' }}>
                    <Input id="bio" placeholder="Tell us about yourself" />
                </div>
            </div>
        </div>
    ),
};
