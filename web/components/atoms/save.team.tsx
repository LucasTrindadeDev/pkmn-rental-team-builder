"use client";

import { store } from "../../store/store";
import { TeamData } from "../../types";

export default function SaveTeam() {
  function handleSaveTeam() {
    const storeState = store.getState();
    const teamData = storeState.team.team;

    const { id, name, trainer, pokemon} = teamData

    if (!id || !trainer.name || !pokemon) {
      return
    }

    const pokemonList = pokemon.map((pkmn) => {
      return {
        ability: pkmn.ability,
        item: pkmn.item?.name ?? '',
        level: pkmn.level,
        moves: pkmn.moves,
        species: pkmn.species,
        sprite: pkmn.sprite.toString(),
        teraType: pkmn.teraType,
        types: pkmn.types
      }
    })

    const data = {
      name: name !== '' ? name : `${trainer.name}'s Team`,
      teamId: id,
      trainerId: "650365c6bbc2abb7941d8dec",
      pokemon: pokemonList,
    }

    postTeam(data)
  }

  async function postTeam(data: TeamData) {
    await fetch('http://localhost:3333/teams', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      console.log('Team saved successfully!')
    })
    .catch((err) => {
      console.log(err)
    });
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
