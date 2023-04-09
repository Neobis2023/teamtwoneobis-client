import { combineReducers, createReducer,  configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';
import applyForSlice from './applyForSlice';
import searchSlice from './searchSlice';

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    applyFor: applyForSlice,
    searchValues: searchSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})