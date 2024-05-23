import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/main.css'
import store from '@/store'
import i18n from '@/plugins/i18n';

createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app')
