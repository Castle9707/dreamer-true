<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonCal from '../calculator/ButtonCal.vue'

const router = useRouter()
const password = ref('')

const handleNumberClick = (num) => {
  const numberLength = password.value.length
  // 最多只能按四碼
  if (numberLength < 4) {
    password.value += num.toString()
  } else {
    return
  }
}

const handleClear = () => {
  password.value = ''
}

const handleSubmit = () => {
  if (password.value === '2048' || password.value === '0000') {
    router.push('/calculator')
  } else {
    alert('再猜一次')
    password.value = ''
  }
}
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="grid grid-cols-2 gap-2 w-3/4 mx-auto my-6">
      <ButtonCal value="4" class="mx-auto w-9 h-9 md:w-12 md:h-12" @click="handleNumberClick(4)" />
      <ButtonCal value="8" class="mx-auto w-9 h-9 md:w-12 md:h-12" @click="handleNumberClick(8)" />
      <ButtonCal value="2" class="mx-auto w-9 h-9 md:w-12 md:h-12" @click="handleNumberClick(2)" />
      <ButtonCal value="0" class="mx-auto w-9 h-9 md:w-12 md:h-12" @click="handleNumberClick(0)" />
    </div>
    <div class="w-3/4 mx-auto my-6 flex">
      <button class="w-fit rounded border hover:border-slate-50 px-1.5 me-1 btn-shadow-sm" @click="handleClear">C</button>
      <input type="text" name="" id="" class="w-3/4 px-2 text-slate-600 rounded outline-0 bg-slate-50 btn-shadow-sm" readonly :value="password" />
      <button class="ms-1" @click="handleSubmit"><i class="ri-arrow-right-up-line p-1 bg-slate-400 hover:bg-slate-600 rounded btn-shadow-sm"></i></button>
    </div>
  </div>
</template>
<style scoped>
.btn-shadow-sm{  
  box-shadow: 1.5px 1.5px 2px 0 rgba(0,0,0,0.2),
  -1.5px -1.5px 2px 0 rgba(255,255,255,0.6);
}
</style>