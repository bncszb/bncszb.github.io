import {
  DockerTool,
  GoTool,
  KubernetesTool,
  LangchainTool,
  MysqlTool,
  Neo4jTool,
  PandasTool,
  QdrantTool,
  TensorflowTool,
  TypescriptTool,
} from "../tools";
import type { Role } from "./common-roles";

const BiotHeadOfAIRole: Role = {
  category: "Work Experience",
  name: "Head of AI",
  startDate: new Date("2024-07-01"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  bulletPoints: [
    "Vectorized Patient Similarity search based on demographic data using qdrant",
    "Speech-to-form service for filling out medical forms using LangChain",
  ],
  tools: [QdrantTool, LangchainTool, TypescriptTool, Neo4jTool],
};

const BiotSoftwareDeveloperRole: Role = {
  category: "Work Experience",
  name: "Software Developer",
  startDate: new Date("2022-12-01"),
  endDate: new Date("2024-07-01"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  bulletPoints: [
    "Development of a patient administration and Clinical Decision Support site",
    "Researching and building an AI infrastructure for NLP projects, like Fall Risk Classification from progress notes",
    "Creation of a medical terminology matching microservice for free text, using medical knowledge graphs like SNOMED CT or RXNorm",
    "Medication microservice using DrugBank and Go",
  ],
  tools: [GoTool, KubernetesTool, MysqlTool],
};

const UlyssysAIRole: Role = {
  category: "Work Experience",
  name: "AI Researcher",
  startDate: new Date("2021-09-01"),
  endDate: new Date("2022-12-01"),
  instutition: "Ulyssys",
  location: "Budapest",
  bulletPoints: [
    "Cancer segmentation in lung CT images using Deep Learning",
    "Ensuring compatibility between Medicine and Machine Learning",
    "Research and experimentation with Data Processing steps and Deep Learning architectures",
    "Data visualization and analysis",
  ],
  tools: [TensorflowTool, PandasTool, DockerTool],
};

export default [BiotHeadOfAIRole, BiotSoftwareDeveloperRole, UlyssysAIRole];
