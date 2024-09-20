<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTodoStore } from '../../store/note_stores'

const props = defineProps(['todo'])
const todoStore = useTodoStore()

const isListOpen = ref(false)
const dropdownRef = ref(null)
const buttonRef = ref(null)

const toggleList = () => {
  isListOpen.value = !isListOpen.value
}

const closeList = () => {
  isListOpen.value = false
}

const handleClickOutside = (event) => {
  // 確保點擊不是發生在當前元件的下拉菜單或按鈕上
  if (dropdownRef.value && !dropdownRef.value.contains(event.target) && buttonRef.value && !buttonRef.value.contains(event.target)) {
    closeList()
  }
}

const toggleTodo = () => {
  todoStore.toggleTodo(props.todo.id)
}

const pinTodo = () => {
  todoStore.pinTodo(props.todo.id)
}

const editTodo = () => {
  // Implement edit functionality
}

const deleteTodo = () => {
  todoStore.deleteTodo(props.todo.id)
}

onMounted(()=>{
  window.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(()=>{
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="w-fill flex p-4 bg-slate-400 text-slate-50 items-start rounded-lg  hover:shadow-slate-200 shadow-lg relative">
    <!-- 勾選框 -->
    <div class="inline-flex items-center mt-1 me-1">
      <label class="flex items-center cursor-pointer relative">
        <input type="checkbox" :checked="todo.isFinished" @change="toggleTodo" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-sky-950 checked:border-sky-50" />
        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
    </div>
    <!-- 文字部分 -->
    <div class="px-3 me-auto">
      <div class="text-xl">{{ todo.title }}</div>
      <div class="text-base font-extralight">{{ todo.content }}</div>
    </div>
    <button @click="toggleList" class="toggle-button" ref="buttonRef"><i class="ri-more-fill"></i></button>
    <!-- event list -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-90"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-90"
    >
      <div v-if="isListOpen" ref="dropdownRef" class="absolute dropdown -top-16 -right-28 w-fit mt-8 bg-white border rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out">
        <ul class="text-slate-900 py-1 px-3 m-1">
          <li @click="pinTodo" class="py-1">
            <i :class="todo.isPinned ? 'ri-unpin-fill' : 'ri-pushpin-fill'" class="me-2"></i>{{ todo.isPinned ? 'Unpin' : 'Pin' }}</li>
          <li @click="editTodo" class="py-1"><i class="ri-edit-2-fill me-2"></i>Edit</li>
          <li @click="deleteTodo" class="py-1"><i class="ri-delete-bin-6-fill me-2"></i>Delete</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style>

</style>