import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  lastSavedQuestionnaireId: null,
}

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    saveQuestionnaireID: (state, action) => {
      state.lastSavedQuestionnaireId = action.payload;
    }
  }
})

export const { saveQuestionnaireID } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
