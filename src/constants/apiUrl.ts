import { LANGUAGE } from "@/constants/language";

//데이터 패치 url
export const DATA_URL: string = `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/${LANGUAGE.KO}`;

//아이템, 챔피언 스킬 정사각형 이미지 url
export const SQUARE_IMG_URL: string =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/img";

//챔피언 full-size 이미지 url : ${champion.id}_0.jpg (Aatrox_0.jpg)
export const CHAM_FULL_IMG_URL: string =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash";

//챔피언 loading 이미지 url : ${champion.id}_0.jpg (Aatrox_0.jpg)
export const CHAM_LOADING_IMG_URL: string =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading";

export const ROTATION_URL: string =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

export const BASE_URL: string = "http://localhost:3000";
