import React from "react";
import { Route } from "react-router-dom";
import Login from "../Auth/Login";

const AuthRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Login />} />
    </>
  );
};

export default AuthRoutes;
