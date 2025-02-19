import { Navigate } from "react-router-dom";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { ReactNode } from "react";

type TProtectedRoute = {
    children: ReactNode;
    role?: string; 
    allowedRoles: string[];
  };
  
  const ProtectedRoute = ({ children, allowedRoles }: TProtectedRoute) => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
  
    let user;
    if (token) {
      user = verifyToken(token);
    }
  
    // Fetch role from user instead of passing it as a prop
    const role = user?.role;
  
    if (!token || !role) {
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }
  
    if (!allowedRoles.includes(role)) {
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;