import { createI18n } from 'vue-i18n';
import store from '@/store'; 
import en from '@/locales/en.json';
import pt from '@/locales/pt.json';

const i18n = createI18n({
  locale: store.state.locale,
  fallbackLocale: 'en',
  messages: {
    en,
    pt
  },
});

store.watch(
  (state) => state.locale,
  (newLocale) => i18n.global.locale = newLocale
)

export default i18n
