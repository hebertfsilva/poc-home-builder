import type { BlockConfig } from "./block";
import type { ContainerBlockType, ContainerType } from "./container";

type HomeConfigBase = {
  containerType: ContainerType;
  containerBlockType: ContainerBlockType;
  containerBlocksConfig: {
    A: BlockConfig;
    B?: BlockConfig;
  };
};

export type HomeConfigSingleBlock = Omit<
  HomeConfigBase,
  "containerBlockType" | "containerBlocksConfig"
> & {
  containerBlockType: Extract<ContainerBlockType, "single">;
  containerBlocksConfig: {
    A: BlockConfig;
    B: never;
  };
};

export type HomeConfigDoubleBlock = {
  containerType: Extract<ContainerType, "default">;
  containerBlockType: Extract<ContainerBlockType, "double">;
  containerBlocksConfig: {
    A: BlockConfig;
    B: BlockConfig;
  };
};
