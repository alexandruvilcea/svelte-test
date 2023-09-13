<script lang="ts">
  import Cart from "../components/Cart.svelte";
  import JobDisplay from "../components/JobDisplay.svelte";
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
</script>

<div class="home-page">
  <h1>Job Listing Home page</h1>

  {#each data.product_list as job}
    <JobDisplay product={job} />
  {/each}

  <Cart />
</div>

<style>
  .home-page {
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
