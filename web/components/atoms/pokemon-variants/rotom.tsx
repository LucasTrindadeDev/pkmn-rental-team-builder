import { variants } from "../../../utils/pokemon-variants";

export default function Rotom({
  pokemon,
  searchPokemon,
}: {
  pokemon: string;
  searchPokemon(name: string): void;
}) {
  return (
    <>
      {variants.rotomForms.map((form: string) => (
        <li
          key={form}
          onClick={() => searchPokemon(form)}
          className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
        >
          {form.replace("-", " ")}
        </li>
      ))}

      <li
        key={pokemon}
        onClick={() => searchPokemon(pokemon)}
        className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
      >
        {pokemon.replace("-", " ")}
      </li>
    </>
  );
}
