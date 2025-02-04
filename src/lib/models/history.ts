import type { Project } from "./projects";
import allRoles, { type Role } from "./roles/common-roles";
import type { Tool } from "./tools";

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

  public getTools(): Map<Tool, (Project | Role)[]> {
    let tools: Map<Tool, (Project | Role)[]> = new Map();

    for (const role of this.roles) {
      for (const tool of role.tools || []) {
        tools.set(tool, [...(tools.get(tool) ?? []), role]);
      }

      for (const project of role.projects || []) {
        for (const tool of project.tools || []) {
          tools.set(tool, [...(tools.get(tool) ?? []), project]);
        }
      }
    }

    return tools;
  }
}

const history = new History(allRoles);

export default history;
