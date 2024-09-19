<script setup>
import { ref,computed } from 'vue'
import LeftBar from '../components/todolist/LeftBar.vue'
import TodoCard from '../components/todolist/TodoCard.vue'
import AddButton from '../components/todolist/AddButton.vue'
import AddModal from '../components/todolist/AddModal.vue'

const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="container flex my-6 mx-auto gap-8 lg:px-8">
    <div class="w-1/4">
      <LeftBar />
    </div>
    <div class="w-3/4">
      <div class="flex justify-between mb-4">
        <div class="text-3xl">Pinned</div>
        <AddButton :onClick="openModal" />
        <AddModal :isOpen="isModalOpen" :closeModal="closeModal" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
      <div class="text-3xl my-4">Todo List</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
      <div class="text-3xl my-4">Completed</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  </div>
</template>

<style>

</style>