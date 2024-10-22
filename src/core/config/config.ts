import { HomeConfigDoubleBlock } from "../types/home";

export const HomeConfig: HomeConfigDoubleBlock = {
  containerType: "default",
  containerBlockType: "double",
  containerBlocksConfig: {
    A: {
      type: "large",
      config: {
        mobile: [
          {
            order: 1,
            initialRow: 1,
            initialColumn: 1,
            widgetType: "2/1",
            widgetName: "avatar",
          },
          {
            order: 2,
            initialRow: 3,
            initialColumn: 1,
            widgetType: "2/1",
            widgetName: "shortcuts",
          },
          {
            order: 3,
            initialRow: 5,
            initialColumn: 1,
            widgetType: "4/1",
            widgetName: "feed",
          },
        ],
        tablet: [
          {
            order: 1,
            initialRow: 1,
            initialColumn: 1,
            widgetType: "2/2",
            widgetName: "avatar",
          },
          {
            order: 2,
            initialRow: 1,
            initialColumn: 3,
            widgetType: "2/3",
            widgetName: "shortcuts",
          },
          {
            order: 3,
            initialRow: 3,
            initialColumn: 1,
            widgetType: "4/5",
            widgetName: "feed",
          },
        ],
        desktop: [
          {
            order: 1,
            initialRow: 1,
            initialColumn: 1,
            widgetType: "2/3",
            widgetName: "avatar",
          },
          {
            order: 2,
            initialRow: 1,
            initialColumn: 4,
            widgetType: "2/3",
            widgetName: "shortcuts",
          },
          {
            order: 3,
            initialRow: 3,
            initialColumn: 1,
            widgetType: "4/5",
            widgetName: "feed",
          },
        ],
      },
    },
    B: {
      type: "small",
      config: {
        mobile: [
          {
            order: 1,
            initialRow: 1,
            initialColumn: 1,
            widgetType: "4/1",
            widgetName: "schedule",
          },
        ],
        tablet: [
          {
            order: 1,
            initialRow: 1,
            initialColumn: 1,
            widgetType: "4/3",
            widgetName: "schedule",
          },
        ],
        desktop: [
          {
            order: 1,
            initialRow: 1,
            initialColumn: 1,
            widgetType: "6/3",
            widgetName: "schedule",
          },
        ],
      },
    },
  },
};
