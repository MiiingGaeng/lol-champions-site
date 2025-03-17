import { SQUARE_IMG_URL } from "@/constants/apiUrl";
import { Item } from "@/types/Items";
import Image from "next/image";

type ItemCardProps = {
  id: string;
  item: Pick<Item, "name" | "plaintext" | "gold" | "image">;
};

const ItemCard = ({ id, item }: ItemCardProps) => {
  return (
    <div
      key={id}
      className="h-60 border border-neutral-500 p-5 lg:p-10 rounded-lg flex items-center"
    >
      <div className="w-16 h-16 relative">
        <Image
          src={`${SQUARE_IMG_URL}/item/${item.image.full}`}
          alt={item.name}
          fill
          className="object-fill"
          sizes="(max-width: 768px) 128px, (max-width: 1200px) 128px"
        />
      </div>

      <div className="ml-5 w-3/4 xl:ml-10">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm">{item.plaintext}</p>
        <div className="mt-2">
          <p className={priceStyle}>구매가 : {item.gold.base}</p>
          <p className={priceStyle}>판매가 : {item.gold.sell}</p>
        </div>
      </div>
    </div>
  );
};

//style
const priceStyle = "text-sm text-yellow-700";

export default ItemCard;
