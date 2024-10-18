import type { WidgetConfig } from "../types/widget";

/* grid row/column ratio
reference:https://www.figma.com/design/qw9yJy7KXDRVsTSB3BA1Bj/IrisDS-%E2%86%92-Widgets?node-id=186-6839&node-type=canvas&t=G9qFcg2Qj6ejF4KF-0 */
export const widgetRatios = {
  "1/2": {
    // css aspect ratio width/height
    aspectRatio: 2,
    gridRowSpan: 1,
    gridColumnSpan: 2,
  },
  "2/2": { aspectRatio: 1, gridRowSpan: 2, gridColumnSpan: 2 },
  "3/2": { aspectRatio: 0.67, gridRowSpan: 3, gridColumnSpan: 2 },
  "4/2": { aspectRatio: 0.5, gridRowSpan: 4, gridColumnSpan: 2 },
  "1/3": { aspectRatio: 3, gridRowSpan: 1, gridColumnSpan: 3 },
  "2/3": { aspectRatio: 1.5, gridRowSpan: 2, gridColumnSpan: 3 },
  "3/3": { aspectRatio: 1, gridRowSpan: 3, gridColumnSpan: 3 },
  "4/3": { aspectRatio: 0.75, gridRowSpan: 4, gridColumnSpan: 3 },
  "3/5": { aspectRatio: 1.67, gridRowSpan: 3, gridColumnSpan: 5 },
  "4/5": { aspectRatio: 1.25, gridRowSpan: 4, gridColumnSpan: 5 },
} satisfies WidgetConfig;
