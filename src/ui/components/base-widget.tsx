import { Tokens } from "@arcotech-services/iris-tokens";
import { GridItem } from "@chakra-ui/layout";

import { widgetRatios } from "../../core/constants/widget";
import { BlockItem } from "../../core/types/block";
import type { WidgetRatio } from "../../core/types/widget";
import { BaseWidgetContent } from "./base-widget-content";

export type BaseWidgetProps = {
  className?: string;
  variant?: "default" | "transparent";
} & BlockItem;

const getWidgetConfig = (type: WidgetRatio) => {
  const config = widgetRatios[type];

  return config;
};

export function BaseWidget({
  widgetType,
  order,
  initialRow,
  initialColumn,
  className,
  variant = "default",
  widgetName,
}: BaseWidgetProps) {
  const widgetConfig = getWidgetConfig(widgetType);

  return (
    <GridItem
      order={order}
      rowStart={initialRow}
      gridColumnStart={initialColumn}
      className={className}
      colSpan={widgetConfig.gridColumnSpan}
      rowSpan={widgetConfig.gridRowSpan}
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
      <BaseWidgetContent widgetName={widgetName} />
    </GridItem>
  );
}
