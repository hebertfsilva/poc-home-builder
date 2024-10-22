import { blockWidth } from "../constants/block";
import { WidgetName, WidgetRatio } from "./widget";

export type BlockType = "A" | "B";

export type BlockVariant = keyof typeof blockWidth;

export type BlockWidth = (typeof blockWidth)[BlockVariant];

export type BlockItem = {
  order?: 1 | 2 | 3 | 4;
  initialRow: 1 | 2 | 3 | 4 | 5 | 6;
  initialColumn: 1 | 2 | 3 | 4 | 5 | 6| 7;
  widgetType: WidgetRatio;
  widgetName: WidgetName;
};

// Each block contain up to 4 widgets
export type BlockConfig = {
  mobile: [
    firstItem: BlockItem,
    secondItem?: BlockItem,
    thirdItem?:BlockItem ,
    fourthItem?:BlockItem,
  ];
  tablet: [
    firstItem: BlockItem,
    secondItem?: BlockItem,
    thirdItem?:BlockItem ,
    fourthItem?:BlockItem,
  ];
  desktop: [
    firstItem: BlockItem,
    secondItem?: BlockItem,
    thirdItem?:BlockItem ,
    fourthItem?:BlockItem,
  ];
};
