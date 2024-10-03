<script setup>
import BasicInfo from '@/components/about/BasicInfo.vue'
import ButtonGame from '@/components/about/ButtonGame.vue'
import Makin from '@/components/about/Makin.vue'
import SkillsCard from '@/components/about/SkillsCard.vue'
import SliderCard from '@/components/about/SliderCard.vue'
import Github from '@/components/about/Github.vue'
import RollingBall from '@/components/about/RollingBall.vue'
import Experience from '@/components/about/Experience.vue'
</script>

<template>
  <!-- 寫完功能把板塊切出去！ -->
  <div class="w-5/6 h-full mx-auto text-white">
    <!-- 上半部 -->
    <div class="h-full md:h-full grid grid-cols-4 gap-8">
      <!-- 自我介紹＋名字 -->
      <div class="w-full bg-slate-100/80 rounded-lg col-span-4 md:col-span-2 backdrop-blur outline outline-offset-4">
        <BasicInfo />
      </div>

      <!-- 特質 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">特質</div>

      <!-- 裝飾性直式欄位＋title -->
      <div class="w-full bg-slate-100/30 rounded-lg row-span-2 hidden md:block backdrop-blur outline outline-offset-4">裝飾性直式欄位＋title</div>

      <!-- 技能（設計＋程式）icon -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">
        <SkillsCard />
      </div>

      <!-- Github連結、跳色設計 -->
      <div class="w-full bg-cyan-800/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">
        <Github />
      </div>

      <!-- 計算機小機關&連結 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">
        <ButtonGame />
      </div>
    </div>

    <!-- 跑馬燈 -->
    <div class="w-full bg-slate-100/30 rounded-lg my-8 p-2 text-xl backdrop-blur outline outline-offset-4 overflow-hidden flex">
      <div class="marquee-content-1">
        123我是跑馬燈啦。123我是跑馬燈啦。123我是跑馬燈啦。
      </div>
      <div class="marquee-content-2">
        123我是跑馬燈啦。123我是跑馬燈啦。123我是跑馬燈啦。
      </div>
      <div class="marquee-content-3">
        123我是跑馬燈啦。123我是跑馬燈啦。123我是跑馬燈啦。
      </div>
    </div>
    <!-- 下半部 -->
    <div class="h-fit grid grid-cols-4 gap-8 mb-6">
      <!-- 圖片作品集_slider -->
      <div class="w-full rounded-lg col-span-4 md:col-span-2 backdrop-blur outline outline-offset-4 overflow-hidden">
        <SliderCard />
      </div>

      <!-- Makin專案連結 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">
        <Makin />
      </div>

      <!-- css旋轉球球 -->
      <div class="w-full bg-indigo-600/50 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">
        <RollingBall />
      </div>
      <div class="w-full bg-slate-500/20 rounded-lg col-span-4 row-span-3 md:col-span-3 md:row-span-2  backdrop-blur outline outline-offset-4">
        <Experience />
      </div>

      <!-- ??? -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">123</div>

      <!-- 聯絡資訊 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">contact聯絡資訊</div>
    </div>
  </div>
</template>

<style scoped>
.marquee-content-1 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee1 10s linear infinite;
}
.marquee-content-2 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee2 10s linear infinite;
}
.marquee-content-3 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee3 10s linear infinite;
}

@keyframes marquee1 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes marquee2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes marquee3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
