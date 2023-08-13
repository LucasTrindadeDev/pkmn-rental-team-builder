"use client";

import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { PokemonClient, PokemonEntry, PokemonMove } from "pokenode-ts";

import { Pokemon } from "../../utils/interfaces";
import { variants } from "../../utils/pokemon-variants";
import { useAppSelector } from "../../store/store";
import Urshifu from "./pokemon-variants/urshifu";
import Rotom from "./pokemon-variants/rotom";
import Genies from "./pokemon-variants/genies";
import RegionalForms from "./pokemon-variants/regional-forms";
import Darmanitan from "./pokemon-variants/darmanitan";
import Basculin from "./pokemon-variants/basculin";

export default function AddPokemon({
  setPokemon,
  setLearnableMoves,
}: {
  setPokemon: Dispatch<SetStateAction<Pokemon | undefined>>;
  setLearnableMoves: Dispatch<SetStateAction<PokemonMove[] | undefined>>;
}) {
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

  function searchPokemon(name: string): void {
    (async () => {
      const api = new PokemonClient();

      if (name === "basculegion") {
        await api
          .getPokemonById(902)
          .then((data) => {
            console.log(data);

            const pokemon = {
              species: data.species.name.replace("-", " "),
              sprite: data.sprites.front_default,
              level: 50,
              types: data.types.map((type) => {
                return type.type.name;
              }),
              abilities: data.abilities.map((ability) => {
                return {
                  name: ability.ability.name,
                  is_hidden: ability.is_hidden,
                  slot: ability.slot,
                };
              }),
            };

            setPokemon(pokemon);
            setLearnableMoves(data.moves);
          })
          .catch((error) => console.error(error));
      } else {
        await api
          .getPokemonByName(name)
          .then((data) => {
            console.log(data);

            const pokemon = {
              species: data.species.name.replace("-", " "),
              sprite: data.sprites.front_default,
              level: 50,
              types: data.types.map((type) => {
                return type.type.name;
              }),
              abilities: data.abilities.map((ability) => {
                return {
                  name: ability.ability.name,
                  is_hidden: ability.is_hidden,
                  slot: ability.slot,
                };
              }),
            };

            setPokemon(pokemon);
            setLearnableMoves(data.moves);
          })
          .catch((error) => console.error(error));
      }
    })();
  }

  return (
    <div className="relative">
      <input
        className="rounded px-2 py-1 border-pk-white border-2 border-solid w-40 bg-pk-blue outline-none text-pk-white placeholder-pk-white relative z-20"
        name="pokemon"
        defaultValue=""
        placeholder="Pokémon name"
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />

      {suggestPokemon.length > 0 && (
        <ul className="absolute bottom-1 translate-y-full rounded-b-md bg-pk-turquoise w-full pt-2 z-10 shadow-md text-sm">
          {suggestPokemon.map((pokemon: PokemonEntry) => {
            if (
              variants.geniesPokemon.indexOf(pokemon.pokemon_species.name) >= 0
            ) {
              return (
                <Genies
                  pokemon={pokemon.pokemon_species.name}
                  searchPokemon={searchPokemon}
                />
              );
            }

            if (pokemon.pokemon_species.name === "rotom") {
              return (
                <Rotom
                  pokemon={pokemon.pokemon_species.name}
                  searchPokemon={searchPokemon}
                />
              );
            }

            if (pokemon.pokemon_species.name === "urshifu") {
              return <Urshifu searchPokemon={searchPokemon} />;
            }

            if (pokemon.pokemon_species.name === "darmanitan") {
              return <Darmanitan searchPokemon={searchPokemon} />;
            }

            if (pokemon.pokemon_species.name === "basculin") {
              return <Basculin searchPokemon={searchPokemon} />;
            }

            if (
              variants.regionalForms[
                pokemon.pokemon_species
                  .name as keyof typeof variants.regionalForms
              ]
            ) {
              return (
                <RegionalForms
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
