<script setup>
import { ref,computed } from 'vue';
import ButtonCal from '../components/caculator/ButtonCal.vue';

const currentNumber = ref('')
const previousNumber = ref('')
const operation = ref('')
const result = ref('')
</script>

<template>
  <div>
    Page: Caculator
  </div>
  <div class="rounded-2xl w-72 h-fit bg-gradient-to-r from-gray-400 to-gray-200 inner-shadow">
    <div class="result w-auto h-24 text-2xl text-white rounded-t-2xl flex justify-end items-end bg-gradient-to-r from-gray-900 to-gray-500">
      <h4 class="mx-5 mb-2">{{ displayValue }}</h4>
    </div>
    <div class="flex mt-2 mx-3">
      <ButtonCal value="C" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="±" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="%" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="÷" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-3">
      <ButtonCal value="7" />
      <ButtonCal value="8" />
      <ButtonCal value="9" />
      <ButtonCal value="x" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-3">
      <ButtonCal value="4" />
      <ButtonCal value="5" />
      <ButtonCal value="6" />
      <ButtonCal value="-" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-3">
      <ButtonCal value="1" />
      <ButtonCal value="2" />
      <ButtonCal value="3" />
      <ButtonCal value="+" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-3">
      <ButtonCal value="0" class="w-30 mb-5" />
      <ButtonCal value="." />
      <ButtonCal value="=" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
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