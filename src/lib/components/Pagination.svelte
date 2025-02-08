<svelte:options customElement="pagination-component" />

<script lang="ts">
  type Props = {
    currentPage: number;
    totalPages: number;
  };

  let { currentPage, totalPages }: Props = $props();

  function prevPage() {
    if (currentPage > 1) $host().dispatchEvent(new CustomEvent("prev", {}));
  }

  function nextPage() {
    if (currentPage < totalPages)
      $host().dispatchEvent(new CustomEvent("next", {}));
  }
</script>

<div>
  <button onclick={prevPage} disabled={currentPage === 1}>{"<"}</button>
  <span>Page {currentPage} of {totalPages}</span>
  <button onclick={nextPage} disabled={currentPage === totalPages}>{">"}</button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: auto;
    margin-top: 2em;
  }

  button {
    padding: 0.5em 1em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;

    border-radius: 5px;
  }

  button:disabled {
    cursor: not-allowed;
    color: #a2a2a2;
  }
</style>
