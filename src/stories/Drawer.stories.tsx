/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';
import Drawer from '../components/Drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlwaysOpen: Story = {
  args: {
    isOpen: true,
    title: 'Tile Drawer Always Open',
    children: (
      <div>
        <p>Content. Drawer will not close because isOpen is Truth</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
      setIsOpen(false);
      args.onClose();
    };

    return (
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Open Drawer
        </button>

        <Drawer
          {...args}
          isOpen={isOpen}
          onClose={handleClose}
        >
          <div>
            <ul>
              <li>You can press X button</li>
              <li>or click to overlay</li>
              <li>or press ESC button to close drawer</li>
            </ul>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    isOpen: false,
    title: 'Interactive Drawer',
    triggerElement: <span style={{ marginLeft: 10, color: '#888' }}>(Trigger Element Prop)</span>,
    children: (<div></div>),
  },
};