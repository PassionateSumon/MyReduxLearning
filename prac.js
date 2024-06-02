import { combineReducers, createStore } from "redux";
import cartReducer, { CART_ADD_ITEMS, CART_DEC_QUANTITY, CART_DELETE_ITEMS, CART_INC_QUANTITY } from "./cartReducer";
import wishListReducer, { WISHLIST_ADD_ITEMS, WISHLIST_REMOVE_ITEMS } from "./wishListReducer";
import productsReducer from "./productsReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer
})

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());
// console.log(store);

store.dispatch({
  type: CART_ADD_ITEMS,
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEMS,
  payload: { productId: 11, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEMS,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEMS,
  payload: { productId: 13, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEMS,
  payload: { productId: 14, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEMS,
  payload: { productId: 15, quantity: 1 },
});

store.dispatch({ type: CART_DELETE_ITEMS, payload: { productId: 11 } });
store.dispatch({ type: CART_DELETE_ITEMS, payload: { productId: 15 } });

store.dispatch({ type: CART_INC_QUANTITY, payload: { productId: 14 } });
store.dispatch({ type: CART_INC_QUANTITY, payload: { productId: 14 } });
store.dispatch({ type: CART_INC_QUANTITY, payload: { productId: 12 } });
store.dispatch({ type: CART_INC_QUANTITY, payload: { productId: 12 } });
store.dispatch({ type: CART_INC_QUANTITY, payload: { productId: 1 } });

store.dispatch({ type: CART_DEC_QUANTITY, payload: { productId: 1 } });
store.dispatch({ type: CART_DEC_QUANTITY, payload: { productId: 12 } });
store.dispatch({ type: CART_DEC_QUANTITY, payload: { productId: 14 } });
store.dispatch({ type: CART_DEC_QUANTITY, payload: { productId: 14 } });
store.dispatch({ type: CART_DEC_QUANTITY, payload: { productId: 14 } });

store.dispatch({ type: WISHLIST_ADD_ITEMS, payload: { productId: 1 } });
store.dispatch({ type: WISHLIST_ADD_ITEMS, payload: { productId: 12 } });
store.dispatch({ type: WISHLIST_ADD_ITEMS, payload: { productId: 21 } });
store.dispatch({ type: WISHLIST_ADD_ITEMS, payload: { productId: 14 } });

store.dispatch({ type: WISHLIST_REMOVE_ITEMS, payload: { productId: 12 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEMS, payload: { productId: 21 } });
