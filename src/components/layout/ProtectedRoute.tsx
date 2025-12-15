import { Navigate } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
  selectCurrentToken,
  selectAuthLoading,
} from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";

type TProtectedRoute = {
  children: ReactNode;
  allowedRoles: string[]; // e.g., ["admin"] or ["user", "admin"]
};

const ProtectedRoute = ({ children, allowedRoles }: TProtectedRoute) => {
  const dispatch = useAppDispatch();

  // Correct selectors
  const token = useAppSelector(selectCurrentToken);        // ← This is the JWT string
  const user = useAppSelector(selectCurrentUser);          // ← Decoded user from Redux
  const isLoading = useAppSelector(selectAuthLoading);     // ← Important for refresh

  // Show nothing or a loader while verifying auth on app start
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If no token → not logged in
  if (!token) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  // If no user in Redux state → something went wrong (token invalid or not set)
  if (!user) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  // Role check
  if (!allowedRoles.includes(user.role)) {
    // Option 1: Just redirect (user is logged in but not authorized)
    return <Navigate to="/unauthorized" replace />; // or "/login" or home

    // Option 2: If you want to force logout on wrong role:
    // dispatch(logout());
    // return <Navigate to="/login" replace />;
  }

  // All good → render protected content
  return <>{children}</>;
};

export default ProtectedRoute;