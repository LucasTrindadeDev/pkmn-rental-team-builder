import PokemonBox from "../molecules/pokemon-box";

export default function TeamPokemons() {
  return (
    <div className="grow mt-10 grid grid-cols-2 grid-rows-3 gap-10">
      <PokemonBox key="pokemon-1" />
      <PokemonBox key="pokemon-2" />
      <PokemonBox key="pokemon-3" />
      <PokemonBox key="pokemon-4" />
      <PokemonBox key="pokemon-5" />
      <PokemonBox key="pokemon-6" />
    </div>
  );
}
