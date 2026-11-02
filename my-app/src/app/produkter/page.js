import { getProducts } from "../../../lib/api";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "30px" }}>
      <h1>Mine produkter</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />

            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <strong>{product.price} $</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
