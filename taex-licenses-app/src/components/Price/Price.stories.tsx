import type { Meta, StoryObj } from '@storybook/react';
import Search from '../../../public/icons/Search.svg'
import { Price } from './Price';
const meta: Meta<typeof Price> = {
  title: 'Example/Price',
  component: Price,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Price>;
export const Review: Story = {
};