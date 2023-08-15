import { NextResponse } from "next/server";

import { GameClient } from "pokenode-ts";

export async function GET(req: Request) {
  const api = new GameClient();
  const res = await api.getPokedexByName("national");
  return NextResponse.json(res.pokemon_entries);
}
