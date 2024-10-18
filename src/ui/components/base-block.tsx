import { ReactNode } from "react";

import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";
import { Grid } from "@chakra-ui/layout";

import { blockWidth } from "../../core/constants/block";
import { BlockType } from "../../core/types/block";

export type BaseBlockProps = {
  children: ReactNode;
  type: BlockType;
  className?: string;
};

const getFlexBasis = (type: BlockType) => {
  const flexBasisIndex = blockWidth[type];
  return `${flexBasisIndex * 100}%`;
};

export function BaseBlock({ children, className, type }: BaseBlockProps) {
  const flexBasisValue = getFlexBasis(type);

  return (
    <Box className={className} flexBasis={flexBasisValue}>
      <Grid
        height="100%"
        width="100%"
        gap={Tokens.Space600}
        templateColumns={"repeat(auto-fill, minmax(80px, 1fr))"}
        autoRows={"minmax(80px, auto)"}
      >
        {children}
      </Grid>
    </Box>
  );
}
