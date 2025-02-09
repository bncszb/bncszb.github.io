<svelte:options customElement="skill-details" />

<script lang="ts">
  import history from "$lib/models/history";
  import type { Skill } from "$lib/models/skills";
  import ProjectDetails from "../project/ProjectDetails.svelte";
  import RoleDetails from "../role/RoleDetails.svelte";

  type Props = {
    skill: Skill;
  };

  let { skill }: Props = $props();

  const projects = $derived.by(() => history.getProjectsBySkill(skill));

  const roles = $derived.by(() => history.getRolesByGeneralSkill(skill));

  let iconSize = 40;
</script>

<table>
  <tbody>
    <tr>
      <td><h1>{skill.name}</h1></td>
      {#if skill.icon}
        <td><skill.icon size={iconSize} /></td>
      {/if}
    </tr>
  </tbody>
</table>

<h2>Experience</h2>
{#each projects as project}
  <ProjectDetails {project} />
{/each}

{#each roles as role}
  <RoleDetails {role} />
{/each}

<style>
  table {
    margin-left: auto;
    margin-right: auto;
  }
</style>
