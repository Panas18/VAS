import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { Login } from "../components/login/login";
import { useEffect } from "react";
import {
  HomePage,
  AboutPage,
  AddPatientPage,
  PatientPage,
  VaccineAppointmentPage,
  AddVaccineAppointmentPage,
} from "../pages/index";

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
      <Route path="/add-patient" element={<AddPatientPage />}></Route>
      <Route path="/patient" element={<PatientPage />}></Route>
      <Route
        path="/vaccine-appointment"
        element={<VaccineAppointmentPage />}
      ></Route>
      <Route
        path="/add-vaccine-appointment"
        element={<AddVaccineAppointmentPage />}
      ></Route>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
}

export default AppRoutes;
