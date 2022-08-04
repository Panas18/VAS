export interface singleVaccineServiceInterface {
  servicename: string;
  sitelocation: string;
  startdate: string;
  enddate: string;
  dosetype: string;
  duration: string;
  gender: string;
  age: string;
  ethinicity: string;
}

export interface vaccineServiceListInterface {
  data: singleVaccineServiceInterface[];
}
