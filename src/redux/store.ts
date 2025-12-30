import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice"
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage'
import cartReducer from "./features/cart/cartSlice"  // 
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, 
    auth: persistedReducer,
    cart: cartReducer, // ✅ Add cart reducer here
  },
  middleware: (getDfaultMiddlewares) => getDfaultMiddlewares(
    {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }
  ).concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)