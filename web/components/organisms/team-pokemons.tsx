import PokemonBox from "../molecules/pokemon-box";

export default function TeamPokemons() {
  return (
    <>
      <div className="grow mt-10 grid grid-cols-2 grid-rows-3 gap-10">
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
        <PokemonBox />
      </div>

      <div className="flex justify-center mt-10">
        <button type="submit" className="rounded px-4 py-2 bg-pk-yellow">
          Save Team
        </button>
      </div>
    </>
  );
}
