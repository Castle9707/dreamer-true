<script setup>
import { watch } from 'vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false) // 漢堡選單
const isWorkOpen = ref(false) // 多頁連結

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const toggleWork = () => {
  isWorkOpen.value = !isWorkOpen.value
}

// 使用 useRoute 來監聽路由變化
const route = useRoute()

// 監聽路由變化，重置狀態
watch(() => route.fullPath, ()=> {
  isMenuOpen.value = false
  isWorkOpen.value = false
})
// 定義導航項目
const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '#' },
]

const workItems = [
  { name: 'Calculator', path: '/calculator' },
  { name: 'To Do List', path: '/todolist/dashboard' },
  { name: 'Building', path: '#' },
]
</script>

<template>
<nav class="w-5/6 px-4 py-2 bg-white shadow-md rounded-md fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    <NuxtLink to="/" class="mr-4 flex cursor-pointer py-1.5 text-base text-slate-800 font-semibold"><NuxtImg src="/logo_01.png" width="40" /></NuxtLink>
    <div class="hidden md:block">
      <ul class="flex items-center gap-8">
        <li v-for="item in navItems" key="item.name" class="text-sm text-slate-600 hover:font-bold transition-all duration-200">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
        <li class="relative">
          <button @click="toggleWork" class="flex items-center text-sm text-slate-600 hover:font-bold transition-all duration-200">
            Works
            <svg class="w-4 h-4 ml-1 transition-transform duration-200" :class="{ 'rotate-180': isWorkOpen }" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </button>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-90"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-90"
          >
          <div v-if="isWorkOpen" class="absolute right-0 w-36 mt-8 bg-white border rounded-md shadow-lg z-10 transition-all duration-500 ease-in-out" style="top: 100%;">
            <NuxtLink v-for="link in workItems" :key="link.name" :to="link.path" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:font-bold">{{ link.name }}</NuxtLink>
          </div>
        </transition>
        </li>
      </ul>
    </div>
    <button
      @click="toggleMenu"
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
    <!-- Mobile menu -->
    <div class="w-full overflow-hidden transition-all duration-500 ease-out lg:hidden" :class="isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'">
      <ul class="pt-2 pb-4 space-y-1 text-sm">
        <li v-for="item in navItems" :key="item.name">
          <NuxtLink :to="item.path" class="block px-4 py-2 hover:bg-slate-100 rounded-md">{{ item.name }}</NuxtLink>
        </li>
        <li>
          <button @click="toggleWork" class="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-slate-100">
            Works
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isWorkOpen }" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </button>
          <div 
            class="overflow-hidden transition-all duration-200 ease-in-out"
            :class="isWorkOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'"
          >
            <NuxtLink v-for="link in workItems" :key="link.name" :to="link.path" class="block px-6 py-2 rounded-md hover:bg-slate-100">{{ link.name }}</NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>