import Link from "next/link";
import Form from "next/form";
import Image from "next/image";

import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="h-20 w-full bg-[#A46323] flex flex-row justify-between items-center p-4">
      <Link href="/" aria-label="Mavelle – forsiden">
        <Image src="/logo1.png" alt="Mavelle – Your world, your style" width={192} height={128} className="h-16 w-auto object-contain" />
      </Link>
      <div className="w-2/7 flex flex-row justify-between">
        <Link href="/">Forside</Link>
        <Link href="/produkter">Produkter</Link>
        <Form className="flex flex-row bg-[#DFCAB5]">
          <button type="submit" href="/produkter">
            <FaSearch />
          </button>
          <input type="search" name="query" placeholder="search product"></input>
        </Form>
      </div>
      <Link href="/">
        <FaShoppingBasket size={30} />
      </Link>
    </div>
  );
};

export default Navigation;
