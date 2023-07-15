"use client";

import { useState, Dispatch, SetStateAction, FormEvent } from "react";
import { MoveClient } from "pokenode-ts";

import { Move } from "../../utils/interfaces";

export default function AddMove({ setMove }: { setMove: any }) {
  const [search, setSearch] = useState<string>("");
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  function handleMoveSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isRequesting) {
      searchMove(search);
      setIsRequesting(true);
    }
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

      setIsRequesting(false);
    })();
  }

  return (
    <div className="flex flex-col h-full gap-2 items-center justify-center">
      <form onSubmit={(e) => handleMoveSubmit(e)}>
        <input
          className="rounded px-2 py-1 border-pk-white border-2 border-solid w-full bg-transparent outline-none text-pk-white placeholder-pk-white"
          name="move"
          defaultValue=""
          placeholder="Move name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {/* <button
        className="rounded px-4 py-2 bg-pk-yellow"
        type="submit"
        onClick={() => searchItem(search)}
      >
        Add
      </button> */}
    </div>
  );
}
