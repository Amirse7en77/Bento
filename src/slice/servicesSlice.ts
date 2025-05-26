// src/features/drawer/drawerSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface DrawerState { // Renamed interface
  isOpen: boolean;
}

const initialState: DrawerState = {
  isOpen: false,
};

export const drawerSlice = createSlice({ // Renamed slice
  name: 'drawer', // Important: This is the name you'll use in your store and selector
  initialState,
  reducers: {
    toggleDrawer: (state) => { // Renamed action
      state.isOpen = !state.isOpen;
    },
    openDrawer: (state) => { // Renamed action
      state.isOpen = true;
    },
    closeDrawer: (state) => { // Renamed action
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDrawer, openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;