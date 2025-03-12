import { PATH } from "@/constants/path";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center m-20">
        <h2>League of Legend</h2>
        <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      </div>

      <div className="w-full flex justify-center gap-20">
        <Link href={PATH.CHAMPIONS} className={linkHover}>
          챔피언 목록 보기
        </Link>
        <Link href={PATH.ITEMS} className={linkHover}>
          아이템 목록 보기
        </Link>
        <Link href={PATH.ROTATION} className={linkHover}>
          금주 로테이션 확인
        </Link>
      </div>
    </div>
  );
};

//style
const linkHover: string =
  "duration-300 ease-linear cursor-pointer hover:text-yellow-500";

export default Home;
