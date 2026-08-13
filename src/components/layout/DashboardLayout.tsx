import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import AdminRoutes from "../../routes/AdminRoutes";
import UserRoutes from "../../routes/UserRoute";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const userRole = {
  Admin: "admin",
  User: "user",
};

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectCurrentToken);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let user = null;
  if (token) {
    user = verifyToken(token);
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const RoleRoutes = user?.role === userRole.Admin ? AdminRoutes : UserRoutes;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <RoleRoutes isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            {/* Hamburger Button - Mobile & Tablet */}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
            >
              {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className="flex-1 text-center lg:text-left lg:ml-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Bicycle Dashboard
              </h2>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg shadow transition-colors"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;