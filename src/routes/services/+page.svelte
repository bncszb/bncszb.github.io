<svelte:head>
  <title>Services | Bence Séra-Szabó MD</title>
  <meta
    name="description"
    content="Contracting and consulting services by Bence Séra-Szabó MD — scientific programming, AI/RAG workflows, and medical microservices."
  />
</svelte:head>

<main>
  <div class="page-header">
    <h1>Services</h1>
    <p class="subtitle">
      Available for contracting engagements at the intersection of medicine and
      software engineering.
    </p>
    <div class="header-line"></div>
  </div>

  <div class="services-grid">
    <div class="service-card">
      <div class="service-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </div>
      <div class="service-body">
        <span class="service-tag">Contracting</span>
        <h2>Software Contracting</h2>
        <p>
          End-to-end contracting for medical and health-tech software projects.
          From scoping and architecture to delivery, I work as an independent
          contributor or embedded team member with a focus on reliability and
          clinical relevance.
        </p>
        <ul>
          <li>Full-stack web and API development</li>
          <li>Health-tech product engineering</li>
          <li>Technical consulting and code review</li>
        </ul>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
        </svg>
      </div>
      <div class="service-body">
        <span class="service-tag">Scientific Computing</span>
        <h2>Scientific Programming</h2>
        <p>
          Implementation of ML algorithms and computational models for research
          and production. Experienced with network simulations, bioinformatics
          pipelines, and translating research papers into working code.
        </p>
        <ul>
          <li>Machine learning algorithm implementation</li>
          <li>Network and agent-based simulations</li>
          <li>Data analysis and visualisation pipelines</li>
        </ul>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          />
        </svg>
      </div>
      <div class="service-body">
        <span class="service-tag">AI Engineering</span>
        <h2>AI Workflow &amp; RAG Setup</h2>
        <p>
          Design and deployment of AI-powered workflows tailored to clinical and
          research contexts. From retrieval-augmented generation (RAG) systems
          over medical literature to LLM integration in existing products.
        </p>
        <ul>
          <li>RAG pipeline design and implementation</li>
          <li>LLM integration and prompt engineering</li>
          <li>Knowledge base and vector store setup</li>
        </ul>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div class="service-body">
        <span class="service-tag">Healthcare Tech</span>
        <h2>Medical Microservices</h2>
        <p>
          Architecture and development of microservices for healthcare
          applications. Built with clinical safety and interoperability
          standards in mind, including HL7 FHIR and related data models.
        </p>
        <ul>
          <li>FHIR-compatible service design</li>
          <li>Clinical decision support integrations</li>
          <li>Secure, compliant API development</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cta">
    <p>Interested in working together?</p>
    <a href="/contact" class="cta-button">Get in touch</a>
  </div>
</main>

<style>
  main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem 5rem;
  }

  .page-header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--color-theme-1);
    margin-bottom: 0.75rem;
  }

  .subtitle {
    font-size: 1.05rem;
    color: var(--color-text-light);
    max-width: 520px;
    margin: 0 auto 1.25rem;
    line-height: 1.65;
  }

  .header-line {
    height: 3px;
    width: 80px;
    background: linear-gradient(90deg, var(--color-theme-1), #4a4038);
    border-radius: 2px;
    margin: 0 auto;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .service-card {
    background-color: white;
    border-radius: var(--radius);
    box-shadow:
      0 1px 3px var(--color-shadow),
      0 4px 16px var(--color-shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition:
      transform var(--transition-speed) ease,
      box-shadow var(--transition-speed) ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 4px 8px var(--color-shadow-md),
      0 16px 36px var(--color-shadow-md);
  }

  .service-icon {
    padding: 1.75rem 1.75rem 0;
    color: var(--color-theme-1);
  }

  .service-body {
    padding: 1rem 1.75rem 1.75rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .service-tag {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-theme-1);
    margin-bottom: 0.4rem;
    display: block;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 0.85rem;
    color: var(--color-text);
    border: none;
    padding: 0;
  }

  .service-body p {
    font-size: 0.93rem;
    color: var(--color-text-light);
    line-height: 1.65;
    margin: 0 0 1rem;
  }

  .service-body ul {
    margin: 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .service-body li {
    font-size: 0.88rem;
    color: var(--color-text-light);
    line-height: 1.5;
  }

  .cta {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .cta p {
    font-size: 1.1rem;
    color: var(--color-text-light);
    margin: 0;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--color-theme-1);
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.75rem 2.25rem;
    border-radius: var(--radius);
    text-decoration: none;
    transition:
      background-color var(--transition-speed) ease,
      transform var(--transition-speed) ease;
  }

  .cta-button:hover {
    background-color: var(--color-accent);
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
