import { GameClient, ItemClient } from "pokenode-ts";

export async function getPokedex() {
  const api = new GameClient();
  const res = await api.getPokedexByName("national");
  return res.pokemon_entries;
}

export async function getItems() {
  const api = new ItemClient();

  const promises = [];

  promises.push(api.getItemCategoryByName("held-items"));
  promises.push(api.getItemCategoryByName("bad-held-items"));
  promises.push(api.getItemCategoryByName("medicine"));
  promises.push(api.getItemCategoryByName("other"));
  promises.push(api.getItemCategoryByName("in-a-pinch"));
  promises.push(api.getItemCategoryByName("picky-healing"));
  promises.push(api.getItemCategoryByName("type-protection"));
  promises.push(api.getItemCategoryByName("choice"));
  promises.push(api.getItemCategoryByName("plates"));
  promises.push(api.getItemCategoryByName("type-enhancement"));

  const res = await Promise.all(promises);

  const battleItems = [...res.map((data) => data.items).flat()];

  return battleItems;
}
