<script lang="ts">
  import { getGeneralRoleSkills, getRoleSkills, type Role } from "$lib/models/roles/common-roles";
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
      <ul>
        {#each role.bulletPoints as bulletPoint}
          <li>{bulletPoint}</li>
        {/each}
      </ul>
      {/if}

      {#if role.projects && role.projects.length > 0}
        <h4>Projects:</h4>
        <div class="projects-with-icons">
          {#each role.projects as project}
            <ShortDescriptionWIthIcons {project} />
          {/each}
        </div>
      {/if}

      {#if getRoleSkills(role).length > 0}
        Skills:
        <ul>
          {#each getRoleSkills(role) as skill}
            <li>{skill.name}</li>
          {/each}
        </ul>
      {/if}
    </AccordionItem>
  {/if}
</div>

<style>
  .projects-with-icons {
    display: flex;
    flex-wrap: wrap;
    padding-left: 3em;
    font-weight: 200;
    padding-bottom: 2em;
  }
</style>
