"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../cartStorage";

export default function CartContents() {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setCart(getCart());
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Indkøbskurven kunne ikke indlæses.",
      );
    }
  }, []);

  function handleRemove(productId) {
    try {
      setCart(removeFromCart(productId));
      setError("");
    } catch (removeError) {
      setError(
        removeError instanceof Error
          ? removeError.message
          : "Produktet kunne ikke fjernes fra kurven.",
      );
    }
  }

  return (
    <main style={{ width: "min(900px, 90%)", margin: "40px auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Indkøbskurv</h1>
      {error && <p role="alert">{error}</p>}
      {cart === null ? (
        <p>Indlæser kurven...</p>
      ) : cart.length === 0 ? (
        <p>Din indkøbskurv er tom.</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
            {cart.map((product) => (
              <article
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontWeight: "bold" }}>{product.title}</h2>
                  <p>
                    {product.quantity} × {product.price} $
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(product.id)}
                  aria-label={`Fjern ${product.title} fra kurven`}
                >
                  Fjern
                </button>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "20px", textAlign: "right", fontWeight: "bold" }}>
            I alt:{" "}
            {cart
              .reduce((total, product) => total + product.price * product.quantity, 0)
              .toFixed(2)}{" "}
            $
          </p>
        </>
      )}
      <p style={{ marginTop: "24px" }}>
        <Link href="/">← Fortsæt med at handle</Link>
      </p>
    </main>
  );
}
