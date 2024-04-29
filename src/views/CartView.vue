<template>
  <div data-aos="fade-in" class="cart">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table class="table">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id" class="item-list">
          <td width="100">
            <a @click.prevent="removeCartItem(item.id)" href="#">x</a>
          </td>
          <td width="100">
            <img
              class="img-item"
              :src="item.product.imageUrl"
              alt=""
            />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select @change="(evt) => setCartQty(item.id, evt)" :value="item.qty" class="form-select" name="" id="">
              <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
            </select>
          </td>
          <td class="money-item">${{ item.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot class="item-foot">
        <tr>
          <td colspan="5" class="total-item">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <section class="cart-button">
    <div class="row g-4">
      <div class="col-3" v-for="product in sortProducts" :key="product.id">
        <div class="card">
          <img
            class="card-img-top"
            :src="product.imageUrl"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">
              {{ product.title }}
              <span class="badge rounded-pill bg-danger">NT$ {{ product.price }}</span>
            </h5>
            <p class="card-text">Some quick example text to build</p>
            <a @click.prevent="addToCart(product.id)" href="#" class="add-cart btn btn-outline-primary">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "../assets/scss/cart.scss";
</style>

<script>
import { productsStore } from "../store/productsStore.js";
import { cartStore } from "../store/cartStore.js";
import { mapState,mapActions } from 'pinia';

export default {
  setup() {
    const products = productsStore();
    return {
      sortProducts: products.sortProducts
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'removeCartItem','setCartQty'])
  },
  computed: {
    ...mapState(cartStore, ['cartList'])
  }
};
</script>

