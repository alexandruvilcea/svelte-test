import { writable, type Updater, type Writable } from 'svelte/store';
import type { ProductItem } from '../data/models';

interface CartState {
  items: ProductItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

class CartStore implements Writable<CartState> {
  private store: Writable<CartState> = writable(initialState); // Initialize the store

  constructor() {}
  set(this: void, value: CartState): void {
    throw new Error('Method not implemented.');
  }
  update(this: void, updater: Updater<CartState>): void {
    throw new Error('Method not implemented.');
  }

  subscribe: Writable<CartState>['subscribe'] = this.store.subscribe;

  private updateState(updater: (state: CartState) => CartState) {
    this.store.update(updater);
  }

  addItem(product: ProductItem) {
    this.updateState((state) => {
      const index = state.items.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        state.items[index].quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.total += product.price;
      return state;
    });
  }

  removeItem(productId: number) {
    this.updateState((state) => {
      const index = state.items.findIndex((item) => item.id === productId);

      if (index !== -1) {
        state.total -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }

      return state;
    });
  }

  clear() {
    this.store.set(initialState);
  }
}

export const cart = new CartStore();
