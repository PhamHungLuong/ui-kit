import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta = {
    title: 'Atoms/AspectRatio',
    component: AspectRatio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SixteenByNine: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <AspectRatio ratio={16 / 9}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    16:9 Aspect Ratio
                </div>
            </AspectRatio>
        </div>
    ),
};

export const FourByThree: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <AspectRatio ratio={4 / 3}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    4:3 Aspect Ratio
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Square: Story = {
    render: () => (
        <div style={{ width: '200px' }}>
            <AspectRatio ratio={1}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    1:1 Square
                </div>
            </AspectRatio>
        </div>
    ),
};

export const WithImage: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=450&fit=crop"
                    alt="Landscape"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
            </AspectRatio>
        </div>
    ),
};
