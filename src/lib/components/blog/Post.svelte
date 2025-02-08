<script lang="ts">
  import type { Post } from "$lib/models/blog/post";
  import Markdown from "../Markdown.svelte";

  type Props = {
    post: Post;
  };

  let { post }: Props = $props();
  let short = $state(true);
</script>

<div class="post">
  <div class="post-header">
    <div class="title">{post.title}</div>
    <div class="date">{post.date.toDateString()}</div>
  </div>

  {#if post.content?.length != post.shortContent?.length}
    <div class="content">
      <button class="content" onclick={() => (short = !short)}>
        <Markdown source={short ? post.shortContent : post.content} />
      </button>
    </div>
  {:else}
    <div class="content">
      <Markdown source={post.content} />
    </div>
  {/if}
</div>

<style>
  .post {
    margin: 1em;
    margin-bottom: 3em;
  }

  .post :global(h1) {
    /* font-size: 2em; */
    display: none;
  }

  .post-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    gap: 16px;
    margin-top: 2em;
    font-size: medium;
    padding-bottom: 1em;
  }

  .title {
    font-weight: bold;
    font-size: larger;
  }

  .date {
    font-style: italic;
  }

  .content {
    text-align: justify;
  }
</style>
