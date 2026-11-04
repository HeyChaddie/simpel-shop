"use client";

import { useState } from "react";
import Link from "next/link";
import { addToCart } from "../cartStorage";

export default function ProductCarousel({ products }) {
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(products.length > 3);
  const [addedProductId, setAddedProductId] = useState(null);

  function updateScrollButtons(viewport) {
    setCanScrollPrevious(viewport.scrollLeft > 1);
    setCanScrollNext(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1);
  }

  function scroll(direction, button) {
    const carousel = button.closest("[data-product-carousel]");
    const viewport = carousel?.querySelector("[data-product-carousel-viewport]");
    const firstProduct = viewport?.firstElementChild;
    if (!viewport || !firstProduct) return;

    const gap = Number.parseFloat(window.getComputedStyle(viewport).columnGap) || 0;
    const productWidth = firstProduct.getBoundingClientRect().width;

    viewport.scrollBy({
      left: direction * (productWidth + gap),
      behavior: "auto",
    });
  }

  function handleAddToCart(product) {
    addToCart(product);
    setAddedProductId(product.id);
  }

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 16px 24px",
      }}
      data-product-carousel
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <button
          type="button"
          onClick={(event) => scroll(-1, event.currentTarget)}
          disabled={!canScrollPrevious}
          aria-label="Vis forrige produkter"
          style={{
            ...buttonStyle,
            cursor: canScrollPrevious ? "pointer" : "not-allowed",
            opacity: canScrollPrevious ? 1 : 0.45,
          }}
        >
          ←
        </button>
        <button
          type="button"
          onClick={(event) => scroll(1, event.currentTarget)}
          disabled={!canScrollNext}
          aria-label="Vis næste produkter"
          style={{
            ...buttonStyle,
            cursor: canScrollNext ? "pointer" : "not-allowed",
            opacity: canScrollNext ? 1 : 0.45,
          }}
        >
          →
        </button>
      </div>
      <div
        role="region"
        aria-label="Produkter"
        tabIndex={0}
        data-product-carousel-viewport
        onScroll={(event) => updateScrollButtons(event.currentTarget)}
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {products.map((product) => (
          <article
            key={product.id}
            style={{
              boxSizing: "border-box",
              flex: "0 0 280px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              scrollSnapAlign: "start",
            }}
          >
            <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
            <h2 style={{ fontWeight: "bold" }}>{product.title}</h2>
            <p>{product.description}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <strong>{product.price} $</strong>
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                aria-label={`Læg ${product.title} i indkøbskurven`}
                title="Læg i indkøbskurven"
                style={cartButtonStyle}
              >
                <svg
                  aria-hidden="true"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </button>
            </div>
            {addedProductId === product.id && (
              <p role="status" style={{ margin: "8px 0 0", fontSize: "0.875rem" }}>
                Tilføjet til kurven. <Link href="/kurv">Se kurv</Link>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "42px",
  height: "42px",
  border: "1px solid #ccc",
  borderRadius: "50%",
  background: "white",
  cursor: "pointer",
  fontSize: "24px",
  lineHeight: 1,
};

const cartButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  flexShrink: 0,
  border: "1px solid #d1d5db",
  borderRadius: "50%",
  background: "#fff",
  color: "#111827",
  cursor: "pointer",
};
