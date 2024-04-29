<template>
  <div @click="goTop">
    <div class="gotop-item" :class="{ 'is-hidden' : isHidden }">
      <span class="text">TOP</span>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/scss/_gotop.scss";
</style>

<script setup>
import { ref,computed,onMounted,onBeforeUnmount } from 'vue';

const yScrollValue = ref(0);

const goTop = () => {
  document.documentElement.scrollTop = 0;
}

const scrollWatch = () => {
  yScrollValue.value = window.scrollY;
}

const isHidden = computed(() => {
  return yScrollValue.value < 100;
})

onMounted(() => {
  window.addEventListener('scroll', scrollWatch);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollWatch);
})
</script>