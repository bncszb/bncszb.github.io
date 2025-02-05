import type { Project } from "../projects";
import {
  DockerSkill,
  DrugbankSkill,
  GoSkill,
  ICD10Skill,
  KubernetesSkill,
  LangchainSkill,
  LangfuseSkill,
  MlflowSkill,
  MysqlSkill,
  Neo4jSkill,
  NetworkxSkill,
  PandasSkill,
  PlotlySkill,
  PythonSkill,
  PytorchSkill,
  QdrantSkill,
  RXNormSkill,
  SNOMEDSkill,
  TensorflowSkill,
  TypescriptSkill,
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
    LangchainSkill,
    QdrantSkill,
    LangfuseSkill,
    KubernetesSkill,
    TypescriptSkill,
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
  skills: [LangchainSkill, LangfuseSkill, TypescriptSkill],
};

const knowledgeGraphProject: Project = {
  name: "Knowledge Graph",
  shortDescription: "Knowledge Graph extraction from text for chatbots",
  description: `
A Langchain component in Typescript that extracts information from text and creates a knowledge graph. The graph is stored in a Neo4j database.  

After the extraction, there are additional steps to clean the graph and to make it more understandable for the chatbot. The postprocessing steps include additional Langchain calls, similarity through embeddings and Cypher queries.
`,
  skills: [Neo4jSkill, LangchainSkill, QdrantSkill, TypescriptSkill],
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
  skills: [QdrantSkill, LangchainSkill, TypescriptSkill, Neo4jSkill],
};

const medcationServiceProject: Project = {
  name: "Medication Service",
  shortDescription: "Medication microservice using DrugBank and Go",
  description: `
A Go service that uses DrugBank to provide information about medications. 

The data is stored in a MySQL database. The service is deployed in a Kubernetes cluster.
`,
  skills: [GoSkill, MysqlSkill, KubernetesSkill, DrugbankSkill],
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
    DrugbankSkill,
    SNOMEDSkill,
    ICD10Skill,
    RXNormSkill,
    PythonSkill,
    NetworkxSkill,
  ],
};

const fallRiskClassificationProject: Project = {
  name: "Fall Risk Classification",
  shortDescription: "Fall risk classification from progress notes",
  description: `
A Python service that uses a fine-tuned BERT model to classify the fall risk of a patient based on their progress notes.

The training was done in Pytorch and the model was saved in Mlflow. 
`,
  skills: [PytorchSkill, MlflowSkill, PythonSkill],
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
  skills: [
    QdrantSkill,
    PytorchSkill,
    MlflowSkill,
    PythonSkill,
  ],
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
