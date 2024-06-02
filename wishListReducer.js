export const WISHLIST_ADD_ITEMS = "wishList/addItem";
export const WISHLIST_REMOVE_ITEMS = "wishList/removeItem";

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
