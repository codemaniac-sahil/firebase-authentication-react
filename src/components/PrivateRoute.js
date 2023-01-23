import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateComponent() {
  const { currentUser } = useAuth();
  // const auth=localStorage.getItem('users')
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateComponent;
