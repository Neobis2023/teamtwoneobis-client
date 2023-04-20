import { combineReducers, createReducer,  configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';
import applyForSlice from './applyForSlice';
import searchSlice from './searchSlice';
import adminSlice from './adminSlice.';
import questionnaireSlice from './questionnaireSlice';
import {questionnaireApi} from './apis/questionnaire-api';
import {userApi} from './apis/user-api';

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    applyFor: applyForSlice,
    searchValues: searchSlice,
    admin: adminSlice,
    questionnaire: questionnaireSlice,
    [questionnaireApi.reducerPath]: questionnaireApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(questionnaireApi.middleware, userApi.middleware),
})
