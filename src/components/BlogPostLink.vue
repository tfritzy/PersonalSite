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
  <a v-bind:href="href">
    <div class="p-2 min-w-[350px] hover:bg-neutral-800">
      <h2 class="mb-1 mt-0">{{ title }}</h2>

      <h3 class="text-white text-md font-normal text-sm">{{ description }}</h3>

      <div class="text-sm text-gray-400 stroke-gray-400 flex flex-row space-x-1 text-center">
        <Calendar width="14" height="14" class="translate-y-[4px]" />
        <div>{{ date }}</div>
      </div>
    </div>
  </a>
</template>
