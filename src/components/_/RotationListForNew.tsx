"use client";

import { getRotationForNew } from "@/server-action";
import { Champion } from "@/types/Champions";
import { useEffect, useState } from "react";
import ChampionCard from "../ChampionCard";

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
    <div>
      <h2>금주의 로테이션 - Lv.10 이하</h2>
      {rotationList?.map((cham) => (
        <ChampionCard key={cham.id} id={cham.id} cham={cham} />
      ))}
    </div>
  );
};

export default RotationListForNew;
