import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Pokemon {
  species: string;
  sprite: string | null | StaticImport;
  types: string[];
  level: number;
  abilities: PokemonAbility[];
}

export interface Team {
  id: string;
  name: string;
  pokemon: Pokemon[];
  trainer: {
    name: string;
    game: string;
  };
}

export interface BattleItem {
  sprite: string | null | StaticImport;
  name: string;
}

export interface Item {
  name: string;
  url: string;
}

export interface Move {
  type: string;
  name: string;
}

export type PokemonAbility = {
  name: string;
  is_hidden: boolean;
  slot: number;
};
