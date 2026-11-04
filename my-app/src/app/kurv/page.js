import { getProducts } from "../../../lib/api";
import AddedToCart from "../components/AddedToCart";
import OrderTotal from "../components/OrderTotal";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export const dynamic = "force-dynamic";

export default async function Kurv({ searchParams }) {
  const products = await getProducts();
  const { items } = await searchParams;
  const cartItems = items ? items.split(",") : [];
  const cartProducts = cartItems.map((item) => {
    const productIdAndQuantity = item.split(":");
    const productId = Number(productIdAndQuantity[0]);
    const productQuantity = Number(productIdAndQuantity[1]);
    return { id: productId, quantity: productQuantity };
  });
  const filteredProducts = products.filter((product) =>
    cartProducts.some((cartProduct) => cartProduct.id === product.id),
  );
  const productsWithQuantity = filteredProducts.map((product) => {
    const cartProduct = cartProducts.find((item) => item.id === product.id);
    return { ...product, quantity: cartProduct ? cartProduct.quantity : 1 };
  });
  let subtotal = 0;
  productsWithQuantity.forEach((product) => {
    subtotal += product.price * product.quantity;
  });
  return (
    <>
      <Navigation />
      <section className="bg-[#F5F5F5] w-[80%] flex justify-evenly m-auto mt-20 mb-20 p-10">
        <article>
          <h2>Din kurv:</h2>
          {productsWithQuantity.map((product) => (
            <AddedToCart key={product.id} product={product} />
          ))}
        </article>
        <article>
          <div className="bg-black text-white justify-center text-center w-40 p-4 mt-8">
            <Link href="/produkter">Shop videre</Link>
          </div>
          <OrderTotal subtotal={subtotal} />
        </article>
      </section>
      <Footer />
    </>
  );
}
