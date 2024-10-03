<script setup>
</script>

<template>
  <div class="w-full my-16">
    <NuxtLink to="https://github.com/Castle9707/" class="block text-center rotate3d"  target="_blank" rel="noopener">
      <i class="ri-github-fill text-8xl border border-dashed rounded-full p-2"></i>
    </NuxtLink>
  </div>
</template>

<style scoped>
.rotate3d {
  transform: rotateY(0);
  transition: transform 0.5s ease-in-out;
}
.rotate3d:hover {
  transform: rotateY(-2turn);
}
/* 當懸停結束時保持旋轉回到初始狀態 */
.rotate3d:not(:hover) {
  transition: transform 0.5s ease-in-out;
}
</style>