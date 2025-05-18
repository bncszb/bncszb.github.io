<script lang="ts">
  import "$lib/components/side-panel/SidePanel.svelte";
  import {
    closePanel,
    panelState,
  } from "$lib/components/side-panel/side-panel.svelte";
  import "../app.css";
  import Header from "./Header.svelte";

  let { children } = $props();

  // Get current year for footer
  const currentYear = new Date().getFullYear();

  // Function to handle clicks on the overlay
  function handleOverlayClick(e: MouseEvent) {
    // Stop propagation to prevent other click handlers from firing
    e.stopPropagation();
    e.preventDefault();

    // Close the panel
    closePanel();
  }
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <title>Bence Szabó MD | Personal Website</title>
  <meta
    name="description"
    content="Personal website of Bence Szabó MD, featuring professional experience, skills, and blog posts."
  />
  <link rel="icon" href="/site/favicon.png" />
  <meta name="author" content="Bence Szabó" />
  <meta property="og:title" content="Bence Szabó MD | Personal Website" />
  <meta
    property="og:description"
    content="Personal website of Bence Szabó MD, featuring professional experience, skills, and blog posts."
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Bence Szabó MD | Personal Website" />
  <meta
    name="twitter:description"
    content="Personal website of Bence Szabó MD, featuring professional experience, skills, and blog posts."
  />
</svelte:head>

<div class="app">
  <Header />

  <main class={panelState.isPanelOpen ? "panel-open" : ""}>
    {@render children()}
  </main>

  {#if panelState.isPanelOpen}
    <button
      class="panel-overlay"
      onclick={handleOverlayClick}
      tabindex="0"
      aria-label="Close panel"
    ></button>
  {/if}

  <side-panel-component> </side-panel-component>

  <footer>
    <div class="footer-content">
      <div class="footer-copyright">
        <p>&copy; {currentYear} Bence Szabó MD. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <a href="/site">Home</a>
        <a href="/site/blog">Blog</a>
        <a href="/site/cv">CV</a>
        <a href="/site/skills">Skills</a>
        <a href="/site/portfolio">Portfolio</a>
        <a href="/site/contact">Contact</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 1rem;
  }

  .panel-open {
    filter: blur(2px);
    pointer-events: none;
  }

  .panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
    cursor: pointer;
  }

  footer {
    margin-top: 4rem;
    background-color: var(--color-bg-2);
    border-top: 1px solid var(--color-border);
    padding: 2rem 0;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  .footer-copyright p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--color-text-light);
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-links a {
    font-size: 0.9rem;
    color: var(--color-text-light);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
  }

  .footer-links a:hover {
    color: var(--color-theme-1);
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .footer-links {
      justify-content: center;
    }
  }
</style>
