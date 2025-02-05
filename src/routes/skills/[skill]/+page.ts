import { skillUrlMap } from "$lib/models/history";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const skill = skillUrlMap.get(params.skill);
  if (!skill) {
    throw new Error("Skill not found");
  }
  return {
    skill,
  };
};

export const prerender = true;

export async function entries() {
  return [...skillUrlMap.keys()].map((skill) => ({ skill }));
}
