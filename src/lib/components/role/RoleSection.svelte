<script lang="ts">
  import type { Role } from "$lib/models/roles/common-roles";
  import AccordionItem from "../AccordionItem.svelte";
  import HistoryElement from "../HistoryElement.svelte";
  import ShortDescriptionWIthIcons from "../project/ShortDescriptionWIthIcons.svelte";

  export let role: Role;
</script>

<div class="role-section">
  {#if role}
    <AccordionItem>
      <HistoryElement
        title={role.name}
        location={role.instutition + ", " + role.location}
        time={role.startDate.toLocaleString("en-US", {
          year: "numeric",
          month: "short",
        }) +
          " - " +
          (role.endDate
            ? role.endDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
              })
            : "Present")}
        slot="headerSlot"
      />

      {#if role.description}
        <p class="role-description">{role.description}</p>
      {/if}

      {#if role.bulletPoints && role.bulletPoints.length > 0}
        {#each role.bulletPoints as bulletPoint}
          <p>{bulletPoint}</p>
        {/each}
      {/if}

      {#if role.projects && role.projects.length > 0}
        {#each role.projects as project}
          <ShortDescriptionWIthIcons {project} />
        {/each}
      {/if}

      {#if role.skills && role.skills.length > 0}
        Skills:
        <ul>
          {#each role.skills as skill}
            <li>{skill.name}</li>
          {/each}
        </ul>
      {/if}
    </AccordionItem>
  {/if}
</div>
