import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Pokemon {
  species: string;
  sprite: string | null | StaticImport;
  types: string[];
  // gender: string;
  level: number;
  // genderOptions: {
  //   female: string;
  //   male: string;
  // };
}
