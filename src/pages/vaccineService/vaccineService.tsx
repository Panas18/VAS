import { Navbar } from "../../components/navbar/navbar";
import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./vaccineService.css";

export const VaccineServicePage: React.FC = () => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate({ pathname: "/service/add" });
  };
  return (
    <div>
      <Navbar />
      <div className="addBtn">
        <Button onClick={handleAddButton} type="primary">
          Add Vaccine Service
        </Button>
      </div>
    </div>
  );
};
