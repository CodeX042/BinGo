import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionId: 0,
  transactions: [
    {
      id: 1,
      name: "Trash Pickup",
      date: "Nov 5, 2024",
      amount: "₦12.00",
      status: "Completed",
    },
    {
      id: 2,
      name: "Recycling Credit",
      date: "Nov 2, 2024",
      amount: "₦5.00",
      status: "Pending",
    },
  ],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    newTransaction: (state, action) => {
      state.transactions.push({ id: state.transactionId++, ...action.payload });
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
