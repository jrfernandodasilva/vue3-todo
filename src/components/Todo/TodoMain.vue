<template>
  <TodoFormAdd/>
  <TodoFilter v-if="$store.state.todo.all.length"/>
  <TodoItems/>
  <TodoEmpty v-if="!$store.state.todo.all.length"/>
</template>

<script>
import TodoFormAdd from '@/components/Todo/FormAdd'
import TodoFilter from '@/components/Todo/Filter'
import TodoItems from '@/components/Todo/Items'
import TodoEmpty from '@/components/Todo/Empty'

export default {
  name: 'TodoMain',
  components: {
    TodoFormAdd,
    TodoFilter,
    TodoItems,  
    TodoEmpty
  }
}
</script>
