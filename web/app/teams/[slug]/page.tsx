"use client";

import AppProvider from "../../../components/organisms/provider";
import TeamHeader from "../../../components/organisms/TeamHeader";
import TeamPreloader from "../../../components/organisms/team-preloader";
import TrainerPokemonList from "../../../components/organisms/TrainerPokemonList";

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

        <TrainerPokemonList pokemonList={data.team.pokemon} />
      </AppProvider>
    </main>
  );
}
