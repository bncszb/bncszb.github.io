<script lang="ts">
  import ContactForm from "$lib/components/ContactForm.svelte";
</script>

<svelte:head>
  <title>Bence Séra-Szabó MD | Medical Professional</title>
  <meta
    name="description"
    content="Personal website of Bence Séra-Szabó MD, featuring professional experience, skills, and blog posts."
  />
</svelte:head>

<main>
  <div class="hero">
    <div class="hero-photo">
      <img class="hero-bg" src="/hero.jpg" alt="" aria-hidden="true" />
    </div>
    <div class="hero-content">
      <h1>Bence Séra-Szabó <span class="md-title">MD</span></h1>
      <p class="tagline">Physician building at the intersection of medicine and technology</p>
    </div>
  </div>

  <div class="navigation-cards">
    <a href="/blog" class="card">
      <div class="card-accent"></div>
      <div class="card-content">
        <span class="card-label">Writing</span>
        <h2>Blog</h2>
        <p>Thoughts on medicine, AI, and where they meet</p>
      </div>
    </a>

    <a href="/cv" class="card">
      <div class="card-accent"></div>
      <div class="card-content">
        <span class="card-label">Background</span>
        <h2>CV</h2>
        <p>Clinical training, research, and engineering experience</p>
      </div>
    </a>

    <a href="/projects" class="card">
      <div class="card-accent"></div>
      <div class="card-content">
        <span class="card-label">Work</span>
        <h2>Projects</h2>
        <p>Open-source tools and experiments in health tech</p>
      </div>
    </a>
  </div>

  <section class="contact-section">
    <ContactForm />
  </section>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .hero {
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 420px;
    overflow: hidden;
    border-radius: 0 0 var(--radius) var(--radius);
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background-color: var(--color-bg-0);
  }

  .hero-photo {
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    filter: blur(5px) brightness(0.85) saturate(0.85);
    transform: scale(1.05);
    display: block;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 3rem 3rem 3rem 2.5rem;
    background-color: var(--color-bg-1);
    text-align: left;
  }

  h1 {
    font-size: 2.6rem;
    margin: 0;
    color: var(--color-text);
    text-shadow: none;
    text-align: left;
  }

  .md-title {
    font-weight: 300;
    opacity: 0.6;
  }

  .tagline {
    font-size: 1.05rem;
    color: var(--color-text-light);
    margin: 0;
    max-width: 340px;
    line-height: 1.65;
    text-shadow: none;
  }

  .navigation-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  .card {
    background-color: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 1px 3px var(--color-shadow), 0 4px 16px var(--color-shadow);
    transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: inherit;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px var(--color-shadow-md), 0 16px 36px var(--color-shadow-md);
  }

  .card-accent {
    width: 4px;
    flex-shrink: 0;
    background: linear-gradient(180deg, var(--color-theme-1) 0%, #4a4038 100%);
  }

  .card-content {
    padding: 1.75rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }

  .card-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-theme-1);
  }

  .card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.1rem 0 0.4rem;
    color: var(--color-text);
    border: none;
    padding: 0;
  }

  .card p {
    font-size: 0.92rem;
    color: var(--color-text-light);
    line-height: 1.55;
    margin: 0;
  }

  .contact-section {
    padding: 0 1.5rem 4rem;
  }

  @media (max-width: 900px) {
    .navigation-cards {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero {
      grid-template-columns: 1fr;
      grid-template-rows: 220px auto;
    }

    .hero-content {
      padding: 2rem 1.5rem;
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
    }

    .tagline {
      font-size: 1rem;
      max-width: none;
    }

    main {
      gap: 2.5rem;
    }
  }
</style>
