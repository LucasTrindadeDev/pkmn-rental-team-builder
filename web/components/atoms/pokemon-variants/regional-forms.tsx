import { variants } from "../../../utils/pokemon-variants";

export default function RegionalForms({
  pokemon,
  searchPokemon,
}: {
  pokemon: string;
  searchPokemon(name: string): void;
}) {
  const regionalForms =
    variants.regionalForms[
      pokemon as keyof typeof variants.regionalForms
    ].split("/");

  return (
    <>
      {regionalForms.length > 0 ? (
        regionalForms.map((form: string) => (
          <li
            key={form}
            onClick={() => searchPokemon(form)}
            className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
          >
            {form.replaceAll("-", " ")}
          </li>
        ))
      ) : (
        <li
          key={
            variants.regionalForms[
              pokemon as keyof typeof variants.regionalForms
            ]
          }
          onClick={() =>
            searchPokemon(
              variants.regionalForms[
                pokemon as keyof typeof variants.regionalForms
              ]
            )
          }
          className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
        >
          {variants.regionalForms[
            pokemon as keyof typeof variants.regionalForms
          ].replaceAll("-", " ")}
        </li>
      )}

      <li
        key={pokemon}
        onClick={() => searchPokemon(pokemon)}
        className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
      >
        {pokemon.replaceAll("-", " ")}
      </li>
    </>
  );
}
