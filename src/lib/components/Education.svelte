<script>
  import educationRoles from "$lib/models/roles/education-roles";
  import RoleSection from "./RoleSection.svelte";
</script>

<h2>Education</h2>

{#each educationRoles as role}
  <RoleSection {role} />
{/each}
