import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
	component: Button,
	tags: ["autodocs"],
	args: {
		variant: "default",
		size: "default",
		children: "Button",
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
};
export const Outline: Story = {
	args: {
		variant: "outline",
	},
};
export const Destructive: Story = {
	args: {
		variant: "destructive",
	},
};
export const Ghost: Story = {
	args: {
		variant: "ghost",
	},
};
export const Link: Story = {
	args: {
		variant: "link",
	},
};
