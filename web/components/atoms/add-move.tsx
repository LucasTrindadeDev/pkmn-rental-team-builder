"use client";

import { useState, useEffect, FormEvent } from "react";
import { MoveClient, PokemonMove } from "pokenode-ts";
import { formatName } from "../../utils/functions";

export default function AddMove({
  setMove,
  disabled,
  learnableMoves,
}: {
  setMove: any;
  disabled: boolean;
  learnableMoves: PokemonMove[] | undefined;
}) {
  const [search, setSearch] = useState<string>("");
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [suggestMoves, setSuggestMoves] = useState<PokemonMove[] | undefined>(
    []
  );

  useEffect(() => {
    if (search.length > 0) suggestSearch();
    else setSuggestMoves([]);
  }, [search]);

  function handleMoveSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isRequesting) {
      searchMove(search);
      setIsRequesting(true);
    }
  }

  function suggestSearch() {
    const suggest = learnableMoves?.filter(
      function (this: any, item) {
        if (this.count < 3 && item.move.name.indexOf(search) >= 0) {
          this.count++;
          return true;
        }

        return false;
      },
      { count: 0 }
    );

    setSuggestMoves(suggest);
  }

  function searchMove(name: string): void {
    const query = name.toLowerCase().replace(" ", "-");

    (async () => {
      const api = new MoveClient();

      await api
        .getMoveByName(query)
        .then((data) => {
          console.log(data);

          setMove({
            type: data.type.name,
            name: data.name,
          });
        })
        .catch((error) => console.error(error));
    })();

    setIsRequesting(false);
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      <form onSubmit={(e) => handleMoveSubmit(e)}>
        <input
          className="rounded px-2 py-1 border-pk-white border-2 border-solid w-full bg-pk-blue outline-none text-pk-white placeholder-pk-white"
          style={
            disabled
              ? { opacity: "0.5" }
              : { zIndex: "20", position: "relative" }
          }
          name="move"
          defaultValue=""
          placeholder="Move name"
          onChange={(e) => setSearch(e.target.value.replace(" ", "-"))}
          disabled={disabled}
          autoComplete="off"
        />
      </form>

      {suggestMoves && suggestMoves.length > 0 && (
        <ul className="absolute bottom-1 translate-y-full rounded-b-md bg-pk-turquoise w-full pt-2 z-10 shadow-md">
          {suggestMoves.map((move: PokemonMove) => (
            <li
              key={move.move.name}
              onClick={() => searchMove(move.move.name)}
              className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
            >
              {formatName(move.move.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
