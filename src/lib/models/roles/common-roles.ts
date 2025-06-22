import type { Project } from "../project";
import type { Skill } from "../skills";
import educationRoles from "./education-roles";
import researchRoles from "./research-roles";
import volunteerRoles from "./volunteer-roles";
import workRoles from "./work-roles";

export const roleCategories = [
  "Work Experience",
  "Research",
  "Education",
  "Volunteering",
  "Course",
] as const;

export type RoleCategory = (typeof roleCategories)[number];

export type Role = {
  category: RoleCategory;
  name: string;
  startDate: Date;
  endDate?: Date;
  instutition?: string;
  location?: string;
  description?: string;
  bulletPoints?: string[];
  projects?: Project[];
  skills?: Skill[];
};

const roles = [
  ...workRoles,
  ...researchRoles,
  ...educationRoles,
  ...volunteerRoles,
];

export default roles;

export function getRoleSkills(role: Role): Skill[] {
  let skills = role.skills || [];

  for (const project of role.projects || []) {
    skills = skills.concat(project.skills || []);
  }

  let uniqueSkills = new Set(skills);
  return Array.from(uniqueSkills);
}

export function getGeneralRoleSkills(role: Role): Skill[] {
  let projectSkills: Skill[] = [];
  for (const project of role.projects || []) {
    projectSkills = projectSkills.concat(project.skills || []);
  }

  return (role.skills || []).filter(
    (roleSkill) => !projectSkills.includes(roleSkill)
  );
}
