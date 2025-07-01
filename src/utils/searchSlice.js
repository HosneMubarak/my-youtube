import { createSlice } from "@reduxjs/toolkit";
import reducer from "./appSlice";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSearchCache: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});
export const { addSearchCache } = searchSlice.actions;
export default searchSlice.reducer;
