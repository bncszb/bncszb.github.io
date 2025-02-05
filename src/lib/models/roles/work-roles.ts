import type { Project } from "../projects";
import {
  dockerSkill,
  drugbankSkill,
  goSkill,
  icd10Skill,
  kubernetesSkill,
  langchainSkill,
  langfuseSkill,
  mlflowSkill,
  mysqlSkill,
  neo4jSkill,
  networkxSkill,
  pandasSkill,
  plotlySkill,
  pythonSkill,
  pytorchSkill,
  qdrantSkill,
  rxNormSkill,
  snomedSkill,
  tensorflowSkill,
  typescriptSkill,
} from "../skills";
import type { Role } from "./common-roles";

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

const biotHeadOfAIRole: Role = {
  category: "Work Experience",
  name: "Head of AI",
  startDate: new Date("2024-07-01"),
  instutition: "Biot.ai Lab",
  location: "Budapest",
  description: `
Responsible for the AI infrastructure and the AI projects at Biot.ai Lab.
`,
  bulletPoints: [],
  projects: biotHeadOfAIProjects,
  skills: [qdrantSkill, langchainSkill, typescriptSkill, neo4jSkill],
};

const medcationServiceProject: Project = {
  name: "Medication Service",
  shortDescription: "Medication microservice using DrugBank and Go",
  description: `
A Go service that uses DrugBank to provide information about medications. 

The data is stored in a MySQL database. The service is deployed in a Kubernetes cluster.
`,
  skills: [goSkill, mysqlSkill, kubernetesSkill, drugbankSkill],
};

const terminologyMatchingProject: Project = {
  name: "Terminology Matching",
  shortDescription:
    "Matching medical terminology between SNOMED CT, ICD-10 and RXNorm",
  description: `
A microservice written in Python that matches medical terminology between medical ontologies, like SNOMED CT, ICD-10, DrugBank and RXNorm.
The service used a fuzzy matching algorithms along with a graph-based approach (NetworkX) to find the most similar concepts.
`,
  skills: [
    drugbankSkill,
    snomedSkill,
    icd10Skill,
    rxNormSkill,
    pythonSkill,
    networkxSkill,
  ],
};

const fallRiskClassificationProject: Project = {
  name: "Fall Risk Classification",
  shortDescription: "Fall risk classification from progress notes",
  description: `
A Python service that uses a fine-tuned BERT model to classify the fall risk of a patient based on their progress notes.

The training was done in Pytorch and the model was saved in Mlflow. 
`,
  skills: [pytorchSkill, mlflowSkill, pythonSkill],
};

const patientSimilaritySearchProject: Project = {
  name: "Patient Similarity Search",
  shortDescription:
    "Vectorized Patient Similarity search based on demographic data",
  description: `
A Python service that uses a custom language model based on BERT to vectorize patient data for similarity search. 

The model itself is a Pytorch model that was trained on synthetic demographic data. Since the required performance could be achieved with a small model, the inference is done on the CPU. To decrease hardware requirements a Python package was created in Rust using Maturin. The package uses Candle to run the model.

During training the metrics were logged on Tensorboard and the model was saved in Mlflow.
The service runs in a Kubernetes cluster.
`,
  skills: [qdrantSkill, pytorchSkill, mlflowSkill, pythonSkill],
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
  description: `
Backend developer with a focus on AI projects and medical supervision. The backend was written in Django with additional services in Go. During my time in this role I learned a lot about DevOps and Kubernetes as well.
`,
  bulletPoints: [
    "Development of a patient administration and Clinical Decision Support site",
    "Researching and building an AI infrastructure for NLP projects",
    "Backend development in Django and Go",
  ],
  projects: biotSoftwareDeveloperProjects,
  skills: [goSkill, kubernetesSkill, mysqlSkill],
};

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

const ulyssysAIResearcherRole: Role = {
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
