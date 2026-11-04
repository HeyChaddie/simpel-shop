import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";

const AddedToCart = ({ product }) => {
  return (
    <article className="bg-[#E2DDD6] flex justify-between gap-4 items-center p-4 mt-2">
      <div className="flex gap-4 items-center">
        <Image src={product.thumbnail} alt={product.title} width={100} height={100} className="w-fit object-cover h-20" />
        <div>
          <h2>{product.title}</h2>
          <p>{product.price} $</p>
          <div className="flex gap-2 items-center">
            <p>+-</p>
            <IoTrashOutline className="mt-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default AddedToCart;
