import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
// import useRole from "../../hooks/useRole";

// ICONS
import { CgProfile } from "react-icons/cg";
import { MdDashboard, MdLogout, MdPeople, MdPayment } from "react-icons/md";
import { FaClipboardList, FaListAlt, FaPlusCircle } from "react-icons/fa";

function DashboardNavbar() {
  const { user, logOut } = useAuth();
  // const [role] = useRole();
  // role → "admin" | "manager" | "borrower"

  // Admin Sidebar
  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard/admin-home">
          <MdDashboard className="text-xl" />
          <span className="is-drawer-close:hidden">Admin Dashboard</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/manage-users">
          <MdPeople className="text-xl" />
          <span className="is-drawer-close:hidden">Manage Users</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/all-loan">
          <FaListAlt className="text-xl" />
          <span className="is-drawer-close:hidden">All Loans</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/loan-applications">
          <FaClipboardList className="text-xl" />
          <span className="is-drawer-close:hidden">Loan Applications</span>
        </NavLink>
      </li>
    </>
  );

  // Manager Sidebar
  const managerLinks = (
    <>
      <li>
        <NavLink to="/dashboard/manager-home">
          <MdDashboard className="text-xl" />
          <span className="is-drawer-close:hidden">Manager Dashboard</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/add-loan">
          <FaPlusCircle className="text-xl" />
          <span className="is-drawer-close:hidden">Add Loan</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/manage-loans">
          <FaListAlt className="text-xl" />
          <span className="is-drawer-close:hidden">Manage Loans</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/pending-loans">
          <FaClipboardList className="text-xl" />
          <span className="is-drawer-close:hidden">Pending Loans</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/approved-loans">
          <MdPayment className="text-xl" />
          <span className="is-drawer-close:hidden">Approved Loans</span>
        </NavLink>
      </li>
    </>
  );

  // Borrower Sidebar
  const borrowerLinks = (
    <>
      <li>
        <NavLink to="/dashboard/user-home">
          <MdDashboard className="text-xl" />
          <span className="is-drawer-close:hidden">Dashboard</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/my-loans">
          <FaClipboardList className="text-xl" />
          <span className="is-drawer-close:hidden">My Loans</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* PAGE CONTENT */}
      <div className="drawer-content">
        {/* NAVBAR */}
        <nav className="navbar bg-base-300 px-4 flex justify-between">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-square btn-ghost lg:hidden"
          >
            {/* Drawer icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </label>

          <Link to="/" className="text-lg font-bold">
            LoanLink Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="profile" />
              </div>
            </div>

            <button
              onClick={logOut}
              className="btn btn-error btn-sm text-white flex items-center gap-1"
            >
              <MdLogout className="text-xl" /> Logout
            </button>
          </div>
        </nav>

        <div className="p-4">{/* PAGE CONTENT SLOT */}</div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <div className="w-64 min-h-full bg-base-200 flex flex-col">
          <ul className="menu p-4 text-base">
            {/* ROLE BASED MENUS */}
            {/* {role === "admin" && adminLinks}
            {role === "manager" && managerLinks} */}
            {/* {role === "borrower" && borrowerLinks} */}
                {}
            {/* COMMON PROFILE */}
            <li>
              <NavLink to="/dashboard/profile">
                <CgProfile className="text-xl" />
                <span className="is-drawer-close:hidden">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
