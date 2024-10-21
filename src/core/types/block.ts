import { blockWidth } from "../constants/block";
import { WidgetRatio } from "./widget";

export type BlockType = "A" | "B";

export type BlockVariant = keyof typeof blockWidth;

export type BlockWidth = (typeof blockWidth)[BlockVariant];

export type BlockItem = {
  order?: 1 | 2 | 3 | 4;
  initialRow: 1 | 2 | 3 | 4;
  initialColumn: 1 | 2 | 3 | 4 | 5;
  widgetType: WidgetRatio;
};

// Each block contain up to 4 widgets
export type BlockConfig = {
  mobile: [
    BlockItem,
    BlockItem | undefined,
    BlockItem | undefined,
    BlockItem | undefined,
  ];
  tablet: [
    BlockItem,
    BlockItem | undefined,
    BlockItem | undefined,
    BlockItem | undefined,
  ];
  desktop: [
    BlockItem,
    BlockItem | undefined,
    BlockItem | undefined,
    BlockItem | undefined,
  ];
};
