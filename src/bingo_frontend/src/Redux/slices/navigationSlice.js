// src/store/navigationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebarNames: true,
  selectedSection: "upload",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setShowSidebarNames: (state, action) => {
      state.showSidebarNames = action.payload;
    },
    setSelectedSection: (state, action) => {
      state.selectedSection = action.payload;
    },
  },
});

export const { setShowSidebarNames, setSelectedSection } =
  navigationSlice.actions;
export default navigationSlice.reducer;
