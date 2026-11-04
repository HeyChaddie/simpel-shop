const OrderTotal = () => {
  return (
    <article className="bg-[#E2DDD6] w-100 p-4 mt-4">
      <h2>Subtotal: 100 $</h2>
      <h2 className="mt-4">Levering: 9 $</h2>
      <h2 className="mt-4">Total: 109 $</h2>
      <div className="bg-black text-white justify-center text-center mt-6 p-4 cursor-pointer">Gå til betaling</div>
    </article>
  );
};

export default OrderTotal;
