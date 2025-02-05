<script lang="ts">
  import RoleSection from "$lib/components/RoleSection.svelte";
  import Skills from "$lib/components/skill/Skills.svelte";
  import educationRoles from "$lib/models/roles/education-roles";
  import researchRoles from "$lib/models/roles/research-roles";
  import volunteerRoles from "$lib/models/roles/volunteer-roles";
  import workRoles from "$lib/models/roles/work-roles";
  import Contact from "./Contact.svelte";
  import Summary from "./Summary.svelte";
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="John Doe's CV" />
</svelte:head>

<main>
  <header>
    <h1>Bence Szabó MD</h1>
  </header>

  <Contact />

  <Summary />

  <Skills />

  <h2>Work Experience</h2>

  {#each workRoles as role}
    <RoleSection {role} />
  {/each}

  <h2>Research</h2>

  {#each researchRoles as role}
    <RoleSection {role} />
  {/each}

  <h2>Education</h2>

  {#each educationRoles as role}
    <RoleSection {role} />
  {/each}

  <h2>Volunteering</h2>

  {#each volunteerRoles as role}
    <RoleSection {role} />
  {/each}
</main>

<style>
  main {
    /* max-width: 800px; */
    margin: 0 auto;
    padding: 20px;
    width: 80%;
    font-family: Arial, sans-serif;
  }

  h1 {
    margin-bottom: 5px;
  }
</style>
