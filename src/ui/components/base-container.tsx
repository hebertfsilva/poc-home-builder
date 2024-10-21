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
    return "repeat(auto-fill, minmax(80px, 1fr)";
  }

  const blockAWidth = getBlockWidth(containerBlocksConfig.A.type);
  const blockBWidth = containerBlocksConfig?.B
    ? getBlockWidth(containerBlocksConfig.B.type)
    : "0%";

  return `${blockAWidth} ${blockBWidth}`;
};

export function BaseContainer({
  className,
  blockType,
  blockConfig,
  variant = "default",
}: BaseContainerProps) {
  const templateColumns = getContainerGridTemplate(blockType, blockConfig);

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
      gap={Tokens.Space600}
      templateColumns={{ base: "1fr", lg: templateColumns }}
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
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "red",
                  borderRadius: "inherit",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: Tokens.FontSize700,
                    fontWeight: Tokens.FontWeightBold,
                    color: "white",
                    margin: "auto",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {index}
                </p>
              </div>
            </BaseWidget>
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
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "red",
                    borderRadius: "inherit",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: Tokens.FontSize700,
                      fontWeight: Tokens.FontWeightBold,
                      color: "white",
                      margin: "auto",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {index}
                  </p>
                </div>
              </BaseWidget>
            );
          })}
        </BaseBlock>
      ) : null}
    </Grid>
  );
}
