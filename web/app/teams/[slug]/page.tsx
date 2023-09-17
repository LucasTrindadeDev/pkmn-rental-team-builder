"use client";

import AppProvider from "../../../components/organisms/provider";
import TeamHeader from "../../../components/organisms/team-header";
import TeamPokemons from "../../../components/organisms/team-pokemons";
import TeamPreloader from "../../../components/organisms/team-preloader";

const loadInitialData = async (teamId: string) => {
  const teamData = await fetch(`http://localhost:3333/teams/${teamId}`, {
    cache: "force-cache",
  });
  const team = await teamData.json();

  const trainerData = await fetch(`http://localhost:3333/trainers/${team.trainerId}`, {
    cache: "force-cache",
  });
  const trainer = await trainerData.json();

  return { team, trainer };
};

export default async function PokemonTeam({ params }: { params: any}) {
  const data = await loadInitialData(params.slug);

  return (
    <main className="min-h-screen flex flex-col bg-pk-turquoise p-10">
      <TeamPreloader team={data.team} trainer={data.trainer} />

      <AppProvider>
        <TeamHeader lockEditing={true} />

        {/* <TeamPokemons /> */}
      </AppProvider>
    </main>
  );
}
