import { LANGUAGE } from "@/constants/language";

//데이터 패치 url
export const dataUrl: string = `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/${LANGUAGE.KO}`;

//아이템, 챔피언 스킬 정사각형 이미지 url
export const squareImgUrl: string =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/img";

//챔피언 full-size 이미지 url : ${champion.id}_0.jpg (Aatrox_0.jpg)
export const championsSplashImgUrl: string =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash";

//챔피언 loading 이미지 url : ${champion.id}_0.jpg (Aatrox_0.jpg)
export const championLoadingImgUrl: string =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading";
