"use client";

import { store } from "../store/store";
import { Provider } from "react-redux";

import { setPokedex } from "../store/features/pokedexSlice";
import { setBattleItems } from "../store/features/battleItemsSlice";

import TeamHeader from "../components/organisms/team-header";
import TeamPokemons from "../components/organisms/team-pokemons";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const pokedexData = await fetch("http://localhost:3000/api/pokedex");
      const pokedex = await pokedexData.json();

      const itemsData = await fetch("http://localhost:3000/api/battle-items");
      const battleItems = await itemsData.json();

      store.dispatch(setPokedex({ pokedex: pokedex }));
      store.dispatch(setBattleItems({ battleItems: battleItems }));
    };

    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <main className="h-screen flex flex-col bg-pk-turquoise p-10">
        <TeamHeader />

        <TeamPokemons />
      </main>
    </Provider>
  );
}
