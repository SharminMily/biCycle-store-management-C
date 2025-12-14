import { Divider } from "primereact/divider";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  Bike, 
  Package, 
  Users, 
  ShoppingCart, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  LogOut,
  Settings
} from "lucide-react";

type AdminRoutesProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AdminRoutes = ({ isOpen, onClose }: AdminRoutesProps) => {
  const activeLinkStyle = "bg-red-600 text-white shadow-lg shadow-red-600/40 rounded-xl";
  const inactiveLinkStyle = "text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300";

  return (
    <div
      className={`bg-gradient-to-b from-gray-900 to-black h-screen w-64 fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out overflow-y-auto border-r border-gray-800
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      {/* Logo Section */}
      <div className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img
              alt="logo"
              src="https://i.ibb.co.com/Rp3STcry/bicycle-logo-removebg-preview.png"
              width={80}
              height={80}
              className="rounded-lg border-4 border-red-600 p-2 shadow-2xl shadow-red-600/30"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900 animate-pulse" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-widest">BICYCLE</h1>
        <p className="text-green-400 text-xs tracking-wider mt-1">ADMIN PANEL</p>
      </div>

      <Divider className="opacity-30 mx-4" />

      {/* Admin Navigation */}
      <nav className="px-6 space-y-2 mt-4">
        <NavLink
          to="/dashboard/adminHome"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 font-medium text-lg transition-all duration-300 ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Home size={22} />
          <span>Admin Home</span>
        </NavLink>

        <NavLink
          to="/dashboard/add-bicycle"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 font-medium text-lg transition-all duration-300 ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Bike size={22} />
          <span>Add Bicycle</span>
        </NavLink>

        <NavLink
          to="/dashboard/manage-bicycle"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 font-medium text-lg transition-all duration-300 ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Settings size={22} />
          <span>Manage Bicycles</span>
        </NavLink>

        <NavLink
          to="/dashboard/all-users"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 font-medium text-lg transition-all duration-300 ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Users size={22} />
          <span>Manage Users</span>
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 font-medium text-lg transition-all duration-300 ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <ShoppingCart size={22} />
          <span>Manage Orders</span>
        </NavLink>
      </nav>

      <Divider className="opacity-30 mx-4 my-6" />

      {/* Bottom Links */}
      <nav className="px-6 space-y-2 pb-8">
        <NavLink
          to="/"
          onClick={onClose}
          className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
        >
          <Package size={20} />
          <span>Back to Shop</span>
        </NavLink>
      </nav>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-600/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default AdminRoutes;