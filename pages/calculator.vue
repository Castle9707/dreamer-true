<script setup>
import { ref,computed } from 'vue';
import ButtonCal from '../components/calculator/ButtonCal.vue';

// 正在輸入的數字，按下數字按鈕，值就會更新
const currentNumber = ref('') 
// 按下運算子操作符時，數字值（currentNumber）會被記錄在此
const previousNumber = ref('')
// 儲存最近選擇的運算子操作符
const operation = ref('')
// 最近一次的計算結果
const result = ref('')
// 待處理操作，遇先乘除後加減時，加減運算子會被記錄於此
const pendingOperation = ref('')

// 當用戶輸入一個新的數字時，我們更新 currentNumber。
// 當用戶輸入一個操作符時，我們將 currentNumber 移到 previousNumber，將操作符存入 operation，然後清空 currentNumber。
// 當用戶按下等號或輸入另一個操作符時，我們使用 previousNumber、currentNumber 和 operation 來執行計算，將結果存入 result

// 計算結果
const calculateResult = () => {
    const prev = parseFloat(previousNumber.value)
    const current = parseFloat(currentNumber.value)

    switch(operation.value) {
        case '+':
            result.value = (prev + current).toString()
            break
        case '-':
            result.value = (prev - current).toString()
            break
        case '*':
            result.value = (prev * current).toString()
            break
        case '/':
            result.value = (prev / current).toString()
            break
        case '%':
            result.value = (prev % current).toString()
            break
    }
    // previousNumber.value = result.value
    // currentNumber.value = ''
  }

const handleNumberClick = (num) => {
  if (operation.value !== '' && currentNumber.value === ''){
    currentNumber.value = num.toString()
  } else {
    currentNumber.value += num.toString()
  }
}

const handleOperationClick = (op) => {
  if (currentNumber.value === '' && result.value === '' && previousNumber.value === '') {
    return
  }

  if (currentNumber.value === '' && result.value !== '') {
    operation.value = op
    previousNumber.value = result.value
    result.value = ''
    return
  }

  if (previousNumber.value === '') {
    // 第一次輸入操作符
    previousNumber.value = currentNumber.value
    currentNumber.value = ''
    operation.value = op
    return
  } 

  // 已有之前的數字和操作符
  if (operation.value === '*' || operation.value === '/'){
    calculateResult()
    previousNumber.value = result.value
    result.value = ''
  } else if (op === '*' || op === '/'){
      if (pendingOperation.value){
        const temp = result.value
        calculateResult()
        previousNumber.value = result.value
        result.value = temp
      }
  } else {
      if (pendingOperation.value){
        const temp = previousNumber.value
        calculateResult()
        previousNumber.value = result.value
        currentNumber.value = temp
        calculateResult()
        previousNumber.value = result.value
        result.value = ''
      } else {
        calculateResult()
        previousNumber.value = result.value
        result.value = ''
      }
  }
  operation.value = op
  pendingOperation.value = (op === '+' || op === '-') ? op : ''
  currentNumber.value = '' // 在每次操作後清空 currentNumber
}

const handleToggleSign = () => {
  if(currentNumber.value){
    currentNumber.value = (parseFloat(currentNumber.value)* -1).toString()
  } else if(result.value){
    result.value = (parseFloat(result.value)* -1).toString()
  }
}

const handleEqualsClick = () => {
  if (operation.value === '') return

  if (currentNumber.value === '' && pendingOperation.value) {
      operation.value = pendingOperation.value
      pendingOperation.value = ''
      currentNumber.value = previousNumber.value
  }

  calculateResult()
  previousNumber.value = ''
  currentNumber.value = ''
  operation.value = ''
  pendingOperation.value = ''
}

const handleClearClick = () => {
  currentNumber.value = ''
  previousNumber.value = ''
  operation.value = ''
  result.value = ''
  pendingOperation.value = ''
}

// 千分位符號
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayValue = computed(() => {
  let value
  if (currentNumber.value !== '') {
    value = currentNumber.value
  } else if (previousNumber.value !== '') {
    value = previousNumber.value
  } else if (result.value !== '') {
    value = result.value
  }else {
    value = '0'
  }
  return formatNumber(value)
})
</script>

<template>
  <div>
    Page: Calculator
  </div>
  <div class="rounded-2xl w-72 h-fit mx-auto bg-gradient-to-r from-gray-400 to-gray-200 cal-shadow">
    <div class="result w-auto h-24 text-2xl text-white rounded-t-2xl flex justify-end items-end bg-gradient-to-r from-gray-900 to-gray-500">
      <h4 class="mx-5 mb-2">{{ displayValue }}</h4>
    </div>
    <div class="flex mt-2 mx-4">
      <ButtonCal value="C" @click="handleClearClick" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="±" @click="handleToggleSign" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="%" @click="handleOperationClick('%')" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="÷" @click="handleOperationClick('/')" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-4">
      <ButtonCal value="7" @click="handleNumberClick(7)" />
      <ButtonCal value="8" @click="handleNumberClick(8)" />
      <ButtonCal value="9" @click="handleNumberClick(9)" />
      <ButtonCal value="x" @click="handleOperationClick('*')" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-4">
      <ButtonCal value="4" @click="handleNumberClick(4)" />
      <ButtonCal value="5" @click="handleNumberClick(5)" />
      <ButtonCal value="6" @click="handleNumberClick(6)" />
      <ButtonCal value="-" @click="handleOperationClick('-')" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-4">
      <ButtonCal value="1" @click="handleNumberClick(1)" />
      <ButtonCal value="2" @click="handleNumberClick(2)" />
      <ButtonCal value="3" @click="handleNumberClick(3)" />
      <ButtonCal value="+" @click="handleOperationClick('+')" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
    <div class="flex mx-4">
      <ButtonCal value="0" @click="handleNumberClick(0)" class="w-30 mb-5" />
      <ButtonCal value="." @click="handleNumberClick('.')" />
      <ButtonCal value="=" @click="handleEqualsClick" class="from-orange-600 to-orange-300 active:from-orange-700 active:to-orange-400 text-white" />
    </div>
  </div>
  
</template>

<style>
.cal-shadow {
  box-shadow: inset 0 0 15px 8px rgb(0 0 0 / 0.25),
  inset 0 0 3px 1px rgb(255 255 255 / 1),
  0px 10px 20px 20px rgb(80 80 82 / 0.15);
}
</style>