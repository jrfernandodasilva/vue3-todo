<template>
  <div class="bg-gray-300 rounded-sm">
    <div class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0">
      <div class="flex items-center justify-center mr-2">
        <button 
          :class="{
            'dark:text-green-600 text-amber-700': isCompleted,
            'text-gray-3k00': !isCompleted,
          }"
          @click="onCheckClick"
          :title="isCompleted ? capitalize($t('change to pending')) : capitalize($t('mark as completed'))"
        >
          <svg 
            class="w-5 h-5 transition duration-1000 ease-in-out hover:scale-150"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M5 13l4 4L19 7">
              </path>
          </svg>
        </button>
      </div>

      <div class="w-full">
        <input
          v-model.trim="title"
          type="text"
          placeholder="Digite a sua tarefa"
          class="bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
          @keyup.enter="onTitleChange"
        />
      </div>

      <div class="ml-auto flex items-center justify-center">

        <Spinner v-show="showLoading" stroke-class="stroke-amber-700 dark:stroke-sky-700"/>

        <button 
          v-show="!showLoading"
          class="focus:outline-none"
          @click="onDelete"
          :title="capitalize($t('delete'))"
        >
          <svg
            class="ml-3 h-4 w-4 text-gray-500 transition duration-300 ease-in-out hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
</div>
</template>

<script setup>
import { defineProps, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { useCapitalize } from '@/composables/capitalize'
import { useValidationRules } from '@/composables/validations'
import { useNotification } from '@kyvg/vue3-notification'
import Spinner from '@/components/ui/Spinner'

const store = useStore()
const { t } = useI18n()
const { notify } = useNotification()
const { required, minLength, validateAll } = useValidationRules()

const props = defineProps({
  todo: {
    type: Object,
    default: () => {}
  }
})

const state = reactive({
  title: props.todo.title,
  isCompleted: props.todo.completed,
  capitalize: useCapitalize,
  showLoading: false
})

const updateTodo = () => {
  const payload = {
    id: props.todo.id,
    data: {
      title: state.title,
      completed: state.isCompleted
    }
  }
  state.showLoading = true
  store.dispatch('todo/update', payload)
    .then(() => {
      state.showLoading=false
      notify({ group:'general', type:'success', title: useCapitalize(t('success')), text:useCapitalize(t('todo updated with success'))})
    })
}

const onDelete = () => {
  state.showLoading = true
  store.dispatch('todo/delete', props.todo.id)
    .then(() => {
      state.showLoading=false
      notify({ group:'general', type:'success', title: useCapitalize(t('success')), text:useCapitalize(t('todo deleted with success'))})
    })
}

const onCheckClick = () => {
  state.isCompleted = !state.isCompleted
  updateTodo()
}

const onTitleChange = () => {
  let valitaded = validateAll(state.title, required(), minLength(5))
  if(valitaded !== true) {
    return notify({ group:'general', type:'error', title: t('error'), text: valitaded})
  }

  updateTodo()
}

const { title, isCompleted, capitalize, showLoading } = toRefs(state)
</script>
