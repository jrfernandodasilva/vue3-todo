<template>
  <header class="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 dark:text-gray-100 shadow-md py-3 px-6 z-10">
    <div class="container mx-auto flex justify-between items-center">

      <!-- Items on the left -->
      <div class="flex items-center">
        <h1 class="text-xl font-semibold text-amber-600 dark:text-white">To Do List</h1>
      </div>

      <!-- Items on the right -->
      <div class="flex items-center gap-4">
        <div class="flex items-center">
          <ThemeToggle />
        </div>
        <div class="flex items-center">
          <LanguageSelector :locales="locales" v-model="currentLocale" @change="changeLanguage" />
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import LanguageSelector from '@/components/layout/LanguageSelector.vue';
import ThemeToggle from '@/components/layout/ThemeToggle.vue';
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
