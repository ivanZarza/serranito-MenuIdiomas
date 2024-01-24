<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="header" >
    <span>M</span>
    <span>E</span>
    <span>S</span>
    <span>O</span>
    <span>N</span>
    <span>E</span>
    <span>S</span>
  </div>
  <div class="header" >
    <span>D</span>
    <span>E</span>
    <span>L</span>
  </div>
  <div class="header" >
    <span>S</span>
    <span>E</span>
    <span>R</span>
    <span>R</span>
    <span>A</span>
    <span>N</span>
    <span>I</span>
    <span>T</span>
    <span>O</span>
  </div>  
  <div class="fondo">
      <nav>
        <RouterLink to="/english">English</RouterLink>
      </nav>
  <RouterView />
</div>
</template>

<style scoped>

  .header {
    width: 60%;
    text-align: center;
    color:  rgb(255, 217, 0);
    transform: translate(-50%, -50%);
    background-color: darkviolet;
    border: none;
  }

  div span {
    font-size: 3vw;
    font-weight: 600;
    text-shadow: -0.08em 0.03em 0.12em black;
  }

  div span:not(:first-child) {
    margin-left: -0.10em;
  }

</style>
