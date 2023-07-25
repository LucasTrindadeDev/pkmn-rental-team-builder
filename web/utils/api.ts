import { GameClient, ItemClient } from "pokenode-ts";

export async function getPokedex() {
  const api = new GameClient();
  const res = await api.getPokedexByName("national");
  return res.pokemon_entries;
}
