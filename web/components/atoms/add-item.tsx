"use client";

import { useState, Dispatch, SetStateAction, FormEvent } from "react";
import { ItemClient } from "pokenode-ts";

import { Item } from "../../utils/interfaces";

export default function AddItem({
  setItem,
}: {
  setItem: Dispatch<SetStateAction<Item | undefined>>;
}) {
  const [search, setSearch] = useState<string>("");
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  function handleItemSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isRequesting) {
      searchItem(search);
      setIsRequesting(true);
    }
  }

  function searchItem(name: string): void {
    const query = name.toLowerCase().replace(" ", "-");

    (async () => {
      const api = new ItemClient();

      await api
        .getItemByName(query)
        .then((data) => {
          console.log(data);

          setItem({
            sprite: data.sprites.default,
            name: data.name,
          });
        })
        .catch((error) => console.error(error));

      setIsRequesting(false);
    })();
  }

  return (
    <div className="flex flex-col h-full gap-2 items-center justify-center">
      <form onSubmit={(e) => handleItemSubmit(e)}>
        <input
          className="rounded px-2 py-1 border-pk-white border-2 border-solid w-full bg-transparent outline-none text-pk-white placeholder-pk-white"
          name="item"
          defaultValue=""
          placeholder="Item name"
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