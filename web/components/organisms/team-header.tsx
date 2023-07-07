import TeamID from "../molecules/team-id";
import TeamName from "../molecules/team-name";
import TrainerInfo from "../molecules/trainer-info";

export default function TeamHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-10">
        <TeamName />

        <TrainerInfo />
      </div>

      <TeamID />
    </div>
  );
}
