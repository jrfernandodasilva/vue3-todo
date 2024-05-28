<template>
  <form 
    @submit.stop.prevent="addTodo"
    class="flex items-center px-4 h-15 rounded-sm border-l-2 dark:bg-gray-900 dark:border-green-400 mb-3 bg-slate-300 border-amber-700"
  > 
    <input
      v-model.trim="title"
      @keyup.esc="clearTitle"
      :placeholder="$t('add a new item')+' ...'"
      type="text"
      class="dark:bg-gray-900 bg-slate-300 placeholder-slate-500 dark:text-gray-500 text-amber-700 dark:font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />
    <Spinner v-show="showLoading" stroke-class="stroke-amber-700 dark:stroke-green-500"/>
    <button
      v-show="!showLoading"
      class="text-xs font-semibold focus:outline-none uppercase dark:text-green-400 text-amber-700"
      type="submit"
    >{{ $t('add') }}</button>
  </form>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { useCapitalize } from '@/composables/capitalize'
import { useValidationRules } from '@/composables/validations'
import { useNotification } from '@kyvg/vue3-notification'
import Spinner from '@/components/ui/Spinner'

const store = useStore()
const { t } = useI18n()
const { required, minLength, validateAll } = useValidationRules()

const state = reactive({
  title: '',
  showLoading: false
})
const { notify } = useNotification()

const addTodo = () => {
  let valitaded = validateAll(state.title, required(), minLength(5))
  if(valitaded !== true) {
    return notify({ group:'general', type:'error', title: t('error'), text: valitaded})
  }

  state.showLoading = true
  store.dispatch('todo/add', {
    title: state.title,
    completed: false
  })
  .finally(() => {
    clearTitle()
    state.showLoading = false
    notify({ group:'general', type:'success', title: useCapitalize(t('success')), text:useCapitalize(t('todo added with success'))})
  })
}

const clearTitle = () => state.title = ''

const { title, showLoading } = toRefs(state)
</script>
