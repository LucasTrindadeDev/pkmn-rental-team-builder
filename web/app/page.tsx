"use client";

import { store } from "../store/store";
import { Provider } from "react-redux";

import TeamHeader from "../components/organisms/team-header";
import TeamPokemons from "../components/organisms/team-pokemons";
import { getPokedex } from "../utils/api";

export default async function Home() {
  const pokedexData = getPokedex();
  const [pokedex] = await Promise.all([pokedexData]);

  return (
    <Provider store={store}>
      <main className="h-screen flex flex-col bg-pk-turquoise p-10">
        <TeamHeader />

        <TeamPokemons dex={pokedex} />
      </main>
    </Provider>
  );
}
