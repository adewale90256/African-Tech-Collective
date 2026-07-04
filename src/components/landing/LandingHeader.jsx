// components/landing/LandingHeader.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Menu, X } from "lucide-react";

function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-amber-400 bg-[#091839]/95 px-6 lg:px-12 text-[#98abd1]">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <img
              src="/logo/AFRICAN TECH COLLECTIVE logo-12.png"
              alt="African Tech Collective"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link to="/platform" className="hover:text-white">
                Platform
              </Link>
            </li>

            <li>
              <Link to="/events" className="hover:text-white">
                Events
              </Link>
            </li>

            <li>
              <Link to="/membership" className="hover:text-white">
                Membership
              </Link>
            </li>

            <li>
              <Link to="/insights" className="hover:text-white">
                Insights
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/membership"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] hover:bg-amber-300"
            >
              Apply Now
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-2 rounded-lg border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-[#041B4A]"
            >
              <LogIn size={18} />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white cursor-pointer"
          >
            <Menu size={30} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-55 bg-[#091839] border-l border-amber-400 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#20365f] h-16.5 p-6">
          <img
            src="/logo/AFRICAN TECH COLLECTIVE logo-12.png"
            alt="Logo"
            className="h-14"
          />

          <button
            onClick={closeMenu}
            className="text-white hover:text-amber-400 cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col px-6 py-8 space-y-6 text-[#98abd1]">
          <Link onClick={closeMenu} to="/" className="hover:text-white">
            Home
          </Link>

          <Link onClick={closeMenu} to="/about" className="hover:text-white">
            About
          </Link>

          <Link onClick={closeMenu} to="/platform" className="hover:text-white">
            Platform
          </Link>

          <Link onClick={closeMenu} to="/events" className="hover:text-white">
            Events
          </Link>

          <Link
            onClick={closeMenu}
            to="/membership"
            className="hover:text-white"
          >
            Membership
          </Link>

          <Link onClick={closeMenu} to="/insights" className="hover:text-white">
            Insights
          </Link>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-8 left-6 right-6 space-y-4">
          <Link
            onClick={closeMenu}
            to="/membership"
            className="block rounded-lg bg-amber-400 py-3 text-center font-semibold text-[#041B4A]"
          >
            Apply Now
          </Link>

          <Link
            onClick={closeMenu}
            to="/login"
            className="flex items-center justify-center gap-2 rounded-lg border border-amber-400 py-3 text-amber-400 hover:bg-amber-400 hover:text-[#041B4A]"
          >
            <LogIn size={18} />
            Login
          </Link>
        </div>
      </aside>
    </>
  );
}

export default LandingHeader;
