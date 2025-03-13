import {
  championsSplashImgUrl,
  dataUrl,
  squareImgUrl
} from "@/services/apiUrl";
import { ChampionDetail } from "@/types/Champions";
import Image from "next/image";
import React from "react";

const DetailPage = async ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  const response = await fetch(`${dataUrl}/champion/${params.id}.json`, {
    cache: "no-store"
  });
  const { data: championDetail } = await response.json();
  const { id, name, lore, tags, info, spells }: ChampionDetail =
    championDetail[params.id];

  return (
    <main
      className="w-screen relative flex items-center max-sm:justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Image
        src={`${championsSplashImgUrl}/${id}_0.jpg`}
        alt={id}
        fill
        className="object-cover"
      />

      <section className="absolute z-10 w-4/5 bg-neutral-300 bg-opacity-70 lg:w-1/2 lg:left-10 p-3">
        <h3 className="font-bold text-neutral-950 text-2xl">{name}</h3>
        <p className="text-base text-neutral-700">{lore}</p>

        <div className="flex gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex justify-center items-center w-20 bg-yellow-700 rounded-md"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="border-b-2 border-b-neutral-500">
          <h4 className="font-bold text-neutral-700 text-xl">
            {name}의 능력치
          </h4>

          <p className="text-neutral-700 text-base">ATTACK : {info.attack}</p>
          <p className="text-neutral-700 text-base">DEFENSE : {info.defense}</p>
          <p className="text-neutral-700 text-base">MAGIC : {info.magic}</p>
          <p className="text-neutral-700 text-base">
            DIFFICULTY : {info.difficulty}
          </p>
        </div>

        <div className="w-full">
          <h4 className="font-bold text-neutral-700 text-xl">{name}의 스킬</h4>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {spells.map((spell) => {
              return (
                <div key={spell.name} className="flex">
                  <Image
                    src={`${squareImgUrl}/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={60}
                    height={60}
                  />
                  <div className="w-1/2">
                    <h5>{spell.name}</h5>
                    <p className="text-xs">{spell.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
