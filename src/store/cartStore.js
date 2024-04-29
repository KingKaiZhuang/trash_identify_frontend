import { defineStore } from "pinia";
import { productsStore } from "./productsStore.js";

export const cartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      const currentCart = this.cart.find((item) => item.productId === productId);
      console.log(currentCart);

      if (currentCart) {
        currentCart.qty += qty;
        return;
      }

      this.cart.push({
        id: new Date().getTime(),
        productId,
        qty,
      });
    },
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id);
      console.log(currentCart);
      currentCart.qty = event.target.value * 1;
    },
    removeCartItem(id) {
      const index =  this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    }
  },
  getters: {
    cartList: ({ cart }) => {

      const { products } = productsStore();

      const carts = cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        };
      });

      const total = carts.reduce((acc, item) => acc + item.subtotal, 0);

      return {
        carts,
        total
      };
    },
  },
});
