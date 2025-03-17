import { Item } from "@/types/Items";
import ItemCard from "@/components/ItemCard";
import { getItemData } from "@/services/getData";

const itemsPage = async () => {
  const itemData = await getItemData();
  const itemList = Object.entries<Item>(itemData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {itemList.map(([id, item]) => (
        <ItemCard key={id} id={id} item={item} />
      ))}
    </div>
  );
};

export default itemsPage;
