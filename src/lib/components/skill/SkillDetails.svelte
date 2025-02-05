<script lang="ts">
  import type { Skill } from "$lib/models/skills";

  export let skill: Skill;
</script>

<h1>{skill.name}</h1>
<p>{skill.mastery}</p>
