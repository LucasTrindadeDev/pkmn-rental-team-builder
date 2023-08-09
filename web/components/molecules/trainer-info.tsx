import { setTrainerName } from "../../store/features/teamSlice";
import { useAppDispatch } from "../../store/store";

import ChooseGame from "../atoms/choose-game";
import TeamTextInput from "../atoms/team-text-input";

export default function TrainerInfo() {
  const dispatch = useAppDispatch();

  function handleNameChange(name: string) {
    dispatch(setTrainerName({ name }));
  }

  return (
    <div className="flex items-center gap-2 text-pk-white">
      <span className="opacity-50">|</span>
      <ChooseGame />

      <TeamTextInput
        classes="bg-transparent text-pk-white w-40 placeholder:text-pk-white/70 outline-none"
        name="team-name"
        placeholder="Trainer name"
        defaultValue=""
        handlerFunction={handleNameChange}
      />
    </div>
  );
}
