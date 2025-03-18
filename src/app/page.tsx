import { PATH } from "@/constants/routePath";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="w-screen h-[calc(100vh-64px)] flex flex-col justify-center items-center">
      <div className="m-10 flex flex-col justify-center items-center">
        <Image
          src={"/images/lol-logo.png"}
          alt="logo"
          width={300}
          height={100}
        />
        <p className="text-xs md:text-base text-center">
          Riot Games API를 활용하여 <br />
          챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>

      <section className="w-full h-3/4 flex flex-wrap gap-20 justify-center items-center">
        <Link href={PATH.CHAMPIONS} className={LinkCard}>
          <Image src={"/images/home-champion.jpg"} alt="home-champion" fill />
          <div className={LinkCardTextWrap}>
            <p className={LinkCardText}>더 많은 챔피언 알아보기</p>
          </div>
        </Link>

        <Link href={PATH.ITEMS} className={LinkCard}>
          <Image src={"/images/home-item.jpg"} alt="home-champion" fill />
          <div className={LinkCardTextWrap}>
            <p className={LinkCardText}>아이템 목록 보러가기</p>
          </div>
        </Link>

        <Link href={PATH.ROTATION} className={LinkCard}>
          <Image src={"/images/home-rotation.jpg"} alt="home-champion" fill />
          <div className={LinkCardTextWrap}>
            <p className={LinkCardText}>금주 로테이션 확인하기</p>
          </div>
        </Link>
      </section>
    </main>
  );
};

//style
const LinkCard: string =
  "w-60 h-96 cursor-pointer relative transition-all duration-300 hover:scale-105 hover:text-yellow-500";
const LinkCardTextWrap: string =
  "w-full h-20 absolute z-10 bottom-0 text-center bg-gradient-to-t from-black/100 via-black/80 to-transparent";
const LinkCardText: string = "absolute bottom-10 font-bold w-full text-center";

export default Home;
