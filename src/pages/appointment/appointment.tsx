import { Navbar } from "../../components/navbar/navbar";
import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./appointment.css";

export const AppointmentPage: React.FC = () => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate({ pathname: "/appointment/add" });
  };
  return (
    <div>
      <Navbar />
      <div className="addBtn">
        <Button onClick={handleAddButton} type="primary">
          Add Vaccine Appointment
        </Button>
      </div>
    </div>
  );
};
