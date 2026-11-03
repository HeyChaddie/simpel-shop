import Image from "next/image";
import { LiaCartPlusSolid } from "react-icons/lia";

const ProductCard = ({ product }) => {
  return (
    <article className="bg-[#E2DDD6] shadow-md max-w-80">
      <Image src={product.thumbnail} alt={product.title} width={100} height={100} className="w-full object-cover h-80" />
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <LiaCartPlusSolid className="text-3xl cursor-pointer shrink-0" />
        </div>
        <p>{product.price} $</p>
      </div>
    </article>
  );
};

export default ProductCard;
