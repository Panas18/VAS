import { Navbar } from "../components/navbar/navbar";
import React from "react";
import { AppointmentForm } from "../components/appointmentForm/appointmentForm";

export const AddAppointmentPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AppointmentForm />
    </div>
  );
};
