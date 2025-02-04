import type { Role } from "./common-roles";

const MedicineRole: Role = {
  category: "Education",
  name: "Doctor of Medicine",
  startDate: new Date("2014-09-01"),
  endDate: new Date("2021-06-01"),
  instutition: "Semmelweis University",
  location: "Budapest",
  bulletPoints: [
    "Biochemistry competition: 5th place (2015)",
    "Biophysics competition: 6th place (2015)",
    "Research in LinkGroup",
    "Thesis:",
  ],
  tools: [],
};

const PhysicsRole: Role = {
  category: "Education",
  name: "Bachelor of Science in Physics",
  startDate: new Date("2016-09-01"),
  endDate: new Date("2020-06-01"),
  instutition: "Eötvös Loránd University",
  location: "Budapest",
  bulletPoints: ["Biophysics Specialization", "Thesis:"],
  tools: [],
};

export default [MedicineRole, PhysicsRole];
