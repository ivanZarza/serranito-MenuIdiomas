<script setup>



</script>


<template>
    <div>
      <router-link to="/english/menu"><div class="wrap">FOOD</div></router-link>
      <router-link to="/english/drinks"><div class="wrap">DRINKS</div></router-link>
    </div>
    <RouterView />  

</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  background-color: var(--color-primary);
  border-radius: 10px;
}

.wrap {
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  color: var(--color-primary);
  background-color: #2e3191;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  height: 90%;
  font-size: 1rem;
}

router-link {
  text-decoration: none;
  color: var(--color-primary);
} 

</style>