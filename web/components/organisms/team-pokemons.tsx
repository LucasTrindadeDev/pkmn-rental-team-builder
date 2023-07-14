"use client";

import { useEffect } from "react";
import { GameClient } from "pokenode-ts";

import PokemonBox from "../molecules/pokemon-box";
import { useAppDispatch } from "../../store/store";
import { setPokedex } from "../../store/features/pokedexSlice";

export default function TeamPokemons() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const api = new GameClient();

      await api
        .getPokedexByName("national")
        .then((data) => {
          dispatch(setPokedex({ pokedex: data.pokemon_entries }));
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <>
      <div className="grow mt-10 grid grid-cols-2 grid-rows-3 gap-10">
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
      </div>

      <div className="flex justify-center mt-10">
        <button type="submit" className="rounded px-4 py-2 bg-pk-yellow">
          Save Team
        </button>
      </div>
    </>
  );
}
