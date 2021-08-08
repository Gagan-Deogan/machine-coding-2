import { Actions } from "../actions/Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.TOOGLE_PRODUCT_FORM_CART:
      return state.map((product) =>
        product._id === action.payload
          ? {
              ...product,
              inCart: !product.inCart,
              quantity: !product.inCart ? 1 : 0,
            }
          : product
      );
    case Actions.CHNAGE_QUANINTY:
      return state.map((product) =>
        product._id === action.payload.productId
          ? {
              ...product,
              quantity: action.payload.quantity,
            }
          : product
      );
    case Actions.SAVE_FOR_LATER:
      return state.map((product) =>
        product._id === action.payload
          ? {
              ...product,
              inCart: !product.inCart,
              quantity: !product.inCart ? 1 : 0,
              inWish: !product.inWish,
            }
          : product
      );
  }
};
