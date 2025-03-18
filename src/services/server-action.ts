"use server";

import { Champion } from "../types/Champions";
import { getChampionData, getRotationData } from "./getData";

//무료 챔피언 로테이션 for New users
export const getRotationForNew = async () => {
  const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!
  };

  //API키가 없는 경우 콘솔에러 표시
  if (!RIOT_API_KEY) {
    console.error("API-Key missing! : api/rotation-allusers/GET method");
  }

  //로테이션 데이터 가져오기
  const rotationList = await getRotationData(headers);

  //챔피언 목록 데이터 가져오기
  const championData = await getChampionData();
  const championList: Champion[] = Object.values(championData);

  //로테이션에 있는 id로 챔피언 목록 filter
  const rotationListForNew: Champion[] = championList.filter((_, index) =>
    rotationList.freeChampionIdsForNewPlayers.includes(index)
  );

  return { rotationListForNew };
};
