// Action Types
const CART_ADD_ITEMS = "cart/addItem";
const CART_DELETE_ITEMS = "cart/deleteItem";
const CART_INC_QUANTITY = "cart/increaseQuant";
const CART_DEC_QUANTITY = "cart/decreaseQuant";

// Action creators
export function addCartItem(productId, quantity=1) {
  return {
    type: CART_ADD_ITEMS,
    payload: { productId, quantity },
  }
}
export function removeCartItem(productId) {
  return { type: CART_DELETE_ITEMS, payload: { productId } }
}
export function cartIncreaseQuantity(productId) {
  return { type: CART_INC_QUANTITY, payload: { productId } }
}
export function cartDecreaseQuantity(productId) {
  return { type: CART_DEC_QUANTITY, payload: { productId } }
}

// Reducer
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
