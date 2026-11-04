"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Form from "next/form";
import Image from "next/image";

import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  const searchParams = useSearchParams();
  const items = searchParams.get("items");
  const cartItems = items ? items.split(",") : [];

  let cartAmount = 0;
  cartItems.forEach((item) => {
    const productIdAndQuantity = item.split(":");
    const productQuantity = Number(productIdAndQuantity[1]);
    cartAmount += productQuantity;
  });
  return (
    <div className="h-20 w-full bg-[#A46323] flex flex-row justify-between items-center p-4">
      <Link href="/" aria-label="Mavelle – forsiden">
        <Image src="/logo1.png" alt="Mavelle – Your world, your style" width={192} height={128} className="h-16 w-auto object-contain" />
      </Link>
      <div className="w-2/7 flex flex-row justify-between">
        <Link href="/">Forside</Link>
        <Link href="/produkter">Produkter</Link>
        <Form action="/produkter" className="flex flex-row bg-[#DFCAB5]">
          <button type="submit">
            <FaSearch />
          </button>
          <input type="search" name="query" placeholder="search product"></input>
        </Form>
      </div>
      <Link href={`/kurv?${searchParams.toString()}`}>
        <FaShoppingBasket size={30} />
        <span>{cartAmount}</span>
      </Link>
    </div>
  );
};

export default Navigation;
