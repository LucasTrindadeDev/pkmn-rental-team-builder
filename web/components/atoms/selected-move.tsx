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
    <div className="flex gap-2 items-center relative pr-1">
      <div
        className="w-7 h-7 rounded-full transition-all duration-200 flex items-center justify-center hover:saturate-200 hover:scale-110"
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
      {formatName(move.name)}

      <X
        className="absolute top-0 right-0 cursor-pointer text-pk-white border-red-900 border-2 bg-red-500 rounded-full translate-x-1/2 -translate-y-1/2"
        size={16}
        onClick={() => resetMoveSlot(move.name)}
        alt="Remove item"
      />
    </div>
  );
}
