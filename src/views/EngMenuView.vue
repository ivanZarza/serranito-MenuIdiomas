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
  <div class="cap-footer">
    </div>
    <span>Prices include VAT</span>
    <span>Ask the waiter about allergens</span>
    <span>We cannot guarantee that the dishes contain any trace of the allergens</span>
</div> 
</template>


<style scoped >

.capsule {
  display: grid;
  grid-template-columns: 100px 2fr;
  gap: 10px;
}

.cap-button {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  transition: width 250ms ease;
}

button:active {
  box-shadow: 1px 2px 1px var(--color-primary),0px 0px 5px #2e3191 inset;
  color: var(--color-primary);
  background-color: #2e3191;
}

button.current {
  color: var(--color-primary);
  background-color: #2e3191;
  width: calc(100% + 4px);
}

.base-table {
  width: 100%;
  height: auto;
  background-color: #2e3191;
  margin: 6px;
  border: 1px solid white;
  border-radius: 50px;
}


.table {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 50px;
  color: white;
  background-image:url(../../public/wall_tile.svg) ;
  background-size: 50px 50px ;
  background-repeat: repeat;
  font-size: 12px;
}

td {
  padding: 0 8px;
  animation: fade-in-left  normal 1s ease-out;
}

@keyframes fade-in-left {
  from {
    transform: translateX(-39px);
    opacity: 0;
  }
  to {
    transform: translateX(-2px);
    opacity: 1;
  }
}

span {
  font-size: x-small;
}
.cap-footer{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
</style>