<template>
  <div class="three main-content">
    <div class="left-content slideUp">
      
      <router-link to="/portfolio/two"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

      <h1>PRINT</h1>

      <p class="subtxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptates laboriosam illum.</p>
      <p class="subtxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure in iste. Sed expedita sit dolore exercitationem architecto obcaecati atque amet dignissimos tempore. Ipsam nobis recusandae quidem, ut illum blanditiis.</p>

    </div>

    <div class="right-content img2">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'three',
}
</script>

<style lang="scss" scoped>

  $page_color: #5487e8;

  h1 {
    color: $page_color !important;
  }

  .img2 {
    background: url('../assets/card.jpg');
    background-size: cover;
    background-position: 50%;

    img{
      width: 50%;
    }
  }

</style>