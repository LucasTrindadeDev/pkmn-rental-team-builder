"use client";

import TrainerHeader from "../../components/organisms/TrainerHeader";
import TrainerTeams from "../../components/organisms/TrainerTeams";
import AppProvider from "../../components/organisms/provider";
import TrainerPreloader from "../../components/organisms/trainer-preloader";

const loadInitialData = async () => {
  const trainerData = await fetch("http://localhost:3333/trainers/650365c6bbc2abb7941d8dec", {
    cache: "force-cache",
  });
  const trainer = await trainerData.json();

  const teamsData = await fetch("http://localhost:3333/trainers/650365c6bbc2abb7941d8dec/teams", {
    cache: "force-cache",
  });
  const teams = await teamsData.json();

  return { trainer, teams };
};

export default async function MyTeams() {
  const data = await loadInitialData();

  return (
    <main className="min-h-screen flex flex-col bg-pk-turquoise p-10">
      <AppProvider>
        <TrainerPreloader trainer={data.trainer} />

        <TrainerHeader />

        <TrainerTeams teams={data.teams} />
      </AppProvider>
    </main>
  );
}
