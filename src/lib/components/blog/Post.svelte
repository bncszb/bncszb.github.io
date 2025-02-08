<script lang="ts">
  import type { Post } from "$lib/models/blog/post";
  import Markdown from "../Markdown.svelte";

  type Props = {
    post: Post;
  };

  let { post }: Props = $props();
</script>

<div class="post">
  <div class="post-header">
    <div class="title">{post.title}</div>
    <div class="date">{post.date.toDateString()}</div>
  </div>
  <div class="content">
    <Markdown source={post.shortContent} />
  </div>
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
</style>
