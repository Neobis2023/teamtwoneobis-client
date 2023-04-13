import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    training: {},
    lecturers: [],
    createdLecturersId: [],
    questions: [],
  },
  reducers: {
    setTraining(state, action) {
      state.training = action.payload;
    },
    setLecturer(state, action) {
      state.lecturers = [...state.lecturers, action.payload ];
    },
    setQuestion(state, action) {
      state.questions = [...state.questions, action.payload]
    },
    setLecturerId(state, action) {
      state.createdLecturersId = [...state.createdLecturersId, action.payload]
    }

  },
});

export default adminSlice.reducer;
export const { setTraining, setLecturer, setQuestion, setLecturerId } =
  adminSlice.actions;
