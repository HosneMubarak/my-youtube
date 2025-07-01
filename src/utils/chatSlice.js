import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.messages.splice(10, 1);
      state.messages.push(action.payload);
    },
  },
});
export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
