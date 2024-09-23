<script setup>
import { ref,computed } from 'vue'
import ButtonCal from '../components/calculator/ButtonCal.vue'

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
// 前一個輸入的是：數字 / 運算子
const isNumberNow = ref(false)
const isOperatorNow = ref(false)
// 四則運算，儲存運算子與數字
const pendingOperation = ref('')
const pendingNumber = ref('')
// C/AC 切換鈕
const clearButtonText = ref('AC')
// 上一個運算子
const lastOperator = ref('')

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
  isNumberNow.value = true
  isOperatorNow.value = false
  if (isNewOperation.value) {
    // 每組數字的第一位
    previousNumber.value = currentNumber.value // 新加的
    // pendingNumber.value = currentNumber.value // 不能加這個辣
    currentNumber.value = num.toString()
    isNewOperation.value = false
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
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
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('B------------------')
  }
  updateClearButtonText()
}

// 按下運算子
const handleOperationClick = (op) => {
  isNumberNow.value = false
  isOperatorNow.value = true
  // 待解決的問題：連續按下運算子的話要變換成後一個運算子（中間可按正負號）
  // 想法：新增兩個布林值（或一個？）判斷現在是正在按數字or運算子（正負號是數字喔）

  // 更新最近一次按下的運算子
  lastOperator.value = op

  // // 如果前一個按下的是運算子 >> 這個解開超挫欸（超錯
  // if (isOperatorNow.value){
  //   operation.value = op
  // }

  // 前面有數字可以進行運算
  if (!isNewOperation.value) {
    executeOperation()
  }

  // 如果按下「乘、除」
  if (op === '*' || op === '/') {
    operation.value = op
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('===============>>op是乘除')
  } else if (op === '+' || op === '-') { 
    // 如果按下「加、減」
    console.log('===============>>op是加減')
    if (operation.value) {
      // 如果之前是乘除，保留乘除，將加減作為待處理操作
      pendingOperation.value = op
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('lastOperator:',lastOperator.value)
      console.log('result:',result.value)
      console.log('===============>>運算A')
    } else {
      // 否則直接更新當前操作
      operation.value = op
      pendingOperation.value = ''
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('lastOperator:',lastOperator.value)
      console.log('result:',result.value)
      console.log('===============>>運算B')
    }
  }
  isNewOperation.value = true
  updateClearButtonText()
}

// 運算邏輯
const executeOperation = () => {
  if (operation.value === '*' || operation.value === '/') {
    // 只要 operation 是 * 或 / 
    previousNumber.value = calculate(previousNumber.value || currentNumber.value, currentNumber.value, operation.value)
    currentNumber.value = calculate(pendingNumber.value, previousNumber.value, pendingOperation.value)
    pendingNumber.value = currentNumber.value
    pendingOperation.value = ''
    operation.value = ''
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('C------------------')
  } else if (operation.value) {
    // operation 是 + 或 - 
    if (pendingOperation.value) {
      pendingNumber.value = calculate(pendingNumber.value || previousNumber.value, currentNumber.value, pendingOperation.value)
      previousNumber.value = currentNumber.value
      currentNumber.value = pendingNumber.value
      pendingOperation.value = ''
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('lastOperator:',lastOperator.value)
      console.log('result:',result.value)
      console.log('D------------------')  
    } else if (lastOperator.value === '*' || lastOperator.value === '/') {
      previousNumber.value = currentNumber.value
      pendingOperation.value = operation.value
      currentNumber.value = previousNumber.value
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('lastOperator:',lastOperator.value)
      console.log('result:',result.value)
      console.log('E------------------')  
    } else {
      // lastOperator 是 + 或 -
      previousNumber.value = currentNumber.value
      currentNumber.value = calculate(pendingNumber.value || previousNumber.value, currentNumber.value, operation.value)
      // 新增下面一行
      pendingNumber.value = currentNumber.value
      pendingOperation.value = ''
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('lastOperator:',lastOperator.value)
      console.log('result:',result.value)
      console.log('F------------------')  
    }
    operation.value = ''  
  } else {
    // 沒有 operation
    pendingNumber.value = currentNumber.value
    previousNumber.value = currentNumber.value
    pendingOperation.value = operation.value
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('G------------------')
  }
}

// 按下等號
const handleEqualsClick = () => {
  executeOperation()
  if (pendingOperation.value) {
    result.value = calculate(pendingNumber.value, currentNumber.value, pendingOperation.value)
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('=A------------------')
  } else if (operation.value) {
    result.value = calculate(pendingNumber.value, currentNumber.value, operation.value)
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('=B------------------')
  } else {
    result.value = currentNumber.value
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('=C------------------')
  }
  currentNumber.value = result.value
  previousNumber.value = result.value
  pendingNumber.value = result.value
  operation.value = ''
  pendingOperation.value = ''
  lastOperator.value = ''
  isNewOperation.value = true
  isNumberNow.value = true
  isOperatorNow.value = false
}

// 按下清除按鈕
const handleClearClick = () => {
  if (clearButtonText.value === 'AC'){
    // 清除全部
    currentNumber.value = '0'
    previousNumber.value = ''
    pendingNumber.value = ''
    operation.value = ''
    pendingOperation.value = ''
    lastOperator.value = ''
    result.value = ''
    isNewOperation.value = true
    isNumberNow.value = true
    isOperatorNow.value = false
    console.log('按下AC------全清空------')
  } else {
    // 清除 currentNumber
    currentNumber.value = '0'
    lastOperator.value = ''
    isNewOperation.value = true
    isNumberNow.value = true
    isOperatorNow.value = false
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('lastOperator:',lastOperator.value)
    console.log('result:',result.value)
    console.log('按下C------------------')
  }
  clearButtonText.value = 'AC'
}

// C/AC 清除按鈕內容切換
const updateClearButtonText = () => {
  clearButtonText.value = currentNumber.value !== '0' ||
                          previousNumber.value !== '' ||
                          pendingNumber.value !== '' ||
                          operation.value !== '' ||
                          pendingOperation.value !== '' ||
                          result.value !== '' 
                          ? 'C' : 'AC'
}

// 正負號切換
const handleToggleSign = () => {
  currentNumber.value = (parseFloat(currentNumber.value) * -1).toString()
  updateClearButtonText()
  isNumberNow.value = true
  isOperatorNow.value = false
  console.log('pendingNumber:',pendingNumber.value)
  console.log('previousNumber:',previousNumber.value)
  console.log('currentNumber:',currentNumber.value)
  console.log('operation:',operation.value)
  console.log('pendingOperation:',pendingOperation.value)
  console.log('lastOperator:',lastOperator.value)
  console.log('result:',result.value)
  console.log('+/- ------------------')
}

// 添加小數點
const handleDecimalClick = () => {
  if (!currentNumber.value.includes('.')) {
    if (isNewOperation.value) {
      currentNumber.value = '0.'
      isNewOperation.value = false
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('result:',result.value)
      console.log('GGGGG------')
    } else {
      currentNumber.value += '.'
      isNewOperation.value = false
      console.log('pendingNumber:',pendingNumber.value)
      console.log('previousNumber:',previousNumber.value)
      console.log('currentNumber:',currentNumber.value)
      console.log('operation:',operation.value)
      console.log('pendingOperation:',pendingOperation.value)
      console.log('result:',result.value)
      console.log('HHHHH------')
    }
  } else if (isNewOperation.value) {
    currentNumber.value = '0.'
    isNewOperation.value = false
    console.log('pendingNumber:',pendingNumber.value)
    console.log('previousNumber:',previousNumber.value)
    console.log('currentNumber:',currentNumber.value)
    console.log('operation:',operation.value)
    console.log('pendingOperation:',pendingOperation.value)
    console.log('result:',result.value)
    console.log('IIIII------')
  }
  updateClearButtonText()
}

// 讓值變成現在的 0.01 倍
const handlePercent = () => {
  if (currentNumber.value !== ''){
      currentNumber.value = (parseFloat(currentNumber.value) / 100).toString()
      isNumberNow.value = true
      isOperatorNow.value = false
  }
  updateClearButtonText()
}

// 加上千分位
const formatNumber = (num) => {
  if (num === 'Error') return num
  // 確保輸入是字串以便正確處理小數點
  num = num.toString()
  // 確保如果只有小數點沒有數字的情況下，正常顯示 '0.'
  if (num === '.') num = '0.'
  // 把數字拆分為「整數」與「小數點後的數字」
  let [integer, decimal] = num.split('.')
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // 確保返回格式正確，避免小數點重複或遺漏的情況
  return decimal !== undefined ? `${integer}.${decimal}` : integer
  // return decimal ? `${integer}.${decimal}` : integer
}

// 畫面顯示的數字
const displayValue = computed(() => {
  return formatNumber(currentNumber.value)
})
</script>

<template>
  <div class="flex justify-center items-center my-10 font-bold text-slate-600">
    I spent {{ displayValue }} dollars today...
  </div>
  <div class="rounded-2xl w-72 h-fit mx-auto bg-gradient-to-br from-gray-300 to-gray-200 cal-shadow">
    <div class="result w-auto h-24 text-2xl text-white rounded-t-2xl flex justify-end items-end bg-gradient-to-br from-gray-900 to-gray-500">
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
  box-shadow: inset 0 0 3px 1px rgb(255 255 255 / 1),
  inset 0 0 8px 4px rgb(0 0 0 / 0.2),
  0px 10px 20px -20px rgb(80 80 82 / 0.15),
  20px 34px 75px 0px rgb(0 0 0 / 0.25);
}
</style>