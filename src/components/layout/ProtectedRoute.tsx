import { Navigate, useLocation } from "react-router-dom";
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
  allowedRoles: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: TProtectedRoute) => {
  const dispatch = useAppDispatch();
  const location = useLocation(); 

  const token = useAppSelector(selectCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const isLoading = useAppSelector(selectAuthLoading);

  if (token && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

    if (!token) {
    dispatch(logout());
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} 
      />
    );
  }

  
  if (!user) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }


  return <>{children}</>;
};

export default ProtectedRoute;