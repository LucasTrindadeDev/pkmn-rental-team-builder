import TeamID from "../molecules/TeamId";
import TeamName from "../molecules/TeamName";
import TrainerInfo from "../molecules/TrainerInfo";

export default function TeamHeader({ lockEditing }: { lockEditing?: boolean}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-10">
        <TeamName lockEditing={lockEditing} />

        <TrainerInfo lockEditing={lockEditing} />
      </div>

      <TeamID lockEditing={lockEditing} />
    </div>
  );
}
