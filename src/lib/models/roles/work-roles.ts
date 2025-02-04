import type { Project } from "../projects";
import {
  DockerSkill,
  GoSkill,
  KubernetesSkill,
  LangchainSkill,
  MlflowSkill,
  MysqlSkill,
  Neo4jSkill,
  PandasSkill,
  PlotlySkill,
  PytorchSkill,
  QdrantSkill,
  TensorflowSkill,
  TypescriptSkill,
} from "../skills";
import type { Role } from "./common-roles";

const speechToFormProject: Project = {
  name: "Speech-to-form",
  shortDescription: "Speech-to-form service for filling out medical forms",
  skills: [LangchainSkill, QdrantSkill],
};

const knowledgeGraphProject: Project = {
  name: "Knowledge Graph",
  shortDescription: "Knowledge Graph extraction from text for chatbots",
  skills: [Neo4jSkill, LangchainSkill],
};

const biotHeadOfAIProjects: Project[] = [
  speechToFormProject,
  knowledgeGraphProject,
];

const biotHeadOfAIRole: Role = {
  category: "Work Experience",
  name: "Head of AI",
  startDate: new Date("2024-07-01"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  bulletPoints: [],
  projects: biotHeadOfAIProjects,
  skills: [QdrantSkill, LangchainSkill, TypescriptSkill, Neo4jSkill],
};

const medcationServiceProject: Project = {
  name: "Medication Service",
  shortDescription: "Medication microservice using DrugBank and Go",
  skills: [GoSkill, MysqlSkill],
};

const terminologyMatchingProject: Project = {
  name: "Terminology Matching",
  shortDescription:
    "Matching medical terminology between SNOMED CT, ICD-10 and RXNorm",
};

const fallRiskClassificationProject: Project = {
  name: "Fall Risk Classification",
  shortDescription: "Fall risk classification from progress notes",
  skills: [PytorchSkill, MlflowSkill],
};

const patientSimilaritySearchProject: Project = {
  name: "Patient Similarity Search",
  shortDescription:
    "Vectorized Patient Similarity search based on demographic data",
  skills: [QdrantSkill, PytorchSkill],
};

const biotSoftwareDeveloperProjects: Project[] = [
  medcationServiceProject,
  terminologyMatchingProject,
  fallRiskClassificationProject,
  patientSimilaritySearchProject,
];

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
  projects: biotSoftwareDeveloperProjects,
  skills: [GoSkill, KubernetesSkill, MysqlSkill],
};

const maskRCNNProject: Project = {
  name: "Mask R-CNN",
  shortDescription: "Instance segmentation using Mask R-CNN",
  skills: [TensorflowSkill, DockerSkill],
};

const dataValidationProject: Project = {
  name: "Data Validation",
  shortDescription: "Tools for validation of data generation in Plotly Dash",
  skills: [PlotlySkill],
};

const ulyssysAIResearcherProjects: Project[] = [
  maskRCNNProject,
  dataValidationProject,
];

const ulyssysAIResearcherRole: Role = {
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
  projects: ulyssysAIResearcherProjects,
  skills: [TensorflowSkill, PandasSkill, DockerSkill],
};

export const workProjects = [
  ...biotHeadOfAIProjects,
  ...biotSoftwareDeveloperProjects,
  ...ulyssysAIResearcherProjects,
];

export default [
  biotHeadOfAIRole,
  biotSoftwareDeveloperRole,
  ulyssysAIResearcherRole,
];
