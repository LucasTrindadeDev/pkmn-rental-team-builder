import Image from "next/image";

import NaranjaAcademyCrest from "../../../public/naranja-academy-crest.png";
import UvaAcademyCrest from "../../../public/uva-academy-crest.png";

import { useAppSelector } from "../../../store/store";

export default function TrainerHeader() {
  const state = useAppSelector((state) => state.team.team);
  const { trainer } = state

  return (
    <div className="flex justify-between">
      <h1>{trainer.name}'s teams</h1>

      {trainer.game === "scarlet" ? (
        <Image
          className="w-8 h-8"
          src={NaranjaAcademyCrest}
          alt="Naranja Academy"
        />
      ) : (
        <Image className="w-8 h-8" src={UvaAcademyCrest} alt="Uva Academy" />
      )}
    </div>
  );
}
