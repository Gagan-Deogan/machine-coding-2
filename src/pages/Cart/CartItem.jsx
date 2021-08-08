import React from "react";
export const CartItem = ({
  product,
  handleRemoveFormCart,
  decreaseProcduct,
  increaseProcduct,
  handleSaveForLater,
}) => {
  const {
    imageURl,
    name,
    description,
    effectivePrice,
    price,
    discount,
    _id,
    quantity,
    inWish,
  } = product;

  return (
    <div className="border flex p-4 mb-2" key={_id}>
      <img
        src={imageURl}
        alt={name}
        className="object-cover object-top h-full w-28 "
      />
      <div className="flex-col ml-8">
        <h2>{name}</h2>
        <p className="text-gray-400">{description}</p>
        <h3 className="text-lg">
          <span className="font-bold mr-4">₹{effectivePrice}</span>
          <span className="line-through text-gray-400 mr-4 text-md">
            {" ₹" + price + " "}
          </span>
          <span className="text-green-500"> {discount}%Off</span>
        </h3>
        <div className="flex my-4">
          <button
            className="border rounded-full w-8 h-8"
            onClick={() => decreaseProcduct(_id, quantity)}>
            <span>-</span>
          </button>
          <h3 className="ml-2 text-lg">{quantity}</h3>
          <button
            className="border ml-2 rounded-full w-8 h-8"
            onClick={() => increaseProcduct(_id, quantity)}>
            +
          </button>
        </div>
        <div className="flex">
          <button
            className="bg-yellow-500 text-white p-2 rounded-sm mr-4"
            onClick={() => handleRemoveFormCart(_id)}>
            Remove From Cart
          </button>
          {!inWish && (
            <button
              className="bg-red-500 text-white p-2 rounded-sm"
              onClick={() => handleSaveForLater(_id)}>
              Save For Later
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
