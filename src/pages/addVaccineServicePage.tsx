import { Navbar } from "../components/navbar/navbar";
import React from "react";
import { VaccineServiceForm } from "../components/vaccineServiceForm/vaccineServiceForm";

export const AddVaccineServicePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <VaccineServiceForm />
    </div>
  );
};
