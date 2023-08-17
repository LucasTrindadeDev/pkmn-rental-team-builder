import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon, Team } from "../../types";

interface TeamSlice {
  team: Team;
}

const initialState: TeamSlice = {
  team: {
    id: "",
    name: "",
    pokemon: [],
    trainer: {
      name: "",
      game: "violet",
    },
  },
};

export const TeamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeamID: (state, action: PayloadAction<{ id: string }>) => {
      state.team.id = action.payload.id;
    },
    setTeamName: (state, action: PayloadAction<{ name: string }>) => {
      state.team.name = action.payload.name;
    },
    setTrainerName: (state, action: PayloadAction<{ name: string }>) => {
      state.team.trainer.name = action.payload.name;
    },
    setTrainerGame: (state, action: PayloadAction<{ game: string }>) => {
      state.team.trainer.game = action.payload.game;
    },
    setTeamPokemon: (state, action: PayloadAction<{ pokemon: Pokemon }>) => {
      state.team.pokemon.push(action.payload.pokemon);
    },
    removeTeamPokemon: (state, action: PayloadAction<{ name: string }>) => {
      state.team.pokemon = state.team.pokemon.filter((pokemon) => {
        return pokemon.species !== action.payload.name;
      });
    },
  },
});

export default TeamSlice.reducer;
export const {
  setTeamID,
  setTeamName,
  setTrainerName,
  setTrainerGame,
  setTeamPokemon,
  removeTeamPokemon,
} = TeamSlice.actions;
