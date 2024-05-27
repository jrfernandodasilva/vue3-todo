<template>
  <header class="fixed top-0 left-0 w-full bg-gray-900 text-gray-100 shadow-md py-4 px-6 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-semibold">To Do List</h1>
      <LanguageSelector :locales="locales" v-model="currentLocale" @change="changeLanguage" />
    </div>
  </header>
</template>

<script setup>
import LanguageSelector from '@/components/layout/LanguageSelector.vue';
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const state = reactive({
  locales: store.state.locales,
});

const currentLocale = computed({
  get() {
    return store.state.locale;
  },
  set(value) {
    store.dispatch('updateLocale', value);
  },
});

const changeLanguage = (event) => {
  currentLocale.value = event.target.value;
};

const { locales } = toRefs(state)  
</script>
