import { getProducts } from "../../../lib/api";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <Navigation />
      <section className="grid grid-cols-3 gap-6 m-auto mt-40">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Footer />
    </>
  );
}
