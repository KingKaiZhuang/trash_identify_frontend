<template>
  <NavBar/>
  <GoTop/>
  <div class="container">
    <div class="row">
      <router-view/>
    </div>
  </div>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import GoTop from './components/GoTop.vue';

export default {
  components: {
    NavBar,
    Footer,
    GoTop
  },
  // rest of your code
}
</script>

