<template> 
<nav class="block w-full px-4 py-3 mx-auto bg-amber-600 text-black dark:bg-gray-900 dark:text-white shadow-md">
  <div class="flex justify-between items-center gap-4">
    <div class="flex gap-4">
      <!-- Input de rádio para All -->
      <div class="inline-flex items-center">
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="all">
          <input v-model="filter" @change="onFilter" name="type" type="radio"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-amber-500 dark:text-gray-900 text-amber-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-amber-300 before:opacity-0 before:transition-opacity dark:checked:border-green-400 dark:checked:before:bg-gray-900 checked:border-amber-900 checked:before:bg-amber-900 hover:before:opacity-10"
            id="all" value="all" />
          <span
            class="absolute dark:text-green-900 text-amber-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label class="mt-px font-light dark:text-green-600 text-amber-100 cursor-pointer select-none" htmlFor="all">
          <span class="capitalize">{{ $t('all') }}</span>
        </label>
      </div>
      <!-- Input de rádio para Done -->
      <div class="inline-flex items-center">
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="done">
          <input v-model="filter" @change="onFilter" name="type" type="radio"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-amber-500 dark:text-gray-900 text-amber-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-amber-300 before:opacity-0 before:transition-opacity dark:checked:border-green-400 dark:checked:before:bg-gray-900 checked:border-amber-900 checked:before:bg-amber-900 hover:before:opacity-10"
            id="done" value="done" />
          <span
            class="absolute dark:text-green-900 text-amber-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label class="mt-px font-light dark:text-green-600 text-amber-100 cursor-pointer select-none" htmlFor="done">
          <span class="capitalize">{{ $t('done') }}</span>
        </label>
      </div>
      <!-- Input de rádio para Pending -->
      <div class="inline-flex items-center">
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="pending">
          <input v-model="filter" @change="onFilter" name="type" type="radio"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-amber-500 dark:text-gray-900 text-amber-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-amber-300 before:opacity-0 before:transition-opacity dark:checked:border-green-400 dark:checked:before:bg-gray-900 checked:border-amber-900 checked:before:bg-amber-900 hover:before:opacity-10"
            id="pending" value="pending" />
          <span
            class="absolute dark:text-green-900 text-amber-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label class="mt-px font-light dark:text-green-600 text-amber-100 cursor-pointer select-none" htmlFor="pending">
          <span class="capitalize">{{ $t('pending') }}</span>
        </label>
      </div>
    </div>
    <!-- Input de texto -->
    <div class="relative flex-1">
      <input v-model.trim="search" @keyup="onSearch" type="search" :placeholder="capitalize($t('search'))" class="w-full rounded-lg border border-amber-500 dark:border-green-700 bg-white dark:bg-transparent px-3 py-2.5 pl-9 font-sans text-sm dark:text-green-400 text-amber-600 outline-none transition-all dark:placeholder-blue-gray-300 dark:focus:border-blue-gray-300 focus:outline-none disabled:border-0 disabled:bg-amber-100" />
      <!-- Ícone de pesquisa -->
      <label for="search" class="absolute left-3 top-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 dark:text-green-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 1a7 7 0 015.469 11.37l5.221 5.22a1 1 0 01-1.414 1.414l-5.22-5.22A7 7 0 118 1zm0 2a5 5 0 100 10A5 5 0 008 3z" clip-rule="evenodd" />
        </svg>
      </label>
    </div>
  </div>
</nav>  
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useCapitalize } from '@/composables/capitalize'

const store = useStore()
const state = reactive({
  filter: store.state.todo.filter,
  search: '',
  capitalize: useCapitalize
})

const onFilter = () => {
  store.dispatch('todo/filter', state.filter)
    .then(() => state.search = '')
}

const onSearch = (event) => {
  if (event.key === 'Escape') {
    state.search = '';
  }

  state.filter = state.search.length > 0 ? '' : 'all';
  
  if(['all', 'done', 'pending'].includes(state.search))
  {
    state.filter = state.search
  }

  store.dispatch('todo/filter', state.search) 
}

const {filter, search, capitalize } = toRefs(state)
</script>

<style scoped>
  .peer:not(:checked) {
    border-color: #455a64;
  }
</style>
