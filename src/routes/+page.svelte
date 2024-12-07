<script lang="ts">
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import Education from "./Education.svelte";
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

  <AccordionItem>
    <!-- Header Slot -->
    <p slot="headerSlot" class="accordion-header.level-1">
      Contact Information
    </p>
    <!-- Body Content -->

    <ul>
      <li>Email: bszabo96@gmail.com</li>
      <li>Phone: +36 20 566 6348</li>
      <li>Location: Budapest, Hungary</li>
    </ul>
  </AccordionItem>

  <AccordionItem>
    <!-- Header Content -->
    <p slot="headerSlot" class="accordion-header.level-1">Summary</p>
    <!-- Body Content -->
    <p>
      Experienced web developer with a passion for creating responsive and
      user-friendly websites. Skilled in HTML, CSS, JavaScript, and various
      modern frameworks.
    </p>
  </AccordionItem>
  <WorkExperience />

  <Education />

  <AccordionItem>
    <!-- Header Content-->
    <p slot="headerSlot" class="accordion-header.level-1">Skills</p>
    <!-- Body Content -->

    <ul>
      <li>HTML5, CSS3, JavaScript</li>
      <li>React, Vue.js, Svelte</li>
      <li>Node.js, Express</li>
      <li>Git, GitHub</li>
      <li>Responsive Web Design</li>
      <li>UI/UX Principles</li>
    </ul>
  </AccordionItem>
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

  .date {
    font-style: italic;
    color: #666;
  }

  ul {
    padding-left: 20px;
  }
</style>
