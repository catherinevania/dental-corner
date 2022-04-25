import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import { HOME, LOGIN } from "./Path";

//pages
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={HOME} element={<HomePage />} />
      <Route exact path={LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default RouterConfig;
