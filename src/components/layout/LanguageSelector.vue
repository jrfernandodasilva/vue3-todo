<template>
  <div class="fixed right-6">
    <select v-model="currentLocale" @change="changeLanguage" class="capitalize bg-gray-900 border border-gray-700 text-gray-100 py-2 px-4 rounded shadow">
      <option v-for="(locale, key) in locales" :key="key" :value="key">
        {{ capitalize($t(locale.title)) }}
      </option>
    </select>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useCapitalize } from '@/composables/capitalize'

export default {
  name: 'LanguageSelector',
  setup() {
    const store = useStore();

    const state = reactive({
      locales: store.state.locales,
      capitalize: useCapitalize
    })

    const currentLocale = computed({
      get() {
        return store.state.locale;
      },
      set(value) {
        store.dispatch('updateLocale', value);
      },
    })

    const changeLanguage = (event) => {
      currentLocale.value = event.target.value;
    }

    return {
      ...toRefs(state),
      currentLocale,
      changeLanguage,
    };
  },
};
</script>
