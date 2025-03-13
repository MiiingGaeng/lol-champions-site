import { imgApiUrl } from "@/app/api/apiUrl";
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
      className="h-60 border border-neutral-500 p-5 lg:p-10 rounded-lg flex items-center cursor-pointer"
    >
      <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
        <Image
          src={`${imgApiUrl}/champion/${cham.image.full}`}
          alt={cham.name}
          fill
          sizes="(max-width: 768px) 128px, (max-width: 1200px) 128px"
          className="object-fill"
        />
      </div>

      <div className="ml-5 w-1/2 flex flex-col gap-2">
        <h3 className="text-lg font-bold">{cham.name}</h3>
        <p className="text-base text-neutral-500">{cham.title}</p>
        <div className="flex gap-3">
          {cham.tags.map((tag) => (
            <div
              key={tag}
              className="bg-amber-600 text-xs w-16 h-5 rounded-md flex justify-center items-center"
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
