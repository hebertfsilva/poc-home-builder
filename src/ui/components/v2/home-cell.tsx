import { GridItem } from "@chakra-ui/layout";

import { getProportionSize } from "../../../core/utils/getProportionSize";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

type ProportionOptions = `${number}x${number}` | "full";

interface HomeCellProps {
  children: React.ReactNode;
  /**
   * Array de tamanhos em px referente a uma proporção de 1:1
   */
  proportions: Array<ProportionOptions>;
}

function HomeCell({ children, proportions }: HomeCellProps) {
  const breakpoint = useBreakpoints();
  const currentProportion = getProportionSize(proportions, breakpoint);

  const isFull = currentProportion === "full";

  const [columns = "auto", rows = "auto"] = currentProportion.split("x");

  const gridColumn = isFull ? "1 / -1" : `span ${columns}`;
  const gridRow = isFull ? "1 / -1" : `span ${rows}`;

  return (
    <GridItem gridColumn={gridColumn} gridRow={gridRow}>
      {children}
    </GridItem>
  );
}

export { HomeCell };
