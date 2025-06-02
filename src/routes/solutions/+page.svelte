<script lang="ts">
  import ShortDescriptionWIthIcons from "$lib/components/project/ShortDescriptionWIthIcons.svelte";
  import { roleCategories } from "$lib/models/roles/common-roles";

  export let data;

  const { projectsByCategory } = data;

  // Function to format date
  function formatDate(date: Date | undefined): string {
    if (!date) return "Present";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
</script>

<svelte:head>
  <title>Solutions | Bence Szabó MD</title>
  <meta
    name="description"
    content="Solutions of projects by Bence Szabó MD, showcasing technical expertise and professional work."
  />
</svelte:head>

<div class="solutions-container">
  <div class="hero">
    <div class="hero-content">
      <h1>Solutions</h1>
      <p class="tagline">
        A collection of projects showcasing my technical expertise and
        professional work
      </p>
    </div>
  </div>

  <div class="solutions-content">
    {#each roleCategories as category}
      {#if projectsByCategory[category] && projectsByCategory[category].length > 0}
        <section class="category-section">
          <h2>{category}</h2>

          <div class="projects-grid">
            {#each projectsByCategory[category] as project}
              <div class="project-card-wrapper">
                <div class="project-header">
                  <h3>{project.name}</h3>
                  <div class="project-meta">
                    <span class="role-name">{project.role.name}</span>
                    {#if project.role.institution}
                      <span class="institution"
                        >at {project.role.institution}</span
                      >
                    {/if}
                    <span class="date-range">
                      {formatDate(project.role.startDate)} - {formatDate(
                        project.role.endDate
                      )}
                    </span>
                  </div>
                </div>
                <ShortDescriptionWIthIcons {project} />
              </div>
            {/each}
          </div>
        </section>
      {/if}
    {/each}
  </div>
</div>

<style>
  .solutions-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    min-height: 250px;
    text-align: center;
    background: linear-gradient(
      135deg,
      var(--color-bg-0) 0%,
      var(--color-bg-2) 100%
    );
    border-radius: 8px;
    margin: 20px 0 40px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .hero-content {
    padding: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--color-theme-1);
  }

  .tagline {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 0;
    max-width: 600px;
    margin: 0 auto;
  }

  .solutions-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 4rem;
  }

  .category-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    color: var(--color-theme-1);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5rem;
    margin: 0;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .project-card-wrapper {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .project-card-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .project-header {
    padding: 1.25rem 1.25rem 0.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  .project-header h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.4rem;
    color: var(--color-theme-1);
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-bottom: 0.5rem;
  }

  .role-name {
    font-weight: 500;
  }

  .date-range {
    font-style: italic;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 2.5rem;
    }

    .tagline {
      font-size: 1rem;
    }

    .hero {
      height: 25vh;
    }
  }
</style>
