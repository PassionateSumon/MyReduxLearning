export function customCreateStore(reducer) {
  let state;
  const callbacks = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach((eleListener) => {
        eleListener();
      });
    },
    subscribe(listener) {
      callbacks.push(listener);
      return function () {
        const listenerIndex = callbacks.findIndex((cb) => cb === listener);
        callbacks.splice(listenerIndex, 1)
      };
    },
  };
  store.dispatch("@@INIT");
  return store;
}
