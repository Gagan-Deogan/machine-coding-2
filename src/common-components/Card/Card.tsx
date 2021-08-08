import React from "react";

export const Card = ({ product, handleAddToCart, handleMoveToCart, type }) => {
  const {
    _id,
    name,
    description,
    imageURl,
    discount,
    effectivePrice,
    price,
    sizes,
    inCart,
  } = product;
  return (
    <article className="px-4">
      <img
        src={imageURl}
        alt={name}
        className="object-cover object-top h-80 w-full"
      />
      <h4 className="text-md text-gray-500">{name}</h4>
      <p className="text-gray-800 text-sm truncate ">{description}</p>
      <div className="flex items-center my-1">
        <h3 className="font-bold text-lg mr-2">₹{effectivePrice}</h3>
        <h4 className="text-sm text-gray-400 line-through mr-2">₹{price}</h4>
        <h4 className="text-sm font-bold text-green-400">{discount}%</h4>
      </div>
      <h3 className="text-gray-500">Size {sizes.join(", ")}</h3>
      {!inCart && type !== "Wishlist" && (
        <button
          className="bg-blue-600 text-white w-full py-2 rounded mb-4"
          onClick={() => handleAddToCart(_id)}>
          {!inCart && "Add To Cart"}
        </button>
      )}
      {inCart && type !== "Wishlist" && (
        <button
          className="bg-yellow-500 text-white w-full py-2 rounded mb-4"
          onClick={() => handleMoveToCart()}>
          {inCart && "Go To Cart"}
        </button>
      )}
    </article>
  );
};
