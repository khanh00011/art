import type { Meta, StoryObj } from "@storybook/react";
import {GalleryFilter} from "./GalleryFilter";


const meta: Meta<typeof GalleryFilter> = {
  title: "Example/GalleryFilter",
  component: GalleryFilter,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof GalleryFilter>;
export const Default: Story = {
};
