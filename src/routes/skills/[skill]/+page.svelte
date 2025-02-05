<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { skill } = data;
</script>

<h1>{skill.name}</h1>
<p>{skill.mastery}</p>
