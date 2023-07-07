import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/MenuMain";
import Breakfast from "./pages/Menu/Breakfast";
import Snacks from "./pages/Menu/Snacks";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/breakfast" element={<Breakfast />} />
      <Route path="/menu/snacks" element={<Snacks />} />
    </Routes>
  );
};

export default MainRouters;
