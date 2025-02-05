<script lang="ts">
  import history from "$lib/models/history";
  import type { Skill } from "$lib/models/skills";

  export let skill: Skill;
</script>

<h1>{skill.name}</h1>
<p>{skill.mastery}</p>

Projects:
<ul>
  {#each history.getProjectsBySkill(skill) as project}
    <li>{project.name}</li>
  {/each}
</ul>

Roles:
<ul>
  {#each history.getRolesBySkill(skill) as role}
    <li>{role.name}</li>
  {/each}
</ul>

Roles with General skill:
<ul>
  {#each history.getRolesByGeneralSkill(skill) as role}
    <li>{role.name}</li>
  {/each}
</ul>
