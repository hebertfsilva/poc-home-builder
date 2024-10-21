import { ReactNode } from "react";

import { Tokens } from "@arcotech-services/iris-tokens";
import { Grid } from "@chakra-ui/layout";

import {
  blockAGrid,
  blockBGrid,
  minBlockCellSize,
} from "../../core/constants/block";
import type { BlockType } from "../../core/types/block";

export type BaseBlockProps = {
  children: ReactNode;
  className?: string;
  type: BlockType;
};

const getBlockGridConfig = (type: BlockType) => {
  if (type === "A") {
    return {
      templateColumns: {
        base: "1fr",
        lg: `repeat(${blockAGrid.columns - 2}, minmax(${minBlockCellSize}, 1fr))`,
        xl: `repeat(${blockAGrid.columns}, minmax(${minBlockCellSize}, 1fr))`,
      },
      templateRows: {
        base: `repeat(${blockAGrid.rows}, minmax(${minBlockCellSize}, 1fr))`,
      },
    };
  }

  return {
    templateColumns: {
      base: "1fr",
      lg: `repeat(${blockBGrid.columns}, minmax(${minBlockCellSize}, 1fr))`,
    },
    templateRows: {
      base: `repeat(${blockBGrid.rows}, minmax(${minBlockCellSize}, 1fr))`,
    },
  };
};

export function BaseBlock({ children, className, type }: BaseBlockProps) {
  const gridConfig = getBlockGridConfig(type);

  return (
    <Grid
      className={className}
      height="100%"
      width="100%"
      gap={Tokens.Space500}
      templateColumns={gridConfig.templateColumns}
      templateRows={gridConfig.templateRows}
      data-blocktype={type}
    >
      {children}
    </Grid>
  );
}
