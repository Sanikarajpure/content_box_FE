import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import promiseMiddleware from "redux-promise";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk, promiseMiddleware, logger];
const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
  // composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
