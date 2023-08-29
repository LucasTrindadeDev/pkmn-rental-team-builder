"use client";

import { store } from "../../store/store";

export default function SaveTeam() {
  function handleSaveTeam() {
    const storeState = store.getState();
    const pokemonTeam = storeState.team.team.pokemon;
    console.log(pokemonTeam);
  }

  return (
    <div className="flex justify-center mt-10">
      <button
        type="submit"
        className="rounded px-4 py-2 bg-pk-yellow"
        onClick={() => handleSaveTeam()}
      >
        Save Team
      </button>
    </div>
  );
}
