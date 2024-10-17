import { ReactNode } from "react";

import { Box, useDevice } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import { containerWidth } from "../../core/constants/container";

export type BaseContainerProps = {
  variant?: "default" | "minimal";
  className?: string;
  children: ReactNode;
};

export function BaseContainer({
  children,
  className,
  variant = "default",
}: BaseContainerProps) {
  const { isDesktop } = useDevice();

  return (
    <Box
      className={className}
      width="100%"
      height="100%"
      maxWidth={
        variant === "minimal" ? containerWidth.minimal : containerWidth.default
      }
      display="flex"
      flexWrap={isDesktop ? "nowrap" : "wrap"}
      justifyContent="center"
      gap={Tokens.Space600}
    >
      {children}
    </Box>
  );
}
