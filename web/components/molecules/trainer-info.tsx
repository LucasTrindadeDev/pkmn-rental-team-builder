import ChooseGame from "../atoms/choose-game";

export default function TrainerInfo() {
  return (
    <div className="flex items-center gap-2 text-pk-white">
      <span className="opacity-50">|</span>
      <h3>Danenoen</h3>

      <ChooseGame />
    </div>
  );
}
