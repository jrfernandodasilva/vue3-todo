<template>
  <div class="space-y-2">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/Todo/Item'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { TodoItem },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters['todo/filtered'])

    return {
      todos
    }
  }
}
</script>
