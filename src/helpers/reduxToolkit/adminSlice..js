import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    training: {},
    lecturer: {},
    questions: [],
  },
  reducers: {
    setTraining(state, action) {
      state.training = action.payload;
    },
    setLecturer(state, action) {
      state.lecturer = action.payload;
    },
    setQuestion(state, action) {
      state.questions = [...state.questions, action.payload]
    }

  },
});

export default adminSlice.reducer;
export const { setTraining, setLecturer, setQuestion } =
  adminSlice.actions;
