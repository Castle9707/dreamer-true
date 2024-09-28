<script setup>
import { ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useTodoStore } from '../../store/note_stores'
import { watchEffect } from 'vue';

const todoStore = useTodoStore()
const newTodoTitle = ref('')
const newTodoContent = ref('')
const { todos } = storeToRefs(todoStore)
const { editTodo } = todoStore

const props = defineProps({
  isOpen: Boolean,
  editingTodoId: {
    type: [String, Number],
    default: null,
  }
})

const emit = defineEmits(['close'])

watchEffect(() => {
  if (props.editingTodoId) {
    const editingTodo = todoStore.todos.find(todo => todo.id === props.editingTodoId)
    if (editingTodo) {
      newTodoTitle.value = editingTodo.title
      newTodoContent.value = editingTodo.content
    }
  } else {
    newTodoTitle.value = ''
    newTodoContent.value = ''
  }
})

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  // 有帶入 id 的話進行 edit
  if (props.editingTodoId) {
    const success = todoStore.editTodo(props.editingTodoId, newTodoTitle.value, newTodoContent.value)
    if (success) {
      closeModal()
    } else {
      // 處理錯誤，例如顯示一個錯誤訊息
      console.error('編輯待辦事項失敗')
    }
  }
  newTodoTitle.value = ''
  newTodoContent.value = ''
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50" @click="closeModal"></div>

    <!-- Modal 內容 -->
    <div class="bg-white rounded-lg shadow-lg p-6 z-10 w-3/4 max-w-lg">
      <form @submit.prevent="handleSubmit">
        <label for="title" class="text-lg text-slate-600 mb-3">Title</label>
        <input type="text" id="title" class="border px-4 py-2 mb-2 rounded-lg w-full outline-cyan-500" placeholder="標題..." v-model="newTodoTitle" />
        <label for="content" class="text-lg text-slate-600 mb-2">Content</label>
        <textarea id="content" class="border px-4 py-2 mb-2 rounded-lg w-full outline-cyan-500" placeholder="待辦事項..." v-model="newTodoContent" ></textarea>
        <!-- 關閉按鈕 -->
        <div class="flex justify-end mt-6">
          <button type="button" @click="closeModal" class="me-2 border border-slate-400 hover:bg-slate-200 text-slate-500 py-2 px-4 rounded-md">
            Cancel
          </button>
          <button type="submit" class="bg-slate-800 hover:bg-slate-600 text-white py-2 px-4 rounded-md">
            Edit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

</style>