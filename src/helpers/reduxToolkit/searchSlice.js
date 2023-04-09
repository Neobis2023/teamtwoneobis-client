import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "searchValues",
    initialState: {
      searchValue: "",
      category: ""
    },
    reducers: {
      setSearchValue(state, action) {
        state.searchValue = action.payload;
      },
      setCategoryRdx(state, action) {
        state.category = action.payload;
      }
    },
  });
  
  export default searchSlice.reducer;
  export const { setSearchValue, setCategoryRdx } =
    searchSlice.actions;