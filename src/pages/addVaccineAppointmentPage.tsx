import { Navbar } from "../components/navbar/navbar";
import React from "react";
import { VaccineAppointmentForm } from "../components/vaccineAppointmentForm/vaccineAppointmentForm";

export const AddVaccineAppointmentPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <VaccineAppointmentForm />
    </div>
  );
};
