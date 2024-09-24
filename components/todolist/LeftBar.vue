<script setup>
import { ref, reactive } from 'vue'
import 'remixicon/fonts/remixicon.css'
import { watchEffect } from 'vue';

const route = useRoute()

const isActive = ref({
  dashboard: false,
  pinned: false,
  todos: false,
  completed: false,
})

watchEffect(() => {
  isActive.value = {
    dashboard: route.path === '/todolist/dashboard',
    pinned: route.path === '/todolist/pinned',
    todos: route.path === '/todolist/todos',
    completed: route.path === '/todolist/completed'
  }
})
</script>

<template>
  <!-- 電腦版 -->
  <div class="bg-slate-200 h-fit rounded-lg p-3 mb-4">
    <NuxtLink to="/todolist/dashboard">
      <div class="group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500"
           :class="{ 'bg-slate-600': isActive.dashboard }">
        <i class="ri-dashboard-fill group-hover:text-slate-50" :class="isActive.dashboard ? 'text-slate-50' : 'text-slate-900'"></i>
        <h5 class="ps-1 group-hover:text-slate-50" :class="isActive.dashboard ? 'text-slate-50' : ''">Dashboard</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/todolist/pinned">
      <div class="group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500"
           :class="{ 'bg-slate-600': isActive.pinned }">
        <i class="ri-pushpin-fill group-hover:text-slate-50" :class="isActive.pinned ? 'text-slate-50' : 'text-slate-900'"></i>
        <h5 class="ps-1 group-hover:text-slate-50" :class="isActive.pinned ? 'text-slate-50' : ''">Pinned</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/todolist/todos">
      <div class="group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500"
           :class="{ 'bg-slate-600': isActive.todos }">
        <i class="ri-list-check group-hover:text-slate-50" :class="isActive.todos ? 'text-slate-50' : 'text-slate-900'"></i>
        <h5 class="ps-1 group-hover:text-slate-50" :class="isActive.todos ? 'text-slate-50' : ''">Todos</h5>
      </div>
    </NuxtLink>
    
    <NuxtLink to="/todolist/completed">
      <div class="group flex rounded-lg py-2 px-3 mx-auto my-1 hover:bg-slate-500"
           :class="{ 'bg-slate-600': isActive.completed }">
        <i class="ri-checkbox-fill group-hover:text-slate-50" :class="isActive.completed ? 'text-slate-50' : 'text-slate-900'"></i>
        <h5 class="ps-1 group-hover:text-slate-50" :class="isActive.completed ? 'text-slate-50' : ''">Completed</h5>
      </div>
    </NuxtLink>
  </div>
  <!-- 手機版 -->
</template>

<style>

</style>