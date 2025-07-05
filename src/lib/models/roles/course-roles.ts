import { neo4jSkill } from "../skills";
import { getCertificationBulletPoints, type Certification } from "../types";
import type { Role } from "./common-roles";

const neo4jFundamentals: Certification = {
  name: "Neo4j Fundamentals",
  url: "https://graphacademy.neo4j.com/c/9efffb85-f16f-43f1-ac05-8c47e69fcced/",
};

const cypherFundamentals: Certification = {
  name: "Cypher Fundamentals",
  url: "https://graphacademy.neo4j.com/c/4101b6c1-4a55-4936-9a94-d9cadcbb4e8d/",
};

const graphDataModelingFundamentals: Certification = {
  name: "Graph Data Modeling Fundamentals",
  url: "https://graphacademy.neo4j.com/c/cb27bc0b-e79e-43cb-be85-7014156dd226/",
};

const importingDataFundamentals: Certification = {
  name: "Importing Data Fundamentals",
  url: "https://graphacademy.neo4j.com/c/a6db88e4-a0b3-4cfb-97c5-554885dc6e06/",
};

const intermediateCypherQueries: Certification = {
  name: "Intermediate Cypher Queries",
  url: "https://graphacademy.neo4j.com/c/9efc04f0-7328-41ba-a2b3-719bb8e1f3d0/",
};

const usingNeo4jWithPython: Certification = {
  name: "Using Neo4j with Python",
  url: "https://graphacademy.neo4j.com/c/75e00327-2cb3-4589-95da-df947a49e0a9/",
};

const introductionToNeo4jGraphDataScience: Certification = {
  name: "Introduction to Neo4j Graph Data Science",
  url: "https://graphacademy.neo4j.com/c/2b9cd60b-8a09-4380-9a04-bde57100b10e/",
};

const neo4jGraphDataScienceFundamentals: Certification = {
  name: "Neo4j Graph Data Science Fundamentals",
  url: "https://graphacademy.neo4j.com/c/b4f7f3cd-271f-4345-a9f6-ca1db9602314/",
};

const pathFindingWithGDS: Certification = {
  name: "Path Finding with GDS",
  url: "https://graphacademy.neo4j.com/c/2c5246be-7b32-4403-a5bf-d28202dd9a45/",
};

const introductionToVectorIndexesAndUnstructuredData: Certification = {
  name: "Introduction to Vector Indexes and Unstructured Data",
  url: "https://graphacademy.neo4j.com/c/542aa4d1-938e-43d4-95ca-aec9df9b98a4/",
};

const cypherAggregations: Certification = {
  name: "Cypher Aggregations",
  url: "https://graphacademy.neo4j.com/c/27b86973-f856-45c8-adc4-f79e429273b3/",
};

const Neo4jProfessional: Role = {
  category: "Course",
  name: "Neo4j Certified Professional",
  startDate: new Date("2025-05-01"),
  endDate: new Date("2025-06-01"),
  instutition: "GraphAcademy",
  location: "Neo4j",
  // bulletPoints: [
  //   "Biochemistry competition: 5th place (2015)",
  //   "Biophysics competition: 6th place (2015)",
  //   "Research in LinkGroup",
  // ],
  description: `
The Neo4j Certified Professional is a certification that demonstrates proficiency in using Neo4j, a leading graph database technology. This certification covers fundamental concepts of graph databases, Cypher query language, data modeling, and practical applications of Neo4j.

Completed courses include:

${getCertificationBulletPoints([
  neo4jFundamentals,
  cypherFundamentals,
  cypherAggregations,
  graphDataModelingFundamentals,
  importingDataFundamentals,
  intermediateCypherQueries,
  usingNeo4jWithPython,
  introductionToNeo4jGraphDataScience,
  neo4jGraphDataScienceFundamentals,
  introductionToVectorIndexesAndUnstructuredData,
  pathFindingWithGDS,
])}

[Neo4j Certified Professional Certificate](https://graphacademy.neo4j.com/c/ba749cdc-9371-49a5-8eb9-4b63917a4307/)
`,
  skills: [neo4jSkill],
};

const machineLearning: Certification = {
  name: "Machine Learning by Andrew Ng",
};

const neuralNetworksAndDeepLearning: Certification = {
  name: "Neural Networks and Deep Learning",
  url: "https://www.coursera.org/account/accomplishments/verify/MVE76QN8YZDF",
};

const customModelsLayersAndLossFunctions: Certification = {
  name: "Custom Models, Layers, and Loss Functions with TensorFlow",
  url: "https://www.coursera.org/account/accomplishments/verify/4ZBNLEMTRM5T",
};

const customAndDistributedTrainingWithTensorFlow: Certification = {
  name: "Custom and Distributed Training with TensorFlow",
  url: "https://www.coursera.org/account/accomplishments/verify/HL6WPKHG3CBH",
};

const DeepLearningCourses: Role = {
  category: "Course",
  name: "Deep Learning Courses",
  startDate: new Date("2020-07-01"),
  endDate: new Date("2021-08-01"),
  instutition: "DeepLearning.ai",
  location: "Coursera",
  description: `Completed various deep learning courses on DeepLearning.ai, focusing on neural networks, convolutional networks, and sequence models. These courses provided a solid foundation in deep learning techniques and their applications in real-world scenarios.
  
Completed courses include:
${getCertificationBulletPoints([
  machineLearning,
  neuralNetworksAndDeepLearning,
  customModelsLayersAndLossFunctions,
  customAndDistributedTrainingWithTensorFlow,
])}
  
  `,
};

export default [Neo4jProfessional, DeepLearningCourses];
