"use client";

import AppProvider from "../../components/organisms/provider";
import TeamHeader from "../../components/organisms/team-header";
import TeamPokemons from "../../components/organisms/team-pokemons";
import TeamPreloader from "../../components/organisms/team-preloader";

const loadInitialData = async () => {
  const teamsData = await fetch("http://localhost:3333/trainers/650365c6bbc2abb7941d8dec/teams", {
    cache: "force-cache",
  });
  const teams = await teamsData.json();

  return { teams };
};

export default async function MyTeams() {
  const data = await loadInitialData();

  return (
    <main className="min-h-screen flex flex-col bg-pk-turquoise p-10">
      <TeamPreloader pokedex={data.teams} />

      <AppProvider>
        <TeamHeader />

        <TeamPokemons />
      </AppProvider>
    </main>
  );
}
