import { Navbar } from "../components/navbar/navbar";
import React from "react";
import { PatientForm } from "../components/patientForm/patientForm";

export const PatientPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PatientForm />
    </div>
  );
};
