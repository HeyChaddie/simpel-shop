// import { getProducts } from "../../../lib/api";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  // const products = await getProducts();
  const dummyProduct = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    thumbnail: "/dummy-img.jpg",
  };
  return (
    <section className="grid grid-cols-3 gap-6 m-auto">
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
    </section>
  );
}
