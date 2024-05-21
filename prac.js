import { createStore } from "redux";

const postCount = document.querySelector(".post-count");
const incBttn = document.querySelector(".btn1");
const decBttn = document.querySelector(".btn2");

const initialState = {
  post: 1,
  name: "Sumon Mitra",
  age: 22,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/increment":
      return { ...state, post: state.post + 1 };
    case "post/decrement":
      return { ...state, post: state.post - 1 };
    case "post/incrementBy":
      return { ...state, post: state.post + action.payload };
  }
  return state;
}

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
  postCount.innerText = store.getState().post;
});

postCount.innerText = store.getState().post;

store.dispatch({ type: "post/increment" });
store.dispatch({ type: "post/decrement" });
store.dispatch({ type: "post/incrementBy", payload: 7 });

incBttn.addEventListener("click", () => {
  store.dispatch({ type: "post/incrementBy", payload: 7 });
});
decBttn.addEventListener("click", () => {
    store.dispatch({ type: "post/decrement"});
  });
