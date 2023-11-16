import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import SignUp from "./../components/pages/SignUp/SignUp";
import Regions from "./../components/pages/Regions/Regions";
import RoutesPage from "./../components/pages/RoutesPage/RoutesPage";

const MainRoutes = () => {
  let PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/signUp", element: <SignUp />, id: 2 },
    { link: "/regions", element: <Regions />, id: 3 },
    { link: "/routes", element: <RoutesPage />, id: 4 },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
