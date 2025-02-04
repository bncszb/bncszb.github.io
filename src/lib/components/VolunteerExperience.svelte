<script>
  import volunteerRoles from "$lib/models/roles/volunteer-roles";
  import RoleSection from "./RoleSection.svelte";
</script>

<h2>Volunteering</h2>

{#each volunteerRoles as role}
  <RoleSection {role} />
{/each}
