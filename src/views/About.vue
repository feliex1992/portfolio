<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About Me</h1>
      <p class="subtxt">I design, code and teach a bounch of other people to do the same.</p>

      <button><router-link to="/portfolio/one">Look at my work</router-link></button>
    </div>
    <div class="right-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi sapiente laudantium temporibus a. Impedit, dolore quam voluptate nam illum enim error ipsam exercitationem sapiente dolorem aspernatur laudantium expedita delectus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus harum mollitia repellat eos, doloremque optio aliquid ratione maiores enim? Et incidunt magnam animi, impedit assumenda eveniet obcaecati adipisci esse.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .left-content {
    background-color: #ffe476;
  }

  .right-content {
    background: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  button {
    font-size: 1.5em;
    margin-top: 100px
  }

  .subtxt {
    font-size: 1.5em;
    margin-top: 30px;
  }
</style>