const breakpoints = {
  "base": 0,
  "sm": 480,
  "md": 768,
  "lg": 992,
  "xl": 1280,
  "2xl": 1536,
};

const breakpointVariants: Breakpoints[] = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
];

export type Breakpoints = keyof typeof breakpoints;

export { breakpoints, breakpointVariants };
