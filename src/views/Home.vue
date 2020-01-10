<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>BELAJAR DAN LATIHAN!</h1>

      <p class="subtxt">Seiring dengan pesatnya perkembangan tekhnologi, terutama di bidang informasi menuntut kita untuk beradaptasi agar dapat bersaing</p>
      <p class="subtxt">Saya mengikuti langkah-langkah di tutorial.</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

  .img1 {
    background: url("../assets/home.jpg")
  }

</style>