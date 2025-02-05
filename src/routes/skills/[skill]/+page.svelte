<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { skill } = data;
  console.log("svelte file =====");
  console.log(skill);
</script>

<h1>{skill.title}</h1>
<p>{skill.description}</p>
