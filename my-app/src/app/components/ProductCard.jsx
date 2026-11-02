import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <article className="bg-[#E2DDD6] rounded-2xl">
      <Image src={product.thumbnail} alt="Image" width={100} height={100} className="w-full object-cover rounded-tr-2xl rounded-tl-2xl h-80" />
      <div className="flex justify-between items-center p-4 mt-4">
        <div>
          <h2 className="text-lg font-bold flex-wrap">{product.title}</h2>
          <p>{product.price} $</p>
        </div>
        <BsCartPlus className="text-2xl cursor-pointer" />
      </div>
    </article>
  );
};

export default ProductCard;
