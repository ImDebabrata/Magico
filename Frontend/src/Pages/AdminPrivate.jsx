import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminPrivate = ({ children }) => {
  const { token, role } = useSelector((store) => store.auth);
  if (!token || role !== "admin") {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default AdminPrivate;
