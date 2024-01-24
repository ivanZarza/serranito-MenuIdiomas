<script setup>
import { defineAsyncComponent, ref, shallowRef } from 'vue'
import { start,bread,stew,share,friet,sea,meat,special,adds } from '@/data/enMenu';

const components = {
  start: defineAsyncComponent(()=> import('../components/ToStart.vue')),
  bread: defineAsyncComponent(()=> import('../components/WhithBread.vue')),
  stew: defineAsyncComponent(()=> import('../components/TraditionalStew.vue')),
  share: defineAsyncComponent(()=> import('../components/ToShare.vue')),
  friet: defineAsyncComponent(()=> import('../components/SevillianFriedFood.vue')),
  sea: defineAsyncComponent(()=> import('../components/FromSea.vue')),
  meat: defineAsyncComponent(()=> import('../components/FromPasture.vue')),
  special: defineAsyncComponent(()=> import('../components/HouseSpecialities.vue')),
  adds: defineAsyncComponent(()=> import('../components/MixAccessories.vue')),
}

const dataSources = {
  start,bread,stew,share,friet,sea,meat,special,adds,
}

const menuSection = shallowRef(components.start)
const change = (sectionName) => {
  menuSection.value = components[sectionName]
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
  <!--<Transition name="start"> -->
  <component :is="menuSection"
    :start="start"
    :bread="bread"
    :stew="stew"
    :share="share"
    :friet="friet"
    :sea="sea"
    :meat="meat"
    :special="special"
    :adds="adds"
  />
<!--</Transition> -->

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Plate</th>
          <th>Ration</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ name, price, price2 } in data" :key="name">
          <td>{{ name }}</td>
          <td>{{ price }}</td>
          <td>{{ price2 }}</td>
        </tr>
      </tbody>
    </table>
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
  /* background-image: linear-gradient(rgb(255, 225, 53),rgb(155, 132, 0),rgb(255, 222, 37),rgba(122, 104, 0, 0.87)); */
  border-radius: 15px 15px 0 0;
  border: 0
  /* border: 1px solid black; */
  /* box-shadow: 0px 0px 5px black inset; */
  /* text-shadow: 0px 0px 6px rgb(255, 255, 255) ; */
}

button:active {
  box-shadow: 1px 2px 1px rgb(0, 75, 75),0px 0px 5px black inset;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 122, 122);
  background-image: linear-gradient(rgb(0, 122, 122),rgb(2, 202, 202),rgb(32, 65, 65),rgb(32, 65, 65),rgb(2, 202, 202),rgb(0, 122, 122));
}

.start-enter-active {
  transition: all 1s ease-out;
}

.start-enter-from{
  opacity: 0;
  width: 00px;
}

.start-leave-to{
  opacity: 1;
  width: 600px;
}
</style>