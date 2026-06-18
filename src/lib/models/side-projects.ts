import type { Project } from "./project";
import {
	dockerSkill,
	icd10Skill,
	neo4jSkill,
	postgresSkill,
	pythonSkill,
	reactSkill,
	rustSkill,
	snomedSkill,
	svelteSkill,
	typescriptSkill,
} from "./skills";

const report: Project = {
	name: "VHK Report",
	shortDescription:
		"A Rust + Svelte application for internal emergency reporting in an NGO",
	description: `
An internal reporting tool for emargencies, focusing on safety and efficiency.

The backend is written in Rust to reduce the chance of runtime error – and also a great learning opportunity – with axum as the http server framework. A node client is generated using openapi generator and used in the Svelte frontend.

Other tools:
- Postgres for db
- Rustfs for storage
- Maplibre for visualizing events on map
`,
	skills: [svelteSkill, typescriptSkill, rustSkill, postgresSkill],
};

const prio: Project = {
	name: "Prio",
	shortDescription: "A Nextjs app to train smarter",
	description: `
This application solves workout planning for people with a lot of training goals and a disorganized lifestyle.

The core concept is that users can assign priorities and resting periods for each exercise they add. This way, during training the user only have to check what exercises are there in the 'backlog' and choose from them. So the user always sees what needs to be done, but also if there is an item with higher priority it can rise above the nice-to-have exercises.

Exercise groups can also be created, so one exercise can put another to 'cooldown'.

The project is developed in Typescript using React and Nextjs. It is deployed on Vercel at http://move-prio.vercel.app.
`,
	skills: [reactSkill, typescriptSkill],
};

const awesomeMedicalKnowledgeProject: Project = {
	name: "Awesome Medical Knowledge",
	shortDescription:
		"A curated list of interesting and important resources in the field of Medical Knowledge Modeling",
	description: `
This curated list is for me and others interested in the field of Medical Knowledge Modeling.

It collects resources that are useful for understanding medical information in a structured and explainable way.
It has everything from integration using FHIR, CDA or other standards to ingesting that information as knowledge graphs or RAG systems.
`,
	skills: [],
	github: "https://github.com/bncszb/awesome-medical-knowledge",
};

const icdNeo4jLoaderProject: Project = {
	name: "ICD Neo4j Loader",
	shortDescription:
		"A small loader package that helps loading ICD data into Neo4j",
	description: `
A small loader package that helps loading ICD data into Neo4j.
`,
	skills: [neo4jSkill, pythonSkill, icd10Skill],
	github: "https://github.com/bncszb/icd-neo4j-loader",
};
const snomedNeo4jProject: Project = {
	name: "SNOMED Neo4j",
	shortDescription:
		"Containerized Neo4j representation of SNOMED CT with Python client",
	description: `
A containerized SNOMED CT database using Neo4j, with an option to reduce the graph to hierarchies under certain concepts selected by the user or keep only given relationship types for a smaller image.

Due to licensing, the data is imported during local build using a UMLS API key.
`,
	skills: [dockerSkill, neo4jSkill, pythonSkill, snomedSkill],
	github: "https://github.com/bncszb/snomed-neo4j",
};

export const sideProjects = [
	report,
	prio,
	awesomeMedicalKnowledgeProject,
	icdNeo4jLoaderProject,
	snomedNeo4jProject,
];
