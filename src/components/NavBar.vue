<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="../assets/images/logo.png" alt="" />AI廢棄物與回收分類</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/identity">及時偵測</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/simulation"
              >模擬偵測</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/principle">原理介紹</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span v-if="!isLoggedIn">帳號</span>
              <span v-if="isLoggedIn">{{ user }}</span>
            </a>
            <ul class="dropdown-menu">
              <li v-if="isLoggedIn"><a class="dropdown-item" href="#"><router-link class="nav-link active" to="/login">個人檔案</router-link></a></li>
              <li v-if="!isLoggedIn"><a class="dropdown-item" href="#"><router-link class="nav-link active" to="/login">登入</router-link></a></li>
              <li v-if="!isLoggedIn"><a class="dropdown-item" href="#"><router-link class="nav-link active" to="/register">註冊</router-link></a></li>
              <li v-if="isLoggedIn"><hr class="dropdown-divider" /></li>
              <li v-if="isLoggedIn" @click="handleLogout"><a class="dropdown-item" href="#">登出</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link type="button" class="nav-link" to="/cart">
              購物車
              <span class="badge rounded-pill bg-danger">{{ cart.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  display: flex;
  align-items: center;
  font-size: 25px;
}
.nav-item > .nav-link {
  font-size: 20px;
}
</style>

<script setup>
import { mapState, mapActions, storeToRefs } from "pinia";
import { cartStore } from "../store/cartStore.js";
import { useAuthStore } from "../store/authStore.js";

const authStore = useAuthStore();

const { isLoggedIn, user } = storeToRefs(authStore)

const handleLogout = () => {
  // 清除本地儲存的 token
  localStorage.removeItem("token");
  localStorage.removeItem("name");

  // 清空用戶名
  useAuthStore.isLoggedIn = false;
  useAuthStore.user = "";
  window.location.reload();
};

// 使用 mapState 和 mapActions 來導入 cartStore 和 userStore 的狀態和操作
const { cart } = mapState(cartStore, ["cart"]);
</script>