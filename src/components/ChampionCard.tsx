import { CHAM_FULL_IMG_URL } from "@/constants/apiUrl";
import { PATH } from "@/constants/routePath";
import { Champion } from "@/types/Champions";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  id: string;
  cham: Champion;
};

const ChampionCard = ({ id, cham }: ChampionCardProps) => {
  return (
    <Link
      href={`${PATH.CHAMPIONS}/${id}`}
      key={id}
      className="h-60 lg:p-10 flex items-center cursor-pointer relative duration-200 hover:scale-105"
    >
      <Image
        src={`${CHAM_FULL_IMG_URL}/${id}_0.jpg`}
        alt={cham.name}
        fill
        className="object-fill z-0"
      />

      <div className="w-full h-40 flex flex-col justify-center pl-5 absolute z-10 bottom-0 left-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent">
        <h3 className="text-2xl font-bold">{cham.name}</h3>
        <p className="text-lg text-neutral-300">{cham.title}</p>
        <div className="flex gap-3">
          {cham.tags?.map((tag) => (
            <div
              key={tag}
              className="bg-amber-500 text-xs w-16 h-5 rounded-md flex justify-center items-center"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
