<script>
  import { Icon } from "svelte-icons-pack";
  import { FiGithub, FiMail } from "svelte-icons-pack/fi";
  import {
    IoGlobeOutline,
    IoLocationOutline,
    IoLogoLinkedin,
    IoPhonePortraitOutline,
  } from "svelte-icons-pack/io";

  const iconSize = 20;
</script>

<div class="contact-section">
  <h3>Contact Information</h3>

  <div class="contact-grid">
    <div class="contact-item">
      <div class="contact-icon">
        <Icon src={FiMail} size={iconSize} />
      </div>
      <div class="contact-text">
        <span class="contact-label">Email</span>
        <a href="mailto:bszabo96@gmail.com">bszabo96@gmail.com</a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Icon src={IoPhonePortraitOutline} size={iconSize} />
      </div>
      <div class="contact-text">
        <span class="contact-label">Phone</span>
        <span>+36 20 566 6348</span>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Icon src={IoLocationOutline} size={iconSize} />
      </div>
      <div class="contact-text">
        <span class="contact-label">Location</span>
        <span>Budapest, Hungary</span>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Icon src={IoLogoLinkedin} size={iconSize} />
      </div>
      <div class="contact-text">
        <span class="contact-label">LinkedIn</span>
        <a
          href="https://www.linkedin.com/in/szabob/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/szabob
        </a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Icon src={FiGithub} size={iconSize} />
      </div>
      <div class="contact-text">
        <span class="contact-label">GitHub</span>
        <a
          href="https://github.com/bncszb"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/bncszb
        </a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Icon src={IoGlobeOutline} size={iconSize} />
      </div>
      <div class="contact-text">
        <span class="contact-label">Website</span>
        <a
          href="https://bncszb.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          bncszb.github.io/
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .contact-section {
    width: 100%;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--color-theme-1);
    font-size: 1.2rem;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .contact-icon {
    color: var(--color-theme-1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
  }

  .contact-text {
    display: flex;
    flex-direction: column;
  }

  .contact-label {
    font-size: 0.8rem;
    color: var(--color-text-light);
    margin-bottom: 0.2rem;
  }

  .contact-text a {
    color: var(--color-theme-1);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
    font-size: 0.9rem;
    word-break: break-all;
  }

  .contact-text a:hover {
    color: var(--color-theme-2);
    text-decoration: underline;
  }

  .contact-text span:not(.contact-label) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
