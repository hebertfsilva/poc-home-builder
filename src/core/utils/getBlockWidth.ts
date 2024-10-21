import { blockWidth } from "../constants/block";
import type { BlockVariant } from "../types/block";

export const getBlockWidth = (type: BlockVariant) => {
  const blockWidthIndex = blockWidth[type];
  return `${blockWidthIndex * 100}%`;
};
