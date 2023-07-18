import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import Search from '../../../public/icons/Search.svg'
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Text: Story = {
  argTypes: {
    size: {
      options: ['Large', 'Normal', 'Small'],
      control: { type: 'radio' },
    },
    text: { control: 'text' },
    state: {
      options: ['Default', 'Hovered', 'Pressed', 'Disabled'],
      control: { type: 'radio' },
    },
    style: {
      options: ['Outline', 'Fill'],
      control: { type: 'radio' },
    }
  },
  args: {
    size: "Small",
    text: 'Button',
    state: "Default",
    style: "Fill"
  },
};
export const TextIcon: Story = {
  argTypes: {
    size: {
      options: ['Large', 'Normal', 'Small'],
      control: { type: 'radio' },
    },
    text: { control: 'text' },
    state: {
      options: ['Default', 'Hovered', 'Pressed', 'Disabled'],
      control: { type: 'radio' },
    },
    style: {
      options: ['Outline', 'Fill'],
      control: { type: 'radio' },
    }
  },
  args: {
    size: "Small",
    text: 'Button',
    state: "Default",
    style: "Fill",
    iconSvg: Search,
    icon: "Icon Right"
  },
};
export const Icon: Story = {
  argTypes: {
    size: {
      options: ['Large', 'Normal', 'Small'],
      control: { type: 'radio' },
    },
    text: { control: 'text' },
    state: {
      options: ['Default', 'Hovered', 'Pressed', 'Disabled'],
      control: { type: 'radio' },
    },
    style: {
      options: ['Outline', 'Fill'],
      control: { type: 'radio' },
    }
  },
  args: {
    size: "Small",
    iconSvg: Search,
    state: "Default",
    style: "Fill"
  },
};