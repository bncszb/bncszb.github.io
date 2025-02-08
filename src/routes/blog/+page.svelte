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

<div>
  <h1>Blog</h1>

  {#if paginatedPosts.length > 0}
    {#each paginatedPosts as post}
      <Post {post} />
    {/each}
  {/if}

  <pagination-component
    {currentPage}
    {totalPages}
    onprev={prevPage}
    onnext={nextPage}
  >
  </pagination-component>
</div>
