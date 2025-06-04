<script lang="ts">
  import RoleSection from "$lib/components/role/RoleSection.svelte";
  import Skills from "$lib/components/skill/Skills.svelte";
  import educationRoles from "$lib/models/roles/education-roles";
  import researchRoles from "$lib/models/roles/research-roles";
  import volunteerRoles from "$lib/models/roles/volunteer-roles";
  import workRoles from "$lib/models/roles/work-roles";
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
    min-width: 0; /* Allow content to shrink below min-content width */
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
