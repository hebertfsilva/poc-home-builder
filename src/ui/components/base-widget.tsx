import { ReactNode } from "react";

import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import { WidgetRatioConfig } from "../../core/types/widget";

export type BaseWidgetProps = {
  aspectRatio: WidgetRatioConfig["aspectRatio"];
  children: ReactNode;
  className?: string;
  variant?: "default" | "transparent";
};

export function BaseWidget({
  aspectRatio,
  children,
  className,
  variant = "default",
}: BaseWidgetProps) {
  return (
    <Box
      className={className}
      aspectRatio={aspectRatio}
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={0}
      gap={0}
      borderRadius={Tokens.BorderRadiusLarge}
      borderColor={Tokens.ColorBorderSecondary}
      borderWidth={Tokens.BorderWidthSmall}
      border={variant === "transparent" ? "none" : undefined}
      borderStyle="solid"
      backgroundColor={
        variant === "transparent"
          ? "transparent"
          : Tokens.ColorBackgroundPrimary
      }
    >
      {children}
    </Box>
  );
}
