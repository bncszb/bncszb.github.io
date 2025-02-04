import type { Project } from "../projects";
import {
  DockerTool,
  GoTool,
  KubernetesTool,
  LangchainTool,
  MlflowTool,
  MysqlTool,
  Neo4jTool,
  PandasTool,
  PlotlyTool,
  PytorchTool,
  QdrantTool,
  TensorflowTool,
  TypescriptTool,
} from "../tools";
import type { Role } from "./common-roles";

const speechToFormProject: Project = {
  name: "Speech-to-form",
  shortDescription: "Speech-to-form service for filling out medical forms",
  tools: [LangchainTool, QdrantTool],
};

const knowledgeGraphProject: Project = {
  name: "Knowledge Graph",
  shortDescription: "Knowledge Graph extraction from text for chatbots",
  tools: [Neo4jTool, LangchainTool],
};

const biotHeadOfAIRole: Role = {
  category: "Work Experience",
  name: "Head of AI",
  startDate: new Date("2024-07-01"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  bulletPoints: [],
  projects: [speechToFormProject, knowledgeGraphProject],
  tools: [QdrantTool, LangchainTool, TypescriptTool, Neo4jTool],
};

const medcationServiceProject: Project = {
  name: "Medication Service",
  shortDescription: "Medication microservice using DrugBank and Go",
  tools: [GoTool, MysqlTool],
};

const terminologyMatchingProject: Project = {
  name: "Terminology Matching",
  shortDescription:
    "Matching medical terminology between SNOMED CT, ICD-10 and RXNorm",
};

const fallRiskClassificationProject: Project = {
  name: "Fall Risk Classification",
  shortDescription: "Fall risk classification from progress notes",
  tools: [PytorchTool, MlflowTool],
};

const patientSimilaritySearchProject: Project = {
  name: "Patient Similarity Search",
  shortDescription:
    "Vectorized Patient Similarity search based on demographic data",
  tools: [QdrantTool, PytorchTool],
};

const biotSoftwareDeveloperRole: Role = {
  category: "Work Experience",
  name: "Software Developer",
  startDate: new Date("2022-12-01"),
  endDate: new Date("2024-07-01"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  bulletPoints: [
    "Development of a patient administration and Clinical Decision Support site",
    "Researching and building an AI infrastructure for NLP projects, like Fall Risk Classification from progress notes",
  ],
  projects: [
    medcationServiceProject,
    terminologyMatchingProject,
    fallRiskClassificationProject,
    patientSimilaritySearchProject,
  ],
  tools: [GoTool, KubernetesTool, MysqlTool],
};

const maskRCNNProject: Project = {
  name: "Mask R-CNN",
  shortDescription: "Instance segmentation using Mask R-CNN",
  tools: [TensorflowTool, DockerTool],
};

const dataValidationProject: Project = {
  name: "Data Validation",
  shortDescription: "Tools for validation of data generation in Plotly Dash",
  tools: [PlotlyTool],
};

const ulyssysAIRole: Role = {
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
  projects: [maskRCNNProject, dataValidationProject],
  tools: [TensorflowTool, PandasTool, DockerTool],
};

export default [biotHeadOfAIRole, biotSoftwareDeveloperRole, ulyssysAIRole];
