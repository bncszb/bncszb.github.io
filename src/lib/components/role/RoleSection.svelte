<script lang="ts">
  import { getRoleSkills, type Role } from "$lib/models/roles/common-roles";
  import AccordionItem from "../AccordionItem.svelte";
  import HistoryElement from "../HistoryElement.svelte";
  import Markdown from "../Markdown.svelte";
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

      <div class="role-content">
        {#if role.description}
          <div class="role-description">
            <Markdown source={role.description} />
          </div>
        {/if}

        {#if role.bulletPoints && role.bulletPoints.length > 0}
          <div class="role-highlights">
            <h4>Highlights</h4>
            <ul class="bullet-list">
              {#each role.bulletPoints as bulletPoint}
                <li>{bulletPoint}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if role.projects && role.projects.length > 0}
          <div class="role-projects">
            <h4>Projects</h4>
            <div class="projects-grid">
              {#each role.projects as project}
                <ShortDescriptionWIthIcons {project} />
              {/each}
            </div>
          </div>
        {/if}

        {#if getRoleSkills(role).length > 0}
          <div class="role-skills">
            <h4>Skills Used</h4>
            <div class="skills-list">
              {#each getRoleSkills(role) as skill}
                <span class="skill-tag">{skill.name}</span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </AccordionItem>
  {/if}
</div>

<style>
  .role-section {
    margin-bottom: 1rem;
  }

  .role-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .role-description :global(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  h4 {
    font-size: 1.1rem;
    color: var(--color-theme-1, #2c7a7b);
    margin: 0 0 0.75rem 0;
    font-weight: 600;
  }

  .bullet-list {
    padding-left: 1.5rem;
    margin: 0;
  }

  .bullet-list li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .bullet-list li:last-child {
    margin-bottom: 0;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    display: inline-block;
    background-color: rgba(44, 122, 123, 0.1);
    color: var(--color-theme-1, #2c7a7b);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
