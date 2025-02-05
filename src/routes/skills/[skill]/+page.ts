import type { PageLoad } from "./$types";

type SkillData = {
  title: string;
  description: string;
};

const skills: Record<string, SkillData> = {
  javascript: {
    title: "JavaScript",
    description: "A versatile programming language.",
  },
  svelte: { title: "Svelte", description: "A modern frontend framework." },
  css: { title: "CSS", description: "For styling web pages." },
};

export const load: PageLoad = ({ params }) => {
  const skill = skills[params.skill];
  if (!skill) {
    throw new Error("Skill not found");
  }
  return {
    skill,
  };
};

export const prerender = true;

export async function entries() {
  return ["javascript", "svelte", "css"].map((skill) => ({
    skill,
  }));
}
