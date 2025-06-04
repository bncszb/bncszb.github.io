<script lang="ts">
  import ContactForm from "$lib/components/ContactForm.svelte";
  import { Icon } from "svelte-icons-pack";
  import { FiGithub, FiMail } from "svelte-icons-pack/fi";
  import {
    IoGlobeOutline,
    IoLocationOutline,
    IoLogoLinkedin,
    IoPhonePortraitOutline,
  } from "svelte-icons-pack/io";

  const iconSize = 24;
</script>

<svelte:head>
  <title>Bence Séra-Szabó MD | Contact</title>
  <meta
    name="description"
    content="Get in touch with Bence Séra-Szabó MD. Contact information and contact form."
  />
</svelte:head>

<main>
  <div class="page-header">
    <h1>Contact Me</h1>
    <div class="header-line"></div>
  </div>

  <div class="contact-container">
    <div class="contact-info">
      <h2>Contact Information</h2>

      <div class="contact-methods">
        <div class="contact-method">
          <div class="icon">
            <Icon src={FiMail} size={iconSize} />
          </div>
          <div class="details">
            <h3>Email</h3>
            <a href="mailto:bszabo96@gmail.com">bszabo96@gmail.com</a>
          </div>
        </div>

        <div class="contact-method">
          <div class="icon">
            <Icon src={IoPhonePortraitOutline} size={iconSize} />
          </div>
          <div class="details">
            <h3>Phone</h3>
            <p>+36 20 566 6348</p>
          </div>
        </div>

        <div class="contact-method">
          <div class="icon">
            <Icon src={IoLocationOutline} size={iconSize} />
          </div>
          <div class="details">
            <h3>Location</h3>
            <p>Budapest, Hungary</p>
          </div>
        </div>
      </div>

      <div class="social-links">
        <h2>Connect</h2>
        <div class="social-grid">
          <a
            href="https://www.linkedin.com/in/szabob/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <Icon src={IoLogoLinkedin} size={iconSize} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/bncszb"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <Icon src={FiGithub} size={iconSize} />
            <span>GitHub</span>
          </a>

          <a href="https://bncszb.github.io/site/" class="social-link">
            <Icon src={IoGlobeOutline} size={iconSize} />
            <span>Website</span>
          </a>
        </div>
      </div>
    </div>

    <div class="contact-form-section">
      <ContactForm />
    </div>
  </div>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .page-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--color-theme-1, #2c7a7b);
    margin-bottom: 0.5rem;
  }

  .header-line {
    height: 3px;
    width: 100px;
    background-color: var(--color-theme-1, #2c7a7b);
    margin: 0 auto;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--color-theme-1, #2c7a7b);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-border, #e2e8f0);
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-method {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .icon {
    color: var(--color-theme-1, #2c7a7b);
    background-color: rgba(44, 122, 123, 0.1);
    padding: 0.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details h3 {
    font-size: 1.1rem;
    margin: 0 0 0.25rem 0;
    color: var(--color-text, #2d3748);
  }

  .details p,
  .details a {
    margin: 0;
    color: var(--color-text-light, #4a5568);
    font-size: 0.95rem;
  }

  .details a {
    color: var(--color-theme-1, #2c7a7b);
    text-decoration: none;
    transition: color var(--transition-speed, 0.3s) ease;
  }

  .details a:hover {
    color: var(--color-theme-2, #3182ce);
    text-decoration: underline;
  }

  .social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
  }

  .social-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow, rgba(0, 0, 0, 0.1));
    text-decoration: none;
    color: var(--color-text, #2d3748);
    transition: all var(--transition-speed, 0.3s) ease;
  }

  .social-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px var(--color-shadow, rgba(0, 0, 0, 0.1));
    color: var(--color-theme-1, #2c7a7b);
  }

  @media (max-width: 900px) {
    .contact-container {
      grid-template-columns: 1fr;
    }

    .contact-info {
      order: 2;
    }

    .contact-form-section {
      order: 1;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 600px) {
    .social-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
