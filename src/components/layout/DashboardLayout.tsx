import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import AdminRoutes from "../../routes/AdminRoutes";
import UserRoutes from "../../routes/UserRoute";
import { verifyToken } from "../../utils/verifyToken";

const userRole = {
  Admin: "admin",
  User: "user",
};

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);

  let user = null;

  if (token) {
    user = verifyToken(token); // Ensure `verifyToken` returns a user object with `role`
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <button className="bg-red-500 text-white"></button>

      {/* Sidebar Routes based on Role */}
      {user?.role === userRole.Admin ? <AdminRoutes /> : <UserRoutes />}

      <div className="flex-1">
        <header className="bg-white shadow p-4 mb-8">
          <div className="flex justify-end">
            <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4">
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
