<script lang="ts">
  import Education from "$lib/components/Education.svelte";
  import Research from "$lib/components/Research.svelte";
  import Skills from "$lib/components/skill/Skills.svelte";
  import VolunteerExperience from "$lib/components/VolunteerExperience.svelte";
  import WorkExperience from "$lib/components/WorkExperience.svelte";
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

  <WorkExperience />

  <Research />

  <Education />

  <VolunteerExperience />
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
