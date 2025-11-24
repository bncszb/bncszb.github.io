
import type { Project } from "$lib/models/project"
import {
  dockerSkill,
  pandasSkill,
  plotlySkill,
  pythonSkill,
  tensorflowSkill,
} from "$lib/models/skills";
import type { Role } from "$lib/models/roles/common-roles"

const maskRCNNProject: Project = {
  name: "Mask R-CNN",
  shortDescription: "Instance segmentation using Mask R-CNN",
  description: `
A Tensorflow project that uses Mask R-CNN for instance segmentation in medical images. The goal of the project is to segment cancer in lung CT images. 

I joined the project in the middle of the development and I participated in the training and testing of the model, as well as experimenting with different architectures and processing steps.
`,
  skills: [tensorflowSkill, dockerSkill, pythonSkill],
};

const ensembleModelProject: Project = {
  name: "Ensemble Model",
  shortDescription: "Ensemble model for nodule segmentation",
  description: `
A Tensorflow project that combines different models for nodule segmentation in lung CT images. The project uses U-Net models and a Mask R-CNN model.
`,
  skills: [tensorflowSkill, dockerSkill, pythonSkill],
};

const dataValidationProject: Project = {
  name: "Data Validation",
  shortDescription: "Data validation tools in Plotly Dash",
  description: `
A data validation tool written in Python that uses Plotly Dash for visualization. The tool was created to validate the data generation process and visualized the generated image patches and the corresponding masks in a Dash Volume Slicer and Streamlit.
`,
  skills: [plotlySkill, pythonSkill],
};

const ulyssysAIResearcherProjects: Project[] = [
  ensembleModelProject,
  maskRCNNProject,
  dataValidationProject,
];

export const ulyssysAIResearcherRole: Role = {
  category: "Work Experience",
  name: "AI Researcher",
  startDate: new Date("2021-09-01"),
  endDate: new Date("2022-12-01"),
  instutition: "Ulyssys",
  location: "Budapest",
  description: `
Researcher in the Ulyssys AI group. The group worked on a EU funded project about malignant nodule segmentation in lung CT images.   
`,
  bulletPoints: [
    "Cancer segmentation in lung CT images using Deep Learning",
    "Ensuring compatibility between Medicine and Machine Learning",
    "Research and experimentation with Data Processing steps and Deep Learning architectures",
  ],
  projects: ulyssysAIResearcherProjects,
  skills: [tensorflowSkill, pandasSkill, dockerSkill],
};

