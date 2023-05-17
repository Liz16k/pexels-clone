import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photosSlice";

const loadFromLocalStorage = (key) => {
  const serializedState = localStorage.getItem(key);
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};

const saveToLocalStorage = (key, state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(key, serializedState);
};

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  saveToLocalStorage("reduxState", store.getState());
  return result;
};

const persistedState = loadFromLocalStorage("reduxState");

const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
  middleware: [localStorageMiddleware],
  preloadedState: persistedState,
});

export default store;
