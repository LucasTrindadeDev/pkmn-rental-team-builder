"use client";

import { useState } from "react";

import TextInput from "../../atoms/text-input";

export default function TeamName() {
  const [teamName, setTeamName] = useState("Team 1");

  return (
    <div className="flex items-center gap-2">
      <span className="bg-pk-yellow w-1 h-6" />

      <TextInput
        classes="w-52 border-none bg-transparent outline-none text-xl text-pk-white"
        name="team-name"
        defaultValue={teamName}
        setFunction={setTeamName}
      />
    </div>
  );
}
