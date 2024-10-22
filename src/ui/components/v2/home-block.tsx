import React from "react";

import { Grid } from "@chakra-ui/layout";

export interface HomeBlockProps {
  variant: "block-a" | "block-b";
  children: React.ReactNode;
  /**
   * Quantidade de colunas a serem exibidas
   */
  columns: number;
  /**
   * Quantidade de linhas a serem exibidas
   */
  rows: number;

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
  proportionSize,
}: HomeBlockProps) {
  return (
    <Grid
      className={`block ${variant}`}
      gridTemplateColumns={`repeat(${columns}, minmax(${proportionSize}, 1fr))`}
      gridTemplateRows={`repeat(${rows}, minmax(${proportionSize}, 1fr))`}
    >
      {children}
    </Grid>
  );
}
