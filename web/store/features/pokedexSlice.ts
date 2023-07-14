import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonEntry } from "pokenode-ts";

interface PokedexState {
  pokedex: PokemonEntry[];
}

const initialState: PokedexState = {
  pokedex: [],
};

export const PokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    setPokedex: (state, action: PayloadAction<{ pokedex: PokemonEntry[] }>) => {
      state.pokedex = action.payload.pokedex;
    },
  },
});

export default PokedexSlice.reducer;
export const { setPokedex } = PokedexSlice.actions;
