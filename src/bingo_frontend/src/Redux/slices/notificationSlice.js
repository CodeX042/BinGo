// src/store/notificationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationId: 0,
  notifications: [
    { id: 1, message: "New pickup request available!" },
    { id: 2, message: "Your trash upload was successful." },
    { id: 3, message: "Your request has been confirmed!" },
  ],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    markAllAsRead: (state) => {
      state.notifications = [];
      state.notificationId = 0;
    },
    addToNotifications: (state, action) => {
      state.notifications = state.notifications.push({
        id: state.notificationId++,
        message: action.payload,
      });
    },
  },
});

export const { markAllAsRead, addToNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
