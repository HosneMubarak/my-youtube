import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
