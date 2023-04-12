import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    training: {},
    lecturer: {}
  },
  reducers: {
    setTraining(state, action) {
      state.training = action.payload;
    },
    setLecturer(state, action) {
      state.lecturer = action.payload;
    },
  },
});

export default adminSlice.reducer;
export const { setTraining, setLecturer } =
  adminSlice.actions;
