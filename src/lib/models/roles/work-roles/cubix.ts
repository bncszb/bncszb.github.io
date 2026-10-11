import { dockerSkill, neo4jSkill, pythonSkill } from "$lib/models/skills";
import type { Role } from "../common-roles";




export const cubixTeacher: Role = {
	category: "Work Experience",
	name: "Teacher",
	startDate: new Date("2026-09-01"),
	institution: "Cubix",
	location: "Budapest",
	description: `
Created and teached an online course on Graph-based Retrieval-Augmented Generation (GraphRAG).

Check out the course [here](https://cubixedu.com/graphrag-kepzes-tudasgraf-alapu-ai-alkalmazasok-fejlesztese/).
`,

	bulletPoints: [],
	projects: [],
	skills: [pythonSkill, neo4jSkill, dockerSkill],
};
