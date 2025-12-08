import type { Meta, StoryObj } from "@storybook/react-vite";
import Popup from "../components/PopUp";

const meta = {
  title: "Components/PopUp",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    triggerElement: <button>Open Popup</button>,
    children: (
      <div style={{ padding: "10px" }}>
        This is the popup content!
      </div>
    ),
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
