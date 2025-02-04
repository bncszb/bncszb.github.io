<script lang="ts">
  import Contact from "./Contact.svelte";
  import Education from "../lib/components/Education.svelte";
  import Research from "../lib/components/Research.svelte";
  import Skills from "../lib/components/Skills.svelte";
  import Summary from "./Summary.svelte";
  import VolunteerExperience from "./VolunteerExperience.svelte";
  import WorkExperience from "./WorkExperience.svelte";
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
