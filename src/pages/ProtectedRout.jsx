import React from "react";
import useAtuh from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children }) => {
  const currentUser = useAtuh();
  return currentUser ? children : <Navigate to="/signin" />;
};

export default ProtectedRout;
