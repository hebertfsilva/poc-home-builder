// grid row/column ratio
export type WidgetRatio =
  | "1/2"
  | "2/2"
  | "3/2"
  | "4/2"
  | "1/3"
  | "2/3"
  | "3/3"
  | "4/3"
  | "3/5"
  | "4/5";

export type WidgetRatioConfig = {
  gridRowSpan: number;
  gridColumnSpan: number;
};

export type WidgetConfig = Record<WidgetRatio, WidgetRatioConfig>;
