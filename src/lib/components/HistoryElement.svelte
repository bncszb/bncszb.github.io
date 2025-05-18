<script>
  export let title = "";
  export let location = "";
  export let time = "";

</script>

<div class="history-element">
  <div class="title-container">
    <h3 class="title">{title}</h3>
  </div>

  <div class="details-container">
    <div class="detail-item location">
      <span class="text">{location}</span>
    </div>

    <div class="detail-item time">
      <span class="text">{time}</span>
    </div>
  </div>
</div>

<style>
  .history-element {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background-color: white;
    transition: all var(--transition-speed, 0.3s) ease;
    gap: 1rem;
  }

  .history-element:hover {
    background-color: rgba(44, 122, 123, 0.05);
    transform: translateY(-2px);
  }

  .title-container {
    flex: 3;
  }

  .details-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-theme-1, #2c7a7b);
  }

  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .text {
    color: var(--color-text, #2d3748);
  }

  /* Responsive adjustments */
  @media (max-width: 600px) {
    .history-element {
      flex-direction: column;
      align-items: flex-start;
      padding: 0.75rem;
    }

    .title-container,
    .details-container {
      width: 100%;
    }

    .details-container {
      margin-top: 0.5rem;
    }
  }
</style>
