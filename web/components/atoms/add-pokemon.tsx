"use client";

import { useState, useEffect } from "react";
import { PokemonClient, PokemonEntry } from "pokenode-ts";

import { store, useAppSelector } from "../../store/store";
import { setTeamPokemon } from "../../store/features/teamSlice";

import { variants } from "../../utils/pokemon-variants";
import Urshifu from "./pokemon-variants/urshifu";
import Rotom from "./pokemon-variants/rotom";
import Genies from "./pokemon-variants/genies";
import RegionalForms from "./pokemon-variants/regional-forms";
import Darmanitan from "./pokemon-variants/darmanitan";
import Basculin from "./pokemon-variants/basculin";

export default function AddPokemon() {
  const [search, setSearch] = useState<string>("");
  const [suggestPokemon, setSuggestPokemon] = useState<PokemonEntry[]>([]);

  const pokedex = useAppSelector((state) => state.pokedex.pokedex);

  useEffect(() => {
    if (search.length >= 2) suggestSearch();
    else setSuggestPokemon([]);
  }, [search]);

  function suggestSearch() {
    const suggest = pokedex.filter(
      function (this: any, item) {
        if (this.count < 3 && item.pokemon_species.name.indexOf(search) >= 0) {
          this.count++;
          return true;
        }

        return false;
      },
      { count: 0 }
    );

    setSuggestPokemon(suggest);
  }

  async function searchPokemon(name: string) {
    const pokemonData = await fetch(
      `http://localhost:3000/api/pokemon?name=${name}`
    );
    const pokemon = await pokemonData.json();

    store.dispatch(setTeamPokemon({ pokemon: pokemon }));
    setSearch("");
  }

  return (
    <div className="relative w-48 h-10 mx-auto z-30 my-5">
      <input
        className="rounded px-2 py-1 border-pk-white border-2 border-solid w-full bg-pk-blue outline-none text-pk-white placeholder-pk-white relative z-20"
        name="pokemon"
        placeholder="Pokémon name"
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {suggestPokemon.length > 0 && (
        <ul className="absolute bottom-1 translate-y-full rounded-b-md bg-pk-turquoise w-full pt-2 z-10 shadow-md text-sm">
          {suggestPokemon.map((pokemon: PokemonEntry) => {
            if (
              variants.geniesPokemon.indexOf(pokemon.pokemon_species.name) >= 0
            ) {
              return (
                <Genies
                  key="genies-form"
                  pokemon={pokemon.pokemon_species.name}
                  searchPokemon={searchPokemon}
                />
              );
            }

            if (pokemon.pokemon_species.name === "rotom") {
              return (
                <Rotom
                  key="rotom-forms"
                  pokemon={pokemon.pokemon_species.name}
                  searchPokemon={searchPokemon}
                />
              );
            }

            if (pokemon.pokemon_species.name === "urshifu") {
              return (
                <Urshifu key="urshifu-forms" searchPokemon={searchPokemon} />
              );
            }

            if (pokemon.pokemon_species.name === "darmanitan") {
              return (
                <Darmanitan
                  key="darmanitan-forms"
                  searchPokemon={searchPokemon}
                />
              );
            }

            if (pokemon.pokemon_species.name === "basculin") {
              return (
                <Basculin
                  key="basculin-variants"
                  searchPokemon={searchPokemon}
                />
              );
            }

            if (
              variants.regionalForms[
                pokemon.pokemon_species
                  .name as keyof typeof variants.regionalForms
              ]
            ) {
              return (
                <RegionalForms
                  key={`${pokemon.pokemon_species.name}-regional-forms`}
                  pokemon={pokemon.pokemon_species.name}
                  searchPokemon={searchPokemon}
                />
              );
            }

            return (
              <li
                key={pokemon.pokemon_species.name}
                onClick={() => searchPokemon(pokemon.pokemon_species.name)}
                className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
              >
                {pokemon.pokemon_species.name.replace("-", " ")}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
