import React from "react";
import { Route } from "react-router-dom";
import Home from "../Private/Home";

const PrivateRoutes = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />
    </>
  );
};

export default PrivateRoutes;
