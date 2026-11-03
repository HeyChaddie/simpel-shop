import { getProducts } from "../../lib/api";
import Heroforside from "./components/Heroforside";

export default async function Forsideprodukter() {
  const products = await getProducts();

  return (
    <>
      <Heroforside />
      <section>
        <p style={{ marginLeft: "10%", padding: "20px" }}>Find dine nye yndlingsprodukter her!</p>
        <div
          style={{
            width: "80%",
            justifyContent: "center",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            padding: "30px",
          }}
        >
          {products.slice(0, 3).map((product) => (
            <article
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
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
