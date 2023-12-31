<script setup lang="ts">
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div class="relative max-w-[1000px] flex flex-row space-x-8">
    <PageSidebar class="sidebar" />
    <div class="bg-neutral-800 w-[1px] h-[100%]" />
    <div class="content p-8">
      <slot name="content" />
    </div>
  </div>
</template>
