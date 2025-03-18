"use client";

import ChampionCard from "../ChampionCard";
import { getRotationForAllData } from "@/services/getData";
import { useQuery } from "@tanstack/react-query";

const RotationListForAll = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["rotationForAll"],
    queryFn: getRotationForAllData
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Rotation For All Error : ", error);
    return <div>에러가 발생했습니다... 다시 시도해주세요!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">금주의 로테이션</h2>
        <p className="text-neutral-400">
          금주 모든 유저에게 무료로 제공되는 챔피언입니다.
        </p>
      </div>
      {data.rotationListForAll?.map((cham) => {
        return <ChampionCard key={cham.id} id={cham.id} cham={cham} />;
      })}
    </div>
  );
};

export default RotationListForAll;
