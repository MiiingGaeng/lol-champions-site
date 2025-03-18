import { Item } from "@/types/Items";
import ItemCard from "@/components/ItemCard";
import { getItemData } from "@/services/getData";
import Image from "next/image";

const itemsPage = async () => {
  const itemData = await getItemData();
  const itemList = Object.entries<Item>(itemData);

  return (
    <main className="w-screen grid">
      <div className="w-full h-[calc(100vh-64px)] fixed z-0">
        <Image
          src={"/images/item-background.jpg"}
          alt="item-bg"
          fill
          className="object-cover"
        />
      </div>

      <section className="w-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-10 p-5">
        {itemList.map(([id, item]) => (
          <ItemCard key={id} id={id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default itemsPage;
