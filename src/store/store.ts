// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './../slice/servicesSlice'; // Import the renamed reducer

export const store = configureStore({
  reducer: {
    drawer: drawerReducer, // The key 'drawer' here matches the name you use in useSelector
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {drawer: DrawerState} // Type now reflects 'drawer'
export type AppDispatch = typeof store.dispatch;