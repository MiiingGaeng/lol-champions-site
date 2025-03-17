import { DATA_URL, ROTATION_URL } from "@/constants/apiUrl";
import { Champion } from "@/types/Champions";
import { RotationData } from "@/types/Rotations";

//무료 챔피언 로테이션 for All users
export async function GET() {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;
  const headers: HeadersInit = {
    "Content-Type": "application/json"
  };

  //API키가 있는 경우 / 없는 경우 분기처리
  if (RIOT_API_KEY) {
    headers["api_key"] = RIOT_API_KEY;
  } else {
    console.error("API-Key missing! : api/rotation-allusers/GET method");
  }

  //로테이션 데이터 가져오기
  const resRotation = await fetch(`${ROTATION_URL}?api_key=${RIOT_API_KEY}`, {
    headers
  });
  const dataRotation: RotationData = await resRotation.json();

  // 챔피언 목록 데이터 가져오기
  const resChampions = await fetch(`${DATA_URL}/champion.json`);
  const { data: dataChampions } = await resChampions.json();
  const championList: Champion[] = Object.values(dataChampions);

  const rotationListForAll: Champion[] = championList.filter((_, index) =>
    dataRotation.freeChampionIds.includes(index)
  );

  return Response.json({ rotationListForAll });
}
