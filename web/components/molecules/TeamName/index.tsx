import { setTeamName } from "../../../store/features/teamSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import TeamTextInput from "../../atoms/TeamTextInput";

export default function TeamName({ lockEditing }: { lockEditing?: boolean}) {
  const dispatch = useAppDispatch();
  const teamName = useAppSelector((state) => state.team.team.name);

  function handleNameChange(name: string) {
    dispatch(setTeamName({ name }));
  }

  return (
    <div className="flex items-center gap-2">
      <span className="bg-pk-yellow w-1 h-6" />

      <TeamTextInput
        classes="w-48 border-none bg-transparent outline-none text-xl text-pk-white placeholder:text-pk-white/70"
        name="team-name"
        placeholder="Team name"
        defaultValue={teamName}
        handlerFunction={handleNameChange}
        disabled={lockEditing}
      />
    </div>
  );
}
