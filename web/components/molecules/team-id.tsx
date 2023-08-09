import { setTeamID } from "../../store/features/teamSlice";
import { useAppDispatch } from "../../store/store";
import TeamTextInput from "../atoms/team-text-input";

export default function TeamID() {
  const dispatch = useAppDispatch();

  function handleIdChange(id: string) {
    dispatch(setTeamID({ id }));
  }

  return (
    <div className="flex items-center text-pk-white">
      <h3 className="text-base">Team ID</h3>
      <span className="ml-2 mr-3 opacity-50">|</span>

      <TeamTextInput
        classes="w-32 border-none bg-transparent outline-none text-xl strong text-pk-white placeholder:text-pk-white/70"
        name="team-id"
        placeholder="Team ID"
        defaultValue=""
        handlerFunction={handleIdChange}
      />
    </div>
  );
}
