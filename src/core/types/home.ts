import type { BlockConfig, BlockVariant } from "./block";
import type { ContainerBlockType, ContainerType } from "./container";

export type HomeConfigBase = {
  containerType: ContainerType;
  containerBlockType: ContainerBlockType;
  containerBlocksConfig: {
    A: { config: BlockConfig; type: BlockVariant };
    B?: { config: BlockConfig; type: BlockVariant };
  };
};

export type HomeConfigSingleBlock = Omit<
  HomeConfigBase,
  "containerBlockType" | "containerBlocksConfig"
> & {
  containerBlockType: Extract<ContainerBlockType, "single">;
  containerBlocksConfig: {
    A: { config: BlockConfig; type: BlockVariant };
    B: never;
  };
};

export type HomeConfigDoubleBlock = {
  containerType: Extract<ContainerType, "default">;
  containerBlockType: Extract<ContainerBlockType, "double">;
  containerBlocksConfig: {
    A: { config: BlockConfig; type: BlockVariant };
    B: { config: BlockConfig; type: BlockVariant };
  };
};
