import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types";

interface BattleItemsState {
  battleItems: Item[];
}

const initialState: BattleItemsState = {
  battleItems: [],
};

export const BattleItemsSlice = createSlice({
  name: "battle-items",
  initialState,
  reducers: {
    setBattleItems: (state, action: PayloadAction<{ battleItems: Item[] }>) => {
      state.battleItems = action.payload.battleItems;
    },
  },
});

export default BattleItemsSlice.reducer;
export const { setBattleItems } = BattleItemsSlice.actions;
