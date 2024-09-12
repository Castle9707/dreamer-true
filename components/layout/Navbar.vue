<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
<nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    <NuxtLink to="/" class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">logo00o</NuxtLink>
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <NuxtLink to="/calculator">Calculator</NuxtLink>
        </li>
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600 dropdown">
          <button class="dropbtn flex items-center">Works</button>
            <div class="dropdown-content">
              <NuxtLink to="#">Link 1</NuxtLink>
              <NuxtLink to="#">Link 2</NuxtLink>
              <NuxtLink to="#">Link 3</NuxtLink>
            </div>
        </li>
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <NuxtLink to="#">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <button
      @click="toggleMenu"
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
    <!-- Mobile menu -->
    <div class="w-full overflow-hidden transition-all duration-500 ease-out lg:hidden" :class="isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'">
      <ul class="flex flex-col gap-2 mt-2 mb-4">
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <NuxtLink to="/calculator">Calculator</NuxtLink>
        </li>
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600 dropdown">
          <button class="dropbtn flex items-center">Works</button>
            <div class="dropdown-content">
              <NuxtLink to="#">Link 1</NuxtLink>
              <NuxtLink to="#">Link 2</NuxtLink>
              <NuxtLink to="#">Link 3</NuxtLink>
            </div>
        </li>
        <li
          class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <NuxtLink to="#">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  color: #7149c7;
  font-weight: bold;
}
</style>