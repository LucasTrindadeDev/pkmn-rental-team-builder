import Image from "next/image";

import { useAppDispatch, useAppSelector } from "../../../store/store";

import NaranjaAcademyCrest from "../../../public/naranja-academy-crest.png";
import UvaAcademyCrest from "../../../public/uva-academy-crest.png";
import { setTrainerGame } from "../../../store/features/teamSlice";

export default function ChooseGame() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.team.team.trainer.game);

  function handleGameChange() {
    if (game === "scarlet") dispatch(setTrainerGame({ game: "violet" }));
    else dispatch(setTrainerGame({ game: "scarlet" }));
  }

  return (
    <button onClick={() => handleGameChange()}>
      {game === "scarlet" ? (
        <Image
          className="w-8 h-8"
          src={NaranjaAcademyCrest}
          alt="Naranja Academy"
        />
      ) : (
        <Image className="w-8 h-8" src={UvaAcademyCrest} alt="Uva Academy" />
      )}
    </button>
  );
}
