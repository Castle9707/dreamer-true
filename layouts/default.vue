<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue"
</script>

<template>
<div class="back-img">
  <Navbar />
  <div>
    <slot />
  </div>
</div>
</template>

<style scoped>
.back-img {
  width: 100%;
	height: 100%;
  background: url(../static/images/wallpaper.jpg) no-repeat center center / cover;
}
</style>
