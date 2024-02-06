import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FiGb, FiBl,FiEa,FiDe,FiSquareDe} from "oh-vue-icons/icons";


import App from './App.vue'
import router from './router'

addIcons(FiGb,FiBl,FiEa,FiDe,FiSquareDe);

const app = createApp(App)


app.component("v-icon", OhVueIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
