<template>
  <div data-aos="fade-in" class="login-container">
    <button v-if="userName" @click="handleLogout" class="logout-button">登出</button>
    <h1 class="user-name">{{ userName }}</h1>
  </div>

  <div class="box-center">
    <div class="box" data-aos="fade-in">
      <form @submit.prevent="Normallogin">
        <h2>登入</h2>
        <div class="inputBox">
          <input type="text" required="required" id="username" v-model="credentials.email">
          <span>email</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" required="required" id="password" v-model="credentials.password">
          <span>密碼</span>
          <i></i>
        </div>
        <div class="links">
          <!-- 可以在這裡添加忘記密碼或註冊的連結 -->
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="登入" class="submit-btn">
        <p v-if="loginError" class="error-message">登入失敗，請檢查您的信箱或密碼。</p>
      </form>
    </div>
  </div>

</template>

<style scoped>
@import "../assets/scss/_login.scss";
</style>

<script setup>
import { ref } from "vue"
import axios from "axios"
import { useAuthStore } from "@/store/authStore.js"
import { useRouter } from 'vue-router';

const userName = ref("");
const loginError = ref(false);
const authStore = useAuthStore()
const router = useRouter();


// 登入必填訊息
const credentials = ref({
  email: '',
  password: '',
});

// ㄧ般登入
const Normallogin = () => {
  axios.post('http://127.0.0.1:8000/api/auth/login', credentials.value)
    .then(response => {
      console.log('登入成功:', response);
      // 根據需要進行跳轉或保存 token 等操作
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("token", response.data.access_token);
      // pinia 除存登入狀態
      authStore.setLoginStatus(true);
      authStore.user = response.data.user.name;
      console.log('name:', response.data.user.name)

      router.push({ name: 'home' });
      loginError.value = false;
    })
    .catch(error => {
      console.error('登入失敗:', error);
      loginError.value = true;
    });
};
// 登出處理函數
const handleLogout = () => {
  // 清除本地儲存的 token
  localStorage.removeItem("token");
  localStorage.removeItem("name");

  // 清空用戶名
  userName.value = "";
  authStore.isLoggedIn = false;
  authStore.user = "";
};
</script>