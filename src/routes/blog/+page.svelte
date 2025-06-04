<script lang="ts">
  import Post from "$lib/components/blog/Post.svelte";
  import "$lib/components/Pagination.svelte";
  import { posts } from "$lib/models/blog/post";

  const POSTS_PER_PAGE = 3;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  let currentPage = $state(1);

  let paginatedPosts = $derived.by(() =>
    posts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    )
  );

  function nextPage() {
    if (currentPage < totalPages) currentPage++;
  }

  function prevPage() {
    if (currentPage > 1) currentPage--;
  }
</script>

<svelte:head>
  <title>Bence Séra-Szabó MD | Blog</title>
  <meta
    name="description"
    content="Blog posts by Bence Séra-Szabó MD on medicine, technology, and healthcare innovation."
  />
</svelte:head>

<main>
  <div class="blog-header">
    <h1>Blog</h1>
    <p class="blog-description">
      Thoughts and insights on medicine, technology, and healthcare innovation.
    </p>
  </div>

  <div class="blog-container">
    {#if paginatedPosts.length > 0}
      {#each paginatedPosts as post}
        <div class="blog-post-wrapper">
          <Post {post} />
        </div>
      {/each}
    {:else}
      <div class="no-posts">
        <p>No posts available at the moment. Check back soon!</p>
      </div>
    {/if}
  </div>

  <div class="pagination-container">
    <pagination-component
      {currentPage}
      {totalPages}
      onprev={prevPage}
      onnext={nextPage}
    >
    </pagination-component>
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 800px;
  }

  .blog-header {
    text-align: center;
    margin: 2rem 0 3rem;
  }

  .blog-header h1 {
    margin-bottom: 0.5rem;
    color: var(--color-theme-1);
  }

  .blog-description {
    color: var(--color-text-light);
    max-width: 600px;
    margin: 0 auto;
  }

  .blog-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .blog-post-wrapper {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
    overflow: hidden;
    transition:
      transform var(--transition-speed) ease,
      box-shadow var(--transition-speed) ease;
  }

  .blog-post-wrapper:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px var(--color-shadow);
  }

  .no-posts {
    text-align: center;
    padding: 3rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
  }

  .pagination-container {
    margin: 2rem 0 4rem;
    display: flex;
    justify-content: center;
  }
</style>
