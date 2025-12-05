<!-- App.vue -->
<template>
  <div id="q-app">
    <MainLayout />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>


<style>
#q-app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
