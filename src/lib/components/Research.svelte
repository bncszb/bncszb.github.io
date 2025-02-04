<script>
  import researchRoles from "$lib/models/roles/research-roles";
  import RoleSection from "./RoleSection.svelte";
</script>

<h2>Research</h2>

{#each researchRoles as role}
  <RoleSection {role} />
{/each}
