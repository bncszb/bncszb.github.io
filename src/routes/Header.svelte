<script lang="ts">
  import { page } from "$app/state";
  import github from "$lib/images/github.svg";

  function isActive(pathname: string): boolean {
    if (pathname === "/site" && page.url.pathname === "/site/") return true;
    return page.url.pathname === pathname;
  }
</script>

<header>
  <div class="header-container">
    <div class="logo">
      <a href="/site" class="logo-link">BS</a>
    </div>

    <nav>
      <a href="/site" class={isActive("/site") ? "active" : ""}>Home</a>
      <a href="/site/blog" class={isActive("/site/blog") ? "active" : ""}
        >Blog</a
      >
      <a href="/site/cv" class={isActive("/site/cv") ? "active" : ""}>CV</a>
      <a href="/site/skills" class={isActive("/site/skills") ? "active" : ""}
        >Skills</a
      >
      <a href="/site/portfolio" class={isActive("/site/portfolio") ? "active" : ""}
        >Portfolio</a
      >
      <a href="/site/contact" class={isActive("/site/contact") ? "active" : ""}
        >Contact</a
      >
    </nav>

    <div class="social">
      <a
        href="https://github.com/bncszb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src={github} alt="GitHub" />
      </a>
    </div>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 3px var(--color-shadow);
    padding: 0.5rem 0;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .logo {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .logo-link {
    color: var(--color-theme-1);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: rgba(44, 122, 123, 0.1);
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    line-height: 1.5rem;
    transition: all var(--transition-speed) ease;
  }

  .logo-link:hover {
    background-color: rgba(44, 122, 123, 0.2);
    transform: scale(1.05);
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .social {
    display: flex;
    align-items: center;
  }

  .social img {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
    transition:
      opacity var(--transition-speed) ease,
      transform var(--transition-speed) ease;
  }

  .social img:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  nav a {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: var(--color-text);
    position: relative;
    transition: color var(--transition-speed) ease;
  }

  nav a:hover,
  nav a.active {
    color: var(--color-theme-1);
  }

  nav a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-theme-1);
    transition: width var(--transition-speed) ease;
  }

  nav a:hover::after,
  nav a.active::after {
    width: 100%;
  }

  @media (max-width: 600px) {
    nav {
      gap: 1rem;
    }

    nav a {
      font-size: 0.9rem;
      letter-spacing: 0.03em;
    }

    .social {
      display: none;
    }
  }
</style>
