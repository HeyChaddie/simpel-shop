import { getProducts } from "../../../lib/api";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default async function ProductsPage({ searchParams }) {
  const products = await getProducts();
  return (
    <>
      <Navigation />
      <FetchData searchParams={searchParams} />
      <Footer />
    </>
  );
}

const FetchData = async ({ searchParams }) => {
  const { query } = await searchParams;

  const url = query ? `https://dummyjson.com/products/search?q=${query}` : "https://dummyjson.com/products";

  const response = await fetch(url);

  const data = await response.json();

  console.log("API RESPONSE:", data);

  return (
    <section className="grid grid-cols-3 gap-6 m-auto mt-40">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
