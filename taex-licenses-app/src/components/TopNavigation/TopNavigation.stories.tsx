import type { Meta, StoryObj } from '@storybook/react';
import Search from '../../../public/icons/Search.svg'
import { TopNavigation } from './TopNavigation';
const meta: Meta<typeof TopNavigation> = {
  title: 'Example/TopNavigation',
  component: TopNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TopNavigation>;
export const Review: Story = {
};