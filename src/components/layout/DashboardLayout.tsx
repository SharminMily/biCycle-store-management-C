import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import AdminRoutes from "../../routes/AdminRoutes";

import { verifyToken } from "../../utils/verifyToken";
import UserRoutes from "../../routes/UserRoute";

const userRole = {
  Admin: "admin",
  User: "user",
};

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);

  let user = null;

  if (token) {
    user = verifyToken(token);
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    dispatch(logout());
    console.log(logout());
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100 overflow-hidden">
      <div className="f0 min-h-screen">
        {user?.role === userRole.Admin ? <AdminRoutes /> : <UserRoutes />}
      </div>

      <div className="flex-1 flex flex-col min-h-screen overflow-auto">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <div className="flex justify-end">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-black py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
