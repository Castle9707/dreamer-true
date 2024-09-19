<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function,
})
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50" @click="closeModal"></div>

    <!-- Modal 內容 -->
    <div class="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-lg">
      <h3 class="text-xl font-semibold mb-4">Modal Title</h3>
      <p class="text-gray-600">This is a modal content.</p>

      <!-- 關閉按鈕 -->
      <button @click="closeModal" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Close
      </button>
    </div>
  </div>
</template>

<style>

</style>