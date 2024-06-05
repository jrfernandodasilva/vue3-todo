import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/main.css'
import store from '@/store'
import i18n from '@/plugins/i18n';
import Notifications from '@kyvg/vue3-notification'
import './registerServiceWorker'

createApp(App)
  .use(store)
  .use(i18n)
  .use(Notifications)
  .mount('#app')
