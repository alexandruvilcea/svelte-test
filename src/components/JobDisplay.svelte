<script lang="ts">
  import { cart } from "../stores/cartStore";
  import type { ProductItem } from "../data/models";
  export let product: ProductItem;
</script>

<div class="job-item">
  <p>Title: <b>{product.name}</b></p>
  <p>SKU: <b>{product.sku}</b></p>
  <button on:click={() => cart.addItem(product)}>Add to Cart</button>
</div>

<style>
  .job-item {
    border: 1px solid grey;
    padding: 2rem;
    width: 50%;
    margin: 1rem;
    border-radius: 10px;
  }
</style>
