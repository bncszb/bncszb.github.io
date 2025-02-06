<script lang="ts">
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="John Doe's CV" />
</svelte:head>

<main>
  <header>
    <h1>Bence Szabó MD</h1>
  </header>

  <div class="landing">
    <p class="landing"><a href="/site/cv">CV</a></p>
    <p class="landing"><a href="/site/skills">Skills</a></p>
  </div>
</main>

<style>
  main {
    /* max-width: 800px; */
    margin: 0 auto;
    padding: 20px;
    width: 80%;
  }

  h1 {
    margin-bottom: 150px;
  }

  .landing {
    margin: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    font-size: larger;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    transition: color 0.2s linear;
  }
</style>
