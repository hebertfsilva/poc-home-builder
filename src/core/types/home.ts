import type { BlockConfig, BlockType } from "./block";
import type { ContainerBlockType, ContainerType } from "./container";

export type HomeConfigBase = {
  containerType: ContainerType;
  containerBlockType: ContainerBlockType;
  containerBlocksConfig: {
    A: { config: BlockConfig; type: BlockType };
    B?: { config: BlockConfig; type: BlockType };
  };
};

export type HomeConfigSingleBlock = Omit<
  HomeConfigBase,
  "containerBlockType" | "containerBlocksConfig"
> & {
  containerBlockType: Extract<ContainerBlockType, "single">;
  containerBlocksConfig: {
    A: { config: BlockConfig; type: BlockType };
    B: never;
  };
};

export type HomeConfigDoubleBlock = {
  containerType: Extract<ContainerType, "default">;
  containerBlockType: Extract<ContainerBlockType, "double">;
  containerBlocksConfig: {
    A: { config: BlockConfig; type: BlockType };
    B: { config: BlockConfig; type: BlockType };
  };
};
