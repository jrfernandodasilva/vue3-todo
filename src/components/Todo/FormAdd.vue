<template>
  <form 
    @submit.stop.prevent="addTodo"
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
  > 
    <input
      v-model.trim="title"
      @keyup.esc="clearTitle"
      :placeholder="$t('add a new item')+' ...'"
      type="text"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />
    <button
      class="text-green-400 text-xs font-semibold focus:outline-none uppercase"
      type="submit"
    >{{ $t('add') }}</button>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
  
  setup () {
    const store = useStore();
    const state = reactive({
      title: ''
    })

    const addTodo = () => {
      if(!state.title){
        return;
      }

      store.dispatch('todo/add', {
        title: state.title,
        completed: false
      })
      .finally(() => {
        clearTitle()
      })
    }

    const clearTitle = () => state.title = ''
  
    return {
      ...toRefs(state),
      addTodo,
      clearTitle
    }
  },
}
</script>

