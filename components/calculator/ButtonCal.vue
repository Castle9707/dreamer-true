<script setup>
const props = defineProps({
  value:{
    type: [String,Number],
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.value)
}
</script>

<template>
  <button @click="handleClick" class="w-14 h-14 text-black rounded-lg flex justify-center items-center bg-gradient-to-br from-gray-400 to-gray-100 active:from-gray-500 active:to-gray-200 btn-shadow m-1">
    {{ value }}
  </button>
</template>

<style>
.btn-shadow{  
  box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.2),
  -3px -3px 4px 0 rgba(255,255,255,0.6);
}
</style>