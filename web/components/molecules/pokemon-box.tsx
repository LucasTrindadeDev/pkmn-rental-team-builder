"use client";

import { useState } from "react";
import Image from "next/image";

import { Pokemon } from "../../utils/interfaces";
import AddPokemon from "../atoms/add-pokemon";
import TextInput from "../atoms/text-input";
import PokemonTypes from "../atoms/pokemon-types";

export default function PokemonBox() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [level, setLevel] = useState<number>(1);
  // const [gender, setGender] = useState<string>("");
  // const [genderOptions, setGenderOptions] = useState<string>("");
  // const [abilities, setAbilities] = useState<string[]>([]);

  return (
    <div className="rounded-lg bg-pk-blue p-5 flex items-center justify-center text-pk-white">
      {pokemon ? (
        <div className="grid grid-cols-3 justify-between h-full flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold capitalize">
              {pokemon?.species}
            </h3>

            <label htmlFor="level">
              Lv.
              <TextInput
                classes="w-8 ml-1 border-none bg-transparent"
                name="level"
                defaultValue={pokemon.level}
                setFunction={setLevel}
              />
            </label>
          </div>

          <div className="flex flex-col items-center justify-between">
            <PokemonTypes types={pokemon.types} />

            <Image
              width={130}
              height={130}
              className="object-contain opacity-90"
              src={pokemon.sprite}
              alt={pokemon.species}
              title={pokemon.species}
            />
          </div>

          <div>a</div>
        </div>
      ) : (
        <AddPokemon setPokemon={setPokemon} />
      )}
    </div>
  );
}
