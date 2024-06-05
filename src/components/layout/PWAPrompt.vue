<template>
  <Transition>
  <div v-if="shown" class="fixed left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-white dark:bg-slate-900 mt-4 dark:shadow-slate-200 dark:hover:shadow-slate-500" role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-slate-900 dark:text-blue-200">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
      </svg>
      <span class="sr-only">Fire icon</span>
    </div>
    <div class="text-sm font-normal ml-2">
      {{ $t('Install right now') }}
    </div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
      <button @click="installPWA" class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-slate-700" href="#">
        {{ $t('Install') }}
      </button>
      <button @click="dismissPrompt" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-slate-900 dark:hover:bg-slate-700" data-dismiss-target="#toast-undo" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  </div>
  </Transition>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

const shown = ref(false);
let installEvent;

onBeforeMount(() => {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    shown.value = true;
    installEvent = event; // Assuming you want to access the event outside of the function
  });
});

const installPWA = async () => {
  await installEvent.prompt();
  const { outcome } = await installEvent.userChoice;
  shown.value = false;
  if (outcome === 'accepted') {
    // Do something additional if the user chose to install
  } else {
    // Do something additional if the user declined
  }
};

const dismissPrompt = () => {
  shown.value = false;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
