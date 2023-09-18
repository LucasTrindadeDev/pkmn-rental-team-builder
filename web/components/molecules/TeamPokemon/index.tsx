import Image from "next/image";

import { Pokemon } from "../../../types";
import PokemonTypes from "../../atoms/PokemonTypes";
import SelectedMove from "../../atoms/SelectedMove";
import SelectedItem from "../../atoms/SelectedItem";
import { formatName } from "../../../utils/functions";

export default async function TeamPokemon({
  pokemon,
}: {
  pokemon: Pokemon;
}) {
  const heldItemData = await fetch(`http://localhost:3000/api/held-item?name=${pokemon.item}`)
  const heldItem = await heldItemData.json();

  return (
    <div className="rounded-lg bg-pk-blue p-5 flex items-center justify-center text-pk-white relative">
      <div className="grid grid-cols-3 justify-between h-full flex-1">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold capitalize">
            {pokemon.species}
          </h3>

          <h4>
            Lv. {pokemon.level}
          </h4>

          <h4 className="text-white font-semibold">
            {formatName(pokemon.ability)}
          </h4>

          <SelectedItem item={heldItem} />
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <PokemonTypes
            types={pokemon.types}
            teratype={pokemon.teraType}
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
          {pokemon.moves.map((move) => (
            <SelectedMove
              move={move}
              key={`${pokemon.species}-${move.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
