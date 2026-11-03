const CART_STORAGE_KEY = "simpel-shop-cart";

export function getCart() {
  const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
  if (!savedCart) return [];

  const cart = JSON.parse(savedCart);
  if (!Array.isArray(cart)) {
    throw new Error("Indkøbskurven har et ugyldigt format.");
  }

  return cart;
}

export function addToCart(product) {
  const cart = getCart();
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    });
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return cart;
}

export function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return cart;
}
