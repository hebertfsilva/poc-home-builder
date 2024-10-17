import { blockWidth } from "../constants/block";

export type BlockType = keyof typeof blockWidth;

export type BlockWidth = (typeof blockWidth)[BlockType];
