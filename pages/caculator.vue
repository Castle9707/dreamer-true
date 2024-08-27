<script setup>
import { ref,reactive } from 'vue';

const number = reactive([0,1,2,3,4,5,6,7,8,9])
</script>

<template>
  <div>
    Page: Caculator
  </div>
  <div class="rounded-2xl w-72 h-fit bg-gradient-to-r from-gray-400 to-gray-200 inner-shadow">
    <div class="result w-auto h-24 text-2xl text-white rounded-t-2xl flex justify-end items-end bg-gradient-to-r from-gray-900 to-gray-500">
      <h4 class="mx-5 mb-2">result</h4>
    </div>
    <div class="flex mt-2 mx-3">
      <CaculatorButtonBlack />
      <CaculatorButtonBlack />
      <CaculatorButtonBlack />
      <CaculatorButtonOrange />
    </div>
    <div class="flex mx-3">
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
    <div class="flex mx-3">
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
    <div class="flex mx-3">
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
    <div class="flex mx-3">
      <CaculatorButtonNumber class="w-30 mb-5" />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
  </div>
  
</template>

<style>
.inner-shadow {
  box-shadow: inset 0 0 15px 8px rgb(0 0 0 / 0.25),
  inset 0 0 3px 1px rgb(255 255 255 / 1),
  50px 34px 184px -60px rgb(88 88 82 / 0.25);
}
</style>