import { getProducts } from "../../../lib/api";
import ProductCard from "./ProductCard";

const Firevarer = async () => {
  const products = await getProducts();

  return (
    <section className="flex flex-row justify-center gap-10 p-5">
      {products
        .toSorted(() => Math.random() - 0.5)
        .slice(0, 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </section>
  );
};

export default Firevarer;
