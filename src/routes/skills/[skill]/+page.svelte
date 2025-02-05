<script lang="ts">
  import SkillDetails from "$lib/components/skill/SkillDetails.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { skill } = data;
</script>

<SkillDetails {skill} />
