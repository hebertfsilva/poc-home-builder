import { Breakpoints, breakpointVariants } from "../constants/breakpoints";

const getProportionSize = (
  proportionSize: string | string[],
  breakpoint: string,
  defaultSize = "100px"
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

  return proportionSize[proportionSize.length - 1] || defaultSize;
};

export { getProportionSize };
