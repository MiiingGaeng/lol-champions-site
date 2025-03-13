import { Champion } from "@/types/Champions";
import { dataApiUrl } from "../../services/apiUrl";
import ChampionCard from "@/components/ChampionCard";

const championsPage = async () => {
  const response = await fetch(`${dataApiUrl}/champion.json`, {
    next: {
      revalidate: 86400
    }
  });
  const { data: championList } = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Object.entries<Champion>(championList)?.map(([id, cham]) => (
        <ChampionCard key={id} id={id} cham={cham} />
      ))}
    </div>
  );
};

export default championsPage;
