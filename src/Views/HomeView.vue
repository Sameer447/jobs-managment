<script setup>
import UserHero from '@/components/UserHero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobsListing from '@/components/JobsListing.vue'
</script>

<template>
  <UserHero title="Become a vue dev" description="Learn Vue 3 and the Composition API" />
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <HomeCard
          bg="bg-gray-100"
          title="For Developers"
          description="Browse our jobs and start your career today"
          action="Browse Jobs"
          navigator="/jobs"
        />
        <HomeCard
          bg="bg-green-100"
          title="For Employers"
          description="List your jobs to find the perfect developer for the role"
          action="Add Job"
          navigator="/add-job"
        />
      </div>
    </div>
  </section>
  <JobsListing :limit="3" :showButton="true" />
</template>
