// src/authUtils.js
import { toast } from "react-toastify";
import { authenticateWithInternetIdentity, iiLogout } from "./authUtils"; // Custom functions for II authentication and logout
import { logout, setUser } from "../Redux/slices/authSlice";
import { persistor } from "../Redux/store";

// Login function to be called anywhere in your app
export const login = async (dispatch) => {
  try {
    const { identity } = await authenticateWithInternetIdentity(); // Perform II authentication

    const userDetails = {
      principal: identity.getPrincipal().toString(), // Principal is the user's unique identifier
    };

    // Dispatch the user data to the store
    dispatch(setUser(userDetails));
  } catch (error) {
    toast.error(`Login failed: ${error.message}`);
  }
};

// Logout function to be called anywhere in your app
export const logoutUser = async (dispatch) => {
  try {
    await iiLogout(); // Invalidate II session

    // Clear only the persisted data of the user slice
    await persistor.flush(); // Ensures all actions are saved to storage
    await localStorage.removeItem("persist:auth"); // Replace 'auth' with the key used for auth slice
    await localStorage.removeItem("persist:trash"); // Replace 'auth' with the key used for trash slice

    dispatch(logout()); // Dispatch logout action to update Redux state
    toast.success("Successfully logged out");
  } catch (error) {
    toast.error(`Logout failed: ${error.message}`);
  }
};
