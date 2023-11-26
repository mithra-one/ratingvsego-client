import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.userReducer);

  return currentUser?.role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
