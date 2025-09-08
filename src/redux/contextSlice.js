import { createSlice } from "@reduxjs/toolkit";

const contextSlice = createSlice({
  name: "context",
  initialState: { value: "Hello from Redux Context!" },
  reducers: {
    updateContextValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateContextValue } = contextSlice.actions;
export default contextSlice.reducer;
