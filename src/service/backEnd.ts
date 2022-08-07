import { BACKEND_URL } from "../common/common";
import IPatient from "../store/sliceInterface/patient";

export async function getAllPatients(): Promise<IPatient[]> {
  const response = await fetch(BACKEND_URL + "patient/");
  const patients = await response.json();
  return patients.data;
}
