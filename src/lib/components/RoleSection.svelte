<script lang="ts">
  import type { Role } from "$lib/models/roles/common-roles";
  import AccordionItem from "./AccordionItem.svelte";
  import HistoryElement from "./HistoryElement.svelte";

  export let role: Role;
</script>

<div class="role-section">
  {#if role}
    <AccordionItem useStyle={false}>
      <HistoryElement
        title={role.name}
        location={role.instutition + ", " + role.location}
        time={role.startDate.getFullYear() +
          " - " +
          (role.endDate ? role.endDate.getFullYear() : "Present")}
        slot="headerSlot"
      />

      {#if role.description}
        <p class="role-description">{role.description}</p>
      {/if}
      {#if role.bulletPoints && role.bulletPoints.length > 0}
        <ul>
          {#each role.bulletPoints as bulletPoint}
            <li>{bulletPoint}</li>
          {/each}
        </ul>
      {/if}
    </AccordionItem>
  {/if}
</div>
