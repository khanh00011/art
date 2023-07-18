import type { Meta, StoryObj } from '@storybook/react';
import {Footer} from './Footer';
import Search from '../../../public/icons/Search.svg'
const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;
export const Review: Story = {
  
};