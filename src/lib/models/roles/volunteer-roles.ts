import type { Role } from "./common-roles";

const MalteseRole: Role = {
  category: "Volunteering",
  name: "Disaster and Humanitarian Relief",
  startDate: new Date("2019-07-01"),
  instutition: "Hungarian Charity Service of the Order of Malta",
  location: "Budapest",
  description:``,
  bulletPoints: [
    "Dunabogdány flood - 2024",
    "COVID19 - Testing and vaccination",
    "Flash floods and storms - psychosocial crisis intervention and logistics",
    "Medical screening of Transylvanian population",
  ],
};

const KorhazSuliRole: Role = {
  category: "Volunteering",
  name: "Teaching",
  startDate: new Date("2020-09-01"),
  endDate: new Date("2021-03-01"),
  instutition: "KórházSuli",
  location: "Budapest",
  bulletPoints: ["Online teaching of high school students", "Physics"],
};

export default [MalteseRole, KorhazSuliRole];
