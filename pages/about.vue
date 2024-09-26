<script setup>
import ButtonGame from '../components/about/ButtonGame.vue'
</script>

<template>
  <!-- 寫完功能把板塊切出去！ -->
  <div class="w-5/6 h-full mx-auto text-white">
    <!-- 上半部 -->
    <div class="h-128 grid grid-cols-4 gap-8">
      <!-- 自我介紹＋名字 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-4 md:col-span-2 backdrop-blur outline outline-offset-4">自我介紹＋名字</div>
      <!-- 特質 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">特質</div>
      <!-- 裝飾性直式欄位＋title -->
      <div class="w-full bg-slate-100/30 rounded-lg row-span-2 hidden md:block backdrop-blur outline outline-offset-4">裝飾性直式欄位＋title</div>
      <!-- 技能（設計＋程式）icon -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">技能（設計＋程式）icon</div>
      <!-- Github連結、跳色設計 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">Github連結、跳色設計</div>
      <!-- 計算機小機關&連結 -->
      <div class="w-full h-fit bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">
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
    <div class="h-180 grid grid-cols-4 gap-8 mb-6">
      <!-- 圖片作品集_slider -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-4 md:col-span-2 backdrop-blur outline outline-offset-4">圖片作品集_slider</div>
      <!-- 未定*** -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">未定***</div>
      <!-- css旋轉球球 -->
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">css旋轉球球</div>
      <div class="w-full bg-slate-100/30 rounded-lg col-span-4 row-span-3 md:col-span-3 md:row-span-2  backdrop-blur outline outline-offset-4">Work Experience</div>
      <div class="w-full bg-slate-100/30 rounded-lg col-span-2 md:col-span-1 backdrop-blur outline outline-offset-4">123</div>
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
