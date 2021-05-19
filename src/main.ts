import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { Toast } from '@/components/k-toast/index'

createApp(App).use(store).use(Toast).mount('#app')
