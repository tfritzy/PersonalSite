<script setup lang="ts">
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div class="relative max-w-[1000px] flex flex-row space-x-8">
    <PageSidebar class="sidebar" />
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>
