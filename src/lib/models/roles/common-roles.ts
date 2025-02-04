import type { Project } from "../projects";
import type { Tool } from "../tools";
import educationRoles from "./education-roles";
import researchRoles from "./research-roles";
import volunteerRoles from "./volunteer-roles";
import workRoles from "./work-roles";

export const roleCategories = [
  "Work Experience",
  "Research",
  "Education",
  "Volunteering",
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
  tools?: Tool[];
};

const roles = [
  ...workRoles,
  ...researchRoles,
  ...educationRoles,
  ...volunteerRoles,
];

export default roles;

export function getRoleTools(role: Role): Tool[] {
  let tools = role.tools || [];

  for (const project of role.projects || []) {
    tools = tools.concat(project.tools || []);
  }

  return tools;
}
