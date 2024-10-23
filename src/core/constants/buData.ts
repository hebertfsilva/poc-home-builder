export const buDictionary = {
  conquista: "Conquista",
  spe: "SPE",
  coc: "COC",
  sas: "SAS",
} as const;

export type BU = keyof typeof buDictionary;