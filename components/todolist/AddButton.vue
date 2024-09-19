<script setup>
import { ref, defineProps } from 'vue'
const btnText = ref('')

// 當滑鼠進入時設定文字為 "Add"
const handleMouseOver = () => {
  btnText.value = 'Add'
}

// 當滑鼠離開時清空文字
const handleMouseLeave = () => {
  btnText.value = ''
}

const props = defineProps({
  onClick: Function,
})
</script>

<template>
  <button 
    class="text-slate-50 bg-slate-900 hover:bg-slate-700 p-2 rounded-lg  transition-all duration-300 ease-in-out" 
    @click="onClick"
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