<script setup>
import { ref } from 'vue'
const btnText = ref('')

// 當滑鼠進入時設定文字為 "Add"
const handleMouseOver = () => {
  btnText.value = 'New'
}

// 當滑鼠離開時清空文字
const handleMouseLeave = () => {
  btnText.value = ''
}
</script>

<template>
  <button 
    class="text-slate-50 bg-slate-700 hover:bg-slate-800 p-2 rounded-lg  transition-all duration-300 ease-in-out" 
    @click="$emit('click')"
    @mouseover="handleMouseOver" 
    @mouseleave="handleMouseLeave">
    <i class="ri-add-line text-lg font-medium p-1"></i>
    <span 
      :class="{ 'pe-2': btnText }"
      class="transition-opacity duration-300 ease-in-out"
      :style="{ opacity: btnText ? 1 : 0.25 }">  <!-- 手動指定透明度 -->
      {{ btnText }}
    </span>

  </button>
</template>

<style>

</style>