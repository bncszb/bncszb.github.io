
import type { Project } from "$lib/models/project"
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
} from "$lib/models/skills"
import type { Role } from "$lib/models/roles/common-roles"
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
  skills: [
    qdrantSkill,
    pytorchSkill,
    mlflowSkill,
    pythonSkill,
    kubernetesSkill,
  ],
};

const biotSoftwareDeveloperProjects: Project[] = [
  medcationServiceProject,
  terminologyMatchingProject,
  fallRiskClassificationProject,
  patientSimilaritySearchProject,
];

export const biotSoftwareDeveloperRole: Role = {
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

