<template>
  <div class="fixed right-6">
    <select @change="changeLanguage" class="capitalize bg-gray-900 border border-gray-700 text-gray-100 py-2 px-4 rounded shadow">
      <option v-for="(locale, key) in locales" :key="key" :value="key">
        {{ capitalize($t(locale.title)) }}
      </option>
    </select>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'
import { useCapitalize } from '@/composables/capitalize'
import { useNotification } from '@kyvg/vue3-notification'

export default {
  name: 'LanguageSelector',
  setup() {
    const store = useStore();
    const { t } = useI18n()
    const { notify } = useNotification()

    const state = reactive({
      locales: store.state.locales,
      capitalize: useCapitalize
    })

    const currentLocale = computed({
      get() {
        return store.state.locale;
      },
      set(value) {
        store.dispatch('updateLocale', value)
        .then(() => notify({ group:'global', type:'info', title: useCapitalize(t('success')), text:t('language changed with success')}) )        
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
