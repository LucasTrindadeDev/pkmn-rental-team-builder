import Image from "next/image";

import NaranjaAcademyCrest from "../../../public/naranja-academy-chest.png";

export default function TrainerInfo() {
  return (
    <div className="flex items-center gap-2 text-pk-white">
      <span className="opacity-50">|</span>
      <h3>Danenoen</h3>
      <Image
        className="w-8 h-8"
        src={NaranjaAcademyCrest}
        alt="Naranja Academy"
      />
    </div>
  );
}
