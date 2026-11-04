export function addToCart(cart, product) {
  let updatedCart = cart;
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  } else {
    updatedCart = [
      ...cart,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      },
    ];
  }

  return updatedCart;
}

export function removeFromCart(cart, productId) {
  const updatedCart = cart.filter((item) => item.id !== productId);

  return updatedCart;
}
