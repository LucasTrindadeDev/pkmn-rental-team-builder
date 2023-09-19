import { setTeamID } from "../../../store/features/teamSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import TeamTextInput from "../../atoms/TeamTextInput";

export default function TeamID({ lockEditing }: { lockEditing?: boolean}) {
  const dispatch = useAppDispatch();
  const teamId = useAppSelector((state) => state.team.team.id);

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
        defaultValue={teamId}
        handlerFunction={handleIdChange}
        disabled={lockEditing}
      />
    </div>
  );
}
