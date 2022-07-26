import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { Login } from "../components/login/login";
import { useEffect } from "react";
import {
  HomePage,
  AboutPage,
  AddPatientPage,
  PatientPage,
  VaccineServicePage,
  AddVaccineServicePage,
  AppointmentPage,
  AddAppointmentPage,
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
      <Route path="/patient/add" element={<AddPatientPage />}></Route>
      <Route path="/patient" element={<PatientPage />}></Route>
      <Route path="/service" element={<VaccineServicePage />}></Route>
      <Route path="/service/add" element={<AddVaccineServicePage />}></Route>
      <Route path="/appointment" element={<AppointmentPage />}></Route>
      <Route path="/appointment/add" element={<AddAppointmentPage />}></Route>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
}

export default AppRoutes;
