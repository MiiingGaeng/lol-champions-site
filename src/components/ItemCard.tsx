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
      className="bg-stone-900 bg-opacity-80 p-5 lg:p-10 rounded-lg flex flex-col items-center"
    >
      <div className="w-16 h-16 relative mb-3">
        <Image
          src={`${SQUARE_IMG_URL}/item/${item.image.full}`}
          alt={item.name}
          fill
          className="object-fill"
          sizes="(max-width: 768px) 128px, (max-width: 1200px) 128px"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-base font-bold">{item.name}</h3>
        <p className="text-xs">{item.plaintext}</p>
        <div className="mt-2">
          <p className={priceStyle}>구매가 : {item.gold.base}</p>
          <p className={priceStyle}>판매가 : {item.gold.sell}</p>
        </div>
      </div>
    </div>
  );
};

//style
const priceStyle = "text-xs text-yellow-700";

export default ItemCard;
