"use client";

import PokemonBox from "../molecules/pokemon-box";
import { useAppSelector } from "../../store/store";

export default function TeamPokemons() {
  const pokemonList = useAppSelector((state) => state.team.team.pokemon);

  return (
    <div className="grow grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-10">
      <PokemonBox key="pokemon-1" pokemon={pokemonList[0]} />
      <PokemonBox key="pokemon-2" pokemon={pokemonList[1]} />
      <PokemonBox key="pokemon-3" pokemon={pokemonList[2]} />
      <PokemonBox key="pokemon-4" pokemon={pokemonList[3]} />
      <PokemonBox key="pokemon-5" pokemon={pokemonList[4]} />
      <PokemonBox key="pokemon-6" pokemon={pokemonList[5]} />
    </div>
  );
}
