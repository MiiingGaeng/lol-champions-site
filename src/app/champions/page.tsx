import { Champion } from "@/types/Champions";
import ChampionCard from "@/components/ChampionCard";
import { getChampionData } from "@/services/getData";

const championsPage = async () => {
  const championData = await getChampionData();
  const championList = Object.entries<Champion>(championData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {championList.map(([id, cham]) => (
        <ChampionCard key={id} id={id} cham={cham} />
      ))}
    </div>
  );
};

export default championsPage;
