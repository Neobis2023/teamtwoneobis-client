import { createSlice } from "@reduxjs/toolkit";

const applyForSlice = createSlice({
  name: "applyFor",
  initialState: {
    eventName: "",
  },
  reducers: {
    setEventName(state, action) {
      state.eventName = action.payload;
    },
  },
});

export default applyForSlice.reducer;
export const { setEventName } =
  applyForSlice.actions;
