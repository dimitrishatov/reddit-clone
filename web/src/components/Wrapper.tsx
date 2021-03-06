import { Box } from "@chakra-ui/react";
import React from "react";

// We accept a single optional prop called variant
export type WrapperVariant = "small" | "regular";
interface WrapperProps {
	variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
	children,
	variant = "regular",
}) => {
	return (
		<Box
			mt={8}
			mx="auto"
			maxW={variant === "regular" ? "800px" : "400px"}
			w="100%"
		>
			{children}
		</Box>
	);
};
