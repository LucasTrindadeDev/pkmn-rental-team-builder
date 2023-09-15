"use client";

import { useRef } from "react";
import { store } from "../../store/store";
import { setPokedex } from "../../store/features/pokedexSlice";
import { PokemonEntry } from "pokenode-ts";

export default async function PokedexPreloader({
  pokedex,
}: {
  pokedex: PokemonEntry[];
}) {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setPokedex({ pokedex: pokedex }));
    loaded.current = true;
  }

  return null;
}
