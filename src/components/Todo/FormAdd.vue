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
    <Spinner v-show="showLoading" stroke-class="stroke-green-500"/>
    <button
      v-show="!showLoading"
      class="text-green-400 text-xs font-semibold focus:outline-none uppercase"
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
