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
    const proportion = getProportionSize(
      Array.isArray(value) ? value.map(String) : [String(value)],
      breakpoint
    );

    if (proportion === "full") return "1fr";
    if (proportion === "auto") return "auto";

    return proportion;
  };

  const columnsValue = calculateGridValue(columns);
  const rowsValue = calculateGridValue(rows);

  return (
    <Grid
      className={`block ${variant}`}
      gridTemplateColumns={`repeat(${columnsValue}, minmax(${proportionSize}, 1fr))`}
      gridTemplateRows={`repeat(${rowsValue}, minmax(${proportionSize}, 1fr))`}
    >
      {children}
    </Grid>
  );
}
