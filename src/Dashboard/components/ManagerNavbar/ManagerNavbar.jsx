import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { Home, ClipboardList, Users, LogOut, FileCheck } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import useAuth from "../../../hooks/useAuth";
import { MdAdminPanelSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiHomebridge } from "react-icons/si";
import { LuGitPullRequestCreate } from "react-icons/lu";
import Loading from "../../../components/Loading/Loading";

function ManagerNavbar() {
  const { user, logoutUser,loading } = useAuth();
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
      <input id="manager-drawer" type="checkbox" className="drawer-toggle" />

      {/* TOP NAVBAR */}
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="manager-drawer"
              className="btn btn-square btn-ghost"
            >
              <RxHamburgerMenu />
            </label>
          </div>

          <div className="flex-1 px-4 text-lg font-bold flex items-center gap-2">
            <MdAdminPanelSettings size={22} />
            Manager Dashboard
          </div>

          {/* USER INFO */}
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

        {/* PAGE CONTENT */}
        <div className="p-6 bg-base-100">
          <Outlet></Outlet>
        </div>
      </div>

      {/* SIDE BAR */}
      <div className="drawer-side">
        <label htmlFor="manager-drawer" className="drawer-overlay"></label>

        <div className="w-64 min-h-full bg-base-200 p-4">
          <h2 className="text-xl font-bold text-primary mb-6">Manager Panel</h2>

          <ul className="menu gap-2">
            <li>
              <Link to="/" className="flex items-center gap-3">
                <SiHomebridge size={18} />
                LoanLink Home
              </Link>
            </li>

            <li>
              <NavLink to="/dashboard/manager" end className={navClass}>
                <MdAdminPanelSettings size={18} />
                Dashboard Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/manager/all-loans" className={navClass}>
                <ClipboardList size={18} />
                All Loan Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manager/create-loans"
                className={navClass}
              >
                <LuGitPullRequestCreate size={18} />
                Create Loans
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/manager/manage-users"
                className={navClass}
              >
                <Users size={18} />
                Manage Users
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/manager/profile" className={navClass}>
                <CgProfile size={18} />
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManagerNavbar;
