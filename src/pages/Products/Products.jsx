import React from "react";
import { Card } from "../../common-components/Card";
import { useData } from "../../context";
import { useNavigate } from "react-router";
export const Products = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    dispatch({ type: "TOOGLE_PRODUCT_FORM_CART", payload: productId });
  };

  const handleMoveToCart = () => {
    navigate("/cart");
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
      {state.map((product) => (
        <Card
          product={product}
          key={product._id}
          handleAddToCart={handleAddToCart}
          handleMoveToCart={handleMoveToCart}
        />
      ))}
    </section>
  );
};
