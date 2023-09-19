export default function Genies({
  pokemon,
  searchPokemon,
}: {
  pokemon: string;
  searchPokemon(name: string): void;
}) {
  return (
    <>
      <li
        key={`${pokemon}-incarnate`}
        onClick={() => searchPokemon(`${pokemon}-incarnate`)}
        className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
      >
        {`${pokemon}-incarnate`.replace("-", " ")}
      </li>

      <li
        key={`${pokemon}-therian`}
        onClick={() => searchPokemon(`${pokemon}-therian`)}
        className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
      >
        {`${pokemon}-therian`.replace("-", " ")}
      </li>
    </>
  );
}
