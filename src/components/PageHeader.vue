<script setup lang="ts">
import { Calendar, FastArrowLeft } from '@iconoir/vue'
defineProps({
  title: String,
  date: String
})
</script>

<template>
  <div class="mb-4">
    <div class="flex flex-row items-center">
      <FastArrowLeft height="16" color="white" />
      <div>
        <a class="text-gray-300 font-bold hover:underline" href="#/"> Back</a>
      </div>
    </div>

    <h1 class="mb-2">
      <span>{{ title }}</span>
    </h1>

    <div class="text-sm text-gray-400 stroke-gray-400 flex flex-row space-x-1 text-center">
      <Calendar width="14" height="14" class="translate-y-[4px]" />
      <div>{{ date }}</div>
    </div>
  </div>
</template>
