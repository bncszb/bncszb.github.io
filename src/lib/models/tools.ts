import {
  SiDocker,
  SiGit,
  SiGo,
  SiKubernetes,
  SiLangchain,
  SiMlflow,
  SiMysql,
  SiNeo4j,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiTypescript,
} from "@icons-pack/svelte-simple-icons";
import type { SvelteComponent } from "svelte";

export const toolCategories = [
  "Programming Languages",
  "Frameworks",
  "Tools",
  "Databases",
  "Medical Ontologies",
] as const;

export type ToolCategory = (typeof toolCategories)[number];

export type Tool = {
  name: string;
  category: ToolCategory;
  icon?: new (...args: any) => SvelteComponent;
};

export const PythonTool: Tool = {
  name: "Python",
  category: "Programming Languages",
  icon: SiPython,
};

export const TypescriptTool: Tool = {
  name: "Typescript",
  category: "Programming Languages",
  icon: SiTypescript,
};

export const GoTool: Tool = {
  name: "Go",
  category: "Programming Languages",
  icon: SiGo,
};

export const PytorchTool: Tool = {
  name: "PyTorch",
  category: "Frameworks",
  icon: SiPytorch,
};

export const TensorflowTool: Tool = {
  name: "Tensorflow",
  category: "Frameworks",
  icon: SiTensorflow,
};

export const LangchainTool: Tool = {
  name: "Langchain",
  category: "Frameworks",
  icon: SiLangchain,
};

export const NetworkxTool: Tool = {
  name: "NetworkX",
  category: "Frameworks",
};

export const GitTool: Tool = {
  name: "Git",
  category: "Tools",
  icon: SiGit,
};

export const DockerTool: Tool = {
  name: "Docker",
  category: "Tools",
  icon: SiDocker,
};

export const KubernetesTool: Tool = {
  name: "Kubernetes",
  category: "Tools",
  icon: SiKubernetes,
};

export const MlflowTool: Tool = {
  name: "MLflow",
  category: "Tools",
  icon: SiMlflow,
};

export const TensorboardTool: Tool = {
  name: "Tensorboard",
  category: "Tools",
};

export const LangfuseTool: Tool = {
  name: "Langfuse",
  category: "Tools",
};

export const MysqlTool: Tool = {
  name: "MySQL",
  category: "Databases",
  icon: SiMysql,
};

export const QdrantTool: Tool = {
  name: "Qdrant",
  category: "Databases",
};

export const Neo4jTool: Tool = {
  name: "Neo4j",
  category: "Databases",
  icon: SiNeo4j,
};

export const ICD10Tool: Tool = {
  name: "ICD-10",
  category: "Medical Ontologies",
};

export const SNOMEDTool: Tool = {
  name: "SNOMED CT",
  category: "Medical Ontologies",
};

export const LoincTool: Tool = {
  name: "LOINC",
  category: "Medical Ontologies",
};

export const DrugbankTool: Tool = {
  name: "Drugbank",
  category: "Medical Ontologies",
};

const tools: Tool[] = [
  PythonTool,
  TypescriptTool,
  GoTool,
  PytorchTool,
  TensorflowTool,
  LangchainTool,
  NetworkxTool,
  GitTool,
  DockerTool,
  KubernetesTool,
  MlflowTool,
  TensorboardTool,
  LangfuseTool,
  MysqlTool,
  QdrantTool,
  Neo4jTool,
  ICD10Tool,
  SNOMEDTool,
  LoincTool,
  DrugbankTool,
];

export const toolsByCategory: Record<ToolCategory, Tool[]> = tools.reduce(
  (acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  },
  {} as Record<ToolCategory, Tool[]>
);
