import SpellCard from "@/components/SpellCard";
import { CHAM_FULL_IMG_URL } from "@/constants/apiUrl";
import { getChampionDetail } from "@/services/getData";
import { ChampionDetail, ChampionSpell } from "@/types/Champions";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

const DetailPage = async ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  const championDetail = await getChampionDetail(params.id);
  const {
    id,
    name,
    lore,
    tags,
    info,
    spells
  }: Pick<ChampionDetail, "id" | "name" | "lore" | "tags" | "info" | "spells"> =
    championDetail[params.id];

  return (
    <main
      className="w-screen relative"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Image
        src={`${CHAM_FULL_IMG_URL}/${id}_0.jpg`}
        alt={id}
        fill
        className="object-cover"
      />

      <aside className="absolute z-20 left-0 top-full lg:top-0 w-screen h-[calc(100vh-64px)] lg:w-1/2 bg-gradient-to-r from-black/100 via-black/80 to-transparent p-3">
        <article>
          <h3 className="text-2xl font-bold mb-5">{name}</h3>
          <p className="w-full lg:w-2/3 text-xs mb-5">{lore}</p>
        </article>

        <section className="flex gap-3 mb-10">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-amber-500 text-xs w-16 h-5 rounded-md flex justify-center items-center"
            >
              {tag}
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h5 className="text-lg font-bold mb-2">INFO</h5>
          <hr className="w-full lg:w-2/3 mb-2" />
          <ul>
            {Object.entries(info).map(([key, value]) => {
              return (
                <li
                  key={key}
                  className="w-full lg:w-2/3 flex items-center justify-between"
                >
                  <h6 className="text-sm">{key.toUpperCase()}</h6>
                  <div className="flex gap-3">
                    {[...Array(Math.floor(value / 2))].map((_, i) => (
                      <FaCircle key={i} className="text-xs" />
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="w-full lg:w-2/3 h-2/5 overflow-scroll">
          <h5 className="text-lg font-bold">SPELLS</h5>
          <hr className="w-full mb-2" />
          <div className="flex flex-col gap-5 overflow-scroll">
            {spells.map(
              (
                spell: Pick<
                  ChampionSpell,
                  "id" | "name" | "description" | "image"
                >
              ) => (
                <SpellCard spell={spell} key={spell.id} />
              )
            )}
          </div>
        </section>
      </aside>
    </main>
  );
};

export default DetailPage;
