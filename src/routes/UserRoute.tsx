import { Divider } from "primereact/divider";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Home, Package, Star, Info, Bike } from "lucide-react";

type UserRoutesProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UserRoutes = ({ isOpen, onClose }: UserRoutesProps) => {
  const activeLinkStyle = "bg-red-600 text-white shadow-lg shadow-red-600/30";
  const inactiveLinkStyle = "text-gray-300 hover:text-white hover:bg-white/10";

  return (
    <div
      className={`bg-gradient-to-b from-gray-900 to-black h-screen w-64 fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out overflow-y-auto border-r border-gray-800
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      {/* Logo */}
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
        <p className="text-green-400 text-xs tracking-wider mt-1">PREMIUM RIDES</p>
      </div>

      <Divider className="opacity-30" />

      {/* Navigation */}
      <nav className="px-6 space-y-2">
        <NavLink
          to="/dashboard/myHome"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Home size={22} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/order-details"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Package size={22} />
          <span>Order Details</span>
        </NavLink>

        <NavLink
          to="/dashboard/add-review"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg ${isActive ? activeLinkStyle : inactiveLinkStyle}`
          }
        >
          <Star size={22} />
          <span>Add Review</span>
        </NavLink>
      </nav>

      <Divider className="opacity-30 my-6" />

      {/* Bottom Links */}
      <nav className="px-6 space-y-2 pb-8">
        <NavLink
          to="/"
          onClick={onClose}
          className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
        >
          <Bike size={20} />
          <span>Back to Shop</span>
        </NavLink>

        <NavLink
          to="/about"
          onClick={onClose}
          className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
        >
          <Info size={20} />
          <span>About Us</span>
        </NavLink>
      </nav>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-600/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default UserRoutes;