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
  mastery: number;
};

export const PythonSkill: Skill = {
  name: "Python",
  category: "Programming Languages",
  icon: SiPython,
  mastery: 10,
};

export const TypescriptSkill: Skill = {
  name: "Typescript",
  category: "Programming Languages",
  icon: SiTypescript,
  mastery: 4,
};

export const GoSkill: Skill = {
  name: "Go",
  category: "Programming Languages",
  icon: SiGo,
  mastery: 2,
};

export const PytorchSkill: Skill = {
  name: "PyTorch",
  category: "Frameworks",
  icon: SiPytorch,
  mastery: 6,
};

export const TensorflowSkill: Skill = {
  name: "Tensorflow",
  category: "Frameworks",
  icon: SiTensorflow,
  mastery: 6,
};

export const PandasSkill: Skill = {
  name: "Pandas",
  category: "Frameworks",
  icon: SiPandas,
  mastery: 6,
};

export const LangchainSkill: Skill = {
  name: "Langchain",
  category: "Frameworks",
  icon: SiLangchain,
  mastery: 8,
};

export const NetworkxSkill: Skill = {
  name: "NetworkX",
  category: "Frameworks",
  mastery: 8,
};

export const PlotlySkill: Skill = {
  name: "Plotly",
  category: "Frameworks",
  icon: SiPlotly,
  mastery: 6,
};

export const GitSkill: Skill = {
  name: "Git",
  category: "Skills",
  icon: SiGit,
  mastery: 7,
};

export const DockerSkill: Skill = {
  name: "Docker",
  category: "Skills",
  icon: SiDocker,
  mastery: 7,
};

export const KubernetesSkill: Skill = {
  name: "Kubernetes",
  category: "Skills",
  icon: SiKubernetes,
  mastery: 6,
};

export const MlflowSkill: Skill = {
  name: "MLflow",
  category: "Skills",
  icon: SiMlflow,
  mastery: 7,
};

export const TensorboardSkill: Skill = {
  name: "Tensorboard",
  category: "Skills",
  mastery: 7,
};

export const LangfuseSkill: Skill = {
  name: "Langfuse",
  category: "Skills",
  mastery: 4,
};

export const MysqlSkill: Skill = {
  name: "MySQL",
  category: "Databases",
  icon: SiMysql,
  mastery: 6,
};

export const QdrantSkill: Skill = {
  name: "Qdrant",
  category: "Databases",
  mastery: 8,
};

export const Neo4jSkill: Skill = {
  name: "Neo4j",
  category: "Databases",
  icon: SiNeo4j,
  mastery: 4,
};

export const ICD10Skill: Skill = {
  name: "ICD-10",
  category: "Medical Ontologies",
  mastery: 8,
};

export const SNOMEDSkill: Skill = {
  name: "SNOMED CT",
  category: "Medical Ontologies",
  mastery: 8,
};

export const LoincSkill: Skill = {
  name: "LOINC",
  category: "Medical Ontologies",
  mastery: 8,
};

export const DrugbankSkill: Skill = {
  name: "Drugbank",
  category: "Medical Ontologies",
  mastery: 8,
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

export function getSkillsByTier(
  skills: Skill[],
  tier: number,
  tierRatios: number[]
): Skill[] {
  const ratioSum = tierRatios.reduce((acc, ratio) => acc + ratio, 0);

  const orderedSkills = skills.sort((a, b) => b.mastery - a.mastery);

  const start =
    (orderedSkills.length *
      tierRatios.slice(0, tier).reduce((acc, ratio) => acc + ratio, 0)) /
    ratioSum;

  const end =
    (orderedSkills.length *
      tierRatios.slice(0, tier + 1).reduce((acc, ratio) => acc + ratio, 0)) /
    ratioSum;

  return orderedSkills.slice(start, end);
}
