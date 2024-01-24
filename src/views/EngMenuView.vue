<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { start,bread,stew,share,friet,sea,meat,special,adds } from '@/data/enMenu';

const menuSection = ref()

const ToStart = defineAsyncComponent(()=> import('../components/ToStart.vue'))
const WithBread = defineAsyncComponent(()=> import('../components/WhithBread.vue'))
const TraditionalStews = defineAsyncComponent(()=> import('../components/TraditionalStew.vue'))
const ToShare = defineAsyncComponent(()=> import('../components/ToShare.vue'))
const SevillianFriedFood = defineAsyncComponent(()=> import('../components/SevillianFriedFood.vue'))
const FromSea = defineAsyncComponent(()=> import('../components/FromSea.vue'))
const FromPature = defineAsyncComponent(()=> import('../components/FromPasture.vue'))
const HouseSpecialities = defineAsyncComponent(()=> import('../components/HouseSpecialities.vue'))
const MixAccessories = defineAsyncComponent(()=> import('../components/MixAccessories.vue'))

const change = (component) => menuSection.value = component
</script>

<template>
  <div>
    <button class="fondo" @click="change(ToStart)">To start</button>
    <button class="fondo" @click="change(WithBread)">Whith bread</button>
    <button class="fondo"  @click="change(TraditionalStews)">Traditional stews </button>
    <button class="fondo"  @click="change(ToShare)">To share</button>
    <button class="fondo"  @click="change(SevillianFriedFood)">Sevillian fried food</button>
    <button class="fondo"  @click="change(FromSea)">From sea</button>
    <button class="fondo"  @click="change(FromPature)">From pasture</button>
    <button class="fondo"  @click="change(HouseSpecialities)">House specialities</button>
    <button class="fondo"  @click="change(MixAccessories)">Mix accessories</button>
  </div>
  <Transition name="start"> 
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
</Transition>
</template>


<style scoped >
.fondo {
  margin: 2px;
  font-size: 10px;
  text-align: center;
  padding: 5px;
  width: 100px;
  height: 40px;
  color: rgb(0, 0, 0);
  background-color:black;
  background-image: linear-gradient(rgb(255, 225, 53),rgb(155, 132, 0),rgb(255, 222, 37),rgba(122, 104, 0, 0.87));
  border-radius: 100%;
  border: 1px solid black;
  box-shadow: 0px 0px 5px black inset;
  text-shadow: 0px 0px 6px rgb(255, 255, 255) ;
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