<script setup lang="ts">
defineProps({
  name: String,
  href: String
})
</script>

<template>
  <a class="text-gray-200 hover:underline flex flex-row space-x-2 items-center" v-bind:href="href">
    <div class="translate-y-[2px]">
      <slot name="icon" />
    </div>
    <div class="flex flex-row space-x-1 text-gray-300">
      {{ name }}
    </div>
  </a>
</template>
