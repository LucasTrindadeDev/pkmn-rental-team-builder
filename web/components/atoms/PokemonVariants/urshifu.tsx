import { variants } from "../../../utils/pokemon-variants";

export default function Urshifu({
  searchPokemon,
}: {
  searchPokemon(name: string): void;
}) {
  return (
    <>
      {variants.urshifu.map((style: string) => (
        <li
          key={style}
          onClick={() => searchPokemon(style)}
          className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
        >
          {`${style.replaceAll("-", " ")} Style`}
        </li>
      ))}
    </>
  );
}
