<script lang="ts">
  import { page } from "$app/state";
  import github from "$lib/images/github.svg";

  function isActive(pathname: string): boolean {
    if (pathname === "/" && page.url.pathname === "/") return true;
    return page.url.pathname === pathname;
  }
</script>

<header>
  <div class="header-container">
    <div class="logo">
      <!-- <a href="/" class="logo-link">BS</a> -->
    </div>

    <nav>
      <a href="/" class={isActive("/") ? "active" : ""}>Home</a>
      <a href="/blog" class={isActive("/blog") ? "active" : ""}>Blog</a>
      <a href="/cv" class={isActive("/cv") ? "active" : ""}>CV</a>
      <a href="/projects" class={isActive("/projects") ? "active" : ""}
        >Projects</a
      >
      <a href="/services" class={isActive("/services") ? "active" : ""}
        >Services</a
      >
      <a href="/contact" class={isActive("/contact") ? "active" : ""}>Contact</a
      >
    </nav>

    <div class="social">
      <a
        href="https://github.com/bncszb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src={github} alt="GitHub" width="24" height="24" />
      </a>
    </div>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(250, 248, 245, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
    padding: 0;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 56px;
  }

  .logo {
    font-weight: 700;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: stretch;
    gap: 0.25rem;
  }

  .social {
    display: flex;
    align-items: center;
  }

  .social img {
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.55;
    display: block;
    object-fit: contain;
    transition:
      opacity var(--transition-speed) ease,
      transform var(--transition-speed) ease;
  }

  .social img:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }

  nav a {
    display: flex;
    align-items: center;
    padding: 0 0.85rem;
    font-weight: 500;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    text-decoration: none;
    color: var(--color-text-light);
    position: relative;
    transition: color var(--transition-speed) ease;
  }

  nav a:hover {
    color: var(--color-text);
  }

  nav a.active {
    color: var(--color-theme-1);
    font-weight: 600;
  }

  nav a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0.85rem;
    right: 0.85rem;
    height: 2px;
    background: linear-gradient(90deg, var(--color-theme-1), #4a4038);
    border-radius: 2px 2px 0 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform var(--transition-speed) ease;
  }

  nav a:hover::after,
  nav a.active::after {
    transform: scaleX(1);
  }

  @media (max-width: 600px) {
    nav {
      gap: 0;
    }

    nav a {
      padding: 0 0.6rem;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }

    .social {
      display: none;
    }
  }
</style>
