<script setup>
import { ref, onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import JobListing from '@/components/JobListing.vue'
const jobs = ref([])
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: true
  }
})
const state = reactive({
  isLoading: true,
  jobs: []
})
const loadJobs = async () => {
  state.isLoading = true
  await fetch('http://localhost:8000/jobs')
    .then((res) => res.json())
    .then((data) => {
      state.jobs = data
      state.isLoading = false
    })
}
onMounted(async () => {
  await loadJobs()
})
console.log('jobs', jobs)
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Shoe job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
