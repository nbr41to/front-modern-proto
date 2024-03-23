// @ts-expect-error ./main.ts で path alias を設定しているため ignore
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Preview } from "@storybook/react";
import { Inter as FontSans } from "next/font/google";
import React from "react";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "centered",
		nextjs: {
			appDirectory: true,
		},
	},
	decorators: [
		(Story) => (
			<div
				className={cn("bg-background font-sans antialiased", fontSans.variable)}
			>
				<Story />
			</div>
		),
	],
};

export default preview;
