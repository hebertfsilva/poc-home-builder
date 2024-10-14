const containerWidth = {
  default: "1200px",
  minimal: "700px",
} as const;

const containerBlockType = {
  single:{}
}

type ContainerWidth = typeof containerWidth;

export type ContainerMinimal = {
  width: ContainerWidth["minimal"];
};

export type ContainerType = "default" | "minimal";

export type ContainerBlockType = "single" | "double";
