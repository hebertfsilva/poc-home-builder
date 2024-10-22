import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

type WidgetWrapperProps = {
  children: React.ReactNode;
};

function WidgetWrapper({ children }: WidgetWrapperProps) {
  return (
    <Box
      width="100%"
      height="100%"
      borderStyle="solid"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderWidth={Tokens.BorderWidthSmall}
      borderRadius={Tokens.BorderRadiusLarge}
      borderColor={Tokens.ColorBorderSecondary}
      backgroundColor={Tokens.ColorBackgroundPrimary}
    >
      {children}
    </Box>
  );
}

export { WidgetWrapper };
