interface address {
  state: string;
  street: string;
  city: string;
}

interface insurance {
  insuranceId: string;
  memberId: string;
  insuranceProvider: string;
}

export interface singlePatientInterface {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  ethinicity: string;
  address: address;
  payment: insurance;
}

export interface patientInterface {
  data: singlePatientInterface[];
}
