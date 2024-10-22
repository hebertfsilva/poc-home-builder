export type ProportionOptions = `${number}x${number}` | "full";

export interface Cell {
  proportions: ProportionOptions[];
  content: string;
}

export type CellsStructure = Record<string, Cell[]>;

export interface DynamicContainerConfig {
  type: "default" | "full" | "minimal";
  mainBlockSize: string;
  proportionSize: string[];
}

export interface HomeBlockConfig {
  variant: "block-a" | "block-b";
  rows: number;
  columns: number;
}

export interface Config {
  dynamicContainer: DynamicContainerConfig;
  homeBlocks: HomeBlockConfig[];
}
