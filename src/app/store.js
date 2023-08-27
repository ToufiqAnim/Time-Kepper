import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cart/cartSlice";
import { watchesApi } from "../features/watches/watchesApi";

export const store = configureStore({
  reducer: {
    [watchesApi.reducerPath]: watchesApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(watchesApi.middleware),
});
