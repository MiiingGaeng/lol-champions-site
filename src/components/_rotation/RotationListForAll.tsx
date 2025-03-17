"use client";

import { Champion } from "@/types/Champions";
import { useEffect, useState } from "react";
import ChampionCard from "../ChampionCard";
import { getRotationForAllData } from "@/services/getData";

const RotationListForAll = () => {
  const [rotationList, setRotationList] = useState<Champion[]>([]);

  useEffect(() => {
    getRotationForAllData().then(({ rotationListForAll }) => {
      setRotationList(rotationListForAll);
    });
  }, []);

  return (
    <div>
      <h2>금주의 로테이션 - 모든 유저</h2>
      {rotationList?.map((cham) => (
        <ChampionCard key={cham.id} id={cham.id} cham={cham} />
      ))}
    </div>
  );
};

export default RotationListForAll;
