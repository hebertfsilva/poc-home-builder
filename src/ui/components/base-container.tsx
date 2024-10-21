import { Tokens } from "@arcotech-services/iris-tokens";
import { Grid } from "@chakra-ui/layout";

import { containerWidth } from "../../core/constants/container";
import type { ContainerBlockType } from "../../core/types/container";
import type { HomeConfigBase } from "../../core/types/home";
import { getBlockWidth } from "../../core/utils/getBlockWidth";
import { useHomeBlockConfig } from "../../core/utils/getHomeConfig";
import { BaseBlock } from "./base-block";
import { BaseWidget } from "./base-widget";

export type BaseContainerProps = {
  variant?: "default" | "minimal";
  blockType: ContainerBlockType;
  blockConfig: HomeConfigBase["containerBlocksConfig"];
  className?: string;
};

const getContainerGridTemplate = (
  blockType: ContainerBlockType,
  containerBlocksConfig: HomeConfigBase["containerBlocksConfig"]
) => {
  if (blockType === "single") {
    return {
      templateColumns: {
        base: "1fr",
        lg: "repeat(auto-fill, minmax(80px, 1fr)",
      },
    };
  }

  const blockAWidth = getBlockWidth(containerBlocksConfig.A.type);
  const blockBWidth = containerBlocksConfig?.B
    ? getBlockWidth(containerBlocksConfig.B.type)
    : "0%";

  // return `${blockAWidth} ${blockBWidth}`;

  return {
    gap: { base: Tokens.Space500, xl: Tokens.Space600 },
    templateColumns: {
      base: "1fr",
      lg: `minmax(calc(${blockAWidth} - ${Tokens.Space600} / 2), 1fr) minmax(calc(${blockBWidth} - ${Tokens.Space600} / 2), 1fr)`,
    },
  };
};

export function BaseContainer({
  className,
  blockType,
  blockConfig,
  variant = "default",
}: BaseContainerProps) {
  const { gap, templateColumns } = getContainerGridTemplate(
    blockType,
    blockConfig
  );

  const { A, B } = useHomeBlockConfig(blockConfig);

  return (
    <Grid
      className={className}
      width="100%"
      height="100%"
      maxWidth={
        variant === "minimal" ? containerWidth.minimal : containerWidth.default
      }
      display="grid"
      gap={gap}
      templateColumns={templateColumns}
    >
      <BaseBlock type="A">
        {A.map((item, index) => {
          if (!item) return null;

          return (
            <BaseWidget
              widgetType={item.widgetType}
              order={item.order}
              initialRow={item.initialRow}
              initialColumn={item.initialColumn}
              key={`${item.widgetType}-${item.order}`}
              widgetName={item.widgetName}
            />
          );
        })}
      </BaseBlock>
      {!!B ? (
        <BaseBlock type="B">
          {B.map((item, index) => {
            if (!item) return null;

            return (
              <BaseWidget
                widgetType={item.widgetType}
                order={item.order}
                initialRow={item.initialRow}
                initialColumn={item.initialColumn}
                key={`${item.widgetType}-${item.order}`}
                widgetName={item.widgetName}
              />
            );
          })}
        </BaseBlock>
      ) : null}
    </Grid>
  );
}
