<template>
  <section data-aos="fade-in">
    <h1 class="simulation-title">Simulation</h1>
    <p>Upload an image to see the result</p>
  </section>
  <section data-aos="fade-in">
    <div class="input-group">
      <input type="file" ref="input" class="form-control" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
      <button @click="onFileChange" class="btn btn-outline-secondary" type="button">Button</button>
    </div>
    <img :src="image" alt="">
  </section>
</template>

<style scope>
@import '../assets/scss/simulation.scss';
</style>

<script>
export default {
  data() {
    return {
      image: null,
    };
  },
  methods: {
    onFileChange() {
      const reader = new FileReader();
      console.log(reader)
      reader.onload = () => {
        this.image = reader.result;
      };
      reader.readAsDataURL(this.$refs.input.files[0]);
    }
  },
}
</script>