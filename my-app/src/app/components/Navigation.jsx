import Link from "next/link";
import Form from "next/form";

import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="h-20 w-full bg-amber-300 flex flex-row justify-between items-center p-4">
      <Link href="/">Logo</Link>
      <div className="w-2/7 bg-blue-400 flex flex-row justify-between">
        <Link href="/">Forside</Link>
        <Link href="/produkter">Produkter</Link>
        <Form className="flex flex-row bg-amber-900">
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
