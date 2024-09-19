<script setup>
import { ref,computed } from 'vue'
import 'remixicon/fonts/remixicon.css'
</script>

<template>
  <!-- 電腦版 -->
  <div class="bg-slate-200 h-fit rounded-lg p-3">
    <div class="group flex hover:bg-slate-600 active:bg-slate-800 rounded-lg py-2 px-3 mx-auto">
      <i class="ri-dashboard-fill text-slate-900 group-hover:text-slate-50 group-active:text-slate-50"></i>
      <h5 class="group-hover:text-slate-50 group-active:text-slate-50 ps-1">Dashboard</h5>
    </div>
    <div class="group flex hover:bg-slate-600 active:bg-slate-800 rounded-lg py-2 px-3 mx-auto">
      <i class="ri-pushpin-fill text-slate-900 group-hover:text-slate-50 group-active:text-slate-50"></i>
      <!-- <i class="ri-unpin-fill"></i> -->
      <h5 class="group-hover:text-slate-50 group-active:text-slate-50 ps-1">Pinned</h5>
    </div>
    <div class="group flex hover:bg-slate-600 active:bg-slate-800 rounded-lg py-2 px-3 mx-auto">
      <i class="ri-list-check text-slate-900 group-hover:text-slate-50 group-active:text-slate-50"></i>
      <h5 class="group-hover:text-slate-50 group-active:text-slate-50 ps-1">Todos</h5>
    </div>
    <div class="group flex hover:bg-slate-600 active:bg-slate-800 rounded-lg py-2 px-3 mx-auto">
      <i class="ri-checkbox-fill text-slate-900 group-hover:text-slate-50 group-active:text-slate-50"></i>
      <h5 class="group-hover:text-slate-50 group-active:text-slate-50 ps-1">Completed</h5>
    </div>
  </div>
  <!-- 手機版 -->
  <!-- <div class="bg-slate-200 w-full m-4 rounded-lg"> -->
    
    <!-- dashboard completed todos pinned -->
  <!-- </div> -->
</template>

<style>

</style>