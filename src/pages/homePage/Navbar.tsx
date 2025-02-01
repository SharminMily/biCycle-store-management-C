import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //bg-[#000033] fixed left-0
    <nav className="  p-2 lg:px-12 md:px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            alt="logo"
            // src="https://i.ibb.co.com/4R408KFn/bicycle-Logo-removebg-preview.png"
            src="https://i.ibb.co.com/Kc8HWNxn/bicycle-Logo.png"
            width={60}
            height="24"
            className="mr-2 rounded-full"
          />
          <span className="text-white text-lg font-semibold"></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-md border-b-2 border-b-[#a144df]"
                  : "text-white text-md hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>         
          <li>
            <NavLink
              to="/all-bycicles"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-md border-b-2 border-b-[#a144df]"
                  : "text-white text-md hover:text-gray-300"
              }
            >
              Bycicles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-md border-b-2 border-b-[#a144df]"
                  : "text-white text-md hover:text-gray-300"
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
                ? "text-white font-bold text-md border-b-2 border-b-[#a144df]"
                : "text-white text-md hover:text-gray-300"
          
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
                ? "text-white font-bold text-md border-b-2 border-b-[#a144df]"
                : "text-white text-md hover:text-gray-300"
                }
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#000033] p-4 mt-2 rounded-lg">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                ? "text-white font-bold text-md border-b-2 border-b-fuchsia-500"
                : "text-white text-md hover:text-gray-300"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/all-bycicles"
                className={({ isActive }) =>
                  isActive
                ? "text-white font-bold text-md border-b-2 border-b-fuchsia-500"
                : "text-white text-md hover:text-gray-300"
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
                ? "text-white font-bold text-md border-b-2 border-b-fuchsia-500"
                : "text-white text-md hover:text-gray-300"
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
                ? "text-white font-bold text-md border-b-2 border-b-fuchsia-500"
                : "text-white text-md hover:text-gray-300"
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
                ? "text-white font-bold text-md border-b-2 border-b-fuchsia-500"
                : "text-white text-md hover:text-gray-300"
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
