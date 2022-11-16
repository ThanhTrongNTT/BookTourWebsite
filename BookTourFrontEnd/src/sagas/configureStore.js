import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer } from "./reducers";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "list-tour",
  storage,
  whitelist: ["tour"],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  // reducer: reducer,

  reducer: persistedReducer,
  // middleware: (gDM) => gDM().concat(sagaMiddleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
