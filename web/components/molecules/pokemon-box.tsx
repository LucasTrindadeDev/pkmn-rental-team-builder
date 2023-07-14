"use client";

import { useState } from "react";
import Image from "next/image";

import { Pokemon, Item } from "../../utils/interfaces";
import AddPokemon from "../atoms/add-pokemon";
import TextInput from "../atoms/text-input";
import PokemonTypes from "../atoms/pokemon-types";
import AbilitySelect from "../atoms/ability-select";
import AddItem from "../atoms/add-item";
import { formatName } from "../../utils/functions";

export default function PokemonBox() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [level, setLevel] = useState<number>(1);
  // const [gender, setGender] = useState<string>("");
  // const [genderOptions, setGenderOptions] = useState<string>("");
  const [ability, setAbility] = useState<string | undefined>(undefined);
  const [item, setItem] = useState<Item | undefined>(undefined);

  return (
    <div className="rounded-lg bg-pk-blue p-5 flex items-center justify-center text-pk-white">
      {pokemon ? (
        <div className="grid grid-cols-3 justify-between h-full flex-1">
          <div className="flex flex-col gap-4">
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

            {pokemon.abilities && (
              <AbilitySelect
                abilities={pokemon.abilities}
                setAbility={setAbility}
              />
            )}

            {item ? (
              <div className="flex items-center gap-1 ml-[-10px]">
                <Image
                  width={35}
                  height={35}
                  src={item.sprite}
                  alt={item.name}
                />
                <h4 className="text-lg">{formatName(item.name)}</h4>
              </div>
            ) : (
              <AddItem setItem={setItem} />
            )}
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
