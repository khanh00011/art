import type { Meta, StoryObj } from "@storybook/react";
import BasicForm from ".";


const meta: Meta<typeof BasicForm> = {
  title: "Example/BasicForm",
  component: BasicForm,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof BasicForm>;
export const Default: Story = {
  argTypes: {
    placeholder: {
      control: 'text'
    },
    state:{
      options: ['Default' , 'Hover' , 'Filled' , 'Active' , 'Error' , 'Disabled'],
      control: { type: 'radio' },
    } ,
    icon: {
      control: {
        type: 'boolean',
      }
    }
  },
  args: {
    placeholder: 'Input caption',
    state: "Default",
    icon: false 
  },
};
