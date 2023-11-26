import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

let store = createStore(
  rootReducer,
  //  persistedState,
  compose(
    applyMiddleware(thunk)
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => {
  localStorage.setItem(
    "user",
    JSON.stringify(store.getState().userReducer.currentUser)
  );
});

export default store;
