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
        <p
          style={{
            width: "80%",
            textAlign: "center",
            margin: "0 auto",
            padding: "20px",
            fontSize: "2.25rem",
            fontWeight: "bold",
          }}
        >
          Scroll dig til dine nye yndlingsprodukter her!
        </p>
        <ProductCarousel products={products.slice(0, 10)} />
      </section>
      <Footer />
    </>
  );
}
