import todo from './modules/todo'
import { createStore } from 'vuex'

const supportedLocales = ['en', 'pt']
const browserLocale = (navigator.language || navigator.userLanguage)?.slice(0, 2)
const initialLocale = supportedLocales.includes(browserLocale) ? browserLocale : 'en'

export default createStore({
  state: {
    locale: initialLocale,
    locales: {
      en: {title: 'english_not_translate', flag: 'us'}, 
      pt: {title: 'portuguese_not_translate', flag: 'br'}
    }
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
    updateLocale({ commit }, locale) {
      commit('setLocale', locale);
    },
  },
  modules: {
    todo,
  }
})
