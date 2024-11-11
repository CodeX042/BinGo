// src/store/notificationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationId: 0,
  notifications: [],
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
      state.notifications.push({
        id: ++state.notificationId,
        message: action.payload,
      });
    },
  },
});

export const { markAllAsRead, addToNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
