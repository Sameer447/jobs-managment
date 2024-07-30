<script setup>
import UserNavbar from '@/components/UserNavbar.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="size-full">
    <UserNavbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
