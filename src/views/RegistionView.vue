<template>
  <div class="box-center">
    <div data-aos="fade-in" class="box">
      <form @submit.prevent="RegisterUser">
        <h2>註冊</h2>
        <div class="inputBox">
          <input type="text" required="required" id="username" class="input-username" v-model="form.name">
          <span>用戶名</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="email" required="required" id="email" class="input-email" v-model="form.email">
          <span>電子郵件</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" required="required" id="password" class="input-password" v-model="form.password">
          <span>密碼</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" required="required" id="confirm-password" class="input-confirm-password"
            v-model="form.password_confirmation">
          <span>確認密碼</span>
          <i></i>
        </div>
        <div>
          <button type="submit" class="submit-btn">註冊</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import axios from "axios"
import { useAuthStore } from "@/store/authStore.js"
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const RegisterUser = () => {
  axios.post('http://127.0.0.1:8000/api/auth/register', form.value)
    .then(response => {
      console.log('註冊成功:', response);
      // 根據需要進行跳轉或保存 token 等操作
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("token", response.data.access_token);
      // pinia 除存登入狀態
      authStore.setLoginStatus(true);
      authStore.user = response.data.user.name;
      console.log('name:', response.data.user.name)

      router.push({ name: 'home' })
    })
    .catch(error => {
      console.error('註冊失敗:', error);
    });

};
</script>

<style scoped>
@import "../assets/scss/_register.scss";
</style>