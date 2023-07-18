import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";
import Img from '../../../public/images/1.png'


const meta: Meta<typeof ProductCard> = {
  title: "Example/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof ProductCard>;
export const Default: Story = {
  args: {
    product: "Notre-Dame, Floods (1910)",
    author: "Albert Marquet",
    time: 30,
    price: 0.1,
    img: Img
  },
};
export const Date: Story = {
  argTypes: {},
  args: {
    product: "Notre-Dame, Floods (1910)",
    author: "Albert Marquet",
    countdown: 1619,
    img: Img
  },
};
export const Expired: Story = {
  argTypes: {},
  args: {
    product: "Notre-Dame, Floods (1910)",
    author: "Albert Marquet",
    img: Img
  },
};
