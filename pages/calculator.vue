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
// 是否為新的數字開始（接在運算子後的第一個數字）
const isNewOperation = ref(true)
// 四則運算，儲存運算子與數字
const pendingOperation = ref('')
const pendingNumber = ref('')
// C/AC 切換鈕
const clearButtonText = ref('AC')

// 運算子、計算
const calculate = (a, b, op) => {
  a = parseFloat(a) || 0
  b = parseFloat(b) || 0
  switch(op) {
    case '+': return (a + b).toString()
    case '-': return (a - b).toString()
    case '*': return (a * b).toString()
    case '/': return (b !== 0 ? (a / b).toString() : 'Error')
    default: return b.toString()
  }
}

// 按下數字鍵
const handleNumberClick = (num) => {
  if (isNewOperation.value) {
    // 每組數字的第一位
    currentNumber.value = num.toString()
    isNewOperation.value = false
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('A------------------')
  } else {
    //每組數字第二位起
    currentNumber.value = currentNumber.value === '0' ? num.toString() : currentNumber.value + num.toString()
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('B------------------')
  }
  updateClearButtonText()
}

// 乘除號先運算時
const executeOperation = () => {
  if (operation.value === '*' || operation.value === '/') {
    previousNumber.value = calculate(previousNumber.value || currentNumber.value, currentNumber.value, operation.value)
    // currentNumber.value = previousNumber.value //這邊修改待測試
    currentNumber.value = calculate(pendingNumber.value, previousNumber.value, pendingOperation.value)
    pendingNumber.value = currentNumber.value
    pendingOperation.value = ''
    operation.value = ''
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('C------------------')
  } else if (pendingOperation.value) {
    pendingNumber.value = calculate(pendingNumber.value || previousNumber.value, currentNumber.value, pendingOperation.value)
    previousNumber.value = currentNumber.value
    currentNumber.value = pendingNumber.value
    pendingOperation.value = ''
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('D------------------')
  } else if (operation.value) {
    previousNumber.value = currentNumber.value
    pendingOperation.value = operation.value
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('E------------------')
  } else {
    pendingNumber.value = previousNumber.value || currentNumber.value
    previousNumber.value = currentNumber.value
    pendingOperation.value = operation.value
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('F------------------')
  }
}

const handleOperationClick = (op) => {
  if (!isNewOperation.value) {
    executeOperation()
  }
  
  if (op === '*' || op === '/') {
    operation.value = op
  } else { 
    // 加或減
    if (operation.value) {
      pendingOperation.value = op
    } else {
      operation.value = op
    }
  }
  isNewOperation.value = true
  updateClearButtonText()
}

// 正負號切換
const handleToggleSign = () => {
  currentNumber.value = (parseFloat(currentNumber.value) * -1).toString()
  updateClearButtonText()
}

const handleEqualsClick = () => {
  executeOperation()
  if (pendingOperation.value) {
    result.value = calculate(pendingNumber.value, currentNumber.value, pendingOperation.value)
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('=A------------------')
  } else if (operation.value) {
    result.value = calculate(pendingNumber.value, currentNumber.value, operation.value)
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('=B------------------')
  } else {
    result.value = currentNumber.value
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('=C------------------')
  }
  currentNumber.value = result.value
  previousNumber.value = result.value
  pendingNumber.value = result.value
  operation.value = ''
  pendingOperation.value = ''
  isNewOperation.value = true
}

const handleClearClick = () => {
  if (clearButtonText.value === 'AC'){
    // 清除全部
    currentNumber.value = '0'
    previousNumber.value = ''
    pendingNumber.value = ''
    operation.value = ''
    pendingOperation.value = ''
    result.value = ''
    isNewOperation.value = true
  } else {
    // 清除 currentNumber
    currentNumber.value = '0'
    isNewOperation.value = true
  }
  clearButtonText.value = 'AC'
}

// C/AC 按鈕內容切換
const updateClearButtonText = () => {
  clearButtonText.value = currentNumber.value !== '0' ||
                          previousNumber.value !== '' ||
                          pendingNumber.value !== '' ||
                          operation.value !== '' ||
                          pendingOperation.value !== '' ||
                          result.value !== '' 
                          ? 'C' : 'AC'
}

// 添加小數點
const handleDecimalClick = () => {
  if (!currentNumber.value.includes('.')) {
    if (isNewOperation.value) {
      currentNumber.value = '0.'
      isNewOperation.value = false
      console.log('GGGGG------')
    } else {
      currentNumber.value += '.'
      isNewOperation.value = false
      console.log('HHHHH------')
    }
  }
  updateClearButtonText()
}

// 讓值變成現在的 0.01 倍
const handlePercent = () => {
  if (currentNumber.value !== ''){
      currentNumber.value = (parseFloat(currentNumber.value) * 0.01).toString()
  }
  updateClearButtonText()
}

// 加上千分位
const formatNumber = (num) => {
  if (num === 'Error') return num
  let [integer, decimal] = num.toString().split('.')
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return decimal ? `${integer}.${decimal}` : integer
}

// 畫面顯示的數字
const displayValue = computed(() => {
  return formatNumber(currentNumber.value)
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
      <ButtonCal :value="clearButtonText" @click="handleClearClick" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="±" @click="handleToggleSign" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
      <ButtonCal value="%" @click="handlePercent" class="from-gray-900 to-gray-500 active:from-gray-950 active:to-gray-600 text-white" />
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
      <ButtonCal value="." @click="handleDecimalClick" />
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