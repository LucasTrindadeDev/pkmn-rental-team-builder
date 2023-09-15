import Image from "next/image";
import { TeamData } from "../../../types";

export default function TrainerTeams({ teams }: { teams: TeamData[] }) {
  return (
    <div className="mt-10 flex justify-between">
      <ul className="w-full grid grid-cols-3 gap-5">
        {teams.map((team) => (
          <li
            key={team.teamId}
            className="bg-pk-blue rounded p-2"
          >
            <div className="flex items-center justify-between">
              <h4>{team.name}</h4>
              <h4>{team.teamId}</h4>
            </div>

            <ul className="mt-5 grid grid-cols-6 gap-2">
              {team.pokemon.map((pkmn) => (
                <li key={pkmn.species}>
                  <Image
                    width={50}
                    height={50}
                    className="object-contain"
                    src={pkmn.sprite}
                    alt={pkmn.species}
                    title={pkmn.species}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> 
    </div>
  );
}
