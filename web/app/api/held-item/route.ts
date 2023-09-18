import { NextResponse } from "next/server";
import { ItemClient } from "pokenode-ts";

export async function GET(req: Request) {
  const api = new ItemClient();

  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") ?? "";

  if (name === "") return;

  const data = await api.getItemByName(name)
  const heldItem = {
    sprite: data.sprites.default,
    name: data.name,
  }

  return NextResponse.json(heldItem);
}
