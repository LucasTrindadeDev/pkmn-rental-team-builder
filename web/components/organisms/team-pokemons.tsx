import PokemonBox from "../molecules/pokemon-box";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setPokedex } from "../../store/features/pokedexSlice";
import { Item, setBattleItems } from "../../store/features/battleItemsSlice";
import { PokemonEntry } from "pokenode-ts";

export default async function TeamPokemons({
  dex,
  battleItems,
}: {
  dex: PokemonEntry[];
  battleItems: Item[];
}) {
  const dispatch = useAppDispatch();

  dispatch(setPokedex({ pokedex: dex }));

  dispatch(setBattleItems({ battleItems: battleItems }));

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
