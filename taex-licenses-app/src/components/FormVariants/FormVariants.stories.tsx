import type { Meta, StoryObj } from '@storybook/react';
import { FormVariants } from './FormVariants';
const meta: Meta<typeof FormVariants> = {
  title: 'Example/FormVariants',
  component: FormVariants,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FormVariants>;
export const Review: Story = {
  parameters: {
  }
};