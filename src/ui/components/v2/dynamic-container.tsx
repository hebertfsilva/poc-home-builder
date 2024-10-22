import React, { ReactElement } from "react";

import { Box, Grid } from "@chakra-ui/layout";

import { getProportionSize } from "../../../core/utils/getProportionSize";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { HomeBlockProps } from "./home-block";

interface DynamicContainerProps {
  children: ReactElement<HomeBlockProps>[];
  type: "default" | "full" | "minimal";
  /**
   * tamanho em porcentagem da coluna principal
   * @default "60%"
   */
  mainBlockSize: string;
  /**
   * Tamanho em px referente a uma proporção de 1:1
   * pode receber valores como array de breakpoints
   */
  proportionSize: string | string[];
  gridGap: string | string[];
}

const containerWidth = {
  full: "100%",
  default: "1200px",
  minimal: "700px",
};

export function DynamicContainer({
  children,
  type,
  mainBlockSize = "60%",
  proportionSize,
  gridGap,
}: DynamicContainerProps) {
  validateChildrenCount(children);

  const breakpoint = useBreakpoints();
  const minWidth = getProportionSize(proportionSize, breakpoint);
  const maxWidth = containerWidth[type];
  const currentGridGap = getProportionSize(gridGap, breakpoint);
  const templateColumns = calculateTemplateColumns(
    mainBlockSize,
    currentGridGap,
    breakpoint
  );

  return (
    <Box
      display="block"
      width="100%"
      maxWidth={maxWidth}
      className={`dynamic-container ${type}`}
    >
      <Grid
        className="home-container"
        templateColumns={templateColumns}
        gap={currentGridGap}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as ReactElement, {
            proportionSize: minWidth,
            gridGap: currentGridGap,
          })
        )}
      </Grid>
    </Box>
  );
}

function validateChildrenCount(children: ReactElement<HomeBlockProps>[]) {
  if (children.length > 2) {
    throw new Error(
      "DynamicContainer can only have up to 2 HomeBlock children."
    );
  }
}

function calculateTemplateColumns(
  mainBlockSize: string,
  currentGridGap: string,
  breakpoint: string
) {
  const GOLDEN_RATIO = 1.618;
  return getProportionSize(
    [
      "1fr", //base
      "1fr", //sm
      "1fr", //md
      `minmax(50%, calc(${mainBlockSize} - calc(${currentGridGap} / ${GOLDEN_RATIO}))) auto`,
    ],
    breakpoint
  );
}
