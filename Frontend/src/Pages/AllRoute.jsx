import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import User from "./User";
import AdminPrivate from "./AdminPrivate";
import PrivateRoute from "./PrivateRoute";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/admin"
        element={
          <AdminPrivate>
            <Admin />
          </AdminPrivate>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoute;
