import type { Tool } from "../tools";

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
  tools?: Tool[];
};
