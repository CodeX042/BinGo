import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionId: 0,
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    newTransaction: (state, action) => {
      state.transactionId = action.payload.id;
      state.transactions.push(action.payload);
    },
    updateTransaction: (state, action) => {
      const { id, status } = action.payload;
      const transaction = state.transactions.find(
        (transaction) => transaction.id === id
      );
      if (transaction) {
        transaction.status = status;
      }
    },
  },
});

export const { newTransaction, updateTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
