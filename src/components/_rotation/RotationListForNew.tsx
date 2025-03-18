"use client";

import { Champion } from "@/types/Champions";
import { useEffect, useState } from "react";
import ChampionCard from "../ChampionCard";
import { getRotationForNew } from "@/services/server-action";

const RotationListForNew = () => {
  const [rotationList, setRotationList] = useState<Champion[]>([]);

  useEffect(() => {
    getRotationForNew()
      .then(({ rotationListForNew }) => {
        setRotationList(rotationListForNew);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">금주의 로테이션</h2>
        <p className="text-neutral-400">
          금주 신규 유저(Lv.10 이하)에게 무료로 제공되는 챔피언입니다.
        </p>
      </div>
      {rotationList?.map((cham) => (
        <ChampionCard key={cham.id} id={cham.id} cham={cham} />
      ))}
    </div>
  );
};

export default RotationListForNew;
