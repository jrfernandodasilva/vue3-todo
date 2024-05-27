<template>
  <div class="space-y-2">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script setup>
import TodoItem from '@/components/Todo/Item'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const todos = computed(() => store.getters['todo/filtered'])

</script>
