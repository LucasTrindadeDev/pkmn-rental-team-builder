import { variants } from "../../../utils/pokemon-variants";

export default function Basculin({
  searchPokemon,
}: {
  searchPokemon(name: string): void;
}) {
  return (
    <>
      {variants.basculin.map((form: string) => (
        <li
          key={form}
          onClick={() => searchPokemon(form)}
          className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
        >
          {`${form.replaceAll("-", " ")}`}
        </li>
      ))}
    </>
  );
}
