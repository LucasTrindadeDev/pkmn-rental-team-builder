import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { PokemonMove } from "pokenode-ts";

export interface Pokemon {
  species: string;
  sprite: string | StaticImport;
  types: string[];
  level: number;
  abilities: PokemonAbility[];
  learnableMoves: PokemonMove[];
  teraType: string;
  moves: Move[];
  ability: string;
  item: BattleItem | undefined;
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
  sprite: string | StaticImport;
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
