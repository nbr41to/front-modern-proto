import type { ButtonProps } from "@/components/shadcn/ui/button";
import { Button as ShadcnButton } from "@/components/shadcn/ui/button";
import type { FC } from "react";

type Props = {} & ButtonProps;

export const Button: FC<Props> = ({ onClick, ...props }) => {
	return <ShadcnButton className="" onClick={onClick} {...props} />;
};
