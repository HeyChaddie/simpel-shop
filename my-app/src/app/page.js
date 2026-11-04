import { getProducts } from "../../lib/api";
import Heroforside from "./components/Heroforside";
import ProductCarousel from "./components/ProductCarousel";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const instant = false;

export default async function Forsideprodukter() {
  const products = await getProducts();

  return (
    <>
      <Navigation />
      <Heroforside />
      <section>
        <p className="w-[80%] text-center mx-auto p-5 text-4xl font-bold">
          Scroll dig til dine nye yndlingsprodukter her!
        </p>
        <ProductCarousel products={products.slice(0, 10)} />
      </section>
      <Footer />
    </>
  );
}
