import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Pokemon {
  species: string;
  sprite: string | null | StaticImport;
  types: string[];
  level: number;
  abilities: PokemonAbility[];
  // gender: string;
  // genderOptions: {
  //   female: string;
  //   male: string;
  // };
}

export interface Item {
  sprite: string | null | StaticImport;
  name: string;
}

export type PokemonAbility = {
  name: string;
  is_hidden: boolean;
  slot: number;
};
