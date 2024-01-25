<script setup>
import {  ref, shallowRef } from 'vue'
import { start,bread,stew,share,friet,sea,meat,special,adds } from '@/data/enMenu';

const dataSources = {
  start,bread,stew,share,friet,sea,meat,special,adds,
}

const menuSection = shallowRef(components.start)
const change = (sectionName) => {
  data.value = dataSources[sectionName]
}

const data = ref(dataSources.start)
</script>

<template>
  <div>
    <button class="fondo" @click="change('start')">To start</button>
    <button class="fondo" @click="change('bread')">Whith bread</button>
    <button class="fondo"  @click="change('stew')">Traditional stews </button>
    <button class="fondo"  @click="change('share')">To share</button>
    <button class="fondo"  @click="change('friet')">Sevillian fried food</button>
    <button class="fondo"  @click="change('sea')">From sea</button>
    <button class="fondo"  @click="change('meat')">From pasture</button>
    <button class="fondo"  @click="change('special')">House specialities</button>
    <button class="fondo"  @click="change('adds')">Mix accessories</button>
  </div>

  <div class="base">
    <table class="cap-ToStart">
      <tbody>
        <tr v-for="{ name, price, price2 } in data" :key="name">
          <td class="change">{{ name }}</td>
          <td>{{ price }}</td>
          <td>{{ price2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>


<style scoped >
button {
  margin: 2px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  width: 100px;
  height: 40px;
  color: #2e3191;
  background-color: var(--color-primary);
  border-radius: 15px 15px 0 0;
  border: 0
}

button:active {
  box-shadow: 1px 2px 1px var(--color-primary),0px 0px 5px #2e3191 inset;
  color: var(--color-primary);
  background-color: #2e3191;
}

.base {
  width: 600px;
  background-color: #2e3191;
  margin: 6px;
  border-radius: 50px;
}
.cap-ToStart {
  width: 600px;
  height: 90%;
  border: 3px thin black;
  padding: 40px 10px;
  color: transparent;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  border-radius: 50px;
  background: white;
  color: black;
  animation: fade-in-left  normal 1s ease-out;
}

@keyframes fade-in-left {
  from {
    transform: translateX(-40px)
  }
  to {
    transform: translateX(0px)
  }
}
</style>