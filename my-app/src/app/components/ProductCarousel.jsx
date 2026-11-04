"use client";

import { useState } from "react";
import Link from "next/link";
import { addToCart } from "../cart";

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
    <div className="box-border w-full max-w-[960px] mx-auto px-4 pb-6" data-product-carousel>
      {/* Navigationsknapper */}
      <div className="flex justify-end gap-2.5 mb-4">
        <button
          type="button"
          onClick={(event) => scroll(-1, event.currentTarget)}
          disabled={!canScrollPrevious}
          aria-label="Vis forrige produkter"
          className={`w-[42px] h-[42px] border border-[#ccc] rounded-full bg-white text-2xl leading-none ${
            canScrollPrevious ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-[0.45]"
          }`}
        >
          ←
        </button>

        <button
          type="button"
          onClick={(event) => scroll(1, event.currentTarget)}
          disabled={!canScrollNext}
          aria-label="Vis næste produkter"
          className={`w-[42px] h-[42px] border border-[#ccc] rounded-full bg-white text-2xl leading-none ${
            canScrollNext ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-[0.45]"
          }`}
        >
          →
        </button>
      </div>

      {/* Produkt-carousel */}
      <div
        role="region"
        aria-label="Produkter"
        tabIndex={0}
        data-product-carousel-viewport
        onScroll={(event) => updateScrollButtons(event.currentTarget)}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory"
      >
        {products.map((product) => (
          <article
            key={product.id}
            className="box-border flex-[0_0_280px] p-[15px] border border-[#ddd] rounded-[10px] snap-start"
          >
            {/* Produktbillede */}
            <img src={product.thumbnail} alt={product.title} className="w-full" />

            {/* Produktinformation */}
            <h2 className="font-bold">{product.title}</h2>

            <p>{product.description}</p>

            {/* Pris og indkøbskurv */}
            <div className="flex items-center justify-between gap-3 mt-4">
              <strong>{product.price} $</strong>
              <Link href={`/detaljeside?id=${product.id}`}>Se produkt</Link>
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                aria-label={`Læg ${product.title} i indkøbskurven`}
                title="Læg i indkøbskurven"
                className="inline-flex items-center justify-center w-[38px] h-[38px] shrink-0 border border-gray-300 rounded-full bg-white text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
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

            {/* Bekræftelse ved tilføjelse */}
            {addedProductId === product.id && (
              <p role="status" className="mt-2 text-sm">
                Tilføjet til kurven.{" "}
                <Link href="/kurv" className="text-blue-600 underline hover:text-blue-800">
                  Se kurv
                </Link>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
