import { getProducts } from "../../lib/api";
import Heroforside from "./components/Heroforside";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Firevarer from "./components/Firevarer";

export const instant = false;

export default async function Forsideprodukter() {
  const products = await getProducts();

  return (
    <>
      <Navigation />
      <Heroforside />
      <section className="bg-[#DFCAB5]">
        <p className="w-[80%] text-center mx-auto p-5 text-4xl font-bold">
          Scroll dig til dine nye yndlingsprodukter her!
        </p>
        <Firevarer />
      </section>
      <Footer />
    </>
  );
}
