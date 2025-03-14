import { dataUrl, ROTATION_URL } from "./services/apiUrl";
import { Champion } from "./types/Champions";
import { RotationData } from "./types/Rotations";

//무료 챔피언 로테이션 for New users
export const getRotationForNew = async () => {
  //로테이션 데이터 가져오기
  const resRotation = await fetch(
    `${ROTATION_URL}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
  );
  const data: RotationData = await resRotation.json();

  //챔피언 목록 데이터 가져오기
  const resChampions = await fetch(`${dataUrl}/champion.json`);
  const { data: dataChampion } = await resChampions.json();
  const championList: Champion[] = Object.values(dataChampion);

  const rotationListForNew: Champion[] = championList.filter((_, index) =>
    data.freeChampionIdsForNewPlayers.includes(index)
  );

  return { rotationListForNew };
};
