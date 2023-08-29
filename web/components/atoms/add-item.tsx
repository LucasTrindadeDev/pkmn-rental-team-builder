"use client";

import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import { ItemClient } from "pokenode-ts";

import { BattleItem } from "../../types";
import { useAppSelector } from "../../store/store";
import { formatName } from "../../utils/functions";

export default function AddItem({
  setItem,
}: {
  setItem: Dispatch<SetStateAction<BattleItem | undefined>>;
}) {
  const [search, setSearch] = useState<string>("");
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [suggestItems, setSuggestItems] = useState<any[]>([]);

  const battleItems = useAppSelector((state) => state.battleItems.battleItems);

  useEffect(() => {
    if (search.length >= 2) suggestSearch();
    else setSuggestItems([]);
  }, [search]);

  function suggestSearch() {
    const suggest = battleItems.filter(
      function (this: any, item) {
        if (this.count < 3 && item.name.indexOf(search) >= 0) {
          this.count++;
          return true;
        }

        return false;
      },
      { count: 0 }
    );

    setSuggestItems(suggest);
  }

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
    <div className="flex flex-col h-full gap-2 items-center justify-center relative">
      <form onSubmit={(e) => handleItemSubmit(e)}>
        <input
          className="rounded px-2 py-1 border-pk-white border-2 border-solid w-full bg-transparent outline-none text-pk-white placeholder-pk-white"
          name="item"
          defaultValue=""
          placeholder="Item name"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {suggestItems && suggestItems.length > 0 && (
        <ul className="absolute bottom-1 translate-y-full rounded-b-md bg-pk-turquoise w-full pt-2 z-10 shadow-md">
          {suggestItems.map((item: BattleItem) => (
            <li
              key={item.name}
              onClick={() => searchItem(item.name)}
              className="capitalize px-2 py-1 border-t-2 border-t-pk-white first:border-t-0 cursor-pointer hover:text-pk-yellow transition-colors duration-100"
            >
              {formatName(item.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
