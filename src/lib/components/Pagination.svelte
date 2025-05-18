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
  
  // Generate page numbers to display
  function getPageNumbers() {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are few
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at the beginning
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4);
      }
      
      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3);
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  }
  
  function goToPage(page: number | string) {
    // Skip if it's not a number or is the current page
    if (typeof page !== 'number' || page === currentPage) return;
    
    if (page < currentPage) {
      while (currentPage > page) {
        prevPage();
      }
    } else {
      while (currentPage < page) {
        nextPage();
      }
    }
  }
</script>

<nav class="pagination" aria-label="Pagination">
  <button 
    class="pagination-button prev" 
    onclick={prevPage} 
    disabled={currentPage === 1}
    aria-label="Go to previous page"
  >
    <span class="arrow">←</span>
    <span class="button-text">Previous</span>
  </button>
  
  <div class="pagination-pages">
    {#each getPageNumbers() as page}
      {#if page === '...'}
        <span class="ellipsis">…</span>
      {:else}
        <button 
          class="page-number {currentPage === page ? 'active' : ''}" 
          onclick={() => goToPage(page)}
          aria-current={currentPage === page ? 'page' : undefined}
          aria-label="Go to page {page}"
        >
          {page}
        </button>
      {/if}
    {/each}
  </div>
  
  <button 
    class="pagination-button next" 
    onclick={nextPage} 
    disabled={currentPage === totalPages}
    aria-label="Go to next page"
  >
    <span class="button-text">Next</span>
    <span class="arrow">→</span>
  </button>
</nav>

<style>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: auto;
    background-color: white;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
  }

  .pagination-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-border);
    background-color: white;
    color: var(--color-theme-1);
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
  }
  
  .pagination-button:hover:not(:disabled) {
    background-color: var(--color-theme-1);
    color: white;
    border-color: var(--color-theme-1);
  }
  
  .pagination-button:disabled {
    cursor: not-allowed;
    color: var(--color-text-light);
    opacity: 0.5;
  }
  
  .arrow {
    font-size: 1.1rem;
  }
  
  .pagination-pages {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .page-number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    border: 1px solid var(--color-border);
    background-color: white;
    color: var(--color-text);
    font-size: 0.9rem;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
  }
  
  .page-number:hover:not(.active) {
    border-color: var(--color-theme-1);
    color: var(--color-theme-1);
  }
  
  .page-number.active {
    background-color: var(--color-theme-1);
    color: white;
    border-color: var(--color-theme-1);
    font-weight: 600;
  }
  
  .ellipsis {
    width: 2rem;
    text-align: center;
    color: var(--color-text-light);
  }
  
  @media (max-width: 600px) {
    .button-text {
      display: none;
    }
    
    .pagination-button {
      padding: 0.5rem;
    }
  }
</style>
