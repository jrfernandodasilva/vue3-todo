<template>
  <div>
    <Header />
    <main class="mt-16">
      <notifications class="mt-16 mr-3" group="global" position="top center" />
      <notifications class="mt-16 mr-3" group="general" position="top right" />
      <PWAPrompt/>
      <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-5/3 md:w-4/5 lg:w-2/3 mx-auto">
          <Spinner v-if="loading"/>
          <Todo v-else/>   
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Spinner from '@/components/ui/Spinner'
import Header from '@/components/layout/Header'
import Todo from '@/components/Todo/TodoMain'
import PWAPrompt from '@/components/layout/PWAPrompt'
 
const state = reactive({
  loading: true
}) 

const store = useStore()
store.dispatch('todo/all').finally(() => {
  setTimeout(() => {  // simulate load time
      state.loading = false;
    }, store.state.simulateLoadTime)
})

const { loading } = toRefs(state)
</script>
