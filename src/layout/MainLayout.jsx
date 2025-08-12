import React from "react";
import Navbar from "../Components/Navber/Navbar";
import { Outlet } from "react-router";
import HeroSub from "../Components/HeroSec/HeroSub";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
