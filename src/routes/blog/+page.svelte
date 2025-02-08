<script lang="ts">
  import Post from "$lib/components/blog/Post.svelte";
  import { posts } from "$lib/models/blog/post";

  const POSTS_PER_PAGE = 5;
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

<div>
  <h1>Blog</h1>

  {#if paginatedPosts.length > 0}
    {#each paginatedPosts as post}
      <Post {post} />
    {/each}
  {/if}

  <div class="pagination">
    <button onclick={prevPage} disabled={currentPage === 1}>{"<"}</button>
    <span>Page {currentPage} of {totalPages}</span>
    <button onclick={nextPage} disabled={currentPage === totalPages}
      >{">"}</button
    >
  </div>
</div>

<style>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 2em;
  }

  .pagination button {
    padding: 0.5em 1em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;

    border-radius: 5px;
  }

  .pagination button:disabled {
    cursor: not-allowed;
    color: #a2a2a2;
  }
</style>
