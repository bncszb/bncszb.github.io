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
  "Tools",
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

export const pythonSkill: Skill = {
  name: "Python",
  category: "Programming Languages",
  icon: SiPython,
  mastery: 10,
};

export const typescriptSkill: Skill = {
  name: "Typescript",
  category: "Programming Languages",
  icon: SiTypescript,
  mastery: 4,
};

export const goSkill: Skill = {
  name: "Go",
  category: "Programming Languages",
  icon: SiGo,
  mastery: 2,
};

export const pytorchSkill: Skill = {
  name: "PyTorch",
  category: "Frameworks",
  icon: SiPytorch,
  mastery: 6,
};

export const tensorflowSkill: Skill = {
  name: "Tensorflow",
  category: "Frameworks",
  icon: SiTensorflow,
  mastery: 6,
};

export const pandasSkill: Skill = {
  name: "Pandas",
  category: "Frameworks",
  icon: SiPandas,
  mastery: 6,
};

export const langchainSkill: Skill = {
  name: "Langchain",
  category: "Frameworks",
  icon: SiLangchain,
  mastery: 8,
};

export const networkxSkill: Skill = {
  name: "NetworkX",
  category: "Frameworks",
  mastery: 8,
};

export const plotlySkill: Skill = {
  name: "Plotly",
  category: "Frameworks",
  icon: SiPlotly,
  mastery: 6,
};

export const gitSkill: Skill = {
  name: "Git",
  category: "Tools",
  icon: SiGit,
  mastery: 7,
};

export const dockerSkill: Skill = {
  name: "Docker",
  category: "Tools",
  icon: SiDocker,
  mastery: 7,
};

export const kubernetesSkill: Skill = {
  name: "Kubernetes",
  category: "Tools",
  icon: SiKubernetes,
  mastery: 6,
};

export const mlflowSkill: Skill = {
  name: "MLflow",
  category: "Tools",
  icon: SiMlflow,
  mastery: 7,
};

export const langfuseSkill: Skill = {
  name: "Langfuse",
  category: "Tools",
  mastery: 4,
};

export const mysqlSkill: Skill = {
  name: "MySQL",
  category: "Databases",
  icon: SiMysql,
  mastery: 6,
};

export const qdrantSkill: Skill = {
  name: "Qdrant",
  category: "Databases",
  mastery: 8,
};

export const neo4jSkill: Skill = {
  name: "Neo4j",
  category: "Databases",
  icon: SiNeo4j,
  mastery: 4,
};

export const icd10Skill: Skill = {
  name: "ICD-10",
  category: "Medical Ontologies",
  mastery: 8,
};

export const snomedSkill: Skill = {
  name: "SNOMED CT",
  category: "Medical Ontologies",
  mastery: 8,
};

export const loincSkill: Skill = {
  name: "LOINC",
  category: "Medical Ontologies",
  mastery: 8,
};

export const drugbankSkill: Skill = {
  name: "Drugbank",
  category: "Medical Ontologies",
  mastery: 8,
};

export const rxNormSkill: Skill = {
  name: "RXNorm",
  category: "Medical Ontologies",
  mastery: 4,
};

export function getSkillsByCategory(
  skills: Skill[]
): Record<SkillCategory, Skill[]> {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);
}

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

export function getSkillKebab(skill: Skill | string): string {
  console.log(skill);
  const name = typeof skill === "string" ? skill : skill.name;
  return name.toLowerCase().replace(/ /g, "-");
}

export function getSkillUrlMap(skills: Skill[]): Map<string, Skill> {
  return new Map(skills.map((skill) => [getSkillKebab(skill), skill]));
}
