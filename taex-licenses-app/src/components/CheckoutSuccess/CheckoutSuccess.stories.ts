import type { Meta, StoryObj } from '@storybook/react';
import Img from '../../../public/images/1.png'
import CheckoutSuccess from '.';
const meta: Meta<typeof CheckoutSuccess> = {
  title: 'Example/CheckoutSuccess',
  component: CheckoutSuccess,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckoutSuccess>;
export const Review: Story = {
  args: {
    name: 'Notre-Dame, Floods (1910)',
    author: 'Albert Marquet',
    status: 'Processing',
    img: Img
  },
};