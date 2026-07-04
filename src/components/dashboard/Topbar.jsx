import { Bell, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../utils/logout";

function Topbar({ userData, setSidebarOpen }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  return (
    <header className="sticky top-0 z-30 bg-[#081F44] border-b border-[#1E3A5F] h-20 px-4 md:px-8 py-4">
      <div className="flex flex-row justify-between items-center gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="flex items-start gap-3">
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-[#102C5C] hover:bg-[#15366E] transition"
          >
            <Menu size={20} className="text-white" />
          </button>

          {/* Greeting */}
          <div>
            <h1 className="text-sm text-white">
              Good Morning, {userData?.fullName?.split(" ")[0]} 👋
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Welcome back to African Tech Collective
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <Link className="p-2 rounded-lg bg-[#102C5C] hover:bg-[#15366E] transition">
            <Bell size={20} className="text-white" />
          </Link>

          <div className="relative cursor-pointer" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold cursor-pointer"
            >
              {userData?.fullName?.charAt(0)?.toUpperCase() || "U"}
            </button>

            <div
              className={`absolute right-0 mt-4 w-56 bg-[#102C5C] rounded-xl border border-[#1E3A5F] shadow-2xl overflow-hidden origin-top-right transform transition-all duration-300 ease-out ${
                showDropdown
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
              }`}
            >
              <div className="px-4 py-4 border-b border-[#1E3A5F]">
                <h3 className="text-white font-semibold">
                  {userData?.fullName}
                </h3>

                <p className="text-sm text-gray-400 capitalize">
                  {userData?.role}
                </p>
              </div>

              <button className="w-full text-left px-4 py-3 hover:bg-[#15366E] text-white transition cursor-pointer">
                My Profile
              </button>

              <button className="w-full text-left px-4 py-3 hover:bg-[#15366E] text-white transition cursor-pointer">
                Settings
              </button>

              <button
                onClick={() => logout(navigate)}
                className="w-full text-left px-4 py-3 hover:bg-red-600 text-red-300 hover:text-white transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
