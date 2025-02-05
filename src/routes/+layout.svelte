<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <title>My Svelte App</title>
  <meta name="description" content="A modern SvelteKit application." />
  <link rel="icon" href="/site/favicon.png" />
</svelte:head>

<div class="app">
  <Header />

  <main>
    {@render children()}
  </main>

  <footer>
    <p>
      visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn
      about SvelteKit
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
