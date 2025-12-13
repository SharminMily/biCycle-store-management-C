import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-00 text-white sticky top-0 z-50 p-2 lg:px-12 md:px-6 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            alt="logo"
            src="https://i.ibb.co.com/Rp3STcry/bicycle-logo-removebg-preview.png"
            // src="https://i.ibb.co.com/Kc8HWNxn/bicycle-Logo.png"
            width={80}
            height={20}
            className="mr-2 "
          />
          <span className="text-black text-lg font-semibold"></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold text-md border-b-3 border-b-red-500"
                  : "text-black text-md hover:text-green-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-bicycles"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold text-md border-b-3 border-b-red-500"
                  : "text-black text-md hover:text-green-500"
              }
            >
              Bicycles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold text-md border-b-3 border-b-red-500"
                  : "text-black text-md hover:text-green-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold text-md border-b-3 border-b-red-500"
                  : "text-black text-md hover:text-green-500"
              }
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold text-md border-b-3 border-b-red-500"
                  : "text-black text-md hover:text-green-500"
              }
              onClick={toggleMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden p-4 mt-2 rounded-lg">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold text-md border-b-3 border-b-red-500"
                    : "text-black text-md hover:text-green-500"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-bicycles"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold text-md border-b-3 border-b-red-500"
                    : "text-black text-md hover:text-green-500"
                }
                onClick={toggleMenu}
              >
                bicycles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold text-md border-b-3 border-b-red-500"
                    : "text-black text-md hover:text-green-500"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold text-md border-b-3 border-b-red-500"
                    : "text-black text-md hover:text-green-500"
                }
                onClick={toggleMenu}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold text-md border-b-3 border-b-red-500"
                    : "text-black text-md hover:text-green-500"
                }
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
