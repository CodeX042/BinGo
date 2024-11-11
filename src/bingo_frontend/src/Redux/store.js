// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import navigationReducer from "./slices/navigationSlice";
import walletReducer from "./slices/walletSlice";
import transactionReducer from "./slices/transactionSlice";
import notificationReducer from "./slices/notificationSlice";
import trashReducer from "./slices/trashSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

// Step 1: Configure persist settings
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navigation",],
};

// Step 2: Combine reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  wallet: walletReducer,
  transaction: transactionReducer,
  notification: notificationReducer,
  trash: trashReducer,
});

// Step 3: Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Step 4: Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables serializable checks for redux-persist
    }),
});

// Step 5: Create and export the persistor
export const persistor = persistStore(store);
