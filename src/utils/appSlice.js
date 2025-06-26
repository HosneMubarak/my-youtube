import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToggleOpen: true,
  },
  reducers: {
    changeToggle: (state) => {
      state.isToggleOpen = !state.isToggleOpen;
    },
    closeMenue: (state) => {
      state.isToggleOpen = false;
    },
  },
});

export const { changeToggle, closeMenue } = appSlice.actions;
export default appSlice.reducer;
