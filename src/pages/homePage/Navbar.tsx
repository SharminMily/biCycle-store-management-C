import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, Shield } from "lucide-react";
import Typewriter from "typewriter-effect";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { baseApi } from "../../redux/api/baseApi";

// Typewriter Announcement Bar
const NavTypewriter = () => {
  return (
    <div className="bg-black py-3 text-white text-center font-bold text-sm md:text-base tracking-wider">
      <div className="flex justify-center items-center gap-3">
        <span>BICYCLE</span>
        <span className="text-red-500">
          <Typewriter
            options={{
              loop: true,
              delay: 90,
              deleteSpeed: 50,
              cursor: "|",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("BE THE BOSS")
                .pauseFor(2000)
                .deleteAll(30)
                .typeString("RIDE FAST")
                .pauseFor(1500)
                .deleteChars(4)
                .typeString("HARDER")
                .pauseFor(1800)
                .deleteAll()
                .typeString("OWN THE ROAD")
                .pauseFor(2000)
                .start();
            }}
          />
        </span>
        <span>BIKES</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    setShowLogout(false);
    navigate("/login");
  };

  const avatarUrl =
    user?.image ||
    `https://i.pravatar.cc/150?u=${user?.email || "default"}`;

  useEffect(() => {
    const handleClickOutside = () => setShowLogout(false);
    if (showLogout) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showLogout]);

  return (
    <>
      <NavTypewriter />

      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
        
            <NavLink to="/" className="group relative flex-shrink-0">
              <div className="absolute -inset-4 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center">
                <img
                  alt="BICYCLE"
                  src="https://i.ibb.co.com/Rp3STcry/bicycle-logo-removebg-preview.png"
                  width={60}
                  className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="ml-3 text-3xl lg:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600">
                  BICYCLE
                </span>
              </div>
            </NavLink>

           
            <ul className="flex items-center gap-6 lg:gap-10 xl:gap-12 min-w-0">
              {[
                { to: "/", label: "HOME" },
                { to: "/all-bicycles", label: "COLLECTION" },
                { to: "/about", label: "MANIFESTO" },
              ].map((item) => (
                <li key={item.to} className="flex-shrink-0">
                  <NavLink
                    to={item.to}
                    end
                    className="text-base lg:text-lg xl:text-xl font-medium tracking-[0.15em] text-black transition-all duration-500 hover:text-red-600 whitespace-nowrap"
                  >
                    {({ isActive }) => (
                      <span className={isActive ? "text-red-600" : ""}>
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}

              {/* Avatar or ACCESS */}
              <li className="flex-shrink-0">
                {user ? (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setShowLogout(!showLogout);
                      }}
                      className="focus:outline-none"
                    >
                      <img
                        src={avatarUrl}
                        alt={user.name || "User"}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-red-600 transition-all duration-300 hover:scale-110"
                      />
                    </button>

                    {showLogout && (
                      <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                        <div className="px-6 py-6 border-b border-gray-200 text-center bg-gradient-to-br from-red-50 to-transparent">
                          <img
                            src={avatarUrl}
                            alt={user.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600 shadow-lg"
                          />
                          <p className="font-bold text-xl text-black capitalize">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-2 truncate px-2">
                            {user.email}
                          </p>
                        </div>

                        <NavLink
                          to="/dashboard/myHome"
                          onClick={() => setShowLogout(false)}
                          className="w-full px-6 py-4 flex items-center justify-start gap-4 text-black hover:bg-gray-100 transition-all duration-300"
                        >
                          <Shield className="w-5 h-5 text-red-600" />
                          <span className="font-medium text-lg">Dashboard</span>
                        </NavLink>

                        <button
                          onClick={handleLogout}
                          className="w-full px-6 py-4 flex items-center justify-start gap-4 text-red-600 hover:bg-red-50 transition-all duration-300 border-t border-gray-200"
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="font-medium text-lg">Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className="text-base lg:text-lg xl:text-xl font-medium tracking-[0.2em] text-black transition-all duration-500 hover:text-red-600 whitespace-nowrap"
                  >
                    ACCESS
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;