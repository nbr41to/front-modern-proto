"use client";
import { Button } from "@/components/Button/Button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button>Button</Button>
		</main>
	);
}
