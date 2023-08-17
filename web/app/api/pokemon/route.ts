import { NextResponse } from "next/server";

import { PokemonClient } from "pokenode-ts";

export async function GET(req: Request) {
  const api = new PokemonClient();
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") ?? "";

  if (name === "") return;

  let res;

  if (name === "basculegion") {
    res = await api.getPokemonById(902);
  } else {
    res = await api.getPokemonByName(name);
  }

  const pokemon = {
    species: res.species.name.replace("-", " "),
    sprite: res.sprites.front_default,
    level: 50,
    types: res.types.map((type) => {
      return type.type.name;
    }),
    abilities: res.abilities.map((ability) => {
      return {
        name: ability.ability.name,
        is_hidden: ability.is_hidden,
        slot: ability.slot,
      };
    }),
    learnableMoves: res.moves,
  };

  return NextResponse.json(pokemon);
}
