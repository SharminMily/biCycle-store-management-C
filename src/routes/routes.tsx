/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import HomePage from "../pages/homePage/HomePage";
import HomeLayout from "../components/layout/MainLayout";
import Login from "../pages/from/Login";
import Signup from "../pages/from/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome";
import ManageBicycle from "../pages/dashboard/adminDashboard/ManageBicycle";
import AllBicycles from "../pages/homePage/AllBicycles";
import AddBicycle from "../pages/dashboard/adminDashboard/AddBicycle";
import AllUser from "../pages/dashboard/adminDashboard/AllUser";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import UserHome from "../pages/dashboard/userDashboard/UserHome";
import { useAppSelector } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import BicycleDetails from "../pages/homePage/BicycleDetails";
import ManageOrder from "../pages/dashboard/userDashboard/ManageOrder";
import OrderDetails from "../pages/dashboard/userDashboard/OrderDetails";
import AddReview from "../pages/dashboard/userDashboard/AddReview";

// User Role Constants
const userRole = {
  Admin: "admin",
  User: "user",
};

// Role-Based Route Component
const DashboardRedirect = () => {
  const token = useAppSelector(useCurrentToken);
  const user = token ? verifyToken(token) : null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return user.role === userRole.Admin ? (
    <Navigate to="/dashboard/adminHome" replace />
  ) : (
    <Navigate to="/dashboard/userHome" replace />
  );
};

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "all-bicycles", element: <AllBicycles /> },
      { path: "bicycles-details/:id", element: <BicycleDetails /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <Signup /> },

  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardRedirect />, // Redirect to correct dashboard based on role
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "add-bicycle",
        element: (
          <ProtectedRoute allowedRoles={[userRole.Admin]}>
            <AddBicycle />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-bicycle",
        element: (
          <ProtectedRoute allowedRoles={[userRole.Admin]}>
            <ManageBicycle />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-users",
        element: <AllUser />,
      },
      {
        path: "myHome",
        element: <UserHome />,
      },
      {
        path: "manage-order",
        element: <ManageOrder />,
      },
      {
        path: "order-details",
        element: <OrderDetails />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
    ],
  },
]);

export default router;
