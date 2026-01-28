import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from './Portal';
import { Button } from '../Button';

const meta = {
    title: 'Atoms/Portal',
    component: Portal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div>
            <p>This content is in the normal flow</p>
            <Portal>
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    padding: '16px',
                    background: '#3b82f6',
                    color: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}>
                    This is rendered in a Portal (check the DOM!)
                </div>
            </Portal>
        </div>
    ),
};

export const WithButton: Story = {
    render: () => {
        const [show, setShow] = React.useState(false);

        return (
            <div>
                <Button onClick={() => setShow(!show)}>
                    {show ? 'Hide' : 'Show'} Portal Content
                </Button>
                {show && (
                    <Portal>
                        <div style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '32px',
                            background: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                        }}>
                            <h3 style={{ margin: '0 0 16px 0' }}>Portal Content</h3>
                            <p style={{ margin: '0 0 16px 0' }}>This content is rendered outside the normal DOM hierarchy!</p>
                            <Button onClick={() => setShow(false)}>Close</Button>
                        </div>
                    </Portal>
                )}
            </div>
        );
    },
};

// Import React for the WithButton story
import * as React from 'react';
