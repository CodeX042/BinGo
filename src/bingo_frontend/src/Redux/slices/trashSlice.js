// src/store/trashSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trashAmount: 0,
  trashWeight: 0,
};

const trashSlice = createSlice({
  name: "trash",
  initialState,
  reducers: {
    setTrash: (state, action) => {
      state.trashAmount = action.payload.amount;
      state.trashWeight = action.payload.weight;
    },
  },
});

export const { setTrash } = trashSlice.actions;
export default trashSlice.reducer;
