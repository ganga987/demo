import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "../breadcrum/page/Screen1";
import Screen2 from "../breadcrum/page/Screen2";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen1 />}></Route>
        <Route path="screen2" element={<Screen2 />} />
        
      </Routes>
    </BrowserRouter>
  );;
};

export default AllRoutes;
