import { createStore } from "redux";
import { productsList } from "./productsList";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const CART_ADD_ITEMS = "cart/addItem";
const CART_DELETE_ITEMS = "cart/deleteItem";
const CART_INC_QUANTITY = "cart/increaseQuant";
const CART_DEC_QUANTITY = "cart/decreaseQuant";

const WISHLIST_ADD_ITEMS = "wishList/addItem";
const WISHLIST_REMOVE_ITEMS = "wishList/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEMS:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_DELETE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((cb) => {
          return cb.productId !== action.payload.productId;
        }),
      };
    case CART_INC_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case CART_DEC_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.productId === action.payload.productId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((items) => items.quantity > 0),
      };

    case WISHLIST_ADD_ITEMS:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case WISHLIST_REMOVE_ITEMS:
      return {
        ...state,
        wishList: state.wishList.filter((cb) => {
          // console.log(cb.productId);
          console.log(action.payload.productId);
          return cb.productId !== action.payload.productId;
        }),
      };
  }
  return state;
}

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());

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
