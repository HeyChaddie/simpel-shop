const OrderTotal = ({ subtotal }) => {
  return (
    <article className="bg-[#E2DDD6] w-100 p-4 mt-4">
      <h2>Subtotal: {subtotal} $</h2>
      <h2 className="mt-4">Levering: 6 $</h2>
      <h2 className="mt-4">Total: {subtotal + 6} $</h2>
      <div className="bg-black text-white justify-center text-center mt-6 p-4 cursor-pointer">Gå til betaling</div>
    </article>
  );
};

export default OrderTotal;
