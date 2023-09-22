"use client";

import { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { typesColors } from "../../../utils/types-colors";
import { capitalizeFirstChar } from "../../../utils/functions";

export default function PokemonTypes({
  types,
  teratype,
  setTeraType,
}: {
  types: string[];
  teratype: string;
  setTeraType?: Dispatch<SetStateAction<string>>;
}) {
  const [choosingTeraType, setChoosingTeraType] = useState<boolean>(false);

  function handleTeraTypeChange(type: string): void {
    if (!setTeraType) return;
    setTeraType(type);
    setChoosingTeraType(false);
  }

  return (
    <div>
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
              alt={capitalizeFirstChar(type)}
              title={capitalizeFirstChar(type)}
            />
          </li>
        ))}

        <span className="h-9 w-[2px] mx-1 inline-block bg-pk-white opacity-50" />

        <li
          key="tera-type"
          className="rounded-full w-9 h-9 transition-all duration-200 flex items-center justify-center hover:saturate-200 hover:scale-110 cursor-pointer relative"
          style={{
            backgroundColor: typesColors[teratype as keyof typeof typesColors],
            boxShadow: `0 0 8px ${teratype}`,
          }}
          onClick={() => setChoosingTeraType(true)}
        >
          <Image
            width={20}
            height={20}
            className="object-contain"
            src={`/type-icons/${teratype}.svg`}
            alt="Tera type"
            title="Tera type"
          />
        </li>
      </ul>

      {choosingTeraType && (
        <ul className="absolute top-0 h-full left-1/2 grid grid-cols-5 gap-2 z-30 -translate-x-1/2 bg-pk-gray p-3 rounded-lg">
          {Object.entries(typesColors).map((type: Array<string>) => (
            <li
              key={`${type[0]}-tera-type`}
              className="rounded-full w-9 h-9 transition-all duration-200 flex items-center justify-center hover:saturate-200 hover:scale-110 cursor-pointer relative"
              style={{
                backgroundColor: type[1],
                boxShadow: `0 0 8px ${type[1]}`,
              }}
              onClick={() => handleTeraTypeChange(type[0])}
            >
              <Image
                width={20}
                height={20}
                className="object-contain"
                src={`/type-icons/${type[0]}.svg`}
                alt={`${capitalizeFirstChar(type[0])} Tera type`}
                title={`${capitalizeFirstChar(type[0])} Tera type`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
