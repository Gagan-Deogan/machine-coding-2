import React from "react";

const calculator = (acumulator, product) => {
  const { quantity, effectivePrice, price } = product;
  const totalPrice = acumulator.totalPrice + price * quantity;
  const totalEffectivePrice =
    acumulator.totalEffectivePrice + effectivePrice * quantity;
  const discount = (price - effectivePrice) * quantity;
  const totalDiscount = acumulator.totalDiscount + discount;
  return { totalEffectivePrice, totalDiscount, totalPrice };
};

export const Bill = ({ products }) => {
  const { totalEffectivePrice, totalDiscount, totalPrice } = products.reduce(
    calculator,
    {
      totalPrice: 0,
      totalEffectivePrice: 0,
      totalDiscount: 0,
    }
  );
  return (
    <section className="border w-full md:w-1/6 md:ml-4">
      <h2 className="text-lg text-gray-500 p-2">PRICE DETAILS</h2>
      <div className="mb-4 p-2 border-t-2 border-b-2">
        <div className="flex justify-between">
          <h3>Price({products.length} items)</h3>
          <h3>{totalPrice}</h3>
        </div>
        <div className="flex justify-between">
          <h3>Discount</h3>
          <h3>{totalDiscount}</h3>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center">
          Total Amount: {totalEffectivePrice}
        </h2>
      </div>
    </section>
  );
};
