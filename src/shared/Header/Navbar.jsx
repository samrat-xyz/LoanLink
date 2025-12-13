import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const { role, roleLoading } = useRole();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  //  Load Theme
  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    setTheme(stored);
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  //  Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  //  Active Class
  const navClass = ({ isActive }) =>
    `font-medium relative ${
      isActive
        ? "text-primary font-bold underline underline-offset-8"
        : "hover:text-primary"
    }`;

  const handleLogout = async () => {
    await logoutUser();
   
  };

  //  LINKS
  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-loans" className={navClass}>
          All Loans
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={navClass}>
          Contact
        </NavLink>
      </li>

      {/* ✅ USER SECTION */}
      <li>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow w-52 mt-3 z-50"
            >
              {!roleLoading && role === "borrower" && (
                <li>
                  <Link to="/dashboard/borrower">Borrower Dashboard</Link>
                </li>
              )}

              {!roleLoading && role === "manager" && (
                <li>
                  <Link to="/dashboard/manager">Manager Dashboard</Link>
                </li>
              )}

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="btn bg-primary text-white">
            Login
          </NavLink>
        )}
      </li>

      {/* ✅ THEME TOGGLE */}
      <li>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="toggle toggle-neutral"
        />
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      {/*  TOP BAR */}
      <div className="w-full border-b text-sm">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <div className="flex gap-4">
            <FaFacebookF className="text-[#0d6efd]" />
            <FaTwitter className="text-[#1da1f2]" />
            <FaLinkedinIn className="text-[#0a66c2]" />
            <FaInstagram className="text-[#E1306C]" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span>Company News</span>
            <span>/</span>
            <span>FAQs</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-1 items-center">
              <MdEmail className="text-blue-500" />
              <span>support@LoanLink.com</span>
            </div>

            <div className="hidden md:flex gap-1 items-center">
              <MdAccessTime className="text-primary" />
              <span>Mon - Sat 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/*  MAIN NAV */}
      <div className="container mx-auto py-5 px-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-extrabold text-primary">LoanLink</p>

          <ul className="hidden md:flex items-center gap-8">{links}</ul>

          <button
            className="btn btn-ghost md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/*  MOBILE MENU */}
        <div
          className={`md:hidden bg-base-100 rounded-lg shadow-md mt-3 transition-all duration-300 ${
            isMenuOpen ? "max-h-96 p-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
