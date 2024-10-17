import { containerWidth } from "../constants/container";

export type ContainerType = keyof typeof containerWidth;

export type ContainerWidth = (typeof containerWidth)[ContainerType];

export type ContainerBlockType = "single" | "double";
