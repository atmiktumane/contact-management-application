import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favouritesState",
  initialState: {
    favouriteList: [],
  },
  reducers: {
    add(state, actions) {
      const updatedList = state.favouriteList.concat(actions.payload);
      return { ...state, favouriteList: updatedList };
    },
    remove(state, actions) {
      const updatedList = state.favouriteList.filter(
        (item) => item.id !== actions.payload.id
      );
      return { ...state, favouriteList: updatedList };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;
