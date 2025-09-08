import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: { value: "Hello from Redux Sample!" },
  reducers: {
    updateSampleValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateSampleValue } = sampleSlice.actions;
export default sampleSlice.reducer;
