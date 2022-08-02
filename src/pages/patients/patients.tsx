import { Navbar } from "../../components/navbar/navbar";
import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./patients.css";

export const PatientPage: React.FC = () => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate({ pathname: "/addpatient" });
  };
  return (
    <div>
      <Navbar />
      <div className="addBtn">
        <Button onClick={handleAddButton} type="primary">
          Add Patients
        </Button>
      </div>
    </div>
  );
};
