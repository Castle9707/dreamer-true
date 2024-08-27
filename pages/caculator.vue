<script setup>
import { ref,reactive } from 'vue';

const number = reactive([0,1,2,3,4,5,6,7,8,9])
</script>

<template>
  <div>
    Page: Caculator
  </div>
  <div class="rounded-2xl w-72 h-5/6 bg-gradient-to-r from-gray-400 to-gray-200">
    <div class="result w-72 h-24 text-2xl text-white rounded-t-2xl flex justify-end items-end bg-gradient-to-r from-gray-900 to-gray-500">1234</div>
    <div class="flex mx-auto">
      <CaculatorButtonBlack />
      <CaculatorButtonBlack />
      <CaculatorButtonBlack />
      <CaculatorButtonOrange />
    </div>
    <div class="flex">
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
    <div class="flex">
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
    <div class="flex">
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
    <div class="flex">
      <CaculatorButtonNumber class="w-30" />
      <CaculatorButtonNumber />
      <CaculatorButtonOrange />
    </div>
  </div>
  
</template>

<style scoped>
.result{

}
</style>