export const CART_ADD_ITEMS = "cart/addItem";
export const CART_DELETE_ITEMS = "cart/deleteItem";
export const CART_INC_QUANTITY = "cart/increaseQuant";
export const CART_DEC_QUANTITY = "cart/decreaseQuant";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEMS:
      return [...state, action.payload];
    case CART_DELETE_ITEMS:
      return state.filter((cb) => {
        return cb.productId !== action.payload.productId;
      });
    case CART_INC_QUANTITY:
      return state.map((item) => {
        return item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    case CART_DEC_QUANTITY:
      return state.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((items) => items.quantity > 0);
  }
  return state;
}
