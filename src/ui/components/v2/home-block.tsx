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
}

export function HomeBlock({
  variant,
  children,
  columns = 6,
  rows = 6,
  proportionSize = "100px",
}: HomeBlockProps) {
  const breakpoint = useBreakpoints();

  const calculateGridValue = (value: HomeBlockOptions) => {
    const valuesArray = Array.isArray(value)
      ? value.map(String)
      : [String(value)];
    return getProportionSize(valuesArray, breakpoint);
  };

  const columnsValue = calculateGridValue(columns);
  const rowsValue = calculateGridValue(rows);

  const rowConfig = {
    gridTemplateRows:
      rowsValue !== "auto"
        ? `repeat(${rowsValue}, minmax(${proportionSize}, 1fr))`
        : undefined,
    gridAutoRows:
      rowsValue === "auto" ? `minmax(${proportionSize}, 1fr)` : undefined,
  };

  return (
    <Grid
      className={`block ${variant}`}
      gridTemplateColumns={`repeat(${columnsValue}, minmax(${proportionSize}, 1fr))`}
      {...Object.fromEntries(
        Object.entries(rowConfig).filter(([, value]) => value !== undefined)
      )}
    >
      {children}
    </Grid>
  );
}
