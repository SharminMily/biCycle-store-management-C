import { Navigate } from "react-router-dom";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { ReactNode } from "react";

type TProtectedRoute = {
  children: ReactNode;
  allowedRoles: string[]; // Role validation, removed role from props as it should be based on the token
};

const ProtectedRoute = ({ children, allowedRoles }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken); // Correct usage of the selector
  const dispatch = useAppDispatch();

  let user = null;
  if (token) {
    try {
      user = verifyToken(token);  // Verify the token and get the user
    } catch (error) {
      console.error("Token verification failed", error);
    }
  }

  const role = user?.role;

  // If there is no token or no role in the decoded token
  if (!token || !role) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  // If the user's role is not in the allowedRoles list
  if (!allowedRoles.includes(role)) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  // If all checks pass, render the children
  return children;
};

export default ProtectedRoute;
