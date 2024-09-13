<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue"
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div>
    <slot />
  </div>
</template>

<style scoped></style>
