<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-5/3 md:w-4/5 lg:w-2/3 mx-auto">
      <LanguageSelector/>
      <TodoSpinner v-if="loading"/>
      <Todo v-else/>   
    </div>
  </div>
</template>

<script>

import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import TodoSpinner from '@/components/ui/Spinner'
import LanguageSelector from '@/components/layout/LanguageSelector'
import Todo from './components/Todo/TodoMain'

export default {
  name: 'App',
  components: { 
    TodoSpinner,
    LanguageSelector,
    Todo 
  },
  setup () {

    const state = reactive({
      loading: true
    }) 

    const store = useStore()
    store.dispatch('todo/all').finally(() => {
      setTimeout(() => {
         state.loading = false;
        }, store.state.todo.simulateLoadTime)
    })
 
    return {
      ...toRefs(state), 
    }
  }  
}
</script>
