import Image from "next/image";
import { X } from "@phosphor-icons/react";

import { typesColors } from "../../utils/types-colors";
import { Move } from "../../utils/interfaces";
import { formatName } from "../../utils/functions";

export default function SelectedMove({
  move,
  resetMoveSlot,
}: {
  move: Move;
  resetMoveSlot: (name: string) => void;
}) {
  return (
    <div className="flex items-center relative w-full h-8">
      <div
        className="absolute z-10 left-0 top-0 w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center hover:saturate-200 hover:scale-110"
        style={{
          backgroundColor: typesColors[move.type as keyof typeof typesColors],
          boxShadow: `0 0 8px ${
            typesColors[move.type as keyof typeof typesColors]
          }`,
        }}
      >
        <Image
          width={16}
          height={16}
          className="object-contain"
          src={`/type-icons/${move.type}.svg`}
          alt={move.type}
          title={move.type}
        />
      </div>

      <div className="pl-9 pr-2 bg-pk-turquoise rounded-xl w-full flex items-center justify-between">
        {formatName(move.name)}

        <X
          className="cursor-pointer text-pk-white border-red-900 border-2 bg-red-500 rounded-full"
          size={16}
          onClick={() => resetMoveSlot(move.name)}
          alt="Remove item"
        />
      </div>
    </div>
  );
}
