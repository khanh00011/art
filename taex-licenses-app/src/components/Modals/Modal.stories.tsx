import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const verified: Story = {
  argTypes: {
    verified: {
      control:  { type: 'boolean', default: true }
    },
    verifyWellet: {
      control: { type: 'boolean', default: false}
    },
  illustration: {
    control: { type: 'boolean', default: false}
  },
  auth: {
    control: { type: 'boolean', default: false}
  },
  loading: { type: 'boolean', default: false},
  },
  args: {
    verified: true,
    verifyWellet: false,
    illustration: false,
    auth: false,
    loading: false,
  },
};
export const verifyWellet: Story = {
  argTypes: {
    verified: {
      control:  { type: 'boolean', default: false }
    },
    verifyWellet: {
      control: { type: 'boolean', default: true}
    },
  illustration: {
    control: { type: 'boolean', default: false}
  },
  auth: {
    control: { type: 'boolean', default: false}
  },
  loading: { type: 'boolean', default: false},
  },
  args: {
    verified: false,
    verifyWellet: true,
    illustration: false,
    auth: false,
    loading: false,
  },
};
export const illustration: Story = {
  argTypes: {
    verified: {
      control:  { type: 'boolean', default: false }
    },
    verifyWellet: {
      control: { type: 'boolean', default: false}
    },
  illustration: {
    control: { type: 'boolean', default: true}
  },
  auth: {
    control: { type: 'boolean', default: false}
  },
  loading: { type: 'boolean', default: false},
  },
  args: {
    verified: false,
    verifyWellet: false,
    illustration: true,
    auth: false,
    loading: false,
  },
};
export const auth: Story = {
  argTypes: {
    verified: {
      control:  { type: 'boolean', default: false }
    },
    verifyWellet: {
      control: { type: 'boolean', default: false}
    },
  illustration: {
    control: { type: 'boolean', default: false}
  },
  auth: {
    control: { type: 'boolean', default: true}
  },
  loading: { type: 'boolean', default: false},
  },
  args: {
    verified: false,
    verifyWellet: false,
    illustration: false,
    auth: true,
    loading: false,
  },
};
export const loading: Story = {
  argTypes: {
    verified: {
      control:  { type: 'boolean', default: false }
    },
    verifyWellet: {
      control: { type: 'boolean', default: false}
    },
  illustration: {
    control: { type: 'boolean', default: false}
  },
  auth: {
    control: { type: 'boolean', default: false}
  },
  loading: { type: 'boolean', default: true},
  },
  args: {
    verified: false,
    verifyWellet: false,
    illustration: false,
    auth: false,
    loading: true,
  },
};