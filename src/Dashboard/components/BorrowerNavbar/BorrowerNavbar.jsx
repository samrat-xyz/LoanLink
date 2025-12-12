import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { Home, FileText, User, LogOut } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiHomebridge } from "react-icons/si";

function BorrowerNavbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium ${
      isActive ? "bg-primary text-white" : "hover:bg-base-300 text-base-content"
    }`;

  return (
    <div className="drawer lg:drawer-open">
      <input id="borrower-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="borrower-drawer"
              className="btn btn-square btn-ghost"
            >
              <RxHamburgerMenu />
            </label>
          </div>

          <div className="flex-1 px-4 text-lg font-bold">
            Borrower Dashboard
          </div>

          <div className="flex items-center gap-3 mr-4">
            <p className="text-sm hidden md:block">{user?.email}</p>
            <div className="w-9 rounded-full overflow-hidden">
              <img
                src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/user.png"}
                alt="user"
              />
            </div>
            <button onClick={handleLogout} className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="borrower-drawer" className="drawer-overlay"></label>

        <div className="w-64 min-h-full bg-base-200 p-4">
          <h2 className="text-xl font-bold text-primary mb-6">
            Borrower Panel
          </h2>

          <ul className="menu gap-2">
            <li>
              <Link to="/">
                <SiHomebridge size={18}/>
                LoanLink Home
              </Link>
            </li>
            <li>
              <NavLink to="/dashboard/borrower" end className={navClass}>
                <Home size={18} /> Dashboard Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/borrower/my-applied-loan" className={navClass}>
                <FileText size={18} />My Applied Loan
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/borrower/profile" className={navClass}>
                <User size={18} /> My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BorrowerNavbar;
