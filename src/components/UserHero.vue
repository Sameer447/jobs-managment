<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: 'Become a Vue developer'
  },
  description: {
    type: String,
    default: 'Learn Vue 3 and the Composition API'
  }
})
</script>
<template>
  <div class="bg-green-800 py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <p class="text-white text-3xl font-bold">{{ title }}</p>
      <p class="text-white text-lg">{{ description }}</p>
    </div>
  </div>
</template>
