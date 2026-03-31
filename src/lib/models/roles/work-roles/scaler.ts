import type { Project } from "$lib/models/project";
import type { Role } from "$lib/models/roles/common-roles"
import { pythonSkill } from "$lib/models/skills";

const modelAI: Project = {
  name: "Model AI",
  shortDescription: "RAG-based data modelling tool",
  description: `
A complex solution for data modellers that helps in the most important steps of their daily work.

Capable of generation of conceptual, logical and physicial models based on industry standards, internal documentation and the code used for the data pipelines. 
`,
  skills: [pythonSkill],
};

export const telekomSeniorAIEngineer: Role = {
  category: "Work Experience",
  name: "Senior AI Engineer",
  startDate: new Date("2025-09-01"),
  endDate: new Date('2026-03-31'),
  instutition: "Magyar Telekom",
  location: "Budapest",
  description: `
Design and development of the Model AI project.
`,
  bulletPoints: [],
  projects: [modelAI],
  skills: [],
};


export const telekomTechLead: Role = {
  category: "Work Experience",
  name: "Tech Lead",
  startDate: new Date("2026-04-01"),
  instutition: "Magyar Telekom",
  location: "Budapest",
  description: `
Design and development of the Model AI project.
`,
  bulletPoints: [],
  projects: [modelAI],
  skills: [],
};
