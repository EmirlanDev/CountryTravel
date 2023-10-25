import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";

const MainRoutes = () => {
  let PUBLIC = [{ link: "/", element: <Home />, id: 1 }];
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
