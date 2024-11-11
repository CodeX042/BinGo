// src/store/walletSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletBalance: 2000,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    fundWallet: (state, action) => {
      state.walletBalance = state.walletBalance + Number(action.payload);
    },
    withdrawWallet: (state, action) => {
      state.walletBalance = state.walletBalance - Number(action.payload);
    },
  },
});

export const { fundWallet, withdrawWallet } = walletSlice.actions;
export default walletSlice.reducer;
