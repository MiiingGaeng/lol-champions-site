import { SQUARE_IMG_URL } from "@/constants/apiUrl";
import { ChampionSpell } from "@/types/Champions";
import Image from "next/image";

type SpellCardProps = {
  spell: Pick<ChampionSpell, "id" | "name" | "description" | "image">;
};

const SpellCard = ({ spell }: SpellCardProps) => {
  return (
    <div
      key={spell.id}
      className="flex w-full lg:w-2/3 justify-center gap-5 items-center"
    >
      <div className="w-20 h-20 relative">
        <Image
          src={`${SQUARE_IMG_URL}/spell/${spell.image.full}`}
          alt={spell.id}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-2/3 flex flex-col">
        <h4>{spell.name}</h4>
        <p className="text-xs">{spell.description}</p>
      </div>
    </div>
  );
};

export default SpellCard;
