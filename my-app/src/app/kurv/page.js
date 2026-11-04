import { getProducts } from "../../../lib/api";
import AddedToCart from "../components/AddedToCart";
import OrderTotal from "../components/OrderTotal";
import Link from "next/link";

export default async function Kurv() {
  const products = await getProducts();
  return (
    <section className="bg-[#F5F5F5] w-[80%] flex justify-evenly m-auto mt-40 p-10">
      <article>
        <h2>Din kurv:</h2>
        {products.map((product) => (
          <AddedToCart key={product.id} product={product} />
        ))}
      </article>
      <article>
        <div className="bg-black text-white justify-center text-center w-50 p-4 mt-8">
          <Link href="/produkter">Tilbage til produkter</Link>
        </div>
        <OrderTotal />
      </article>
    </section>
  );
}
