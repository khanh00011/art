import type { Meta, StoryObj } from '@storybook/react';
import CheckoutModals from '.';
import Img from '../../../public/images/1.png'
import Search from '../../../public/icons/Search.svg'
const meta: Meta<typeof CheckoutModals> = {
  title: 'Example/CheckoutModals',
  component: CheckoutModals,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckoutModals>;
export const Review: Story = {
  args: {
    name: 'Notre-Dame, Floods (1910)',
    author: 'Albert Marquet',
    img: Img,
    price: 0.1,
    totalPay: 0.245,
    time: '07-04-2023'
  },
};
