import React from "react";
import Navbar from "../Components/Navber/Navbar";
import { Outlet } from "react-router";
import HeroSub from "../Components/HeroSec/HeroSub";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
