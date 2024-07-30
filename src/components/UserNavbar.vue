<script setup>
import { RouterLink, useRoute } from 'vue-router'
const isActiveRoute = (route) => {
  const currentRoute = useRoute()
  return currentRoute.path === route
}
</script>
<template>
  <nav class="bg-green-700">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <RouterLink
                to="/"
                :class="`${isActiveRoute('/') ? 'bg-green-900' : ''} hover:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="`${isActiveRoute('/jobs') ? 'bg-green-900' : ''} text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium`"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/add-job"
                :class="`${isActiveRoute('/add-job') ? 'bg-green-900' : ''} text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium`"
                >Add Job</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <!-- Heroicon name: x -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink
          to="/"
          :class="`${isActiveRoute('/') ? 'bg-green-900' : ''} text-white hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium`"
          >Home</RouterLink
        >
        <RouterLink
          to="/"
          :class="`${isActiveRoute('/jobs') ? 'bg-green-900' : ''} text-white hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium`"
          >Jobs</RouterLink
        >
        <RouterLink
          to="/"
          :class="`${isActiveRoute('/add-job') ? 'bg-green-900' : ''} text-white hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium`"
          >Add Job</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
