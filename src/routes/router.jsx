import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import About from "../pages/About/About";
import Loans from "../pages/Loans/Loans";
import Contact from "../pages/Contact/Contact";
import LoanDetails from "../pages/LoanDetails/LoanDetails";
import PrivateRoutes from "./PrivateRoutes";
import LoanApplicationForm from "../pages/LoanApplicationForm/LoanApplicationForm";
import BorrowerLayout from "../layouts/BorrowerLayout";
import BorrowerHome from "../Dashboard/BorrowerHome/BorrowerHome";
import ManagerLayout from "../layouts/ManagerLayout";
import ManagerHome from "../Dashboard/ManagerHome/ManagerHome";
import ManagerAllLoans from "../Dashboard/components/Manager/ManagerAllLoans";
import ManageUsers from "../Dashboard/components/Manager/ManageUsers";
import MyProfile from "../Dashboard/DashboardBorrower/MyProfile";
import MyAppliedLoan from "../Dashboard/DashboardBorrower/MyAppliedLoan";
import CreateLoans from "../Dashboard/components/Manager/CreateLoans";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-loans",
        element: <Loans />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/loan-detail/:id",
        element: (
          <PrivateRoutes>
            <LoanDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/apply-loan",
        element: <LoanApplicationForm />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  
  {
    path: "/dashboard/borrower",
    element: (
      <PrivateRoutes>
        <BorrowerLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <BorrowerHome />,
      },
      {
        path:'/dashboard/borrower/profile/',
        element:<MyProfile></MyProfile>
      },
      {
        path:'/dashboard/borrower/my-applied-loan',
        element:<MyAppliedLoan></MyAppliedLoan>
      }
    ],
  },
  {
    path:'/dashboard/manager',
    element:(
      <PrivateRoutes><ManagerLayout></ManagerLayout></PrivateRoutes>
    ),
    children:[
      {
        index:true,
        element:<ManagerHome></ManagerHome>
      },
      {
        path:'/dashboard/manager/all-loans',
        element:<ManagerAllLoans></ManagerAllLoans>
      },
      {
        path:'/dashboard/manager/manage-users',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'/dashboard/manager/profile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'/dashboard/manager/create-loans',
        element:<CreateLoans></CreateLoans>
      }
    ]
  }
]);
