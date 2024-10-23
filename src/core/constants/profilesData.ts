import type { BU } from "./buData";

export const profileDictionary = {
  sas: {
    admin: "Admin",
    coordenador: "Coordenador",
    estudante: "Estudante",
    professor: "Professor",
    secretaria: "Secretaria",
  },
  coc: {
    admin: "Admin",
    coordenador: "Coordenador",
    estudante: "Estudante",
    professor: "Professor",
  },
  spe: {
    admin: "Admin",
    coordenador: "Coordenador",
    estudante: "Estudante",
    professor: "Professor",
    responsavel: "Responsável",
  },
  conquista: {
    admin: "Admin",
    coordenador: "Coordenador",
    estudante: "Estudante",
    professor: "Professor",
  },
} as const;

export type ProfileByBU = keyof (typeof profileDictionary)[BU];
