<script>
  import { cart } from "../stores/cartStore";
</script>

<section>
  <h2>Shopping Cart</h2>
  <ul>
    {#each $cart.items as item (item.id)}
      <li>
        <span>{item.name} - {item.quantity} x {item.sku}</span>
        <button on:click={() => cart.removeItem(item.id)}>Remove</button>
      </li>
    {/each}
  </ul>
  <button on:click={cart.clear}>Clear Cart</button>
</section>
