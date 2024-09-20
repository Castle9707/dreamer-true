<script setup>
import { ref, defineProps } from 'vue'

defineProps({
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
      <form @submit.prevent="onSubmit">
        <label for="title" class="text-lg text-slate-600 mb-3">Title</label>
        <input type="text" id="title" class="border px-4 py-2 mb-2 rounded-lg w-full" />
        <label for="content" class="text-lg text-slate-600 mb-2">Content</label>
        <textarea id="content" class="border px-4 py-2 mb-2 rounded-lg w-full"></textarea>
        <!-- 關閉按鈕 -->
        <div class="flex justify-end mt-6">
          <button @click="closeModal" class="me-2 border border-slate-400 hover:bg-slate-200 text-slate-500 py-2 px-4 rounded-md">
            Cancel
          </button>
          <button class="bg-slate-600 hover:bg-slate-800 text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

</style>