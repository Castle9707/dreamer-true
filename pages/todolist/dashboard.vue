<script setup>
import { ref, computed } from 'vue'
import LeftBar from '../../components/todolist/LeftBar.vue'
import TodoCard from '../../components/todolist/TodoCard.vue'
import AddButton from '../../components/todolist/AddButton.vue'
import AddModal from '../../components/todolist/AddModal.vue'
import EditModal from '../../components/todolist/EditModal.vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../store/note_stores'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

const isAddModalOpen = ref(false)
const isEditModalOpen = ref(false)
const editingTodoId = ref(null)

const openAddModal = () => {
  isAddModalOpen.value = true
}
const closeAddModal = () => {
  isAddModalOpen.value = false
}

const openEditModal = (todoId = null) => {
  editingTodoId.value = todoId
  isEditModalOpen.value = true
}
const closeEditModal = () => {
  isEditModalOpen.value = false
  editingTodoId.value = null
}

const pinnedTodos = computed(()=> todos.value.filter(todo => todo.isPinned))
const uncompletedTodos = computed(()=> todos.value.filter(todo => !todo.isFinished))
const completedTodos = computed(()=> todos.value.filter(todo => todo.isFinished))
</script>

<template>
  <div class="container block sm:flex my-6 mx-auto gap-8 w-5/6 lg:px-8">
    <div class="w-full sm:w-1/4">
      <LeftBar />
    </div>
    <div class="w-full sm:w-3/4">
      <div class="flex justify-between mb-4">
        <h3 class="text-3xl">Pinned</h3>
        <AddButton @click="openAddModal" />
        <AddModal 
          :isOpen="isAddModalOpen" 
          @close="closeAddModal" 
        />
        <EditModal 
          :isOpen="isEditModalOpen" 
          :editingTodoId="editingTodoId"
          @close="closeEditModal" 
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 釘選 -->
        <TodoCard v-for="todo in pinnedTodos" :key="todo.id" :todo="todo" class="bg-amber-500" @edit="openEditModal" />
      </div>
      <h3 class="text-3xl my-4">Todo List</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 待辦事項 -->
        <TodoCard v-for="todo in uncompletedTodos" :key="todo.id" :todo="todo" @edit="openEditModal" />
      </div>
      <h3 class="text-3xl my-4">Completed</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 已完成 -->
        <TodoCard v-for="todo in completedTodos" :key="todo.id" :todo="todo" class="bg-zinc-400" @edit="openEditModal" />
      </div>
    </div>
  </div>
</template>

<style>

</style>