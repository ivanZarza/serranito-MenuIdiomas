<script setup>
import { special } from '@/data/enMenu';

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
  <div class="cap">
    <div class="name">
      <TransitionGroup name="all" tag="ul">
        <li v-for="el, in special" key="el.name">{{ el.name }}</li>
      </TransitionGroup>
    </div>
    <div class="name">
      <ul class="price" v-for="el, in special" key="el.name">
        <li>{{ el.price }}</li>
      </ul>
    </div>
  </div>
</div>

</template>

<style >
.base {
  width: 600px;
  background-color: rgb(255, 207, 148);
  margin: 6px;
  border-radius: 50px;
  
}
.cap {
  width: auto;
  height: 90%;
  border: 3px thin black;
  padding: 40px 10px;
  color: transparent;
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0) inset,0px 0px 20px rgb(255, 48, 83)inset,0px 0px 40px rgb(255, 80, 109) inset,0px 0px 80px rgb(255, 122, 144) inset,0px 0px 60px rgb(255, 154, 171) inset;
  background-color: black;
  background-clip: text;
  text-shadow: 0px 1.0px 1.0px rgba(209, 209, 209, 0.479),0px 0px 1px rgba(0, 0, 0, 0);
}

.all-enter-active, .all-leave-active {
  transition: all 1.5s ease-in-out
}

.all-enter-from {
opacity: 0;
transform:  translateX(200px);

}
.all-leave-to {
  opacity: 1;
  transform:  translateX(200px);
}
</style>