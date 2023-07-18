import type { Meta, StoryObj } from '@storybook/react';
import { DialogWallet } from './DialogWallet';
const meta: Meta<typeof DialogWallet> = {
  title: 'Example/DialogWallet',
  component: DialogWallet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DialogWallet>;
export const Review: Story = {
  argTypes: {
    desktop: {
      control:  { type: 'boolean', default: true }
    }
  },
  args: {
    desktop: true
  },
};