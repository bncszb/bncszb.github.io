import type { Edge, Graph, Node } from "./graph";
import type { Project } from "./projects";
import allRoles, {
  getGeneralRoleSkills,
  getRoleSkills,
  type Role,
} from "./roles/common-roles";
import { getSkillsByCategory, getSkillUrlMap, type Skill } from "./skills";

export class History {
  constructor(public roles: Role[]) {}

  public getProjects(): Project[] {
    let projects: Project[] = [];

    for (const role of this.roles) {
      if (role.projects) {
        projects = projects.concat(role.projects);
      }
    }

    return projects;
  }

  public getSkillsWithSitutation(): Map<Skill, (Project | Role)[]> {
    let skills: Map<Skill, (Project | Role)[]> = new Map();

    for (const role of this.roles) {
      for (const skill of role.skills || []) {
        skills.set(skill, [...(skills.get(skill) ?? []), role]);
      }

      for (const project of role.projects || []) {
        for (const skill of project.skills || []) {
          skills.set(skill, [...(skills.get(skill) ?? []), project]);
        }
      }
    }

    return skills;
  }

  public getSkills(): Skill[] {
    return Array.from(this.getSkillsWithSitutation().keys());
  }

  public getProjectsBySkill(skill: Skill): Project[] {
    return this.getProjects().filter((project) =>
      project.skills?.map((s) => s.name).includes(skill.name)
    );
  }

  public getRolesBySkill(skill: Skill): Role[] {
    console.log(this.roles);
    return this.roles.filter((role) =>
      getRoleSkills(role)
        .map((s) => s.name)
        .includes(skill.name)
    );
  }

  public getRolesByGeneralSkill(skill: Skill): Role[] {
    return this.roles.filter((role) =>
      getGeneralRoleSkills(role)
        .map((s) => s.name)
        .includes(skill.name)
    );
  }

  public getStackGraph(): Graph {
    const nodes = new Map<string, Node>();
    const edges = new Map<string, Edge>();

    for (const project of this.getProjects()) {
      const skills = project.skills || [];

      if (skills.length < 2) continue;

      for (let i = 0; i < skills.length - 1; i++) {
        const source = skills[i];
        nodes.set(source.name, { id: source.name });

        for (let j = i + 1; j < skills.length; j++) {
          const target = skills[j];
          nodes.set(target.name, { id: target.name });

          const edgeId = `${source.name}-${target.name}`;
          if (!edges.has(edgeId)) {
            edges.set(edgeId, {
              source: source.name,
              target: target.name,
              weight: 1,
            });
          } else {
            edges.get(edgeId)!.weight!++;
          }
        }
      }
    }
    const graph = {
      nodes: Array.from(nodes.values()),
      edges: Array.from(edges.values()),
    };
    return graph;
  }
}
const history = new History(allRoles);

export default history;

export const skills = history.getSkills();
export const skillsByCategory = getSkillsByCategory(skills);
export const skillUrlMap = getSkillUrlMap(skills);
