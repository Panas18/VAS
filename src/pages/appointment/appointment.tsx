import { Navbar } from "../../components/navbar/navbar";
import React from "react";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import "./appointment.css";
import type { ColumnsType } from "antd/lib/table";

interface DataType {
  patientId: number;
  siteLocation: string;
  serviceType: string;
  confirmationCode: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Patient ID",
    dataIndex: "patientId",
    key: "patientId",
  },
  {
    title: "Site Location",
    dataIndex: "siteLocation",
    key: "siteLocation",
  },
  {
    title: "Service Type",
    dataIndex: "serviceType",
    key: "serviceType",
  },
  {
    title: "Confirmation Code",
    dataIndex: "confirmationCode",
    key: "confirmationCode",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href=" # ">View</a>
        <a href=" # " style={{ color: "red" }}>
          Delete
        </a>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    patientId: 1,
    siteLocation: "Kathmandu",
    serviceType: "Pfizer",
    confirmationCode: "234k8",
  },
  {
    patientId: 2,
    siteLocation: "Bhaktapur",
    serviceType: "Johnson & Johnson",
    confirmationCode: "oius2",
  },
];

export const AppointmentPage: React.FC = () => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate({ pathname: "/appointment/add" });
  };
  return (
    <div>
      <Navbar />
      <div className="appointmentContainer">
        <div className="appointment--header">
          <div className="appointment--title">
            <span
              style={{
                fontSize: "30px",
              }}
            >
              Your Appointments
            </span>
          </div>
          <div>
            <Button onClick={handleAddButton} type="primary">
              Add New Appointment
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          style={{ marginTop: "20px" }}
        ></Table>
      </div>
    </div>
  );
};
