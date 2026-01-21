import { configureStore } from "@reduxjs/toolkit";
import { visitApi } from "./api/visitApi";

export const store = configureStore({
  reducer: {
    [visitApi.reducerPath]: visitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(visitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
