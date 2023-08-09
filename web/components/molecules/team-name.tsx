import { setTeamName } from "../../store/features/teamSlice";
import { useAppDispatch } from "../../store/store";
import TeamTextInput from "../atoms/team-text-input";

export default function TeamName() {
  const dispatch = useAppDispatch();

  function handleNameChange(name: string) {
    dispatch(setTeamName({ name }));
  }

  return (
    <div className="flex items-center gap-2">
      <span className="bg-pk-yellow w-1 h-6" />

      <TeamTextInput
        classes="w-32 border-none bg-transparent outline-none text-xl text-pk-white placeholder:text-pk-white/70"
        name="team-name"
        placeholder="Team name"
        defaultValue=""
        handlerFunction={handleNameChange}
      />
    </div>
  );
}
