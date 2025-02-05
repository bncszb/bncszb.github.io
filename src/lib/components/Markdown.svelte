<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  export let source: string | undefined;
</script>

<div class="svelte-markdown">
  {#if source?.trim()}
    <SvelteMarkdown source={source.trim()} />
  {/if}
</div>

<style>
  .svelte-markdown :global(p) {
    padding-bottom: 1em;
  }
  .svelte-markdown :global(a) {
    text-decoration: underline;
  }
</style>
