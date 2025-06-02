<script lang="ts">
  import ContactForm from "$lib/components/ContactForm.svelte";
</script>

<svelte:head>
  <title>Bence Szabó MD | Medical Professional</title>
  <meta
    name="description"
    content="Personal website of Bence Szabó MD, featuring professional experience, skills, and blog posts."
  />
</svelte:head>

<main>
  <div class="hero">
    <div class="hero-content">
      <h1>Bence Szabó <span class="md-title">MD</span></h1>
      <p class="tagline">Medical Professional & Technology Enthusiast</p>
    </div>
  </div>

  <div class="navigation-cards">
    <a href="/site/blog" class="card">
      <div class="card-content">
        <h2>Blog</h2>
        <p>Thoughts and insights on medicine, technology, and more</p>
      </div>
    </a>

    <a href="/site/cv" class="card">
      <div class="card-content">
        <h2>CV</h2>
        <p>Professional experience, education, and qualifications</p>
      </div>
    </a>

    <a href="/site/skills" class="card">
      <div class="card-content">
        <h2>Skills</h2>
        <p>Technical expertise and professional competencies</p>
      </div>
    </a>

    <a href="/site/solutions" class="card">
      <div class="card-content">
        <h2>Solutions</h2>
        <p>Collection of projects showcasing my work and expertise</p>
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    min-height: 300px;
    text-align: center;
    background: linear-gradient(
      135deg,
      var(--color-bg-0) 0%,
      var(--color-bg-2) 100%
    );
    border-radius: 8px;
    margin: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .hero-content {
    padding: 2rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--color-theme-1);
  }

  .md-title {
    font-weight: 400;
    opacity: 0.8;
  }

  .tagline {
    font-size: 1.5rem;
    opacity: 0.8;
    margin-bottom: 2rem;
  }

  .navigation-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 20px 40px;
  }

  .card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    height: 200px;
    display: flex;
    text-decoration: none;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .card h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--color-theme-1);
  }

  .card p {
    font-size: 1rem;
    opacity: 0.8;
    line-height: 1.5;
  }

  .contact-section {
    padding: 2rem 20px 4rem;
  }

  @media (max-width: 768px) {
    .hero {
      height: 30vh;
    }

    h1 {
      font-size: 2.5rem;
    }

    .tagline {
      font-size: 1.2rem;
    }

    .navigation-cards {
      grid-template-columns: 1fr;
    }

    main {
      gap: 3rem;
    }
  }
</style>
