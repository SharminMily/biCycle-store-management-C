import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Typewriter from "typewriter-effect";

// Integrated Typewriter Announcement Bar
const NavTypewriter = () => {
  return (
    <div className="bg-black py-3 text-white text-center font-bold text-sm md:text-base tracking-wider">
      <div className="flex justify-center items-center gap-3">
        <span>BYCICLE</span>
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Typewriter Announcement Bar - Now Visible & Integrated */}
      <NavTypewriter />

      {/* Main Navbar - Clean White Luxury with Red Accents */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo - Sophisticated Gradient */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center">
                <img
                  alt="BICYCLE"
                  src="https://i.ibb.co.com/Rp3STcry/bicycle-logo-removebg-preview.png"
                  width={70}
                  className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="ml-4 text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600">
                  BICYCLE
                </span>
              </div>
            </div>

            {/* Desktop Links - Minimal & Elegant */}
            <ul className="hidden lg:flex items-center space-x-16">
              {[
                { to: "/", label: "HOME" },
                { to: "/all-bicycles", label: "COLLECTION" },
                { to: "/about", label: "MANIFESTO" },
                { to: "/dashboard", label: "STUDIO" },
                { to: "/login", label: "ACCESS" },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end
                    className="text-lg font-medium tracking-[0.2em] text-black transition-all duration-500 hover:text-red-600"
                  >
                    {({ isActive }) => (
                      <span className={isActive ? "text-red-600" : ""}>
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Trigger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-2 group"
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {isOpen ? (
                <X className="relative z-10 w-8 h-8 text-black transition-all duration-500 hover:rotate-90" />
              ) : (
                <Menu className="relative z-10 w-8 h-8 text-black transition-all duration-500 hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Immersive Full-Screen */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-red-300 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700" />

          <button
            onClick={toggleMenu}
            className="absolute top-10 right-10 text-black text-5xl transition-all duration-700 hover:rotate-180 hover:scale-125"
          >
            <X strokeWidth={1} />
          </button>

          <ul className="space-y-10 text-center">
            {[
              { to: "/", label: "HOME" },
              { to: "/all-bicycles", label: "COLLECTION" },
              { to: "/about", label: "MANIFESTO" },
              { to: "/dashboard", label: "STUDIO" },
              { to: "/login", label: "ACCESS" },
            ].map((item, index) => (
              <li
                key={item.to}
                className="opacity-0"
                style={{ animation: `fadeIn 0.8s ease-out forwards`, animationDelay: `${index * 100}ms` }}
              >
                <NavLink
                  to={item.to}
                  onClick={toggleMenu}
                  end
                  className={({ isActive }) =>
                    `block text-7xl md:text-8xl font-black tracking-[0.15em] transition-all duration-700
                    ${isActive ? "text-red-600" : "text-gray-400 hover:text-black"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-16 opacity-10 pointer-events-none">
            <img
              alt="BYCICLE"
              src="https://i.ibb.co.com/Rp3STcry/bicycle-logo-removebg-preview.png"
              width={200}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;