import React from "react";
import { useData } from "../../context";
import { Card } from "../../common-components/Card";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { productInWish } = useData();
  const navigate = useNavigate();

  return (
    <>
      {!productInWish.length && (
        <section className="mt-16 mx-32 flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl mt-2 text-center">
              Your Wishlist is empty!
            </h1>
            <h3 className="text-xl mt-2 text-center">Add items to it now.</h3>
            <button
              className="text-lg bg-blue-600 p-2 rounded-md w-48 text-white mt-2"
              onClick={() => navigate("/")}>
              Go To Store
            </button>
          </div>
        </section>
      )}
      {productInWish.length && (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
          {productInWish.map((product) => (
            <Card type="Wishlist" product={product} key={product._id} />
          ))}
        </section>
      )}
    </>
  );
};
