import TeamID from "../../molecules/TeamID";
import TeamName from "../../molecules/TeamName";
import TrainerInfo from "../../molecules/TrainerInfo";

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
