import { Item } from "@/types/Items";
import { dataApiUrl } from "../api/apiUrl";
import ItemCard from "@/components/ItemCard";

const itemsPage = async () => {
  const response = await fetch(`${dataApiUrl}/item.json`, {
    cache: "force-cache"
  });
  const { data: itemList } = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Object.entries<Item>(itemList)?.map(([id, item]) => (
        <ItemCard key={id} id={id} item={item} />
      ))}
    </div>
  );
};

export default itemsPage;
