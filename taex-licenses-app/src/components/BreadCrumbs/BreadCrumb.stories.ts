import type { Meta, StoryObj } from "@storybook/react";
import {BreadCrumbs} from "./BreadCrumbs";


const meta: Meta<typeof BreadCrumbs> = {
  title: "Example/BreadCrumbs",
  component: BreadCrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof BreadCrumbs>;
export const Default: Story = {
};
