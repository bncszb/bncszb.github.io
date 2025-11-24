
import type { Project } from "$lib/models/project";
import type { Role } from "$lib/models/roles/common-roles"
import {
  kubernetesSkill,
  langchainSkill,
  langfuseSkill,
  neo4jSkill,
  qdrantSkill,
  typescriptSkill,
} from "$lib/models/skills";

const speechToFormProject: Project = {
  name: "Speech-to-form",
  shortDescription: "Speech-to-form service for filling out medical forms",
  description: `
A node service written in Typescript that uses Langchain to extract information from speech and fill out medical forms.

The transcript is created using a HIPAA compliant API. Afterwards, the text is processed by Langchain to extract the relevant information. For fields that has to have values from a valueset (like ICD-10 codes) Qdrant is used to find the most similar one.

Langfuse is used for tracing. The service is deployed in a Kubernetes cluster.
`,
  skills: [
    langchainSkill,
    qdrantSkill,
    langfuseSkill,
    kubernetesSkill,
    typescriptSkill,
  ],
};

const progressNoteSummarizationProject: Project = {
  name: "Progress Note Summarization",
  shortDescription: "Summarization of progress notes using Langchain",
  description: `
A Langchain component in Typescript that summarizes progress notes about the health of a patient. 

The multi-step process includes categorized extraction of information, summarization and reference resolution. 

Langfuse is used for tracing.
`,
  skills: [langchainSkill, langfuseSkill, typescriptSkill],
};

const knowledgeGraphProject: Project = {
  name: "Knowledge Graph",
  shortDescription: "Knowledge Graph extraction from text for chatbots",
  description: `
A Langchain component in Typescript that extracts information from text and creates a knowledge graph. The graph is stored in a Neo4j database.  

After the extraction, there are additional steps to clean the graph and to make it more understandable for the chatbot. The postprocessing steps include additional Langchain calls, similarity through embeddings and Cypher queries.
`,
  skills: [neo4jSkill, langchainSkill, qdrantSkill, typescriptSkill],
};

const biotHeadOfAIProjects: Project[] = [
  speechToFormProject,
  knowledgeGraphProject,
  progressNoteSummarizationProject,
];

export const biotHeadOfAIRole: Role = {
  category: "Work Experience",
  name: "Head of AI",
  startDate: new Date("2024-07-01"),
  endDate: new Date("2025-07-31"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  description: `
Responsible for the AI infrastructure and the AI projects at Biot.ai Lab.
`,
  bulletPoints: [],
  projects: biotHeadOfAIProjects,
  skills: [qdrantSkill, langchainSkill, typescriptSkill, neo4jSkill],
};
