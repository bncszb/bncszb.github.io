import history from "$lib/models/history";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
  const projects = history.getProjects();
  const roles = history.getRolesChronologically();

  // Group projects by role category
  const projectsByCategory = roles.reduce((acc, role) => {
    if (role.projects && role.projects.length > 0) {
      if (!acc[role.category]) {
        acc[role.category] = [];
      }

      // Add role information to each project
      const projectsWithRole = role.projects.map((project) => ({
        ...project,
        role: {
          name: role.name,
          institution: role.instutition,
          startDate: role.startDate,
          endDate: role.endDate,
        },
      }));

      acc[role.category] = [...acc[role.category], ...projectsWithRole];
    }

    return acc;
  }, {} as Record<string, any[]>);

  return {
    projects,
    projectsByCategory,
  };
};
