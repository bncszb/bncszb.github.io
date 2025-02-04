<script lang="ts">
  import history from "$lib/models/history";

  import { page } from "$app/state";

  // const urlParams = new URLSearchParams(page.url.searchParams);
  // const query = urlParams.get("query");
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="John Doe's CV" />
</svelte:head>

<main>
  <header>
    <h1>Bence Szabó MD</h1>
  </header>

  <!-- <h2>{query}</h2> -->

  {#each history.getSkills().entries() as [v, k]}
    <p>{v.name}</p>

    {#each k as situtation}
      {situtation.name}
    {/each}
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
