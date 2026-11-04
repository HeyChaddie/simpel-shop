"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { LiaCartPlusSolid } from "react-icons/lia";
import { addToCart } from "../cart";

const ProductCard = ({ product }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const items = searchParams.get("items");

  const cartProductsId = items ? items.split(",") : [];

  const cartProducts = cartProductsId.map((item) => {
    const productIdAndQuantity = item.split(":");
    const productId = Number(productIdAndQuantity[0]);
    const productQuantity = Number(productIdAndQuantity[1]);
    return { id: productId, quantity: productQuantity };
  });

  const handleAddToCart = () => {
    const updatedCart = addToCart(cartProducts, product);
    const cartItems = updatedCart.map((item) => `${item.id}:${item.quantity}`).join(",");
    const params = new URLSearchParams(searchParams.toString());
    params.set("items", cartItems);
    router.replace(`/produkter?${params.toString()}`);
  };
  return (
    <article className="bg-[#E2DDD6] shadow-md max-w-80">
      <Image src={product.thumbnail} alt={product.title} width={100} height={100} className="w-full object-cover h-80" />
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <LiaCartPlusSolid onClick={handleAddToCart} className="text-3xl cursor-pointer shrink-0" />
        </div>
        <Link href={`/detaljeside?id=${product.id}`}>Se produkt</Link>
        <p>{product.price} $</p>
      </div>
    </article>
  );
};

export default ProductCard;
