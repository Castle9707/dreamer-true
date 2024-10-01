<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  originalImage: {
    type: String,
    required: true
  },
  duotoneImage: {
    type: String,
    required: true
  }
})

const parentRef = ref(null)
const topPanelRef = ref(null)
const handleRef = ref(null)

const handleMouseMove = (event) => {
  const parent = parentRef.value
  const topPanel = topPanelRef.value
  const handle = handleRef.value

  if (!parent || !topPanel || !handle) return

  const skewHack = parent.classList.contains('skewed') ? 1000 : 0
  // Get the delta between the mouse position and center point.
  const delta = (event.clientX - window.innerWidth / 2) * 0.5 

  // Move the handle.
  handle.style.left = `${event.clientX + delta}px`
  // Adjust the top panel width.
  topPanel.style.width = `${event.clientX + skewHack + delta}px`
}

onMounted(() => {
  const parent = parentRef.value
  if (parent) {
    parent.addEventListener('mousemove', handleMouseMove)
  }
})
</script>

<template>
  <!-- 特效測試 -->
  <div ref="parentRef" class="relative w-full min-h-[45vw] overflow-hidden splitview skewed">
    <div class="absolute w-screen min-h-[45vw] overflow-hidden bg-gray-800 z-10 panel bottom">
      <div class="absolute w-screen min-h-[45vw] text-white content">
        <div class="w-1/4 absolute top-1/2 right-[5%] -translate-y-1/2 text-center description">
          <h1 class="text-2xl mb-2">The original image.</h1>
          <p>This is how the image looks like before applying a duotone effect.</p>
        </div>
        <NuxtImg :src="originalImage" alt="Original" class="w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_20px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
    <div ref="topPanelRef" class="absolute w-1/2 min-h-[45vw] overflow-hidden bg-indigo-700 z-20 panel top -skew-x-[30deg] -ml-[1000px] w-[calc(50vw+1000px)]">
      <div class="absolute w-screen min-h-[45vw] text-white content skew-x-[30deg] ml-[1000px]">
        <div class="w-1/4 absolute top-1/2 left-[5%] -translate-y-1/2 text-center description">
          <h1 class="text-2xl mb-2">The duotone image.</h1>
          <p>This is how the image looks like after applying a duotone effect.</p>
        </div>
        <NuxtImg :src="duotoneImage" alt="Duotone" class="w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_20px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
    <div ref="handleRef" class="absolute h-[200%] w-[2px] bg-yellow-200 top-1/2 left-1/2 z-30 origin-top rotate-[30deg] -translate-y-1/2 handle"></div>
  </div>
</template>