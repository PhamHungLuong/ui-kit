import type { Meta, StoryObj } from '@storybook/react';
import { Search, Mail, Lock, User } from 'lucide-react';
import { Input } from './Input';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        state: {
            control: 'select',
            options: ['default', 'error', 'success'],
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const WithLabel: Story = {
    render: () => (
        <div>
            <label htmlFor="email-input" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>
                Email Address
            </label>
            <Input id="email-input" type="email" placeholder="your@email.com" />
        </div>
    ),
};

// Sizes
export const Small: Story = {
    args: {
        size: 'sm',
        placeholder: 'Small input',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        placeholder: 'Medium input',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        placeholder: 'Large input',
    },
};

// States
export const WithError: Story = {
    args: {
        placeholder: 'Enter email',
        error: 'This field is required',
        defaultValue: '',
    },
};

export const Success: Story = {
    args: {
        placeholder: 'Enter email',
        state: 'success',
        defaultValue: 'valid@email.com',
    },
};

export const WithHelperText: Story = {
    args: {
        placeholder: 'Enter password',
        type: 'password',
        helperText: 'Password must be at least 8 characters',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        disabled: true,
        defaultValue: 'Cannot edit this',
    },
};

// With Addons
export const WithLeftIcon: Story = {
    args: {
        placeholder: 'Search...',
        leftAddon: <Search size={18} />,
    },
};

export const WithRightIcon: Story = {
    args: {
        type: 'email',
        placeholder: 'your@email.com',
        rightAddon: <Mail size={18} />,
    },
};

export const WithBothIcons: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
        leftAddon: <Lock size={18} />,
        rightAddon: <User size={18} />,
    },
};

// Clearable
export const Clearable: Story = {
    args: {
        placeholder: 'Type something...',
        clearable: true,
        defaultValue: 'Clear me!',
    },
};

// Character Counter
export const WithCharacterCounter: Story = {
    args: {
        placeholder: 'Enter bio',
        showCount: true,
        maxLength: 100,
        helperText: 'Brief description about yourself',
    },
};

export const CharacterLimitExceeded: Story = {
    args: {
        placeholder: 'Max 10 characters',
        showCount: true,
        maxLength: 10,
        defaultValue: 'This is way too long',
    },
};

// Input Types
export const EmailInput: Story = {
    args: {
        type: 'email',
        placeholder: 'your@email.com',
        leftAddon: <Mail size={18} />,
    },
};

export const PasswordInput: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
        leftAddon: <Lock size={18} />,
    },
};

export const NumberInput: Story = {
    args: {
        type: 'number',
        placeholder: 'Enter amount',
        leftAddon: <span>$</span>,
    },
};

export const SearchInput: Story = {
    args: {
        type: 'search',
        placeholder: 'Search...',
        leftAddon: <Search size={18} />,
        clearable: true,
    },
};

// Complete Form Example
export const CompleteFormExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
                type="text"
                placeholder="Full Name"
                leftAddon={<User size={18} />}
                helperText="Enter your full name"
            />
            <Input
                type="email"
                placeholder="Email Address"
                leftAddon={<Mail size={18} />}
                error="Please enter a valid email"
            />
            <Input
                type="password"
                placeholder="Password"
                leftAddon={<Lock size={18} />}
                showCount
                maxLength={20}
                helperText="At least 8 characters"
            />
            <Input
                placeholder="Search users..."
                leftAddon={<Search size={18} />}
                clearable
            />
        </div>
    ),
};
