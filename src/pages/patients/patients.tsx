import { Navbar } from "../../components/navbar/navbar";
import React from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useNavigate } from "react-router-dom";
import "./patients.css";

interface DataType {
  patientId: number;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  ethinicity: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Patient ID",
    dataIndex: "patientId",
    key: "patientId",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Date of Birth",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Ethinicity",
    dataIndex: "ethinicity",
    key: "ethinicity",
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
    firstName: "Mike",
    lastName: "Lal",
    dob: "1999-12-12",
    gender: "Male",
    ethinicity: "Hindu",
  },
  {
    patientId: 2,
    firstName: "Hari",
    lastName: "Krishna",
    dob: "1945-06-04",
    gender: "Male",
    ethinicity: "Christan",
  },
  {
    patientId: 3,
    firstName: "Shyam",
    lastName: "Singh",
    dob: "1989-02-30",
    gender: "female",
    ethinicity: "Buddhist",
  },
];
export const PatientPage: React.FC = () => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate({ pathname: "/patient/add" });
  };
  return (
    <div>
      <Navbar />
      <div className="patientContainer">
        <div className="patient--header">
          <div className="patient--title">
            <span
              style={{
                fontSize: "30px",
              }}
            >
              Patient's list
            </span>
          </div>
          <div>
            <Button onClick={handleAddButton} type="primary">
              Add New Patient
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
