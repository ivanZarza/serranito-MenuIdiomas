<script setup>
import EspSelectView from './EspSelectView.vue';
import { ref, computed } from 'vue'
import { whiteWine, redWine, localWine } from '@/data/esDrinks';

const dataSources = {
  whiteWine, redWine, localWine
}

const currentTab = ref('whiteWine')
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
  whiteWine: 'Vinos blancos', 
  redWine: 'Vinos tintos',    
  localWine: 'Vinos olorosos'
}

const tabKeys = [
  'whiteWine',
  'redWine',
  'localWine'
]

</script>

<template>
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
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Copa</th>
              <th>Botella</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ name, price, price2 } in data" :key="name">
              <td class="change">{{ name }}</td>
              <td>{{ price }}</td>
              <td>{{ price2 }}</td>
            </tr>
          </tbody>
        </table>
    </div>  
  <div class="cap-footer">
    <span>Los precios incluyen IVA</span>
    <span>Pregunte al camarero por los alergenos</span>
    <span>No podemos garantizar la presencia de trazas de cualquiera de los alergenos indicados</span>
</div> 

  <EspSelectView />

</template>


<style scoped >


.cap-button {
  /*margin-top: 10px;
  margin-right:3px ;*/
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  align-items: center;
  gap: 2px;
  bottom: 0;
  width: 100vw;
  padding: 4px;
}

button {
  margin: 2px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  width: 110px;
  height: 60px;
  color: #2e3191;
  background-color: var(--color-primary);
  border-radius: 15px ;
  border: 0;
  transform: translateY(0);
  transition: height 500ms ease;
}

button:active {
  box-shadow: 1px 2px 1px var(--color-primary),0px 0px 5px #2e3191 inset;
  color: var(--color-primary);
  background-color: #2e3191;
}

button.current {
  color: var(--color-primary);
  background-color: #2e3191;
  width: 110px;
  height: 70px;
}

.base-table {
  width: 100vw;
  height: auto;
  min-height: 400px;
  background-image:url(../../public/wall_tile_02.svg);
  background-size: 50px 50px ;
  background-repeat: repeat;
  background-color: #2e3191;
  border: 1px solid white;
  border-radius: 50px;
}


.table {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 50px;
  color: white;
  font-size: 20px;
}

td {
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
text-align: center;
}

th {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-primary);
  border-radius: 50px;
  text-align: left;
}
</style>