"use client";

import AppProvider from "../components/organisms/provider";
import TeamHeader from "../components/organisms/TeamHeader";
import TeamPokemons from "../components/organisms/TeamPokemons";
import SaveTeam from "../components/atoms/save.team";
import PokedexPreloader from "../components/organisms/pokedex-preloader";
import BattleItemsPreloader from "../components/organisms/battle-items.preloader";
import AddPokemon from "../components/atoms/add-pokemon";

const loadInitialData = async () => {
  const pokedexData = await fetch("http://localhost:3000/api/pokedex", {
    cache: "force-cache",
  });
  const pokedex = await pokedexData.json();

  const itemsData = await fetch("http://localhost:3000/api/battle-items", {
    cache: "force-cache",
  });
  const battleItems = await itemsData.json();
  return { pokedex, battleItems };
};

export default async function Home() {
  const data = await loadInitialData();

  return (
    <main className="min-h-screen flex flex-col bg-pk-turquoise p-10">
      <PokedexPreloader pokedex={data.pokedex} />
      <BattleItemsPreloader battleItems={data.battleItems} />
      <AppProvider>
        <TeamHeader />

        <AddPokemon />

        <TeamPokemons />

        <SaveTeam />
      </AppProvider>
    </main>
  );
}
