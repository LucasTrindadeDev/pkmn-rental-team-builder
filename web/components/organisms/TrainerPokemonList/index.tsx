"use client";

import TeamPokemon from "../../molecules/TeamPokemon";
import { Pokemon } from "../../../types";

export default function TrainerPokemonList({ pokemonList }: { pokemonList: Pokemon[] }) {
  console.log(pokemonList)

  return (
    <div className="grow grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 2xl:grid-cols-3 2xl:grid-rows-2 gap-10">
      {pokemonList.map((pokemon) => (
        <TeamPokemon key={pokemon.species} pokemon={pokemon} />
      ))}
    </div>
  );
}
