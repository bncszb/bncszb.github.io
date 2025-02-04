import {
  SiDocker,
  SiGit,
  SiGo,
  SiKubernetes,
  SiLangchain,
  SiMlflow,
  SiMysql,
  SiNeo4j,
  SiPandas,
  SiPlotly,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiTypescript,
} from "@icons-pack/svelte-simple-icons";
import type { SvelteComponent } from "svelte";

export const skillCategories = [
  "Programming Languages",
  "Frameworks",
  "Skills",
  "Databases",
  "Medical Ontologies",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type Skill = {
  name: string;
  category: SkillCategory;
  icon?: new (...args: any) => SvelteComponent;
};

export const PythonSkill: Skill = {
  name: "Python",
  category: "Programming Languages",
  icon: SiPython,
};

export const TypescriptSkill: Skill = {
  name: "Typescript",
  category: "Programming Languages",
  icon: SiTypescript,
};

export const GoSkill: Skill = {
  name: "Go",
  category: "Programming Languages",
  icon: SiGo,
};

export const PytorchSkill: Skill = {
  name: "PyTorch",
  category: "Frameworks",
  icon: SiPytorch,
};

export const TensorflowSkill: Skill = {
  name: "Tensorflow",
  category: "Frameworks",
  icon: SiTensorflow,
};

export const PandasSkill: Skill = {
  name: "Pandas",
  category: "Frameworks",
  icon: SiPandas,
};

export const LangchainSkill: Skill = {
  name: "Langchain",
  category: "Frameworks",
  icon: SiLangchain,
};

export const NetworkxSkill: Skill = {
  name: "NetworkX",
  category: "Frameworks",
};

export const PlotlySkill: Skill = {
  name: "Plotly",
  category: "Frameworks",
  icon: SiPlotly,
};

export const GitSkill: Skill = {
  name: "Git",
  category: "Skills",
  icon: SiGit,
};

export const DockerSkill: Skill = {
  name: "Docker",
  category: "Skills",
  icon: SiDocker,
};

export const KubernetesSkill: Skill = {
  name: "Kubernetes",
  category: "Skills",
  icon: SiKubernetes,
};

export const MlflowSkill: Skill = {
  name: "MLflow",
  category: "Skills",
  icon: SiMlflow,
};

export const TensorboardSkill: Skill = {
  name: "Tensorboard",
  category: "Skills",
};

export const LangfuseSkill: Skill = {
  name: "Langfuse",
  category: "Skills",
};

export const MysqlSkill: Skill = {
  name: "MySQL",
  category: "Databases",
  icon: SiMysql,
};

export const QdrantSkill: Skill = {
  name: "Qdrant",
  category: "Databases",
};

export const Neo4jSkill: Skill = {
  name: "Neo4j",
  category: "Databases",
  icon: SiNeo4j,
};

export const ICD10Skill: Skill = {
  name: "ICD-10",
  category: "Medical Ontologies",
};

export const SNOMEDSkill: Skill = {
  name: "SNOMED CT",
  category: "Medical Ontologies",
};

export const LoincSkill: Skill = {
  name: "LOINC",
  category: "Medical Ontologies",
};

export const DrugbankSkill: Skill = {
  name: "Drugbank",
  category: "Medical Ontologies",
};

const skills: Skill[] = [
  PythonSkill,
  TypescriptSkill,
  GoSkill,
  PytorchSkill,
  TensorflowSkill,
  PandasSkill,
  LangchainSkill,
  NetworkxSkill,
  GitSkill,
  DockerSkill,
  KubernetesSkill,
  MlflowSkill,
  TensorboardSkill,
  LangfuseSkill,
  MysqlSkill,
  QdrantSkill,
  Neo4jSkill,
  ICD10Skill,
  SNOMEDSkill,
  LoincSkill,
  DrugbankSkill,
];

export const skillsByCategory: Record<SkillCategory, Skill[]> = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<SkillCategory, Skill[]>
);
