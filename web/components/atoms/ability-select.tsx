"use client";

import { Dispatch, SetStateAction } from "react";
import * as Select from "@radix-ui/react-select";

import { PokemonAbility } from "../../types";
import { formatName } from "../../utils/functions";
import Image from "next/image";

export default function AbilitySelect({
  abilities,
  setAbility,
}: {
  abilities: PokemonAbility[];
  setAbility: Dispatch<SetStateAction<string | undefined>>;
}) {
  const defaultAbility = abilities.filter((ability) => {
    return ability.slot == 1;
  });

  if (abilities.length === 1 || abilities[0].name === abilities[1].name)
    return (
      <h3 className="flex items-center placeholder:text-pk-white placeholder:font-normal text-white font-semibold capitalize">
        {abilities[0].name}
      </h3>
    );

  return (
    <Select.Root
      defaultValue={defaultAbility[0].name}
      onValueChange={(ability) => setAbility(ability)}
    >
      <Select.Trigger
        aria-label="Ability"
        className="flex items-center placeholder:text-pk-white placeholder:font-normal text-white font-semibold"
      >
        <Select.Value />
        <Select.Icon className="ml-2">
          <Image
            width={16}
            height={16}
            src="/icons/chevron-down.svg"
            alt="&#xF282;"
            className="text-pk-white"
          />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-pk-turquoise rounded-md shadow-sm">
          <Select.Viewport className="p-2">
            {abilities.map((ability) => (
              <Select.Item
                value={ability.name}
                key={ability.name}
                className="text-pk-white text-sm my-1 cursor-pointer transition-colors duration-100 focus:text-pk-yellow"
              >
                <Select.ItemText>{formatName(ability.name)}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
