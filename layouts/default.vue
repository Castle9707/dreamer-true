<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue"
</script>

<template>
<div class="back-img">
  <Navbar />
  <div class="mt-28">
    <slot />
  </div>
</div>
</template>

<style scoped>
.back-img {
  width: 100%;
	min-height: 100vh;
  background: url(../static/images/wallpaper.jpg) no-repeat center center / cover;
  overflow: hidden;
}
</style>
