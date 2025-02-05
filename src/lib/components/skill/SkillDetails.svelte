<script lang="ts">
  import history from "$lib/models/history";
  import type { Skill } from "$lib/models/skills";

  export let skill: Skill;

  const projects = history.getProjectsBySkill(skill);
</script>

<h1>{skill.name}</h1>
<p>{skill.mastery}</p>

Projects:
<ul>
  {#each projects as project}
    {project.name}
  {/each}
</ul>

Roles: