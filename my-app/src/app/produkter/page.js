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
    <div className="m-auto mt-[40px] mb-[50px]">
      <h1 className="mb-6 text-3xl font-bold text-center">Se vores produkter her!</h1>
      <section className="grid grid-cols-3 gap-6 m-auto">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};
