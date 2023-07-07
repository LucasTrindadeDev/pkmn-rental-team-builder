"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { PokemonClient } from "pokenode-ts";

import { Pokemon } from "../../utils/interfaces";

export default function AddPokemon({
  setPokemon,
}: {
  setPokemon: Dispatch<SetStateAction<Pokemon | undefined>>;
}) {
  const [search, setSearch] = useState<string>("");

  function searchPokemon(name: string): void {
    const query = name.toLowerCase().replace(" ", "-");

    (async () => {
      const api = new PokemonClient();

      await api
        .getPokemonByName(query)
        .then((data) => {
          console.log(data);

          const pokemon = {
            species: data.species.name.replace("-", " "),
            sprite: data.sprites.front_default,
            level: 50,
            types: data.types.map((type) => {
              return type.type.name;
            }),
          };

          setPokemon(pokemon);
        })
        .catch((error) => console.error(error));
    })();
  }

  return (
    <div className="flex flex-col h-full gap-2 items-center justify-center">
      <input
        className="rounded px-2 py-1 border-pk-white border-2 border-solid w-40 bg-transparent outline-none text-pk-white placeholder-pk-white"
        name="pokemon"
        defaultValue=""
        placeholder="Pokémon name"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="rounded px-4 py-2 bg-pk-yellow"
        type="submit"
        onClick={() => searchPokemon(search)}
      >
        Add
      </button>
    </div>
  );
}
