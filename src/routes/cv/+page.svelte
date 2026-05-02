<script lang="ts">
  import RoleSection from "$lib/components/role/RoleSection.svelte";
  import Skills from "$lib/components/skill/Skills.svelte";
  import workRoles from "$lib/models/roles/work-roles";
  import educationRoles from "$lib/models/roles/education-roles";
  import researchRoles from "$lib/models/roles/research-roles";
  import volunteerRoles from "$lib/models/roles/volunteer-roles";
  import courseRoles from "$lib/models/roles/course-roles";
  import Contact from "./Contact.svelte";
  import Summary from "./Summary.svelte";
</script>

<svelte:head>
  <title>Bence Séra-Szabó MD | Curriculum Vitae</title>
  <meta
    name="description"
    content="Professional CV of Bence Séra-Szabó MD, showcasing work experience, research, education, and skills."
  />
</svelte:head>

<main>
  <div class="cv-header">
    <h1>Bence Séra-Szabó <span class="md-title">MD</span></h1>
    <div class="cv-header-line"></div>
  </div>

  <div class="cv-container">
    <div class="cv-sidebar">
      <div class="sidebar-photo">
        <img src="/bence_szabo.jpg" alt="Bence Séra-Szabó" />
      </div>

      <div class="sidebar-section">
        <Contact />
      </div>

      <div class="sidebar-section">
        <Skills />
      </div>
    </div>

    <div class="cv-content">
      <div class="content-section">
        <Summary />
      </div>

      <div class="content-section">
        <h2>Work Experience</h2>
        {#each workRoles as role}
          <RoleSection {role} />
        {/each}
      </div>

      <div class="content-section">
        <h2>Research</h2>
        {#each researchRoles as role}
          <RoleSection {role} />
        {/each}
      </div>

      <div class="content-section">
        <h2>Education</h2>
        {#each educationRoles as role}
          <RoleSection {role} />
        {/each}
      </div>

      <div class="content-section">
        <h2>Courses</h2>
        {#each courseRoles as role}
          <RoleSection {role} />
        {/each}
      </div>

      <div class="content-section">
        <h2>Volunteering</h2>
        {#each volunteerRoles as role}
          <RoleSection {role} />
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
  }

  .cv-header {
    text-align: center;
    margin: 2rem 0;
  }

  .cv-header h1 {
    margin-bottom: 0.5rem;
    color: var(--color-theme-1);
  }

  .md-title {
    font-weight: 400;
    opacity: 0.8;
  }

  .cv-header-line {
    height: 3px;
    width: 100px;
    background-color: var(--color-theme-1);
    margin: 0 auto;
  }

  .cv-container {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
  }

  .cv-sidebar {
    flex: 1;
    max-width: 280px;
    min-width: 0;
  }

  .sidebar-photo {
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px var(--color-shadow);
    aspect-ratio: 1620 / 2326;
    position: relative;
    background-color: var(--color-bg-0);
  }

  .sidebar-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    filter: saturate(0.75) brightness(1.1) contrast(0.95);
    mix-blend-mode: multiply;
  }

  .sidebar-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  .cv-content {
    flex: 3;
    min-width: 0; /* Allow content to shrink below min-content width */
  }

  .sidebar-section,
  .content-section {
    margin-bottom: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
    padding: 1.5rem;
    overflow-wrap: break-word; /* Ensure long words don't overflow */
    word-wrap: break-word;
  }

  .content-section h2 {
    margin-top: 0;
    color: var(--color-theme-1);
  }

  @media (max-width: 1024px) {
    .cv-container {
      gap: 1.5rem;
    }

    .cv-sidebar {
      max-width: 250px;
    }

    .sidebar-section,
    .content-section {
      padding: 1.25rem;
    }
  }

  @media (max-width: 900px) {
    .cv-container {
      flex-direction: column;
    }

    .cv-sidebar {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .sidebar-section,
    .content-section {
      padding: 1rem;
    }
  }
</style>
