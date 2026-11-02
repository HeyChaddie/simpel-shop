export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Kunne ikke hente produkter");
  }

  const data = await response.json();

  return data.products;
}
