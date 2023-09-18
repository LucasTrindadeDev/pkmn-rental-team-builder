import { SetStateAction } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";

import { BattleItem } from "../../../types";
import { formatName } from "../../../utils/functions";

export default function SelectedItem({
  item,
  setItem,
}: {
  item: BattleItem;
  setItem?: (value: SetStateAction<BattleItem | undefined>) => void;
}) {
  return (
    <div className="flex items-center gap-1 ml-[-10px] relative w-full h-10">
      <div className="absolute z-10 left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center bg-pk-white">
        {item.sprite ? (
          <Image width={35} height={35} src={item.sprite} alt={item.name} />
        ) : (
          <Image
            width={35}
            height={35}
            src={`/missing-item-sprites/${item.name}.png`}
            alt={item.name}
          />
        )}
      </div>

      <div className="pl-11 pr-2 bg-pk-turquoise rounded-xl w-full flex items-center justify-between">
        <h4>{formatName(item.name)}</h4>
        
        {setItem && (
          <X
            className="cursor-pointer text-pk-white border-red-900 border-2 bg-red-500 rounded-full"
            size={16}
            onClick={() => setItem(undefined)}
            alt="Remove item"
          />
        )}
      </div>
    </div>
  );
}
