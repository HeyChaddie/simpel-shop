// import { getProducts } from "../../../lib/api";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  // const products = await getProducts();
  const dummyProducts = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      thumbnail: "/dummy-img.jpg",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 9.99,
      thumbnail: "/dummy-img.jpg",
    },
    {
      id: 3,
      title: "Powder Canister",
      price: 9.99,
      thumbnail: "/dummy-img.jpg",
    },
    {
      id: 4,
      title: "Red Lipstick",
      price: 9.99,
      thumbnail: "/dummy-img.jpg",
    },
  ];
  return (
    <section className="grid grid-cols-4 gap-6 m-auto">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
