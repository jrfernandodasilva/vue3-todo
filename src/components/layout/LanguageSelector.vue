<template>
  <select v-model="currentLocale" class="capitalize py-2 px-4 cursor-pointer bg-gray-50 border border-amber-600 text-amber-700 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
    <option v-for="(locale, key) in locales" :key="key" :value="key">
      {{ capitalize($t(locale.title)) }}
    </option>
  </select> 
</template>

<script setup>
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'
import { useCapitalize } from '@/composables/capitalize'
import { useNotification } from '@kyvg/vue3-notification'

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

const { locales, capitalize } = toRefs(state)
</script>
