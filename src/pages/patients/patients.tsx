import React from "react";
import { useEffect } from "react";
import { Button, Table } from "antd";
import moment from "moment";
import type { ColumnsType } from "antd/lib/table";
import { useNavigate, Link } from "react-router-dom";
import { getAllPatients } from "../../service/backEnd";
import { Navbar } from "../../components/navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addPatientsList } from "../../store/slice/patientRecordSlide";
import Patient from "../../store/sliceInterface/patient";
import "./patients.css";

interface DataType {
  patient_id: number;
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  ethinicity: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Patient ID",
    dataIndex: "patient_id",
    key: "patient_id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
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
        <Link to="/patient">View</Link>
      </div>
    ),
  },
];

const formatData = (patient: Patient) => {
  const tableData = {
    patient_id: +patient.id,
    first_name: patient.first_name,
    last_name: patient.last_name,
    dob: patient.dob,
    gender: patient.gender,
    ethinicity: patient.ethinicity,
  };

  return tableData;
};
export const PatientPage: React.FC = () => {
  const dispatch = useDispatch();
  // get all patients list from backend server
  useEffect(() => {
    const getAllData = async () => {
      const patients = await getAllPatients();
      dispatch(addPatientsList(patients));
    };
    getAllData();
  }, [dispatch]);

  const patientRecord = useSelector(
    (state: RootState) => state.patientRecord.data,
  );

  const data = patientRecord.map(formatData);
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
