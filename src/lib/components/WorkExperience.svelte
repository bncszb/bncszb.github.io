<script>
  import workRoles from "$lib/models/roles/work-roles";
  import RoleSection from "./RoleSection.svelte";
</script>

<h2>Work Experience</h2>

{#each workRoles as role}
  <RoleSection {role} />
{/each}
