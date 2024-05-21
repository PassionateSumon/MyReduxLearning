export function customCreateStore(reducer) {
  let state;
  const elements = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      elements.forEach((eleListener) => {
        eleListener();
      });
    },
    subscribe(listener) {
      elements.push(listener);
    },
  };
  store.dispatch("@@INIT");
  return store;
}
