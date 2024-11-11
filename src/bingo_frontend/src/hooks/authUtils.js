import { AuthClient } from "@dfinity/auth-client";
import { toast } from "react-toastify";

let authClient;

// Initialize the AuthClient
export const initAuthClient = async () => {
  authClient = await AuthClient.create();
  return authClient;
};

export const authenticateWithInternetIdentity = async () => {
  try {
    // Initialize the AuthClient if not already done
    await initAuthClient();

    // Check if the user is already authenticated
    if (await authClient.isAuthenticated()) {
      const identity = authClient.getIdentity();
      const principal = identity.getPrincipal().toString();
      return { identity, principal };
    }

    // Prompt user to authenticate with Internet Identity
    return new Promise((resolve, reject) => {
      authClient.login({
        onSuccess: () => {
          const identity = authClient.getIdentity();
          const principal = identity.getPrincipal().toString();
          toast.success("Successfully authenticated with Internet Identity!");
          resolve({ identity, principal });
        },
        onError: (error) => {
          toast.error("Authentication failed: " + error.message);
          reject(new Error("Authentication with Internet Identity failed."));
        },
      });
    });
  } catch (error) {
    toast.error("Authentication failed: " + error.message);
    throw new Error("Authentication with Internet Identity failed.");
  }
};

export const iiLogout = async () => {
  if (!authClient) {
    await initAuthClient();
  }
  await authClient.logout();
};
