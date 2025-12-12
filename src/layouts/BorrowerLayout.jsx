import React from "react";
import { Outlet } from "react-router";
import BorrowerNavbar from "../Dashboard/components/BorrowerNavbar/BorrowerNavbar";

function BorrowerLayout() {
  return (
    <div>
      <BorrowerNavbar />
      
    </div>
  );
}

export default BorrowerLayout;
