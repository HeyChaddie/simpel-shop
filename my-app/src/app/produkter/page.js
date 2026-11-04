import { Suspense } from "react";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ProductsPage({ searchParams }) {
  return (
    <>
      <Navigation />

      <Suspense fallback={<p>Indlæser produkter...</p>}>
        <FetchData searchParams={searchParams} />
      </Suspense>

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
