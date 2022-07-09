import { combineReducers, createStore } from "redux";

import { bookingReducer } from "./Reducer/bookingReducer";

const rootReducer = combineReducers({
  bookingReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
