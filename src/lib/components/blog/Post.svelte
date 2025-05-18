<script lang="ts">
  import type { Post } from "$lib/models/blog/post";
  import Markdown from "../Markdown.svelte";

  type Props = {
    post: Post;
  };

  let { post }: Props = $props();
  let short = $state(true);
  
  // Format the date in a more readable format
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(post.date);
</script>

<article class="post">
  <div class="post-header">
    <h2 class="post-title">{post.title}</h2>
    <div class="post-meta">
      <time datetime={post.date.toISOString()}>{formattedDate}</time>
    </div>
  </div>

  <div class="post-content {short ? 'truncated' : ''}">
    {#if post.content?.length != post.shortContent?.length || post.containsMedia}
      <div class="content-wrapper">
        <Markdown source={short ? post.shortContent : post.content} />
      </div>
      <button class="read-more-btn" onclick={() => (short = !short)}>
        {short ? 'Read More' : 'Show Less'}
      </button>
    {:else}
      <div class="content-wrapper">
        <Markdown source={post.content} />
      </div>
    {/if}
  </div>
</article>

<style>
  .post {
    padding: 1.5rem;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.75rem;
    color: var(--color-theme-1);
    line-height: 1.3;
  }

  .post-meta {
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-bottom: 1rem;
  }

  .post-content {
    line-height: 1.6;
  }
  
  .content-wrapper {
    margin-bottom: 1rem;
  }

  .truncated :global(img),
  .truncated :global(table) {
    display: none;
  }
  
  .read-more-btn {
    display: inline-block;
    background-color: var(--color-theme-1);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--transition-speed) ease;
    margin-top: 1rem;
  }
  
  .read-more-btn:hover {
    background-color: var(--color-theme-2);
  }

  .post-content :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1.5rem 0;
    box-shadow: 0 2px 4px var(--color-shadow);
  }
  
  .post-content :global(h2) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
    color: var(--color-theme-1);
  }
  
  .post-content :global(h3) {
    font-size: 1.25rem;
    margin: 1.25rem 0 0.75rem;
    color: var(--color-text);
  }
  
  .post-content :global(p) {
    margin-bottom: 1rem;
  }
  
  .post-content :global(ul),
  .post-content :global(ol) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  .post-content :global(li) {
    margin-bottom: 0.5rem;
  }
  
  .post-content :global(blockquote) {
    border-left: 4px solid var(--color-theme-1);
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: var(--color-text-light);
    font-style: italic;
  }
  
  .post-content :global(pre) {
    margin: 1.5rem 0;
  }
</style>
