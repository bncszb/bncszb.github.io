<script lang="ts">
  import type { Role } from "$lib/models/roles/common-roles";

  export let role: Role;
</script>

<div class="role-details">
  <h3>{role.name}</h3>

  <p>{role.description}</p>

  {#if role.bulletPoints && role.bulletPoints.length > 0}
    <ul>
      {#each role.bulletPoints as bp}
        <li>{bp}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .role-details {
    margin: 1em;
  }
</style>
