<script setup>
import CardContainer from './CardContainer.vue'
defineProps({
  title: {
    type: String,
    default: 'For Developers'
  },
  description: {
    type: String,
    default: 'Browse our jobs and start your career today'
  },
  action: {
    type: String,
    default: 'Browse Jobs'
  },
  navigator: {
    type: String,
    default: '/'
  },
  bg: {
    type: String,
    default: 'bg-grey-100'
  }
})
</script>
<template>
  <CardContainer :bg="bg">
    <h2 class="text-2xl-lg font-bold text-black-900">{{ title }}</h2>
    <p class="mt-2 mb-4">{{ description }}</p>
    <RouterLink
      :to="navigator"
      class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-grey-700"
    >
      {{ action }}
    </RouterLink>
  </CardContainer>
</template>
