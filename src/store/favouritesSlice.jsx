import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "counter",
  initialState: {
    favouritesList: [],
  },
  reducers: {
    add(state, actions) {
      const updatedList = state.favouritesList.concat(actions.payload);
      return { ...state, favouritesList: updatedList };
    },
    remove(state, actions) {
      const updatedList = state.favouritesList.filter(
        (item) => item.id !== actions.payload.id
      );
      return { ...state, favouritesList: updatedList };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;
