<script setup>
import { ref, computed } from 'vue'
import LeftBar from '../../components/todolist/LeftBar.vue'
import TodoCard from '../../components/todolist/TodoCard.vue'
import AddButton from '../../components/todolist/AddButton.vue'
import AddModal from '../../components/todolist/AddModal.vue'

import { storeToRefs } from 'pinia'
import { useTodoStore } from '../store/note_stores'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = true
}

const uncompletedTodos = computed(()=> todos.value.filter(todo => !todo.isFinished))
</script>

<template>
  <div class="container flex my-6 mx-auto gap-8 w-5/6 lg:px-8">
    <div class="w-1/4">
      <LeftBar />
    </div>
    <div class="w-3/4">
      <div class="flex justify-between mb-4">
        <h3 class="text-3xl">Todo List</h3>
        <AddButton @click="openModal" />
        <AddModal :isOpen="isModalOpen" @close="isModalOpen = false" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 待辦事項 -->
        <TodoCard v-for="todo in uncompletedTodos" :key="todo.id" :todo="todo" />
      </div>
    </div>
  </div>
</template>

<style>

</style>