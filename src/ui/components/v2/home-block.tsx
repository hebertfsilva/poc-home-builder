import React from "react";

import { Grid } from "@chakra-ui/layout";

import { HomeBlockConfig, HomeBlockOptions } from "../../../core/types/config";
import { getProportionSize } from "../../../core/utils/getProportionSize";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

export interface HomeBlockProps {
  variant: HomeBlockConfig["variant"];
  children: React.ReactNode;
  /**
   * Quantidade de colunas a serem exibidas
   */
  columns: HomeBlockOptions;
  /**
   * Quantidade de linhas a serem exibidas
   */
  rows: HomeBlockOptions;

  /**
   * Tamanho em px referente a uma proporção de 1:1
   * pode receber valores como array de breakpoints
   * @default "100px"
   */
  proportionSize?: string;
  /**
   * Tamanho em px referente ao gap do grid
   * pode receber valores como array de breakpoints
   * @default "0px"
   */
  gridGap?: string;
}

export function HomeBlock({
  variant,
  children,
  columns = 6,
  rows = 6,
  proportionSize = "100px",
  gridGap = "0px",
}: HomeBlockProps) {
  const breakpoint = useBreakpoints();
  const GOLDEN_RATIO = 0.96;

  const calculateGridDimension = (dimension: HomeBlockOptions) => {
    const dimensionArray = Array.isArray(dimension)
      ? dimension.map(String)
      : [String(dimension)];
    return getProportionSize(dimensionArray, breakpoint);
  };

  const columnsCount = calculateGridDimension(columns);
  const rowsCount = calculateGridDimension(rows);

  const gridRowConfiguration = getGridRowConfiguration(
    rowsCount,
    proportionSize,
    gridGap,
    GOLDEN_RATIO
  );

  return (
    <Grid
      className={`block ${variant}`}
      gap={getProportionSize(gridGap, breakpoint)}
      gridTemplateColumns={getGridTemplate(
        columnsCount,
        proportionSize,
        gridGap,
        GOLDEN_RATIO
      )}
      {...gridRowConfiguration}
    >
      {children}
    </Grid>
  );
}

function getGridRowConfiguration(
  rowsCount: string,
  proportionSize: string,
  gridGap: string,
  goldenRatio: number
) {
  return {
    gridTemplateRows:
      rowsCount !== "auto"
        ? `repeat(${rowsCount}, minmax(calc(${proportionSize} - calc(${gridGap} * ${goldenRatio})), 1fr))`
        : undefined,
    gridAutoRows:
      rowsCount === "auto"
        ? `minmax(calc(${proportionSize} - calc(${gridGap} * ${goldenRatio})), 1fr)`
        : undefined,
  };
}

function getGridTemplate(
  columnsCount: string,
  proportionSize: string,
  gridGap: string,
  goldenRatio: number
) {
  return `repeat(${columnsCount}, minmax(calc(${proportionSize} - calc(${gridGap} * ${goldenRatio})), 1fr))`;
}
