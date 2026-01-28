import type { Meta, StoryObj } from '@storybook/react';
import { Heart, Download, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'ghost'],
            description: 'Visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the button',
        },
        isLoading: {
            control: 'boolean',
            description: 'Shows loading spinner and disables button',
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
    },
};

// Variants
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger Button',
        variant: 'danger',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost Button',
        variant: 'ghost',
    },
};

// Sizes
export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium Button',
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'lg',
    },
};

// With Icons
export const WithLeftIcon: Story = {
    args: {
        children: 'Download',
        leftIcon: <Download size={16} />,
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Continue',
        rightIcon: <ArrowRight size={16} />,
    },
};

export const WithBothIcons: Story = {
    args: {
        children: 'Favorite',
        leftIcon: <Heart size={16} />,
        rightIcon: <ArrowRight size={16} />,
    },
};

// States
export const Loading: Story = {
    args: {
        children: 'Loading...',
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        disabled: true,
    },
};

// As Link (using asChild with Radix Slot)
export const AsLink: Story = {
    args: {
        children: 'Link Button',
        asChild: true,
    },
    render: (args) => (
        <Button {...args}>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link Button
            </a>
        </Button>
    ),
};

// All Variants Showcase
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    ),
};

// All Sizes Showcase
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};
