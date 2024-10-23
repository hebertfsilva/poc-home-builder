export const buDictionary = {
  conquista: "Conquista",
  positivo: "Positivo",
  coc: "COC",
  sas: "SAS",
} as const;

export type BU = keyof typeof buDictionary;