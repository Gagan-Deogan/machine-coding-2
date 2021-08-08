import { Actions } from "../../actions/Actions";
import { Bill } from "./Bill";
import { CartItem } from "./CartItem";
import React from "react";
import { useData } from "../../context";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { productInCart, dispatch } = useData();
  const navigate = useNavigate();
  const handleRemoveFormCart = (productId) => {
    dispatch({ type: Actions.TOOGLE_PRODUCT_FORM_CART, payload: productId });
  };

  const increaseProcduct = (productId, quantity) => {
    const increasedQuantity = quantity + 1;
    dispatch({
      type: Actions.CHNAGE_QUANINTY,
      payload: { productId, quantity: increasedQuantity },
    });
  };

  const decreaseProcduct = (productId, quantity) => {
    if (quantity === 1) return;
    const decreasedQuantity = quantity - 1;
    dispatch({
      type: Actions.CHNAGE_QUANINTY,
      payload: { productId, quantity: decreasedQuantity },
    });
  };

  const handleSaveForLater = (productId) => {
    dispatch({ type: Actions.SAVE_FOR_LATER, payload: productId });
  };

  return (
    <>
      <section className="mt-4 mx-8  flex flex-col md:mx-32 md:mt-16 md:flex-row justify-center items-start">
        {!productInCart.length && (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl mt-2 text-center">Your cart is empty!</h1>
            <h3 className="text-xl mt-2 text-center">Add items to it now.</h3>
            <button
              className="text-lg bg-blue-600 p-2 rounded-md w-48 text-white mt-2"
              onClick={() => navigate("/")}>
              Go To Store
            </button>
          </div>
        )}
        {!!productInCart.length && (
          <>
            <section className="w-full md:w-4/6">
              {productInCart.map((product) => (
                <CartItem
                  product={product}
                  key={product._id}
                  handleRemoveFormCart={handleRemoveFormCart}
                  decreaseProcduct={decreaseProcduct}
                  increaseProcduct={increaseProcduct}
                  handleSaveForLater={handleSaveForLater}
                />
              ))}
            </section>
            <Bill products={productInCart} />
          </>
        )}
      </section>
    </>
  );
};
