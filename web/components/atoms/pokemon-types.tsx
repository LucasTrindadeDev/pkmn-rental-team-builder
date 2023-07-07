import Image from "next/image";

import { typesColors } from "../../utils/types-colors";

export default function PokemonTypes({ types }: { types: string[] }) {
  return (
    <ul className="flex gap-2 justify-center">
      {types.map((type) => (
        <li
          key={type}
          className="rounded-full w-9 h-9 transition-all duration-200 flex items-center justify-center hover:saturate-200 hover:scale-110"
          style={{
            backgroundColor: typesColors[type as keyof typeof typesColors],
            boxShadow: `0 0 8px ${
              typesColors[type as keyof typeof typesColors]
            }`,
          }}
        >
          <Image
            width={20}
            height={20}
            className="object-contain"
            src={`/type-icons/${type}.svg`}
            alt={type}
            title={type}
          />
        </li>
      ))}
    </ul>
  );
}
