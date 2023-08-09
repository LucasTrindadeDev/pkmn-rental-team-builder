"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { PokemonMove } from "pokenode-ts";

import { Pokemon, Item, Move } from "../../utils/interfaces";
import AddPokemon from "../atoms/add-pokemon";
import TextInput from "../atoms/text-input";
import PokemonTypes from "../atoms/pokemon-types";
import AbilitySelect from "../atoms/ability-select";
import AddItem from "../atoms/add-item";
import { formatName } from "../../utils/functions";
import AddMove from "../atoms/add-move";
import SelectedMove from "../atoms/selected-move";
import SelectedItem from "../atoms/selected-item";

export default function PokemonBox() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [level, setLevel] = useState<number>(1);
  const [ability, setAbility] = useState<string | undefined>();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [teratype, setTeratype] = useState<string>("");
  const [moves, setMoves] = useState<Move[]>([]);
  const [learnableMoves, setLearnableMoves] = useState<
    PokemonMove[] | undefined
  >(undefined);

  function removePokemon(): void {
    setPokemon(undefined);
    setItem(undefined);
    setMoves([]);
    setLearnableMoves(undefined);
  }

  function resetMoveSlot(name: string): void {
    setMoves(moves.filter((move: Move) => move.name !== name));
  }

  function handleMoveSubmit(move: Move): void {
    setMoves((moves) => [...moves, move]);
  }

  return (
    <div className="rounded-lg bg-pk-blue p-5 flex items-center justify-center text-pk-white relative">
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
              <SelectedItem item={item} setItem={setItem} />
            ) : (
              <AddItem setItem={setItem} />
            )}
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            <PokemonTypes
              types={pokemon.types}
              teratype={teratype ? teratype : pokemon.types[0]}
              setTeraType={setTeratype}
            />

            <Image
              width={130}
              height={130}
              className="object-contain opacity-90"
              src={pokemon.sprite}
              alt={pokemon.species}
              title={pokemon.species}
            />
          </div>

          <div className="flex flex-col items-start justify-between">
            {[...Array(4)].map((x, i: number) =>
              moves[i] ? (
                <SelectedMove
                  move={moves[i]}
                  key={`move-${i + 1}`}
                  resetMoveSlot={resetMoveSlot}
                />
              ) : (
                <AddMove
                  setMove={(move: Move) => handleMoveSubmit(move)}
                  key={`move-${i + 1}`}
                  disabled={i > 0 && moves[i - 1] === undefined}
                  learnableMoves={learnableMoves}
                />
              )
            )}
          </div>

          <X
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer text-pk-white border-red-900 border-2 bg-red-500 rounded-full"
            size={24}
            onClick={() => removePokemon()}
            alt="Remove Pokémon"
          />
        </div>
      ) : (
        <AddPokemon
          setPokemon={setPokemon}
          setLearnableMoves={setLearnableMoves}
        />
      )}
    </div>
  );
}
