import type { Skill } from "./skills";

export type Project = {
  name: string;
  shortDescription: string;
  description?: string;
  bulletPoints?: string[];
  skills?: Skill[];
};
