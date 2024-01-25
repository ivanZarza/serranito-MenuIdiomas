<script setup>
import { bread } from '@/data/enMenu';

defineProps({
  start: Object,
  bread: Object,
  stew: Object,
  share: Object,
  friet: Object,
  sea: Object,
  meat: Object,
  special: Object,
  adds: Object,
})

</script>

<template>

<div class="base">
  <div class="cap-WhithBread">
    <div class="name">
        <li v-for="el, in bread" key="el.name">{{ el.name }}</li>
    </div>
    <div class="name">
      <ul class="price" v-for="el, in bread" key="el.name">
        <li>{{ el.price }}</li>
      </ul>
    </div>
  </div>
</div>

</template>

<style scoped>
.base {
  width: 600px;
  background-color: rgb(255, 207, 148);
  margin: 6px;
  border-radius: 50px;
  
}
.cap-ToStart {
  width: auto;
  height: 90%;
  border: 3px thin black;
  padding: 40px 10px;
  color: transparent;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  border-radius: 50px;
  background: white;
  color: black;

  animation: fade-in-left 250ms ease-in-out;
}
</style>