import { blockWidth } from "../constants/block";
import { WidgetConfig } from "./widget";

export type BlockType = keyof typeof blockWidth;

export type BlockWidth = (typeof blockWidth)[BlockType];

export type BlockItem = {
  order: 1 | 2 | 3 | 4;
  initialRow: 1 | 2 | 3 | 4;
  initialColumn: 1 | 2 | 3 | 4 | 5;
  finalRow: 1 | 2 | 3 | 4;
  finalColumn: 1 | 2 | 3 | 4 | 5;
  widgetConfig: WidgetConfig;
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
