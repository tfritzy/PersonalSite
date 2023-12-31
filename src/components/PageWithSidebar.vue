<script setup lang="ts">
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div class="relative flex flex-row px-4">
    <PageSidebar class="sidebar" />
    <div class="content max-w-[600px]">
      <slot name="content" />
    </div>
  </div>
</template>
