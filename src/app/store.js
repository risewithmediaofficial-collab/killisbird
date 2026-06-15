import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Allows non-serializable values like refs if needed
    }),
  devTools: import.meta.env.DEV,
});
