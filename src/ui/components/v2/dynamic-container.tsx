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
}: DynamicContainerProps) {
  if (children.length > 2) {
    throw new Error(
      "DynamicContainer can only have up to 2 HomeBlock children."
    );
  }

  const breakpoint = useBreakpoints();
  const minWidth = getProportionSize(proportionSize, breakpoint);

  const maxWidth = containerWidth[type];

  const templateColumns = getProportionSize(
    // [base, sm, md]
    ["1fr", "1fr", `minmax(50%, ${mainBlockSize}) auto`],
    breakpoint
  );

  console.log("minWidth", minWidth);
  console.log("breakpoint", breakpoint);
  console.log("proportionSize", proportionSize);

  return (
    <Box
      display="block"
      width="100%"
      maxWidth={maxWidth}
      className={`dynamic-container ${type}`}
    >
      <Grid className="home-container" templateColumns={templateColumns}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as ReactElement, {
            proportionSize: minWidth,
          });
        })}
      </Grid>
    </Box>
  );
}
