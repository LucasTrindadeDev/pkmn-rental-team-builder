import { configureStore } from "@reduxjs/toolkit";

import { PokedexSlice } from "./features/pokedexSlice";
import { BattleItemsSlice } from "./features/battleItemsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    pokedex: PokedexSlice.reducer,
    battleItems: BattleItemsSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
