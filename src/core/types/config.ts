export type ProportionOptions = `${number}x${number}` | "full";

export interface Cell {
  proportions: ProportionOptions[];
  content: string;
}

export type CellsStructure = Record<string, Cell[]>;

export interface DynamicContainerConfig {
  type: "default" | "full" | "minimal";
  mainBlockSize: string;
  proportionSize: string | string[];
}

export type HomeBlockOptions = number | number[] | "full" | "auto";

export interface HomeBlockConfig {
  variant: "block-a" | "block-b";
  rows: HomeBlockOptions;
  columns: HomeBlockOptions;
}

export interface Config {
  dynamicContainer: DynamicContainerConfig;
  homeBlocks: HomeBlockConfig[];
}
