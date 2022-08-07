export default interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  ethinicity: string;
  state: string;
  street: string;
  city: string;
  insurance_id: string;
  member_id: string;
  insurance_provider: string;
}

export type PatientToInsert = Omit<Patient, "id">;
