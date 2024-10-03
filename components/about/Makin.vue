<script setup>

</script>

<template>
  <div class="w-full flex-row justify-around items-center">
    <NuxtImg src="/makin-logo.png" width="200" class="p-6 mx-auto" />
    <div class="w-3/4 mx-auto">
      <NuxtLink to="https://youtu.be/-o6ilT3yuK0?si=lRkx6ZLAPyfmpzBk" target="_blank" rel="noopener" class="link-hover flex text-xl mb-2 mx-2">
        <h4>Tour</h4>
        <i class="ms-auto ri-arrow-right-s-line"></i>
      </NuxtLink>
      <NuxtLink to="https://makin-sound.vercel.app" target="_blank" rel="noopener"  class="link-hover flex text-xl mb-2 mx-2">
        <h4>Web</h4>
        <i class="ms-auto ri-arrow-right-s-line"></i>
      </NuxtLink>
      <NuxtLink to="https://github.com/Castle9707/Makin-FrontEnd.git" target="_blank" rel="noopener"  class="link-hover flex text-xl mb-8 mx-2">
        <h4>GitHub</h4>
        <i class="ms-auto ri-arrow-right-s-line"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.link-hover {
  position: relative;
}

.link-hover::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.link-hover:hover::after {
  width: 97%;
}
</style>