<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { id: 1, content: '/banner-a01.jpg' },
  { id: 2, content: '/banner-a02.jpg' },
  { id: 3, content: '/banner-a03.jpg' },
  { id: 4, content: '/banner-a04.jpg' },
  { id: 5, content: '/banner-a05.jpg' },
]

const currentIndex = ref(0)
const isAutoPlaying = ref(true)
const autoPlayInterval = ref(null)
const touchStartX = ref(0)
const touchEndX = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  stopAutoPlay()  // 先清除可能存在的計時器
  autoPlayInterval.value = setInterval(nextSlide, 3000) // 每3秒切換一次
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const toggleAutoPlay = () => {
  if (isAutoPlaying.value) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
  isAutoPlaying.value = !isAutoPlaying.value
}

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].clientX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50 // 滑動閾值
  if (touchEndX.value < touchStartX.value - swipeThreshold){
    nextSlide()
  } else if (touchEndX.value > touchStartX.value + swipeThreshold) {
    prevSlide()
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="w-full relative">
    <div 
      class="overflow-hidden"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div 
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="slide in slides" 
          :key="slide.id" 
          class="w-full flex-shrink-0 relative"
        >
          <div class="bg-indigo-50 rounded-xl h-96 flex justify-center items-center overflow-hidden">
            <NuxtImg :src="slide.content" class="w-full h-full rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
      <button 
        @click="prevSlide"
        class="group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
      >
        <svg class="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button 
        @click="nextSlide"
        class="group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
      >
        <svg class="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <div class="absolute bottom-4 left-0 w-full flex justify-center">
      <button 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full mx-1 transition-colors duration-200"
        :class="index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-200/50'"
      ></button>
    </div>
    <button 
      @click="toggleAutoPlay"
      class="absolute top-4 right-4 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-all duration-300"
    >
      <svg v-if="isAutoPlaying" class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg v-else class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  </div>
</template>