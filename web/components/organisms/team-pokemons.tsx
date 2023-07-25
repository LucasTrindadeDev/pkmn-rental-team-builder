import PokemonBox from "../molecules/pokemon-box";
import { useAppDispatch } from "../../store/store";
import { setPokedex } from "../../store/features/pokedexSlice";
import { setBattleItems } from "../../store/features/battleItemsSlice";
import { PokemonEntry } from "pokenode-ts";

export default async function TeamPokemons({ dex }: { dex: PokemonEntry[] }) {
  const dispatch = useAppDispatch();

  dispatch(setPokedex({ pokedex: dex }));

  // useEffect(() => {
  //   (async () => {
  //     const api = new GameClient();

  //     await api
  //       .getPokedexByName("national")
  //       .then((data) => {
  //         dispatch(setPokedex({ pokedex: data.pokemon_entries }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("held-items")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("bad-held-items")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("medicine")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("other")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("in-a-pinch")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("picky-healing")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("type-protection")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("choice")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("plates")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("type-enhancement")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();

  //   (async () => {
  //     const api = new ItemClient();

  //     await api
  //       .getItemCategoryByName("held-items")
  //       .then((data) => {
  //         dispatch(setBattleItems({ battleItems: [...data.items] }));
  //       })
  //       .catch((error) => console.error(error));
  //   })();
  // }, []);

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
