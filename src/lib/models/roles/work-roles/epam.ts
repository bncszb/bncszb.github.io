import type { Project } from "$lib/models/project";
import { pythonSkill } from "$lib/models/skills";
import type { Role } from "../common-roles";

const AZAIEngineer: Project = {
	name: "Senior AI Engineer at AstraZeneca",
	shortDescription: "AI Engineer at AstraZeneca",
	description: `
Developed LLM-based solutions for study design and risk assessment.
`,
skills: [pythonSkill],
} 


export const epamSeniorSoftwareEngineer: Role = {
	category: "Work Experience",
	name: "Senior Software Engineer",
	startDate: new Date("2026-07-22"),
	institution: "EPAM Systems",
	location: "Budapest",
	description: `
Senior Software Engineer part of the Scientific programming team. Focusing on AI solutions for different projects mainly in the pharmaceutical domain. 
`,

	bulletPoints: [],
	projects: [AZAIEngineer],
	skills: [pythonSkill],
};
