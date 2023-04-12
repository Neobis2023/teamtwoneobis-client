import { combineReducers, createReducer,  configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';
import applyForSlice from './applyForSlice';
import searchSlice from './searchSlice';
import adminSlice from './adminSlice.';

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    applyFor: applyForSlice,
    searchValues: searchSlice,
    admin: adminSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})