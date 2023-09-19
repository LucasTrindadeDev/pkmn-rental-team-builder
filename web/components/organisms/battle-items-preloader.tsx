"use client";

import { useRef } from "react";
import { store } from "../../store/store";
import { setBattleItems } from "../../store/features/battleItemsSlice";
import { Item } from "../../types";

export default async function BattleItemsPreloader({
  battleItems,
}: {
  battleItems: Item[];
}) {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setBattleItems({ battleItems: battleItems }));
    loaded.current = true;
  }

  return null;
}
