import type { Project } from "./projects";
import allRoles, {
  getGeneralRoleSkills,
  getRoleSkills,
  type Role,
} from "./roles/common-roles";
import type { Skill } from "./skills";

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
      project.skills?.includes(skill)
    );
  }

  public getRolesBySkill(skill: Skill): Role[] {
    return this.roles.filter((role) => getRoleSkills(role).includes(skill));
  }

  public getRolesByGeneralSkill(skill: Skill): Role[] {
    return this.roles.filter((role) =>
      getGeneralRoleSkills(role).includes(skill)
    );
  }
}
const history = new History(allRoles);

export default history;
