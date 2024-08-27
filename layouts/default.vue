<script setup lang="ts"></script>

<template>
  <div>
    Layout: default
    <slot />
  </div>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/calculator">Calculator</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
