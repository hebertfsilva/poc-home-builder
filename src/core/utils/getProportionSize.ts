import { Breakpoints, breakpointVariants } from "../constants/breakpoints";

const getProportionSize = (
  proportionSize: string | string[],
  breakpoint: string,
  useBaseAsDefault = false
) => {
  if (typeof proportionSize === "string") {
    return proportionSize;
  }

  const breakpointMap = proportionSize.reduce(
    (acc, size, index) => {
      const key = breakpointVariants[index];
      acc[key] = size;
      return acc;
    },
    {} as Record<Breakpoints, string>
  );

  if (breakpointMap[breakpoint as Breakpoints]) {
    return breakpointMap[breakpoint as Breakpoints];
  }

  if (useBaseAsDefault) {
    return proportionSize[0];
  }

  return proportionSize[proportionSize.length - 1];
};

export { getProportionSize };
