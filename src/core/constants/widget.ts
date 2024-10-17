import type { WidgetConfig } from "../types/widget";

/* grid row/column ratio
reference:https://www.figma.com/design/qw9yJy7KXDRVsTSB3BA1Bj/IrisDS-%E2%86%92-Widgets?node-id=186-6839&node-type=canvas&t=G9qFcg2Qj6ejF4KF-0 */
export const widgetRatios = {
  "1/2": {
    // css aspect ratio width/height
    aspectRatio: 2,
    gridRow: "span 1",
    gridColumn: "span 2",
  },
  "2/2": { aspectRatio: 1, gridRow: "span 2", gridColumn: "span 2" },
  "3/2": { aspectRatio: 0.67, gridRow: "span 3", gridColumn: "span 2" },
  "4/2": { aspectRatio: 0.5, gridRow: "span 4", gridColumn: "span 2" },
  "1/3": { aspectRatio: 3, gridRow: "span 1", gridColumn: "span 3" },
  "2/3": { aspectRatio: 1.5, gridRow: "span 2", gridColumn: "span 3" },
  "3/3": { aspectRatio: 1, gridRow: "span 3", gridColumn: "span 3" },
  "4/3": { aspectRatio: 0.75, gridRow: "span 4", gridColumn: "span 3" },
  "3/5": { aspectRatio: 1.67, gridRow: "span 3", gridColumn: "span 5" },
  "4/5": { aspectRatio: 1.25, gridRow: "span 4", gridColumn: "span 5" },
} satisfies WidgetConfig;
