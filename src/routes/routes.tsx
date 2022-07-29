import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { Login } from "../components/login/login";
import { HomePage } from "../pages/home";
import { AboutPage } from "../pages/about";
import { useEffect } from "react";

function AppRoutes() {
  const navigation = useNavigate();
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn !== "true") {
      navigation({ pathname: "/login" });
    }
  }, [navigation]);

  return (
    <Routes>
      <Route
        path="/about"
        element={isLoggedIn ? <AboutPage /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/home"
        element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
      ></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
}

export default AppRoutes;
