"use client";

import { useRef } from "react";
import { store } from "../../store/store";
import { setTrainerName, setTrainerGame } from "../../store/features/teamSlice";
import { Trainer } from "../../types";

export default async function TrainerPreloader({
  trainer,
}: {
  trainer: Trainer;
}) {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setTrainerName({ name: trainer.name }));
    store.dispatch(setTrainerGame({ game: trainer.game }));
    loaded.current = true;
  }

  return null;
}
