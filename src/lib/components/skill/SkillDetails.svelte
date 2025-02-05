<script lang="ts">
  import history from "$lib/models/history";
  import type { Skill } from "$lib/models/skills";
  import ProjectDetails from "../project/ProjectDetails.svelte";
  import RoleDetails from "../role/RoleDetails.svelte";

  export let skill: Skill;
  let iconSize = 40;
</script>

<table>
  <tbody>
    <tr>
      <td><h1>{skill.name}</h1></td>
      <td> <svelte:component this={skill.icon} size={iconSize} /></td>
    </tr>
  </tbody>
</table>

<h2>Experience</h2>
{#each history.getProjectsBySkill(skill) as project}
  <ProjectDetails {project} />
{/each}

{#each history.getRolesByGeneralSkill(skill) as role}
  <RoleDetails {role} />
{/each}

<style>
  table {
    margin-left: auto;
    margin-right: auto;
  }
</style>
