import PokemonBox from "../../molecules/PokemonBox";

export default function TeamPokemons() {
  return (
    <div className="grow mt-10 grid grid-cols-2 grid-rows-3 gap-10">
      <PokemonBox />
      <PokemonBox />
      <PokemonBox />
      <PokemonBox />
      <PokemonBox />
      <PokemonBox />
    </div>
  );
}
