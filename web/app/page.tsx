"use client";

import { store } from "../store/store";
import { Provider } from "react-redux";

import TeamHeader from "../components/organisms/team-header";
import TeamPokemons from "../components/organisms/team-pokemons";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-pk-turquoise p-10">
      <Provider store={store}>
        <TeamHeader />

        <TeamPokemons />
      </Provider>
    </main>
  );
}
