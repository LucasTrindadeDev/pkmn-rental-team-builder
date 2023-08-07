import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../utils/interfaces";

export interface Team {
  id: string;
  name: string;
  pokemon: Pokemon[];
  trainer: {
    name: string;
    game: string;
  };
}

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
  },
});

export default TeamSlice.reducer;
export const { setTeamID, setTeamName, setTrainerName, setTrainerGame } =
  TeamSlice.actions;
