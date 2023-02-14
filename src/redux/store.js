import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import bookmarksReducer from "./bookmarksRedux";

const subreducers = {
  bookmarks: bookmarksReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
