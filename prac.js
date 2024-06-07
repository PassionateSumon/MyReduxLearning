import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import wishListReducer, { addWishListItem, removeWishListItem } from "./wishListReducer";
import productsReducer from "./productsReducer";
import {addCartItem, removeCartItem, cartIncreaseQuantity, cartDecreaseQuantity} from "./cartReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer
})

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(addCartItem(1));
store.dispatch(addCartItem(11));
store.dispatch(addCartItem(12));
store.dispatch(addCartItem(13));
store.dispatch(addCartItem(14));
store.dispatch(addCartItem(15));

store.dispatch(removeCartItem(11));
store.dispatch(removeCartItem(15));

store.dispatch(cartIncreaseQuantity(14));
store.dispatch(cartIncreaseQuantity(14));
store.dispatch(cartIncreaseQuantity(12));
store.dispatch(cartIncreaseQuantity(12));
store.dispatch(cartIncreaseQuantity(1));

store.dispatch(cartDecreaseQuantity(1));
store.dispatch(cartDecreaseQuantity(12));
store.dispatch(cartDecreaseQuantity(14));
store.dispatch(cartDecreaseQuantity(14));
store.dispatch(cartDecreaseQuantity(14));

store.dispatch(addWishListItem(1));
store.dispatch(addWishListItem(12));
store.dispatch(addWishListItem(21));
store.dispatch(addWishListItem(14));

store.dispatch(removeWishListItem(12));
store.dispatch(removeWishListItem(21));
