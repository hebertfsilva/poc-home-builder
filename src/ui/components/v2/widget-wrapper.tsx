import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

type WidgetWrapperProps = {
  children: React.ReactNode;
  currentProportion?: string;
};

function WidgetWrapper({ children, currentProportion }: WidgetWrapperProps) {
  return (
    <Box
      position="relative"
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
      <Box position="absolute" top={2} right={2} fontSize="12px">
        <span>
          <i>{currentProportion}</i>
        </span>
      </Box>
    </Box>
  );
}

export { WidgetWrapper };
