<script setup lang="ts">
import { Calendar } from '@iconoir/vue'
defineProps({
  title: String,
  description: String,
  date: String,
  href: String
})
</script>

<template>
  <div class="flex flex-col space-y-1">
    <a v-bind:href="href" class="text-white font-bold text-lg hover:underline">
      <h1 class="mb-1">{{ title }}</h1>

      <h3 class="text-white text-md font-normal text-sm">{{ description }}</h3>
    </a>

    <div class="text-sm text-gray-400 stroke-gray-400 flex flex-row space-x-1 text-center">
      <Calendar width="14" height="14" class="translate-y-[4px]" />
      <div>{{ date }}</div>
    </div>
  </div>
</template>
