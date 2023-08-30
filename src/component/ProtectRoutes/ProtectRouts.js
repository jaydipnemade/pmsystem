import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  // Replace this with your actual role check logic
  const userRole = ""; // Replace with the actual user's role

  if (allowedRoles.includes(userRole)) {
    return element;
  } else {
    // Redirect to an unauthorized page or navigate to a specific route
    return <Navigate to="/NotFound" />;
  }
};

export default ProtectedRoute;
