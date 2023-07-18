import type { Meta, StoryObj } from "@storybook/react";
import BasicDropdown from ".";


const meta: Meta<typeof BasicDropdown> = {
  title: "Example/BasicDropdown",
  component: BasicDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof BasicDropdown>;
export const review: Story = {
  argTypes: {
    state: {
      options: ['Default', 'Hover' , 'Filled' , 'Active' , 'Error' , 'Disable'],
      control: { type: 'radio' },
    }  
  },
  args: {
    options: [
      { value: 'Option1', label: 'Option1' },
      { value: 'Option2', label: 'Option2' },
    ],
    placeholder: "input label",
    state:  "Default",
    setWidth: 500
  },
};
