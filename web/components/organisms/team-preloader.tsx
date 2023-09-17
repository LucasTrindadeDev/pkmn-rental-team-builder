"use client";

import { useRef } from "react";
import { store } from "../../store/store";
import { setTeamID, setTeamName, setTrainerName, setTrainerGame } from "../../store/features/teamSlice";
import { Pokemon, Trainer } from "../../types";

interface Team {
  id: string;
  teamId: string;
  name: string;
  pokemon: Pokemon[];
  trainerId: string;
}

export default async function TeamPreloader({
  team,
  trainer
}: {
  team: Team;
  trainer: Trainer
}) {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setTeamID({ id: team.teamId }));
    store.dispatch(setTeamName({ name: team.name }));
    store.dispatch(setTrainerName({ name: trainer.name }));
    store.dispatch(setTrainerGame({ game: trainer.game }));
    loaded.current = true;
  }

  return null;
}
