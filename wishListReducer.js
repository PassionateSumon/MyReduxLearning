// Action Types
const WISHLIST_ADD_ITEMS = "wishList/addItem";
const WISHLIST_REMOVE_ITEMS = "wishList/removeItem";

// Action creator
export function addWishListItem(productId, quantity = 1) {
  return { type: WISHLIST_ADD_ITEMS, payload: { productId } };
}
export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVE_ITEMS, payload: { productId } };
}

// Reducer
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEMS:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEMS:
      return state.filter((cb) => {
        return cb.productId !== action.payload.productId;
      });
  }
  return state;
}
