<script setup>
import { ref, computed } from 'vue'
import { start,bread,stew,share,friet,sea,meat,special,adds } from '@/data/enMenu';

const dataSources = {
  start,bread,stew,share,friet,sea,meat,special,adds,
}

const currentTab = ref('start')
const data = computed(() => dataSources[currentTab.value])

const change = (sectionName) => {
  currentTab.value = sectionName
}

// i18n({
//   texts: {
//     en: {
//       tabsLabels: {
//         start: 'To start',
//         bread: 'Whith bread',
//         stew: 'Traditional stews',
//         share: 'To share',
//         friet: 'Sevillian fried food',
//         sea: 'From sea',
//         meat: 'From pasture',
//         special: 'House specialities',
//         adds: 'Mix accessories',
//       }
//     }
//   },
// })

const tabLabels = {
  start: 'To start',
  bread: 'Whith bread',
  stew: 'Traditional stews',
  share: 'To share',
  friet: 'Sevillian fried food',
  sea: 'From sea',
  meat: 'From pasture',
  special: 'House specialities',
  adds: 'Mix accessories',
}

const tabKeys = [
  'start',
  'bread',
  'stew',
  'share',
  'friet',
  'sea',
  'meat',
  'special',
  'adds',
]

</script>

<template>
  <div class="capsule">  
    <div class="cap-button">
      <button
        v-for="key in tabKeys"
        class="fondo"
        :class="{ current: currentTab == key }"
        @click="change(key)"
      >
        {{ tabLabels[key] }}
        <!-- {{ $t(`tabsLabels.${key}`) }} -->
      </button >
    </div>

    <div class="base-table">
      <table class="table">
        <tbody>
          <tr v-for="{ name, price, price2 } in data" :key="name">
            <td class="change">{{ name }}</td>
            <td>{{ price }}</td>
            <td>{{ price2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
  <div class="cap-footer"> 
    <span>Prices include VAT</span>
    <span>Ask the waiter about allergens</span>
</div> 
</template>


<style scoped >

.capsule {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.cap-button {
  margin-top: 10px;
}

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
  border: 0;
  transform: translateY(0);
  transition: transform 400ms ease;
}

button:active {
  box-shadow: 1px 2px 1px var(--color-primary),0px 0px 5px #2e3191 inset;
  color: var(--color-primary);
  background-color: #2e3191;
}

button.current {
  color: var(--color-primary);
  background-color: #2e3191;
  transform: translate(-10px);
}

.base-table {
  width: 500px;
  background-color: #2e3191;
  margin: 6px;
  border: 1px solid white;
  border-radius: 50px;
}
.table {
  width: 100%;
  height: 100%;
  padding: px 20px;
  color: transparent;
  display: grid;
  grid-template-columns: 9fr 1fr 1fr;
  border-radius: 50px;
  background: white;
  color: black;
  animation: fade-in-left  normal 1s ease-out;
  padding: 0px 20px;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 75%, rgb(211, 211, 211) 100%);
  background-size: 50px 50px ;
  background-repeat: repeat;
  text-shadow: 0px 0px 6px white;
}

@keyframes fade-in-left {
  from {
    transform: translateX(-39px)
  }
  to {
    transform: translateX(-2px)
  }
}

.cap-footer{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
</style>